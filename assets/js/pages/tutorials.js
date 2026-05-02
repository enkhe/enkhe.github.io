import { TUTORIALS } from '../data.js';
import { ICONS } from '../icons.js';

export function renderTutorials(outlet) {
  outlet.innerHTML = `
    <header class="page__header">
      <span class="page__eyebrow">Tutorials</span>
      <h1>${TUTORIALS.status}</h1>
      <p class="page__lead">${TUTORIALS.intro}</p>
      <div class="hero__cta" style="margin-top:1rem;">
        <a class="btn btn--primary" href="${TUTORIALS.repo}" target="_blank" rel="noopener noreferrer">
          ${ICONS.github} Visit github.com/enkhe/coding
        </a>
        <a class="btn btn--ghost" href="${TUTORIALS.repo}/stargazers" target="_blank" rel="noopener noreferrer">
          ${ICONS.spark} Star the repo
        </a>
      </div>
    </header>

    <section class="section" aria-labelledby="tut-pillars">
      <h2 id="tut-pillars" class="section__title">${ICONS.book} What's coming</h2>
      <div class="grid grid--2">
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${ICONS.book}</div><div class="card__title">Single source of truth</div></div>
          <p class="card__body">Lessons, examples, and reference patterns consolidated into one repo so you don't have to hop around.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${ICONS.code}</div><div class="card__title">Hands-on examples</div></div>
          <p class="card__body">Each topic ships with runnable examples and concise explanations of the why behind the how.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${ICONS.layers}</div><div class="card__title">Frontend &amp; backend</div></div>
          <p class="card__body">Coverage spans HTML, CSS, JavaScript, frameworks, server-side, databases, and tooling.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${ICONS.zap}</div><div class="card__title">Beginner-friendly</div></div>
          <p class="card__body">Designed to take a learner from fundamentals to production with intentional progression.</p>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="tut-cta">
      <h2 id="tut-cta" class="sr-only">Stay in the loop</h2>
      <div class="card glass" style="text-align:center;align-items:center;">
        <div class="card__icon">${ICONS.github}</div>
        <h3 class="card__title">Watch the repo for new lessons</h3>
        <p class="card__body" style="max-width:60ch;">
          Lessons are being written and committed iteratively. Watching the repository on GitHub
          is the easiest way to get notified when a new lesson is published.
        </p>
        <a class="btn btn--primary" href="${TUTORIALS.repo}" target="_blank" rel="noopener noreferrer">
          ${ICONS.external} Open the repository
        </a>
      </div>
    </section>
  `;
}
