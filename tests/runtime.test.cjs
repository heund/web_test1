const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const { parseHTML } = require('linkedom');
const source = fs.readFileSync(path.join(root, 'script2.js'), 'utf8').replace(/\r\n/g, '\n');
const classSource = source.slice(0, source.indexOf('\n// Initialize\n')) + '\nthis.TerminalPortfolio = TerminalPortfolio;';

function deferred() {
    let resolve;
    const promise = new Promise(done => { resolve = done; });
    return { promise, resolve };
}
const response = value => ({ ok: true, json: async () => value });

function appAt(url = 'https://www.heund.net/research/overview') {
    const { document } = parseHTML('<html lang="en"><head><title>Original</title></head><body><div id="content" class="content-body"></div><div id="mobile-content"></div></body></html>');
    let current = new URL(url);
    const location = {};
    for (const name of ['href', 'pathname', 'search', 'hash']) Object.defineProperty(location, name, { get: () => current[name] });
    location.assign = value => { current = new URL(value, current); };
    const calls = [];
    const history = { state: null };
    for (const method of ['pushState', 'replaceState']) history[method] = (state, _, target) => {
        history.state = state;
        current = new URL(target, current);
        calls.push({ method, target, title: document.title });
    };
    const paths = { hero: '/', 'research-overview': '/research/overview', 'research-bdss': '/research/bdss', contact: '/contact' };
    const listeners = new Map();
    const window = { innerWidth: 1440, scrollTo() {}, addEventListener(type, handler) { listeners.set(type, handler); } };
    const routes = {
        byId: Object.fromEntries(Object.keys(paths).map(id => [id, {}])),
        href: (id, lang) => (lang === 'kr' ? '/ko' : '') + (paths[id] === '/' && lang === 'kr' ? '' : paths[id]),
        resolve(pathname) {
            const lang = pathname.startsWith('/ko') ? 'kr' : 'en';
            const id = Object.keys(paths).find(id => routes.href(id, lang) === pathname);
            return id && { id, lang };
        },
        prepareLinks() {},
        metadata(document, id, lang) { document.title = id + ':' + lang; }
    };
    const context = { document, window, location, history, PortfolioRoutes: routes, Map, Set, console,
        fetch: (...args) => context.fetchImpl(...args), setTimeout() { return 1; }, clearTimeout() {},
        fetchImpl: async () => response({}) };
    vm.createContext(context);
    vm.runInContext(classSource, context);
    const app = Object.create(context.TerminalPortfolio.prototype);
    Object.assign(app, { currentFile: 'research-overview', currentLang: 'en', translations: {},
        translationCache: new Map(), observedLocation: location.href,
        animatedPages: new Set(Object.keys(paths)),
        content: Object.fromEntries(Object.keys(paths).map(id => [id, { html: '<h1>' + id + '</h1><p>Actual page</p>' }])) });
    app.updateMainContentPosition = () => {};
    return { app, context, document, location, calls, listeners, routes, visit: value => { current = new URL(value, current); } };
}

test('entry and history canonicalization retain campaign parameters and update metadata first', async () => {
    const h = appAt('https://www.heund.net/research/overview?utm_source=mail&gclid=example');
    await h.app.loadContent('research-overview', { lang: 'en', history: 'replace', preserveSearch: true });
    assert.equal(h.location.search, '?utm_source=mail&gclid=example');
    assert.deepEqual(h.calls, [{ method: 'replaceState', target: '/research/overview?utm_source=mail&gclid=example', title: 'research-overview:en' }]);
    h.visit('/ko/research/bdss?utm_source=archive');
    await h.app.loadContent('research-bdss', { lang: 'kr', history: 'replace', preserveSearch: true });
    assert.equal(h.location.href, 'https://www.heund.net/ko/research/bdss?utm_source=archive');
    assert.equal(h.calls.length, 2);
});

test('a stale translation response cannot restore a page over later navigation', async () => {
    const h = appAt();
    const slow = deferred();
    h.context.fetchImpl = url => url.includes('/kr.') ? slow.promise : Promise.resolve(response({}));
    const oldRestore = h.app.loadContent('research-bdss', { lang: 'kr', history: 'replace', preserveSearch: true });
    await h.app.loadContent('contact', { lang: 'en' });
    slow.resolve(response({}));
    await oldRestore;
    assert.equal(h.app.currentFile, 'contact');
    assert.equal(h.app.currentLang, 'en');
    assert.equal(h.location.pathname, '/contact');
    assert.equal(h.calls.length, 1);
    assert.equal(h.document.getElementById('content').textContent, 'contactActual page');
});

test('initialization cannot overwrite a later click while initial translations are pending', async () => {
    const h = appAt('https://www.heund.net/research/overview?utm_source=initial');
    for (const name of ['setupLanguageToggle', 'setupMobileContent', 'setupNavigation', 'setupFolderToggles', 'setupCommands', 'setupWindowControls', 'setupDesktopFolders']) h.app[name] = () => {};
    const slow = deferred();
    h.context.fetchImpl = url => url.includes('/en.') ? slow.promise : Promise.resolve(response({}));
    const startup = h.app.init();
    await h.app.loadContent('contact', { lang: 'kr' });
    slow.resolve(response({}));
    await startup;
    assert.equal(h.app.currentFile, 'contact');
    assert.equal(h.location.pathname, '/ko/contact');
    assert.equal(h.calls.length, 1);
});

