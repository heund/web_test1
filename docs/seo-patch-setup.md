# Building and verifying the portfolio

The portfolio generates complete English and Korean HTML pages from the existing content fragments while retaining the interactive terminal interface.

## Local development

Use Node 22.x (verified with 22.23.3). From the repository root:

```sh
npm ci
npm run build
npm test
npm run preview
```

The preview is available at `http://127.0.0.1:4173`. Stop it with Ctrl+C. Preview the generated `dist` site rather than opening the source `index.html` through a plain static-file extension. Generated output and dependencies are ignored by Git. The temporary `heund-seo-audit-and-patch` folder is excluded from Git, Vercel uploads, and the static build.

## Content and routing

- Edit existing bilingual files in `exhibitions/` and `research/` as before.
- Edit the shared introduction, about and contact templates in `content/`.
- Edit route metadata in `site-routes.js`. `kr` is the existing application key; public language codes and URLs use `ko`.
- Build output serves English at existing clean routes, Korean at `/ko` and `/ko/...`.
- Adding a page requires its content entry, route metadata and navigation link. Add a redirect in `vercel.json` if it replaces an already-public URL. Rebuild and run tests.
- Runtime fragments live under `/_fragments/` in build output. Do not link to them from authored content or add them to the sitemap.
- ISEA remains in `/research/overview` and `/ko/research/overview`; old standalone ISEA URLs redirect to the English overview. No new ISEA detail page is introduced.

The generated title/description, canonical, language alternates and structured data are also updated on in-page navigation. The homepage retains its canvas-only presentation; artist identity and descriptions remain in metadata and structured data without an added visible introduction. Existing work images provide page-specific sharing previews, with a shared fallback for general and research pages.

## Vercel verification

`vercel.json` specifies `npm run build`, output directory `dist`, clean URLs and no trailing slash. Check that project-level overrides do not disable dependency installation or bypass the build. Create a Vercel preview from the review branch before merging.

On that preview, check:

1. Direct visits and refreshes at `/research/overview`, `/research/bdss`, `/ko/research/bdss` and `/exhibitions/overview` render the correct full page.
2. View Source contains the page text and correct metadata without requiring script execution.
3. `/research/research-bdss.html` redirects to `/research/bdss`; `/research/isea-2026` redirects to `/research/overview`. An arbitrary nonexistent path returns 404.
4. `/_fragments/research-overview.txt` carries `X-Robots-Tag: noindex`; production public pages do not. Protected preview deployments may carry their own noindex header.
5. `/sitemap.xml` lists 28 canonical production URLs. Canonicals deliberately use `https://www.heund.net`, including on a preview host. Keep preview deployments out of the index using the hosting platform's preview controls.
6. English/Korean toggles, modified-click/new-tab links, browser back/forward, mobile navigation, images and representative video players work. Check both JavaScript-enabled and disabled views. Initial HTML exposes native video controls; enhanced fragments retain the custom player.
7. Entry campaign parameters survive startup and back/forward navigation. The home canvas keeps its interaction state on language changes; stale network responses cannot overwrite a newer navigation.
8. Poster images under `/videos/` are served with an image MIME type; MP4 requests support byte ranges for playback and seeking. The temporary audit folder and local-only files return 404.

After production deployment, repeat these checks on `www.heund.net`, submit the sitemap, and inspect representative URLs in webmaster tools. Canonical and language changes need to be recrawled; there is no guaranteed indexing or citation timeline.

The Node suite verifies initial documents, metadata and sharing images, language links, legacy redirect chains, output exclusions, navigation concurrency, and animation cleanup. These checks do not replace browser rendering, real playback, analytics-delivery, or production HTTP verification. No media files are replaced. Reverting the implementation commit and redeploying restores the prior buildless configuration.
