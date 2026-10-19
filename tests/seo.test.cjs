const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { parseHTML } = require('linkedom');
const site = require('../site-routes.js');
const { createServer } = require('../scripts/preview.cjs');
const { copyPublicAssets } = require('../scripts/build.cjs');
const root = path.resolve(__dirname, '../dist');
const titles = new Set();
const emitted = new Set(site.routes.flatMap(route => ['en', 'kr'].map(lang => site.href(route.id, lang))));

for (const route of site.routes) for (const lang of ['en', 'kr']) {
    const pathname = site.href(route.id, lang);
    test(`initial HTML: ${pathname}`, () => {
        const html = fs.readFileSync(path.join(root, pathname === '/' ? 'index.html' : pathname.slice(1) + '.html'), 'utf8');
        const { document } = parseHTML(html);
        assert.equal(document.documentElement.lang, lang === 'kr' ? 'ko' : 'en');
        assert.equal(document.body.dataset.lang, lang);
        assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), site.origin + pathname);
        assert.equal(document.querySelector('meta[property="og:url"]').content, site.origin + pathname);
        const image = site.origin + route.image.path;
        assert.equal(document.querySelector('meta[property="og:image"]').content, image);
        assert.equal(document.querySelector('meta[property="twitter:image"]').content, image);
        assert.equal(document.querySelector('meta[property="og:image:width"]').content, String(route.image.width));
        assert.equal(document.querySelector('meta[property="og:image:height"]').content, String(route.image.height));
        assert.ok(fs.statSync(path.join(root, route.image.path.slice(1))).isFile(), 'Social image is a deployed asset');
        assert.equal(document.title, route[lang].title);
        assert.ok(!titles.has(document.title), 'Each language/page has a unique title');
        titles.add(document.title);
        assert.ok(document.querySelector('meta[name="description"]').content.length > 50);
        const content = document.querySelector('#content');
        assert.ok(content.textContent.trim().length > 60, 'Content is in the HTTP response, before JS');
        assert.ok(content.querySelector('h1'), 'Page has a semantic heading');
        assert.equal(content.querySelector(lang === 'kr' ? '.lang-en' : '.lang-kr'), null);
        for (const video of content.querySelectorAll('video')) {
            assert.ok(video.hasAttribute('controls'), 'Static video has native playback controls without JavaScript');
        }
        for (const code of ['en', 'ko', 'x-default']) {
            assert.equal(document.querySelector(`link[hreflang="${code}"]`).getAttribute('href'), site.origin + site.href(route.id, code === 'ko' ? 'kr' : 'en'));
        }
        for (const link of document.querySelectorAll('[data-file]')) {
            if (!site.byId[link.dataset.file]) continue;
            assert.equal(link.tagName, 'A');
            assert.ok(emitted.has(link.getAttribute('href')), 'Navigation has real, generated targets');
            assert.equal(link.getAttribute('href'), site.href(link.dataset.file, lang));
        }
        const graph = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
        assert.ok(graph.some(item => item.url === site.origin + pathname));
        assert.ok(graph.some(item => item['@id'] === site.origin + '/#person' && item.sameAs.length === 2));
        assert.ok(!graph.some(item => item.datePublished || item.doi), 'No invented publication details');
        if (route.id === 'research-overview') {
            assert.match(content.textContent, /Designing Data Sonification with Epistemic Awareness: A Case Study of Audience Encounters/);
            assert.match(content.textContent, lang === 'kr' ? /발표 예정/ : /forthcoming/i);
        }
    });
}

test('sitemap contains exactly the canonical pages, with no fabricated lastmod', () => {
    const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
    const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    assert.deepEqual(new Set(urls), new Set([...emitted].map(url => site.origin + url)));
    assert.equal(urls.length, 28);
    assert.ok(!sitemap.includes('<lastmod>'));
});

test('static routes, legacy redirects, noindex fragments and genuine 404s', async () => {
    const server = createServer();
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const base = `http://127.0.0.1:${server.address().port}`;
    try {
        for (const pathname of emitted) {
            const response = await fetch(base + pathname);
            assert.equal(response.status, 200, pathname);
            assert.match(await response.text(), /<!DOCTYPE html>/i);
        }
        for (const redirect of require('../vercel.json').redirects) {
            const response = await fetch(base + redirect.source, { redirect: 'manual' });
            assert.equal(response.status, 308);
            assert.equal(response.headers.get('location'), redirect.destination);
        }
        const fragment = await fetch(base + '/_fragments/research-overview.txt');
        assert.equal(fragment.status, 200);
        assert.equal(fragment.headers.get('x-robots-tag'), 'noindex');
        assert.equal((await fetch(base + '/does-not-exist')).status, 404);
    } finally { await new Promise(resolve => server.close(resolve)); }
});

