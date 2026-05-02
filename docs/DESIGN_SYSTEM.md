# Design system

The styling lives entirely in [`assets/css/style.css`](../assets/css/style.css).
It is organized as numbered sections (1. Tokens → 16. Print) so you can find
things quickly with `grep`.

## Tokens (custom properties)

All design decisions are exposed as CSS custom properties on `:root`. Change a
token and every component picks it up.

### Color

| Token            | Purpose                                     |
| ---------------- | ------------------------------------------- |
| `--brand`        | Primary accent (HSL-based for easy tuning)  |
| `--brand-strong` | Hover/pressed accent                        |
| `--accent`       | Secondary accent for gradients              |
| `--success`/`--warning`/`--danger` | Semantic states         |
| `--bg-0`/`--bg-1`| Page + raised surface                       |
| `--fg`/`--fg-muted`/`--fg-subtle` | Text hierarchy             |
| `--border`       | Default border                              |
| `--ring`         | Focus ring                                  |

### Glass

| Token              | Purpose                                                   |
| ------------------ | --------------------------------------------------------- |
| `--glass-bg`       | Translucent surface fill                                  |
| `--glass-bg-strong`| Higher-contrast variant                                   |
| `--glass-border`   | Hairline highlight                                        |
| `--glass-shadow`   | Soft elevation                                            |
| `--glass-blur`     | `backdrop-filter` blur radius                             |
| `--glass-saturate` | `backdrop-filter` saturation                              |

### Type, space, radius, motion

| Token                    | Purpose                                  |
| ------------------------ | ---------------------------------------- |
| `--font-sans`/`--font-mono` | Font stacks                          |
| `--fs-xs` … `--fs-3xl`   | Type scale (`clamp` for fluid headings)  |
| `--lh-tight`/`--lh-normal` | Line heights                           |
| `--sp-1` … `--sp-8`      | Spacing scale (0.25 → 4 rem)             |
| `--r-sm` … `--r-pill`    | Radii                                    |
| `--ease-out`/`--ease-in-out` | Motion curves                        |
| `--dur-1` … `--dur-3`    | Motion durations                         |

### Layout

| Token            | Purpose                            |
| ---------------- | ---------------------------------- |
| `--header-h`     | Sticky header height               |
| `--sidebar-w`    | Desktop sidebar width              |
| `--content-max`  | Max page content width             |

## Theming

The site supports `light`, `dark`, and system (no attribute):

- `:root[data-theme="light"]` — explicit light
- `:root[data-theme="dark"]` — explicit dark
- `:root` (no attribute) + `@media (prefers-color-scheme: dark)` — follows OS

Theme is set by [`theme.js`](../assets/js/theme.js) and persisted to
`localStorage.theme`. An inline pre-paint script in `index.html` applies the
attribute before first paint to avoid a flash.

To add a new theme variant, add an attribute selector in section 1 of
`style.css`:

```css
:root[data-theme="sepia"] {
  --bg-0: hsl(38 35% 95%);
  /* ... */
}
```

…and accept its name in [`theme.js`](../assets/js/theme.js).

## Glass primitives

Apply `class="glass"` (or `glass--strong`, `glass--flat`, `glass--inset`) to
any element to get the translucent backdrop-blurred look. The class composes
with anything — `<header class="glass">`, `<button class="btn glass">`, etc.

A `@supports not (backdrop-filter)` fallback drops translucency for browsers
without support. A `@media (prefers-contrast: more)` rule does the same for
users who request higher contrast.

## Components

Each component is one CSS section. Search for the section comment:

| Section | Component        | Notes                                         |
| ------- | ---------------- | --------------------------------------------- |
| 6       | App header       | Sticky glass bar with brand + actions         |
| 7       | Sidebar / nav    | Desktop fixed sidebar + mobile drawer         |
| 8       | Main content     | `.page` wrapper with enter animation          |
| 9       | Buttons          | `.btn`, `.btn--primary`, `.btn--ghost`, `.btn--sm` |
| 9       | Cards            | `.card` with `.card__head`/`__body`/`__foot`  |
| 9       | Badges & chips   | Compact informational labels                  |
| 9       | Icon button      | `.icon-btn` square button for SVG icons       |
| 9       | Avatar           | `.avatar`, `--md`, `--sm`                     |
| 10      | Hero             | Two-column intro                              |
| 10      | Stats            | `.stats` grid of `.stat` tiles                |
| 10      | Resume           | Two-column resume layout                      |
| 10      | Timeline         | `.timeline` for jobs / education              |
| 10      | Skill bar        | `.skill__bar`/`__fill` with `--level`         |
| 11      | Lucide sizing    | Consistent icon sizes per context             |
| 12      | Top-bar particles| Global fixed band, masked fade                |
| 13      | Resume additions | Bullet lists + summary cards                  |
| 14      | Photography      | Gallery grid with span variants               |
| 14b     | Lightbox         | Modal viewer for photography                  |

## Spacing & layout rules

- Layout uses CSS Grid with named areas (`header`, `sidebar`, `main`, `footer`).
- Mobile collapses to a single column; desktop turns on the sidebar at `min-width: 900px`.
- All component spacing uses the `--sp-*` scale — no magic numbers.

## Motion

- Default durations: 140ms / 220ms / 360ms via `--dur-1/2/3`.
- All transitions use `--ease-out` or `--ease-in-out`.
- Page enter: `page-enter` keyframe (opacity + translateY).
- Particles pause and lines disable under `prefers-reduced-motion`.
- A global rule clamps all `transition-duration` and `animation-duration` to
  `0.001ms` when the user prefers reduced motion.

## Adding a component

1. Find the closest existing section in `style.css` and add yours nearby.
2. Use only design tokens — no hex codes, no hard-coded px (except 1px borders).
3. If the component should look like glass, give it `class="glass"` plus your
   own modifier; do not duplicate the `backdrop-filter` rules.
