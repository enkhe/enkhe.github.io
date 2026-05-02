import { ICONS } from '../icons.js';

export function renderNotFound(outlet) {
  outlet.innerHTML = `
    <section class="not-found">
      <span class="page__eyebrow">404</span>
      <h2>This page wandered off.</h2>
      <p class="page__lead">The link you followed may be broken, or the page may have been moved.</p>
      <a class="btn btn--primary" href="#/home">${ICONS.home} Take me home</a>
    </section>
  `;
}
