/* Theme controller — light/dark with system fallback. */
const KEY = 'theme';

export class Theme {
  constructor(root) {
    this.root = root;
  }

  get current() {
    const set = this.root.getAttribute('data-theme');
    if (set) return set;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  set(mode) {
    if (mode === 'system') {
      this.root.removeAttribute('data-theme');
      try { localStorage.removeItem(KEY); } catch {}
    } else {
      this.root.setAttribute('data-theme', mode);
      try { localStorage.setItem(KEY, mode); } catch {}
    }
  }

  toggle() {
    this.set(this.current === 'dark' ? 'light' : 'dark');
  }

  init(toggleEl) {
    if (!toggleEl) return;
    toggleEl.addEventListener('click', () => this.toggle());
    toggleEl.setAttribute('aria-pressed', String(this.current === 'dark'));

    // Keep aria-pressed in sync if system preference changes
    matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => {
      toggleEl.setAttribute('aria-pressed', String(this.current === 'dark'));
    });

    // Update aria-pressed on click after toggle
    const obs = new MutationObserver(() => {
      toggleEl.setAttribute('aria-pressed', String(this.current === 'dark'));
    });
    obs.observe(this.root, { attributes: true, attributeFilter: ['data-theme'] });
  }
}
