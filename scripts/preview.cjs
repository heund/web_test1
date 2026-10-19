// Local preview of this project's static Vercel routing. No SPA catch-all.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const config = require('../vercel.json');
const root = path.resolve(__dirname, '../dist');
const types = { '.html': 'text/html; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
    '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
    '.xml': 'application/xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.png': 'image/png', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.ico': 'image/x-icon' };
function createServer() {
    return http.createServer((req, res) => {
        let url, pathname;
        try {
            url = new URL(req.url, 'http://localhost');
            pathname = decodeURIComponent(url.pathname);
        } catch { res.writeHead(400).end(); return; }
        // Vercel normalises clean URLs before applying project redirects. Keep this
        // order so previews expose broken legacy aliases instead of hiding them.
        const cleanPath = config.cleanUrls && /(?:\/index(?:\.html)?|\.html)\/?$/.test(pathname) ?
            pathname.replace(/\/?$/, '').replace(/\/index(?:\.html)?$/, '').replace(/\.html$/, '') || '/' : null;
        const slashPath = config.trailingSlash === false && pathname !== '/' && pathname.endsWith('/') ?
            pathname.replace(/\/+$/, '') : null;
        const redirect = config.redirects.find(item => item.source === pathname);
        const canonical = cleanPath || slashPath || redirect?.destination;
        if (canonical) { res.writeHead(308, { Location: canonical + url.search }).end(); return; }
        let file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
        if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
        if ((!fs.existsSync(file) || !fs.statSync(file).isFile()) && !path.extname(file)) file += '.html';
        let status = 200;
        if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { status = 404; file = path.join(root, '404.html'); }
        const headers = { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' };
        if (pathname.startsWith('/_fragments/')) headers['X-Robots-Tag'] = 'noindex';
        res.writeHead(status, headers);
        if (req.method === 'HEAD') res.end(); else fs.createReadStream(file).pipe(res);
    });
}
if (require.main === module) {
    const port = Number(process.env.PORT || 4173);
    createServer().listen(port, '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${port}`));
}
module.exports = { createServer };
