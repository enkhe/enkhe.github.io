/* Mobile drawer — focus-trapped, keyboard accessible. */
export class Drawer {
  constructor({ root, openers, closers }) {
    this.root = root;
    this.openers = openers || [];
    this.closers = closers || [];
    this._lastFocus = null;
    this._onKey = this._onKey.bind(this);
  }

  init() {
    this.openers.forEach((b) => b.addEventListener('click', () => this.open()));
    this.closers.forEach((b) => b.addEventListener('click', () => this.close()));
  }

  get isOpen() { return this.root?.getAttribute('data-open') === 'true'; }

  open() {
    if (!this.root || this.isOpen) return;
    this._lastFocus = document.activeElement;
    this.root.setAttribute('data-open', 'true');
    this.openers.forEach((o) => o.setAttribute('aria-expanded', 'true'));
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this._onKey);
    // Focus first interactive within panel
    const focusable = this._focusables();
    if (focusable.length) focusable[0].focus();
  }

  close() {
    if (!this.root || !this.isOpen) return;
    this.root.setAttribute('data-open', 'false');
    this.openers.forEach((o) => o.setAttribute('aria-expanded', 'false'));
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this._onKey);
    if (this._lastFocus && this._lastFocus.focus) this._lastFocus.focus();
  }

  _focusables() {
    if (!this.root) return [];
    return Array.from(
      this.root.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  _onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); this.close(); return; }
    if (e.key === 'Tab') {
      const f = this._focusables();
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
  }
}
