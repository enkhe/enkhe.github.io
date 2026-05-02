# Architecture

The site is a single static page (`index.html`) that hosts a hash-routed
single-page application. Every concern lives in a small module so any one
file can be replaced or extended without touching the rest.

## Module map

```
assets/js/
├── script.js          # Entry point. Wires everything on DOMContentLoaded.
├── routes.js          # The list of pages. Add/remove pages here.
├── data.js            # Single source of truth for content (profile, jobs, projects, photos).
│
├── router.js          # Tiny hash router. Renders the active route + updates aria.
├── nav.js             # Renders nav links into one or more regions; tracks active.
├── theme.js           # Light / dark / system theme toggle, persists to localStorage.
├── drawer.js          # Mobile drawer with focus trap + Esc/Tab handling.
├── lightbox.js        # Photography lightbox (modal viewer with prev/next).
├── particles.js       # particles.js wrappers for top-bar and hero containers.
├── icons.js           # Lucide icon name → placeholder string map.
│
└── pages/             # One module per route. Each exports render<Name>(outlet).
    ├── home.js
    ├── about.js
    ├── resume.js
    ├── projects.js
    ├── photography.js
    ├── tutorials.js
    ├── contact.js
    └── not-found.js
```

## Boot sequence

1. `index.html` runs an inline pre-paint script that reads `localStorage.theme` and applies
   `data-theme` to `<html>` — prevents the dark-mode flash.
2. CDN scripts (`lucide`, `particlesJS`) load synchronously, then the module entry runs deferred.
3. `script.js`'s `DOMContentLoaded` handler:
   1. Stamps the year into `[data-year]`.
   2. Constructs `Theme`, `Drawer`, `Nav`, `Router` — all dependency-injected.
   3. Calls `lucide.createIcons()` for the static markup (header, drawer).
   4. Calls `initTopbarParticles('topParticles')` to start the global header particle band.
   5. `router.init('home')` resolves the current hash and renders the active page.

## Routing

`router.js` listens for `hashchange`. The route id is the segment after `#/`:

| Hash         | Renders               |
| ------------ | --------------------- |
| `#/`         | redirects to `#/home` |
| `#/home`     | `pages/home.js`       |
| `#/about`    | `pages/about.js`      |
| `#/resume`   | `pages/resume.js`     |
| `#/projects` | `pages/projects.js`   |
| `#/photography` | `pages/photography.js` |
| `#/tutorials`| `pages/tutorials.js`  |
| `#/contact`  | `pages/contact.js`    |
| anything else| `pages/not-found.js`  |

After every route render the router:

- Replaces any `<i data-lucide="...">` placeholders with real SVGs (`lucide.createIcons()`).
- Updates `document.title` to `<route.title> — Enkh Baterdene`.
- Calls `onChange(id)` so `Nav` can sync `aria-current` and the drawer can close.
- Moves focus to `#main` for screen-reader users.

## Adding a page

1. Create `assets/js/pages/<id>.js` that exports `function render<Id>(outlet)`.
2. Register it in [`routes.js`](../assets/js/routes.js):

   ```js
   import { renderBlog } from './pages/blog.js';

   export const ROUTES = [
     // ...
     { id: 'blog', label: 'Blog', title: 'Blog', icon: 'book-open', render: renderBlog },
   ];
   ```

3. Lucide icon name in `icon` is replaced at render time. The Nav component picks
   the page up automatically and renders a sidebar entry.

## Page render contract

Every page module exports a single function:

```js
export function renderHome(outlet) {
  outlet.innerHTML = `<header class="page__header">...</header>...`;
  // Optional: bind events to nodes inside `outlet`
  outlet.querySelectorAll('[data-lb-index]').forEach(...);
}
```

- Set `outlet.innerHTML` (the router has set `aria-busy="true"` already).
- After return, the router calls `lucide.createIcons()`, so any `data-lucide`
  placeholders in your HTML render automatically.
- Bind any DOM listeners after writing the HTML.

## Animations & motion

- Aurora gradient background and grain are pure CSS (`bg-aurora`, `bg-grain`).
- Particle band is a `particlesJS` instance bound to `#topParticles`.
- Page transitions use a simple opacity+translate keyframe.
- All motion is suppressed under `@media (prefers-reduced-motion: reduce)`.

## State

There is no global store. Three places hold state:

- **DOM attributes** (`aria-current`, `data-theme`, `data-open`) for UI state.
- **`localStorage.theme`** for theme persistence.
- **`location.hash`** for the active route.

This is intentional — the site has no server, no auth, no caching layer to manage.
