import { renderHome }        from './pages/home.js';
import { renderAbout }       from './pages/about.js';
import { renderResume }      from './pages/resume.js';
import { renderProjects }    from './pages/projects.js';
import { renderPhotography } from './pages/photography.js';
import { renderTutorials }   from './pages/tutorials.js';
import { renderContact }     from './pages/contact.js';
import { renderNotFound }    from './pages/not-found.js';

export const ROUTES = [
  { id: 'home',        label: 'Home',        title: 'Home',        icon: 'home',      render: renderHome },
  { id: 'about',       label: 'About',       title: 'About',       icon: 'user',      render: renderAbout },
  { id: 'resume',      label: 'Resume',      title: 'Resume',      icon: 'resume',    render: renderResume },
  { id: 'projects',    label: 'Projects',    title: 'Projects',    icon: 'briefcase', render: renderProjects },
  { id: 'photography', label: 'Photography', title: 'Photography', icon: 'camera',    render: renderPhotography },
  { id: 'tutorials',   label: 'Tutorials',   title: 'Tutorials',   icon: 'book',      render: renderTutorials },
  { id: 'contact',     label: 'Contact',     title: 'Contact',     icon: 'mail',      render: renderContact },
];

export const DEFAULT_ROUTE = 'home';

export const NOT_FOUND = {
  id: '404', label: '404', title: 'Page not found', render: renderNotFound,
};
