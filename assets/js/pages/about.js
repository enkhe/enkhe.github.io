import { PROFILE, INTERESTS } from '../data.js';
import { ICONS, icon } from '../icons.js';

export function renderAbout(outlet) {
  outlet.innerHTML = `
    <header class="page__header">
      <span class="page__eyebrow">About</span>
      <h1>A bit about me.</h1>
      <p class="page__lead">${PROFILE.bio}</p>
    </header>

    <section class="section" aria-labelledby="values-title">
      <h2 id="values-title" class="section__title">${ICONS.spark} How I work</h2>
      <div class="grid grid--2">
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${ICONS.code}</div><div class="card__title">Craft, not just code</div></div>
          <p class="card__body">I lean on patterns and clean architecture so today's feature does not become tomorrow's tech debt.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${ICONS.briefcase}</div><div class="card__title">Outcomes over output</div></div>
          <p class="card__body">I optimize for the result the team and the user need, then choose the simplest tools that get there.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${ICONS.users}</div><div class="card__title">Collaborative by default</div></div>
          <p class="card__body">Pair-friendly, review-friendly, doc-friendly. Software is a team sport.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${ICONS.spark}</div><div class="card__title">Always learning</div></div>
          <p class="card__body">New stacks, new patterns, new domains — curiosity is part of the job description.</p>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="interests-title">
      <h2 id="interests-title" class="section__title">${ICONS.spark} Outside of code</h2>
      <ul class="bare-list flex flex--wrap" role="list">
        ${INTERESTS.map((it) => `
          <li class="chip" role="listitem">${icon(it.icon)}<span>${it.label}</span></li>`).join('')}
      </ul>
    </section>
  `;
}