test('legacy hashes resolve without making them canonical URLs', () => {
    assert.deepEqual(site.resolve('/', '#research-bdss'), { id: 'research-bdss', lang: 'en' });
    assert.deepEqual(site.resolve('/ko/research/overview'), { id: 'research-overview', lang: 'kr' });
    assert.deepEqual(site.resolve('/', '#research-isea'), { id: 'research-overview', lang: 'en' });
    assert.equal(site.resolve('/unknown'), null);
});

test('legacy HTML URLs normalise before alias redirects and reach canonical pages', async () => {
    const legacyPages = [
        ['/exhibitions/exhibitions-overview.html', '/exhibitions/overview'],
        ['/research/research-overview.html', '/research/overview'],
        ['/research/research-bdss.html', '/research/bdss'],
        ['/research/research-rcs.html', '/research/rcs'],
        ['/research/research-isea.html', '/research/overview'],
        ['/exhibitions/resonance-loop.html', '/exhibitions/resonance-loop'],
        ['/exhibitions/rotating-weights.html', '/exhibitions/rotating-weights'],
        ['/exhibitions/embodied-algorithms.html', '/exhibitions/embodied-algorithms'],
        ['/exhibitions/void-form.html', '/exhibitions/void-form'],
        ['/exhibitions/metal-rave.html', '/exhibitions/metal-rave'],
        ['/exhibitions/soil-contamination.html', '/exhibitions/soil-contamination'],
        ['/exhibitions/4x4-mediengruppe.html', '/exhibitions/4x4-mediengruppe']
    ];
    const server = createServer();
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const base = `http://127.0.0.1:${server.address().port}`;
    try {
        for (const [source, destination] of legacyPages) {
            const first = await fetch(base + source + '?from=legacy', { redirect: 'manual' });
            assert.equal(first.status, 308, source);
            assert.equal(first.headers.get('location'), source.slice(0, -5) + '?from=legacy',
                'Vercel removes .html before applying custom aliases');
            const response = await fetch(base + source + '?from=legacy');
            assert.equal(response.status, 200, source);
            assert.equal(response.url, base + destination + '?from=legacy');
            const { document } = parseHTML(await response.text());
            assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), site.origin + destination);
        }
    } finally { await new Promise(resolve => server.close(resolve)); }
});

test('public asset copying excludes local audit material, secrets and ignored experiment video', () => {
    const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'heund-asset-test-'));
    const source = path.join(temporary, 'source'), output = path.join(temporary, 'dist');
    const fixture = [
        'images/poster.jpg', 'videos/work.mp4', 'icons/mark.svg', 'translations/en.json',
        'folders/experiments/report.md', 'folders/experiments/local.mp4',
        'heund-seo-audit-and-patch/evidence.json', '.env', '.secret.js', 'auth.json',
        'images/.env', 'images/.private/auth.json', 'runtime.js', 'styles.css', 'robots.txt'
    ];
    try {
        fs.mkdirSync(output, { recursive: true });
        for (const file of fixture) {
            const target = path.join(source, file);
            fs.mkdirSync(path.dirname(target), { recursive: true });
            fs.writeFileSync(target, file);
        }
        copyPublicAssets(source, output);
        for (const file of ['images/poster.jpg', 'videos/work.mp4', 'icons/mark.svg',
            'translations/en.json', 'folders/experiments/report.md', 'runtime.js', 'styles.css', 'robots.txt']) {
            assert.equal(fs.readFileSync(path.join(output, file), 'utf8'), file);
        }
        for (const file of ['heund-seo-audit-and-patch', '.env', '.secret.js', 'auth.json',
            'images/.env', 'images/.private', 'folders/experiments/local.mp4']) {
            assert.equal(fs.existsSync(path.join(output, file)), false, file);
        }
    } finally { fs.rmSync(temporary, { recursive: true, force: true }); }
});
