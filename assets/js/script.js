/* =========================================================================
 * Enkhe Portfolio — App entry
 * Modular hash-router + page modules. No build step required.
 * ========================================================================= */

import { ICONS } from './icons.js';
import { ROUTES, DEFAULT_ROUTE, NOT_FOUND } from './routes.js';
import { Theme } from './theme.js';
import { Drawer } from './drawer.js';
import { Router } from './router.js';
import { Nav } from './nav.js';
import { initTopbarParticles } from './particles.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
  // Year stamp
  $$('[data-year]').forEach((el) => (el.textContent = String(new Date().getFullYear())));

  // Theme
  const theme = new Theme(document.documentElement);
  theme.init($('[data-theme-toggle]'));

  // Drawer (mobile nav)
  const drawer = new Drawer({
    root: $('#mobileDrawer'),
    openers: $$('[data-drawer-open]'),
    closers: $$('[data-drawer-close]'),
  });
  drawer.init();

  // Navigation: render links into every primary nav region
  const nav = new Nav({
    regions: $$('[data-nav-primary]'),
    routes: ROUTES,
    icons: ICONS,
  });
  nav.render();

  // Render initial Lucide icons (header, drawer, nav)
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Top-of-page particle band (persists across route changes)
  initTopbarParticles('topParticles');

  // Router
  const router = new Router({
    outlet: $('#pageRoot'),
    routes: ROUTES,
    fallback: NOT_FOUND,
    onChange: (id) => {
      nav.setActive(id);
      drawer.close();
      const main = $('#main');
      if (main) main.focus({ preventScroll: false });
    },
  });
  router.init(DEFAULT_ROUTE);
});
