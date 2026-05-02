# enkhe.github.io — Documentation

Personal portfolio site for **Enkh Baterdene** at [enkhe.github.io](https://enkhe.github.io).
Hand-built static site, no build step — open `index.html` and it runs.

## Stack

| Layer            | Choice                                                       |
| ---------------- | ------------------------------------------------------------ |
| Markup           | Plain HTML5, semantic elements                               |
| Styling          | Hand-rolled CSS with a token-driven glass design system      |
| Behavior         | Vanilla JavaScript, native ES modules, no bundler            |
| Routing          | Hash router (`#/route`) — no server config needed            |
| Icons            | [Lucide](https://lucide.dev) via CDN                         |
| Particles        | [particles.js](https://github.com/VincentGarreau/particles.js) via CDN |
| Fonts            | Inter via Google Fonts                                       |
| Hosting          | GitHub Pages (project root)                                  |

## Doc map

- **[ARCHITECTURE.md](ARCHITECTURE.md)** — folder layout, module responsibilities, routing, lifecycle.
- **[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)** — CSS tokens, components, glass effect, theming, motion.
- **[CONTENT.md](CONTENT.md)** — how to edit profile, experience, projects, photography, tutorials.
- **[ACCESSIBILITY.md](ACCESSIBILITY.md)** — a11y patterns the site relies on.
- **[DEPLOYMENT.md](DEPLOYMENT.md)** — local preview, GitHub Pages deploy, troubleshooting.

## Quick start

```bash
# From repo root
python3 -m http.server 8765
# Open http://localhost:8765
```

Or any static file server (`npx serve`, `php -S`, VS Code Live Server, etc.).

## File layout (top level)

```
.
├── index.html               # Single entry; routes load page modules
├── cna.html                 # Standalone CNA→BSN planner (legacy, separate page)
├── assets/
│   ├── css/style.css        # The full design system + components
│   ├── img/                 # Static imagery
│   ├── img-profile/         # Avatar
│   └── js/                  # ES modules — see ARCHITECTURE.md
└── docs/                    # This directory
```