test('paired popstate and hashchange events restore once and preserve query strings', async () => {
    const h = appAt();
    for (const name of ['setupLanguageToggle', 'setupMobileContent', 'setupNavigation', 'setupFolderToggles', 'setupCommands', 'setupWindowControls', 'setupDesktopFolders']) h.app[name] = () => {};
    await h.app.init();
    h.calls.length = 0;
    h.visit('/research/bdss?utm_source=back');
    h.listeners.get('popstate')();
    h.listeners.get('hashchange')();
    // Allow the completed navigation's two nested async continuations to settle.
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(h.app.currentFile, 'research-bdss');
    assert.equal(h.location.search, '?utm_source=back');
    assert.equal(h.calls.length, 1);
    await h.app.loadContent('contact');
    h.visit('/research/bdss?utm_source=back');
    h.listeners.get('popstate')();
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(h.app.currentFile, 'research-bdss');
    assert.equal(h.calls.length, 3, 'A later traversal to the same URL still restores');
});

test('home language switch preserves the canvas and selected node', async () => {
    const h = appAt('https://www.heund.net/?utm_source=home');
    h.app.currentFile = 'hero';
    const canvas = h.document.createElement('canvas');
    canvas.id = 'code-architecture-canvas';
    h.document.getElementById('content').append(canvas);
    const selectedNode = { statementEN: 'English statement', statementKR: 'Korean statement' };
    const animation = { canvas, selectedNode, rotationX: 0.8, targetText: 'old', typedText: 'old' };
    h.context.window.codeArchAnimation = animation;
    let destroys = 0;
    h.context.destroyCodeArchitecture = () => { destroys++; };
    h.context.initCodeArchitecture = () => animation;
    await h.app.switchLanguage('kr');
    assert.equal(h.document.getElementById('code-architecture-canvas'), canvas);
    assert.equal(h.context.window.codeArchAnimation, animation);
    assert.equal(animation.selectedNode, selectedNode);
    assert.equal(animation.rotationX, 0.8);
    assert.equal(animation.targetText, '> Korean statement');
    assert.equal(destroys, 0);
    assert.equal(h.location.href, 'https://www.heund.net/ko?utm_source=home');
    assert.equal(h.calls.length, 1);
});

test('canvas initialization is idempotent and disposal cancels frames and listeners', () => {
    const listeners = new Set();
    const target = name => ({ addEventListener(type, fn) { listeners.add({ name, type, fn }); },
        removeEventListener(type, fn) { for (const item of listeners) if (item.name === name && item.type === type && item.fn === fn) listeners.delete(item); } });
    const context2d = new Proxy({}, { get(_, key) { return key === 'measureText' ? () => ({ width: 0 }) : () => {}; }, set() { return true; } });
    const makeCanvas = name => Object.assign(target(name), { style: {}, getContext: () => context2d,
        getBoundingClientRect: () => ({ width: 640, height: 480 }), offsetHeight: 480 });
    let canvas = makeCanvas('first');
    const frames = new Map();
    let nextFrame = 0;
    const window = Object.assign(target('window'), { devicePixelRatio: 1 });
    const context = { window, document: { readyState: 'loading', documentElement: { lang: 'en' },
        getElementById: () => canvas, addEventListener() {} },
        requestAnimationFrame: fn => { frames.set(++nextFrame, fn); return nextFrame; },
        cancelAnimationFrame: id => frames.delete(id), console };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(root, 'code-architecture.js'), 'utf8'), context);
    const first = context.initCodeArchitecture();
    assert.equal(context.initCodeArchitecture(), first);
    assert.equal(frames.size, 1);
    assert.equal(listeners.size, 6);
    canvas = makeCanvas('second');
    const second = context.initCodeArchitecture();
    assert.notEqual(second, first);
    assert.equal(first.destroyed, true);
    assert.equal(frames.size, 1);
    assert.equal(listeners.size, 6);
    const pending = [...frames.values()][0];
    context.destroyCodeArchitecture();
    context.destroyCodeArchitecture();
    pending();
    assert.equal(frames.size, 0);
    assert.equal(listeners.size, 0);
    assert.equal(window.codeArchAnimation, null);
});

test('custom player initialization leaves native controls untouched during the static fallback', () => {
    let staticPage = true;
    let queries = 0;
    const context = { document: { addEventListener() {}, body: { classList: { contains: () => staticPage } },
        querySelectorAll() { queries++; return []; } } };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(root, 'custom-video-player.js'), 'utf8'), context);
    context.initCustomVideoPlayers();
    assert.equal(queries, 0, 'Do not clone or intercept the native fallback players');
    staticPage = false;
    context.initCustomVideoPlayers();
    assert.equal(queries, 1, 'Hydrated views still initialize their custom players');
});
