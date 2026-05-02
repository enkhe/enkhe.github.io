import { PROJECTS } from '../data.js';
import { ICONS } from '../icons.js';

const card = (p) => {
  const external = p.href.startsWith('http');
  return `
    <article class="card glass project-card">
      <div class="card__head">
        <div class="card__icon">${ICONS[p.icon] || ICONS.spark}</div>
        <h3 class="card__title">${p.title}</h3>
      </div>
      <p class="card__body">${p.summary}</p>
      <div class="project-card__tags">
        ${p.tags.map((t) => `<span class="chip">${t}</span>`).join('')}
      </div>
      <div class="card__foot">
        <a class="btn btn--ghost btn--sm" href="${p.href}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          ${external ? ICONS.external : ICONS.arrow}
          <span>${p.cta}</span>
        </a>
      </div>
    </article>`;
};

export function renderProjects(outlet) {
  outlet.innerHTML = `
    <header class="page__header">
      <span class="page__eyebrow">Projects</span>
      <h1>Things I've built and shipped.</h1>
      <p class="page__lead">A selection of things I've worked on — products, planners, references, and personal experiments.</p>
    </header>

    <section class="section">
      <div class="grid grid--2">${PROJECTS.map(card).join('')}</div>
    </section>
  `;
}
