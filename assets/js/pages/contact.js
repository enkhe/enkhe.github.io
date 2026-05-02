import { PROFILE } from '../data.js';
import { ICONS } from '../icons.js';

export function renderContact(outlet) {
  outlet.innerHTML = `
    <header class="page__header">
      <span class="page__eyebrow">Contact</span>
      <h1>Let's talk.</h1>
      <p class="page__lead">The fastest way to reach me is email. I read everything — pitches, questions, project ideas, all welcome.</p>
    </header>

    <section class="section">
      <div class="contact-grid">
        <a class="card glass" href="mailto:${PROFILE.email}">
          <div class="card__head"><div class="card__icon">${ICONS.mail}</div><h3 class="card__title">Email</h3></div>
          <p class="card__body">${PROFILE.email}</p>
          <div class="card__foot"><span class="badge">Send a note ${ICONS.arrow}</span></div>
        </a>
        <a class="card glass" href="${PROFILE.github}" target="_blank" rel="noopener noreferrer">
          <div class="card__head"><div class="card__icon">${ICONS.github}</div><h3 class="card__title">GitHub</h3></div>
          <p class="card__body">Code, projects, and contributions.</p>
          <div class="card__foot"><span class="badge">@enkhe ${ICONS.external}</span></div>
        </a>
        <a class="card glass" href="${PROFILE.site}" target="_blank" rel="noopener noreferrer">
          <div class="card__head"><div class="card__icon">${ICONS.link}</div><h3 class="card__title">Website</h3></div>
          <p class="card__body">${PROFILE.site}</p>
          <div class="card__foot"><span class="badge">Visit ${ICONS.external}</span></div>
        </a>
      </div>
    </section>
  `;
}
