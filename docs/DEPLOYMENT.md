# Deployment

The site is a plain static page. There is no build step.

## Local preview

Pick any static file server. Examples:

```bash
# Python (always present in Codespaces)
python3 -m http.server 8765

# Node
npx serve .

# PHP
php -S localhost:8765

# VS Code
# Install the "Live Server" extension and right-click index.html → Open with Live Server
```

Then open `http://localhost:8765`. Opening `index.html` directly via `file://`
will not work because ES module imports require an HTTP origin.

## GitHub Pages

The repository is named `enkhe.github.io`, so it is deployed automatically
from the default branch root by GitHub Pages.

1. Push to `master` (or whatever branch is configured in **Settings → Pages**).
2. GitHub Pages serves from the repo root.
3. Live URL: <https://enkhe.github.io>.

There is no GitHub Action; everything is static. To check status:

```bash
gh repo view enkhe/enkhe.github.io --web
# Then Settings → Pages
```

## Verifying a deploy

After a push, run a quick smoke test against the live site:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://enkhe.github.io
curl -s -o /dev/null -w "%{http_code}\n" https://enkhe.github.io/assets/css/style.css
curl -s -o /dev/null -w "%{http_code}\n" https://enkhe.github.io/assets/js/script.js
```

All three should be `200`.

## Troubleshooting

| Symptom                                              | Likely cause                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------- |
| Blank page, console "Failed to load module ..."      | Opened `index.html` via `file://`. Use an HTTP server.                    |
| Icons don't appear                                   | `lucide` CDN failed to load. Check the network panel and CDN status.      |
| Particles missing                                    | `particlesJS` CDN failed to load, or the `#topParticles` div was removed. |
| Photography gallery is empty                         | Images in `assets/img/photography/` were deleted or not committed.        |
| Theme reverts to system after refresh                | `localStorage` is disabled in the browser (e.g. private mode + strict).   |
| Mobile drawer won't close                            | Check that `[data-drawer-close]` element exists in the panel.             |

## CDN dependencies

Pinned versions — bump them deliberately:

| Library      | URL                                                                                  |
| ------------ | ------------------------------------------------------------------------------------ |
| Lucide       | `https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js`                            |
| particles.js | `https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js`                       |
| Inter font   | Google Fonts (`Inter:wght@400;500;600;700;800`)                                      |

If a CDN goes down, the page still renders — the icons and particles just
gracefully no-op (`window.lucide`/`window.particlesJS` checks).
