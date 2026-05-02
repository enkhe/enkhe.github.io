# Updating content

All site content lives in [`assets/js/data.js`](../assets/js/data.js). Page
modules read from it, so editing one file updates the whole site.

## Profile (header, hero, footer)

```js
export const PROFILE = {
  name: 'Enkh Baterdene',
  shortName: 'Enkh',
  title: 'Software Developer · .NET / Java',
  location: 'Shoreline, WA',
  email: 'enkhe@live.com',
  github: 'https://github.com/enkhe',
  site: 'https://enkhe.github.io',
  avatar: 'assets/img-profile/Enkh.jpg',
  tagline: '...',
  bio: '...',
};
```

Replace the avatar by dropping a new image into `assets/img-profile/` and
updating `PROFILE.avatar`.

## Resume

| Variable           | Used by                       |
| ------------------ | ----------------------------- |
| `EXPERIENCE`       | Resume timeline (jobs)        |
| `SUMMARY_BULLETS`  | "Experience Summary" section  |
| `EDUCATION`        | Resume education timeline     |
| `SKILLS`           | Resume skill bars             |
| `EXPERTISE`        | Resume areas of expertise (chip cloud) |
| `STATS`            | Home page stats row           |

Each `EXPERIENCE` / `EDUCATION` entry:

```js
{
  org: 'Company name',
  role: 'Role title',
  date: 'Start — End',
  summary: 'One-line synopsis (optional).',
  bullets: ['First detail.', 'Second detail.'],
}
```

Each `SKILLS` entry:

```js
{ name: 'JavaScript', level: 88, group: 'Frontend' }
```

`level` is 0–100; the Resume page renders a progress bar with that fill.

Each `EXPERTISE` entry:

```js
{ label: 'Postman · SoapUI · Swagger', icon: 'check' }
```

`icon` is a [Lucide](https://lucide.dev) name — pass `git-branch` (with hyphen)
or use a key from `ICONS` in [`icons.js`](../assets/js/icons.js).

## Projects

```js
export const PROJECTS = [
  {
    title: 'Personal Portfolio',
    summary: 'One-paragraph description.',
    tags: ['Vanilla JS', 'A11y'],
    href: 'https://github.com/...',     // external opens in new tab
    icon: 'spark',                      // key from ICONS
    cta: 'View source',                 // button label
  },
];
```

Local links (e.g. `cna.html`) open in the same tab. External `https://` links
get `target="_blank"` + `rel="noopener noreferrer"` automatically.

## Tutorials

```js
export const TUTORIALS = {
  repo: 'https://github.com/enkhe/coding',
  status: 'Comprehensive tutorial — in progress.',
  intro: 'Long-form description.',
};
```

The Tutorials page ([`pages/tutorials.js`](../assets/js/pages/tutorials.js))
renders a single CTA pointing to the repo plus four pillar cards.

## Photography

```js
export const PHOTO = {
  site: 'http://enkude.com/',
  email: 'admin@enkude.com',
  intro: '...',
  gallery: [
    { src: 'assets/img/photography/001.jpg', category: 'Outdoor', alt: '...', span: 'wide' },
    // ...
  ],
};
```

### Adding a photo

1. Drop the JPG into `assets/img/photography/`.
2. Add a `gallery` entry pointing at it.
3. `category` controls the icon on the caption (Outdoor / Portrait / Event /
   Product / Full Body — see `categoryIcon()` in
   [`pages/photography.js`](../assets/js/pages/photography.js)).
4. `span` is `''`, `'wide'` (2 columns), or `'tall'` (2 rows) — used for the
   masonry-style layout. On narrow screens spans collapse automatically.
5. `alt` is required for accessibility.

The first image you add becomes index 0 in the lightbox.

> **Why local copies?** `enkude.com` only serves images over HTTP. GitHub Pages
> is HTTPS, so embedding `http://` images would be blocked as mixed content.
> The 8 sample images were downloaded into `assets/img/photography/` so they
> always load. To re-sync, re-download from `http://enkude.com/Content/images/`.

## Interests (About page)

```js
export const INTERESTS = [
  { label: 'Music', icon: 'headphones' },
];
```

Both fields are required. `icon` is a Lucide name.

## Adding a route / page

See [ARCHITECTURE.md → Adding a page](ARCHITECTURE.md#adding-a-page).

## Updating the favicon / OG image

- Favicon is an inline SVG data-URI in `index.html`'s `<link rel="icon">`.
  Edit the `<text>` and gradient stops to change it.
- Open Graph image is `assets/img-profile/Enkh.jpg` — replace that file or
  point `<meta property="og:image">` somewhere else.
