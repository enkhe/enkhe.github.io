import { PROFILE, STATS, SKILLS, PROJECTS } from '../data.js';
import { ICONS } from '../icons.js';

const stat = ({ num, label }) => `
  <div class="stat glass">
    <div class="stat__num">${num}</div>
    <div class="stat__label">${label}</div>
  </div>`;

const featuredSkill = (s) => `<div class="chip">${ICONS.spark}<span>${s.name}</span></div>`;

const projectMini = (p) => `
  <a class="card glass project-card" href="${p.href}" ${p.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
    <div class="card__head">
      <div class="card__icon">${ICONS[p.icon] || ICONS.spark}</div>
      <div class="card__title">${p.title}</div>
    </div>
    <p class="card__body">${p.summary}</p>
    <div class="card__foot"><span class="badge">${p.cta}${ICONS.arrow}</span></div>
  </a>`;

export function renderHome(outlet) {
  const featured = SKILLS.slice(0, 6).map(featuredSkill).join('');
  const projects = PROJECTS.slice(0, 3).map(projectMini).join('');

  outlet.innerHTML = `
    <section class="hero">
      <div class="hero__col">
        <span class="page__eyebrow">Hello, I'm ${PROFILE.shortName} — ${PROFILE.title}</span>
        <h1 class="hero__title">Leading <em>secure, mission-critical</em> .NET systems — and learning AI/ML next.</h1>
        <p class="hero__lead">${PROFILE.tagline}</p>
        <div class="hero__cta">
          <a class="btn btn--primary" href="#/projects">${ICONS.briefcase} View projects</a>
          <a class="btn btn--ghost" href="#/resume">${ICONS.resume} Read resume</a>
          <a class="btn btn--ghost" href="#/contact">${ICONS.mail} Get in touch</a>
        </div>
      </div>

      <div class="hero__media">
        <div class="hero__avatar-wrap">
          <img class="avatar" src="${PROFILE.avatar}" alt="Portrait of ${PROFILE.name}" loading="eager" decoding="async" />
        </div>
        <div class="flex flex--wrap" role="group" aria-label="Quick contacts">
          <a class="chip" href="${PROFILE.github}" target="_blank" rel="noopener noreferrer">${ICONS.github}<span>GitHub</span></a>
          <a class="chip" href="mailto:${PROFILE.email}">${ICONS.mail}<span>Email</span></a>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="stats-title">
      <h2 id="stats-title" class="sr-only">Highlights</h2>
      <div class="stats">${STATS.map(stat).join('')}</div>
    </section>

    <section class="section" aria-labelledby="skills-title">
      <h2 id="skills-title" class="section__title">${ICONS.spark} What I work with</h2>
      <div class="flex flex--wrap">${featured}</div>
    </section>

    <section class="section" aria-labelledby="featured-title">
      <h2 id="featured-title" class="section__title">${ICONS.briefcase} Selected work</h2>
      <div class="grid grid--2">${projects}</div>
    </section>
  `;
}
