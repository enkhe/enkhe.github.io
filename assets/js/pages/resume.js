import {
  PROFILE, EXPERIENCE, EDUCATION, SKILLS, EXPERTISE, SUMMARY_BULLETS,
} from '../data.js';
import { ICONS, icon } from '../icons.js';

const expItem = (it) => `
  <article class="timeline__item">
    <span class="timeline__dot" aria-hidden="true"></span>
    <header class="timeline__head">
      <div>
        <div class="timeline__org">${it.org}</div>
        <div class="timeline__role">${it.role}</div>
      </div>
      <div class="timeline__date">${it.date}</div>
    </header>
    ${it.summary ? `<p>${it.summary}</p>` : ''}
    ${it.bullets ? `<ul class="timeline__bullets">${it.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>` : ''}
  </article>`;

const skillBar = (s) => `
  <div class="skill">
    <div class="skill__top">
      <span class="skill__name">${s.name}</span>
      <span class="skill__level">${s.group}</span>
    </div>
    <div class="skill__bar" role="progressbar" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.name} proficiency">
      <span class="skill__fill" style="--level:${s.level}%"></span>
    </div>
  </div>`;

const expertise = (it) => `
  <li class="chip" role="listitem">${icon(it.icon === 'gitbranch' ? 'git-branch' : it.icon)}<span>${it.label}</span></li>`;

const summaryItem = (text) => `
  <li class="summary-list__item">
    <span class="summary-list__check" aria-hidden="true">${icon('check')}</span>
    <span>${text}</span>
  </li>`;

export function renderResume(outlet) {
  outlet.innerHTML = `
    <header class="page__header">
      <span class="page__eyebrow">Resume</span>
      <h1>${PROFILE.name}</h1>
      <p class="page__lead">${PROFILE.bio}</p>
      <div class="hero__cta" style="margin-top:1rem;">
        <a class="btn btn--primary" href="resume.pdf" target="_blank" rel="noopener noreferrer">${ICONS.download} Download PDF</a>
        <a class="btn btn--ghost" href="mailto:${PROFILE.email}">${ICONS.mail} Email me</a>
      </div>
    </header>

    <div class="resume">
      <aside class="resume__sidebar glass" aria-label="Contact and quick info">
        <img class="avatar" src="${PROFILE.avatar}" alt="Portrait of ${PROFILE.name}" />
        <div>
          <p class="resume__name">${PROFILE.name}</p>
          <p class="resume__title">${PROFILE.title}</p>
        </div>
        <ul class="resume__contacts bare-list">
          <li><a class="resume__contact" href="mailto:${PROFILE.email}">${ICONS.mail}<span>${PROFILE.email}</span></a></li>
          <li><a class="resume__contact" href="${PROFILE.github}" target="_blank" rel="noopener noreferrer">${ICONS.github}<span>github.com/enkhe</span></a></li>
          <li><span class="resume__contact">${icon('map-pin')}<span>${PROFILE.location}</span></span></li>
        </ul>
        <span class="badge">${icon('award')}<span>Certified Scrum Master</span></span>
      </aside>

      <div class="resume__main">
        <section class="section" aria-labelledby="exp-title">
          <h2 id="exp-title" class="section__title">${ICONS.briefcase} Professional Experience</h2>
          <div class="timeline">${EXPERIENCE.map(expItem).join('')}</div>
        </section>

        <section class="section" aria-labelledby="summary-title">
          <h2 id="summary-title" class="section__title">${ICONS.spark} Experience Summary</h2>
          <ul class="summary-list bare-list">${SUMMARY_BULLETS.map(summaryItem).join('')}</ul>
        </section>

        <section class="section" aria-labelledby="edu-title">
          <h2 id="edu-title" class="section__title">${ICONS.book} Education</h2>
          <div class="timeline">${EDUCATION.map(expItem).join('')}</div>
        </section>

        <section class="section" aria-labelledby="skills-title">
          <h2 id="skills-title" class="section__title">${ICONS.code} Skills</h2>
          <div class="skill-list">${SKILLS.map(skillBar).join('')}</div>
        </section>

        <section class="section" aria-labelledby="expertise-title">
          <h2 id="expertise-title" class="section__title">${ICONS.layers} Areas of Expertise</h2>
          <ul class="bare-list flex flex--wrap" role="list">${EXPERTISE.map(expertise).join('')}</ul>
        </section>
      </div>
    </div>
  `;
}
