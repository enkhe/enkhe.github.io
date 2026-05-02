/* Lucide icon placeholders. Render `<i data-lucide="name">` then call
 * `lucide.createIcons()` to swap them with proper SVGs.
 * Existing keys are kept so page modules don't have to change.
 */
const i = (name, extraClass = '') =>
  `<i data-lucide="${name}"${extraClass ? ` class="${extraClass}"` : ''} aria-hidden="true"></i>`;

export const ICONS = {
  // Navigation
  home:       i('home'),
  user:       i('user'),
  resume:     i('file-text'),
  briefcase:  i('briefcase'),
  book:       i('book-open'),
  camera:     i('camera'),
  mail:       i('mail'),

  // Generic
  github:     i('github'),
  link:       i('link-2'),
  spark:      i('sparkles'),
  code:       i('code-2'),
  download:   i('download'),
  external:   i('external-link'),
  phone:      i('phone'),
  arrow:      i('arrow-right'),
  pin:        i('map-pin'),
  award:      i('award'),
  check:      i('check'),
  globe:      i('globe'),
  zap:        i('zap'),
  layers:     i('layers'),
  database:   i('database'),
  server:     i('server'),
  terminal:   i('terminal'),
  gitbranch:  i('git-branch'),

  // Interests
  music:      i('music'),
  guitar:     i('guitar'),
  gamepad:    i('gamepad-2'),
  monitor:    i('monitor'),
  film:       i('film'),
  utensils:   i('utensils'),
  headphones: i('headphones'),

  // Photography categories
  mountain:   i('mountain'),
  users:      i('users'),
  package:    i('package'),
  sparkles:   i('sparkles'),
};

export const icon = i;
