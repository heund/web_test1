const fs = require('node:fs');
const path = require('node:path');
const { parseHTML } = require('linkedom');
const site = require('../site-routes.js');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
function write(file, value) {
    const target = path.join(output, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, value);
}
function fragment(html) {
    const { document } = parseHTML('<!DOCTYPE html><html><head></head><body></body></html>');
    document.body.innerHTML = html;
    // Use a single first-level page heading; retain all authored section headings.
    for (const section of document.querySelectorAll('.lang-en, .lang-kr')) {
        if (!section.querySelector('h1') && section.querySelector('h2')) {
            const old = section.querySelector('h2'), heading = document.createElement('h1');
            heading.innerHTML = old.innerHTML;
            for (const attribute of old.attributes) heading.setAttribute(attribute.name, attribute.value);
            old.replaceWith(heading);
        }
    }
    site.prepareLinks(document, 'en');
    return document.body.innerHTML;
}
function localise(document, lang) {
    document.querySelectorAll(lang === 'kr' ? '.lang-en' : '.lang-kr').forEach(node => node.remove());
    document.querySelectorAll('[data-en], [data-kr]').forEach(node => {
        const text = node.getAttribute('data-' + lang);
        if (text !== null) node.innerHTML = text;
    });
    if (lang === 'kr') document.querySelectorAll('.terminal-line-en-only, .terminal-line-blank-en-only').forEach(node => node.remove());
}
function copyPublicAssets(sourceRoot, outputRoot) {
    // Copy only the site's public asset directories and runtime files, never the repository.
    for (const directory of ['images', 'videos', 'icons', 'folders', 'translations']) {
        fs.cpSync(path.join(sourceRoot, directory), path.join(outputRoot, directory), {
            recursive: true, mode: fs.constants.COPYFILE_FICLONE,
            filter: source => {
                const relative = path.relative(sourceRoot, source).split(path.sep).join('/');
                return !path.basename(source).startsWith('.') &&
                    !/^folders\/experiments\/[^/]+\.mp4$/i.test(relative);
            }
        });
    }
    for (const file of fs.readdirSync(sourceRoot)) {
        if (!file.startsWith('.') && (/\.(js|css)$/.test(file) || ['robots.txt', 'rick.txt'].includes(file))) {
            fs.copyFileSync(path.join(sourceRoot, file), path.join(outputRoot, file));
        }
    }
}
function build() {
    fs.rmSync(output, { recursive: true, force: true });
    fs.mkdirSync(output, { recursive: true });
    copyPublicAssets(root, output);
    const template = read('index.html');
    const urls = [];
    for (const route of site.routes) {
        const html = fragment(read(route.source));
        // Runtime fragments are not public landing pages; noindex is supplied in vercel.json.
        write(`_fragments/${route.id}.txt`, html);
        for (const lang of ['en', 'kr']) {
            const { document } = parseHTML(template);
            document.body.classList.add('static-page');
            document.body.dataset.page = route.id;
            document.querySelector('#content').innerHTML = html;
            localise(document, lang);
            // Initial pages remain playable without JavaScript. Runtime fragments
            // retain the authored custom-player markup used by the enhanced app.
            document.querySelectorAll('#content video').forEach(video => video.setAttribute('controls', ''));
            site.metadata(document, route.id, lang);
            const breadcrumb = document.querySelector('#breadcrumb');
            if (breadcrumb) breadcrumb.textContent = route.path === '/' ? 'intro' : route.path.slice(1);
            const pathname = site.href(route.id, lang);
            write(pathname === '/' ? 'index.html' : pathname.slice(1) + '.html', document.toString());
            urls.push(site.origin + pathname);
        }
    }
    // Omit lastmod rather than fabricate freshness on every build.
    write('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n') + '\n</urlset>\n');
    write('404.html', '<!DOCTYPE html><html lang="en"><meta charset="utf-8"><meta name="robots" content="noindex"><title>Page not found | Hee-Eun Kim</title><h1>Page not found</h1><p><a href="/">English portfolio</a> · <a href="/ko">한국어 포트폴리오</a></p></html>');
    console.log(`Built ${urls.length} complete, localised pages in dist/.`);
}
if (require.main === module) build();
module.exports = { build, fragment, localise, copyPublicAssets };
