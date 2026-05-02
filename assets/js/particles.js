/* particles.js wrapper — supports multiple containers (topbar + hero). */

const HERO_CONFIG = {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 900 } },
    color:  { value: ['#6366f1', '#8b5cf6', '#3b82f6'] },
    shape:  { type: 'circle' },
    opacity: { value: 0.5, random: true, anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false } },
    size:    { value: 3, random: true },
    line_linked: { enable: true, distance: 140, color: '#6366f1', opacity: 0.35, width: 1 },
    move: { enable: true, speed: 1.4, direction: 'none', random: false, straight: false, out_mode: 'out' },
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes:  { grab: { distance: 160, line_linked: { opacity: 0.7 } }, push: { particles_nb: 3 } },
  },
  retina_detect: true,
};

const TOPBAR_CONFIG = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 700 } },
    color:  { value: ['#6366f1', '#8b5cf6', '#3b82f6', '#22d3ee'] },
    shape:  { type: 'circle' },
    opacity: { value: 0.55, random: true, anim: { enable: true, speed: 0.6, opacity_min: 0.15, sync: false } },
    size:    { value: 2.4, random: true },
    line_linked: { enable: true, distance: 130, color: '#8b5cf6', opacity: 0.35, width: 1 },
    move: { enable: true, speed: 1.1, direction: 'none', random: true, straight: false, out_mode: 'out' },
  },
  interactivity: {
    detect_on: 'window',
    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: false }, resize: true },
    modes:  { grab: { distance: 140, line_linked: { opacity: 0.6 } } },
  },
  retina_detect: true,
};

function destroy(id) {
  if (!Array.isArray(window.pJSDom)) return;
  for (let i = window.pJSDom.length - 1; i >= 0; i--) {
    const inst = window.pJSDom[i];
    const parentId = inst && inst.pJS && inst.pJS.canvas && inst.pJS.canvas.el && inst.pJS.canvas.el.parentNode && inst.pJS.canvas.el.parentNode.id;
    if (parentId === id) {
      try { inst.pJS.fn.vendors.destroypJS(); } catch {}
      window.pJSDom.splice(i, 1);
    }
  }
}

function reduced(cfg) {
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) return cfg;
  return {
    ...cfg,
    particles: {
      ...cfg.particles,
      move: { ...cfg.particles.move, enable: false },
      line_linked: { ...cfg.particles.line_linked, enable: false },
      opacity: { ...cfg.particles.opacity, anim: { ...(cfg.particles.opacity.anim || {}), enable: false } },
    },
  };
}

function initWith(id, config) {
  if (typeof window.particlesJS !== 'function') return;
  const el = document.getElementById(id);
  if (!el) return;
  destroy(id);
  el.innerHTML = '';
  window.particlesJS(id, reduced(config));
}

export function initHeroParticles(id = 'hero-particles')   { initWith(id, HERO_CONFIG); }
export function initTopbarParticles(id = 'topParticles')   { initWith(id, TOPBAR_CONFIG); }
