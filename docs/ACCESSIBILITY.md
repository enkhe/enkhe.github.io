# Accessibility

The site is built to WCAG 2.1 AA expectations. This page lists every a11y
pattern the site relies on so a regression is easy to catch.

## Page-level

- `<html lang="en">` set on the root.
- Skip link (`.skip-link`) is the first focusable element and jumps to `#main`.
- `<main id="main" tabindex="-1">` receives focus after every route change so
  screen readers announce the new page.
- `aria-live="polite"` on `#pageRoot` so route content updates are announced.
- `aria-busy` toggles on the page outlet during a render.
- `prefers-reduced-motion` disables all animations + particle motion.
- `prefers-contrast: more` drops backdrop-filter translucency for legibility.
- `:focus-visible` outline using `--ring` is set on every interactive element.

## Color & contrast

- Text colors (`--fg`, `--fg-muted`, `--fg-subtle`) are tuned to meet AA on
  both `--bg-0` and the glass backgrounds in both themes.
- The aurora background and grain layers are decorative (`aria-hidden="true"`)
  and do not carry information.

## Keyboard

| Element            | Behavior                                                |
| ------------------ | ------------------------------------------------------- |
| Sidebar nav        | Standard `<a>` links — Tab, Enter to activate           |
| Mobile drawer      | Tab is focus-trapped inside; Esc closes; opener focus restored |
| Lightbox           | Tab cycles between close/prev/next; ←/→ navigate; Esc closes; opener focus restored |
| Theme toggle       | Standard button; `aria-pressed` reflects dark state     |
| Route links        | Standard `<a href="#/...">`; browser handles back/forward |

## Semantics & landmarks

- `<header role="banner">` for the app header.
- `<nav aria-label="Primary">` (and `aria-label="Primary mobile"`) for the
  sidebar and drawer navs.
- `<main>` for the routed content; `<aside>` for the sidebar; `<footer>` for
  the footer.
- Each route's content opens with a `<header class="page__header">` containing
  exactly one `<h1>`.
- Cards use `<article>` where they represent a self-contained unit.

## Active state

- Active nav link uses `aria-current="page"` (set by `nav.js`); CSS targets
  the attribute instead of a class so the relationship is exposed to AT.

## Forms / interactives that aren't standard

- The mobile drawer is a `role="dialog"` + `aria-modal="true"` element with a
  scrim, focus trap, and Esc handler in [`drawer.js`](../assets/js/drawer.js).
- The lightbox is a `role="dialog"` + `aria-modal="true"` with Esc + arrow
  keys and a focus trap in [`lightbox.js`](../assets/js/lightbox.js). The
  counter (`1 / 8`) is `aria-live="polite"` so the slide change is announced.
- Theme toggle has `aria-label` and `aria-pressed`.

## Images

- Every photography gallery image has a meaningful `alt` describing the
  scene, not the category.
- Decorative SVGs (Lucide icons inside buttons that already have a text
  label) are marked `aria-hidden="true"`.
- The avatar's `alt` is "Portrait of Enkh Baterdene".

## What you must keep doing

When you add content, please:

- Give every photo gallery entry an `alt` describing the scene.
- Keep route titles meaningful — `document.title` is set from `route.title`.
- If you add a custom interactive widget, give it a label, focus styles, and
  a keyboard story (Tab, Enter/Space, Esc). Do not introduce divs as buttons.
- Run through the site once with the keyboard only after big changes.
- Run a Lighthouse a11y audit before merging visual changes.
