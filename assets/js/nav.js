/* Renders navigation links into one or more regions and tracks active state. */
export class Nav {
  constructor({ regions, routes, icons }) {
    this.regions = regions || [];
    this.routes = routes;
    this.icons = icons;
  }

  render() {
    const html = this.routes
      .filter((r) => !r.hidden)
      .map((r) => `
        <a class="nav__link" href="#/${r.id}" data-route="${r.id}">
          ${this.icons[r.icon] || ''}
          <span>${r.label}</span>
        </a>`)
      .join('');
    this.regions.forEach((region) => { region.innerHTML = html; });
  }

  setActive(id) {
    this.regions.forEach((region) => {
      region.querySelectorAll('[data-route]').forEach((a) => {
        const active = a.getAttribute('data-route') === id;
        if (active) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
    });
  }
}
