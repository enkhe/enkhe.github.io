import { PHOTO } from '../data.js';
import { ICONS, icon } from '../icons.js';
import { getLightbox } from '../lightbox.js';

const categoryIcon = (cat) => {
  switch (cat) {
    case 'Outdoor':   return icon('mountain');
    case 'Portrait':  return icon('user');
    case 'Event':     return icon('users');
    case 'Product':   return icon('package');
    case 'Full Body': return icon('user-round');
    default:          return icon('camera');
  }
};

const galleryItem = (g, i) => `
  <button type="button"
          class="gallery__item ${g.span === 'wide' ? 'gallery__item--wide' : ''} ${g.span === 'tall' ? 'gallery__item--tall' : ''}"
          data-lb-index="${i}"
          aria-label="Open ${g.category} photo in viewer">
    <img class="gallery__img" src="${g.src}" alt="${g.alt}" loading="lazy" decoding="async"
         onerror="this.closest('.gallery__item').classList.add('gallery__item--broken')" />
    <span class="gallery__caption">
      <span class="gallery__category">${categoryIcon(g.category)}<span>${g.category}</span></span>
      <span class="gallery__zoom" aria-hidden="true">${icon('zoom-in')}</span>
    </span>
  </button>`;

export function renderPhotography(outlet) {
  outlet.innerHTML = `
    <header class="page__header">
      <span class="page__eyebrow">Photography</span>
      <h1>Light, motion, people, things.</h1>
      <p class="page__lead">${PHOTO.intro}</p>
      <div class="hero__cta" style="margin-top:1rem;">
        <a class="btn btn--primary" href="${PHOTO.site}" target="_blank" rel="noopener noreferrer">${ICONS.external} Visit enkude.com</a>
        <a class="btn btn--ghost" href="mailto:${PHOTO.email}">${ICONS.mail} ${PHOTO.email}</a>
      </div>
    </header>

    <section class="section" aria-labelledby="gallery-title">
      <h2 id="gallery-title" class="section__title">${ICONS.camera} Selected work</h2>
      <p class="muted" style="font-size:var(--fs-sm);margin-bottom:var(--sp-4);">
        Click any image to open the lightbox. Use ← / → to navigate, Esc to close.
      </p>
      <div class="gallery">${PHOTO.gallery.map(galleryItem).join('')}</div>
    </section>

    <section class="section" aria-labelledby="services-title">
      <h2 id="services-title" class="section__title">${ICONS.spark} What I shoot</h2>
      <div class="grid grid--2">
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${icon('mountain')}</div><div class="card__title">Outdoor &amp; Travel</div></div>
          <p class="card__body">Landscapes, cityscapes, and storytelling on the move.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${icon('user')}</div><div class="card__title">Portrait</div></div>
          <p class="card__body">Headshots and lifestyle portraits, indoors and out.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${icon('users')}</div><div class="card__title">Events</div></div>
          <p class="card__body">Banquets, conferences, community events — coverage that documents the day.</p>
        </div>
        <div class="card glass">
          <div class="card__head"><div class="card__icon">${icon('package')}</div><div class="card__title">Product</div></div>
          <p class="card__body">Clean, well-lit product shots ready for web and print.</p>
        </div>
      </div>
    </section>
  `;

  // Wire up lightbox
  const lb = getLightbox();
  outlet.querySelectorAll('[data-lb-index]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const i = Number(btn.getAttribute('data-lb-index')) || 0;
      lb.show(PHOTO.gallery, i);
    });
  });
}
