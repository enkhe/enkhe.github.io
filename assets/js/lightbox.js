/* Lightbox — accessible image viewer with prev/next/keyboard/focus-trap. */

let _instance = null;

class Lightbox {
  constructor() {
    this.items = [];
    this.index = 0;
    this._lastFocus = null;
    this._build();
    this._bind();
  }

  _build() {
    const el = document.createElement('div');
    el.className = 'lightbox';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Photo viewer');
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = `
      <div class="lightbox__scrim" data-lb-close></div>
      <button type="button" class="icon-btn lightbox__btn lightbox__btn--close" data-lb-close aria-label="Close (Esc)">
        <i data-lucide="x" aria-hidden="true"></i>
      </button>
      <button type="button" class="icon-btn lightbox__btn lightbox__btn--prev" data-lb-prev aria-label="Previous image (Left arrow)">
        <i data-lucide="chevron-left" aria-hidden="true"></i>
      </button>
      <button type="button" class="icon-btn lightbox__btn lightbox__btn--next" data-lb-next aria-label="Next image (Right arrow)">
        <i data-lucide="chevron-right" aria-hidden="true"></i>
      </button>
      <figure class="lightbox__figure">
        <img class="lightbox__img" alt="" />
        <figcaption class="lightbox__caption">
          <span class="lightbox__category"></span>
          <span class="lightbox__counter" aria-live="polite"></span>
        </figcaption>
      </figure>
    `;
    document.body.appendChild(el);

    this.el       = el;
    this.img      = el.querySelector('.lightbox__img');
    this.counter  = el.querySelector('.lightbox__counter');
    this.category = el.querySelector('.lightbox__category');
    this.btnClose = el.querySelector('[data-lb-close].icon-btn');
    this.btnPrev  = el.querySelector('[data-lb-prev]');
    this.btnNext  = el.querySelector('[data-lb-next]');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  _bind() {
    this.el.addEventListener('click', (e) => {
      if (e.target.closest('[data-lb-close]')) this.close();
      else if (e.target.closest('[data-lb-prev]')) this.prev();
      else if (e.target.closest('[data-lb-next]')) this.next();
    });

    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'Escape')          { e.preventDefault(); this.close(); }
      else if (e.key === 'ArrowLeft')  { e.preventDefault(); this.prev(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
      else if (e.key === 'Tab')        { this._trap(e); }
    });

    // Close on hash change so navigating away cleans up
    window.addEventListener('hashchange', () => this.close());
  }

  get isOpen() { return this.el.getAttribute('aria-hidden') === 'false'; }

  show(items, index = 0) {
    if (!items || !items.length) return;
    this.items = items;
    this.index = Math.max(0, Math.min(index, items.length - 1));
    this._lastFocus = document.activeElement;
    this.el.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    this._render();
    this.btnClose.focus();
  }

  close() {
    if (!this.isOpen) return;
    this.el.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (this._lastFocus && typeof this._lastFocus.focus === 'function') {
      this._lastFocus.focus();
    }
  }

  prev() {
    this.index = (this.index - 1 + this.items.length) % this.items.length;
    this._render();
  }

  next() {
    this.index = (this.index + 1) % this.items.length;
    this._render();
  }

  _render() {
    const it = this.items[this.index];
    if (!it) return;
    this.img.src = it.src;
    this.img.alt = it.alt || '';
    this.counter.textContent = `${this.index + 1} / ${this.items.length}`;
    this.category.textContent = it.category || '';
    this.btnPrev.hidden = this.items.length < 2;
    this.btnNext.hidden = this.items.length < 2;
  }

  _trap(e) {
    const focusables = [this.btnClose, this.btnPrev, this.btnNext].filter((b) => !b.hidden);
    if (!focusables.length) return;
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && active === first) { last.focus();  e.preventDefault(); }
    else if (!e.shiftKey && active === last) { first.focus(); e.preventDefault(); }
  }
}

export function getLightbox() {
  if (!_instance) _instance = new Lightbox();
  return _instance;
}
