/* Tiny hash-router. Routes are { id, render(outlet) }. */
export class Router {
  constructor({ outlet, routes, fallback, onChange }) {
    this.outlet = outlet;
    this.routes = routes;
    this.fallback = fallback;
    this.onChange = onChange || (() => {});
    this._handle = this._handle.bind(this);
  }

  init(defaultId) {
    window.addEventListener('hashchange', this._handle);
    if (!location.hash || location.hash === '#') {
      location.replace(`#/${defaultId}`);
    } else {
      this._handle();
    }
  }

  navigate(id) { location.hash = `#/${id}`; }

  _parse() {
    const h = location.hash.replace(/^#\/?/, '');
    return h.split('/')[0] || '';
  }

  async _handle() {
    const id = this._parse();
    const route = this.routes.find((r) => r.id === id) || this.fallback;
    this.outlet.setAttribute('aria-busy', 'true');
    try {
      await route.render(this.outlet);
      // Replace any new <i data-lucide> placeholders inside the outlet
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
      document.title = route.title ? `${route.title} — Enkh Baterdene` : 'Enkh Baterdene';
    } finally {
      this.outlet.setAttribute('aria-busy', 'false');
    }
    this.onChange(route.id);
    this.outlet.scrollIntoView({ block: 'start', behavior: 'auto' });
  }
}
