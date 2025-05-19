function showPage(page) {
  const main = document.getElementById('mainContent');
  if (page === 'home') {
    main.innerHTML = `
      <h2>Welcome to Enkhe's Portfolio</h2>
      <p>This is the home page. Use the menu to navigate.</p>
    `;
  } else if (page === 'resume') {
    main.innerHTML = `
      <h2>Resume</h2>
      <p><a href="resume.pdf" target="_blank">Download my resume (PDF)</a></p>
      <ul>
        <li><strong>Education:</strong> Your education info here</li>
        <li><strong>Experience:</strong> Your work experience here</li>
        <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, ...</li>
      </ul>
    `;
  } else if (page === 'tutorials') {
    main.innerHTML = `
      <h2>Tutorials</h2>
      <ul>
        <li><a href="https://github.com/enkhe/html-examples" target="_blank">HTML Examples</a></li>
        <li><a href="https://github.com/enkhe/css-examples" target="_blank">CSS Examples</a></li>
        <li><a href="https://github.com/enkhe/js-examples" target="_blank">JavaScript Examples</a></li>
        <li><a href="https://github.com/enkhe/react-examples" target="_blank">React Examples</a></li>
      </ul>
    `;
  }
}

// Show home page by default
showPage('home');

class PageRenderer {
  constructor(mainSelector) {
    this.main = document.querySelector(mainSelector);
  }

  renderHome() {
    this.main.innerHTML = `
      <section class="home-section">
        <h2>Welcome to Enkhe's Portfolio</h2>
        <p>This is the home page. Use the menu to navigate.</p>
      </section>
    `;
  }

  renderResume() {
    this.main.innerHTML = `
      <section class="resume-section">
        <h2>Resume</h2>
        <p><a href="assets/resume.pdf" target="_blank">Download my resume (PDF)</a></p>
        <ul>
          <li><strong>Education:</strong> Your education info here</li>
          <li><strong>Experience:</strong> Your work experience here</li>
          <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, ...</li>
        </ul>
      </section>
    `;
  }

  renderTutorials() {
    this.main.innerHTML = `
      <section class="tutorials-section">
        <h2>Tutorials</h2>
        <ul>
          <li><a href="https://github.com/enkhe/html-examples" target="_blank">HTML Examples</a></li>
          <li><a href="https://github.com/enkhe/css-examples" target="_blank">CSS Examples</a></li>
          <li><a href="https://github.com/enkhe/js-examples" target="_blank">JavaScript Examples</a></li>
          <li><a href="https://github.com/enkhe/react-examples" target="_blank">React Examples</a></li>
        </ul>
      </section>
    `;
  }
}

class Navigation {
  constructor(menuSelectors, renderer) {
    this.menus = menuSelectors.map(sel => document.querySelector(sel));
    this.renderer = renderer;
    this.links = [
      { id: 'home', label: 'Home', render: () => this.renderer.renderHome() },
      { id: 'resume', label: 'Resume', render: () => this.renderer.renderResume() },
      { id: 'tutorials', label: 'Tutorials', render: () => this.renderer.renderTutorials() }
    ];
  }

  init() {
    // Inject links into both menus
    this.menus.forEach(menu => {
      menu.innerHTML = this.links.map(link =>
        `<a href="#" class="nav-link" data-page="${link.id}">${link.label}</a>`
      ).join('');
    });

    // Add event listeners to all nav links in both menus
    this.menus.forEach(menu => {
      menu.querySelectorAll('.nav-link').forEach(linkEl => {
        linkEl.addEventListener('click', (e) => {
          e.preventDefault();
          const page = linkEl.getAttribute('data-page');
          this.setActive(page);
          this.links.find(l => l.id === page).render();

          // If mobile, close the offcanvas
          if (menu.closest('.offcanvas')) {
            const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sideMenu'));
            offcanvas.hide();
          }
        });
      });
    });

    // Set default page
    this.setActive('home');
    this.links[0].render();
  }

  setActive(activeId) {
    this.menus.forEach(menu => {
      menu.querySelectorAll('.nav-link').forEach(linkEl => {
        linkEl.classList.toggle('active', linkEl.getAttribute('data-page') === activeId);
      });
    });
  }
}

function main() {
  const renderer = new PageRenderer('#mainContent');
  const nav = new Navigation([
    '#sideMenuDesktop .nav',
    '#sideMenu .nav'
  ], renderer);
  nav.init();
}

document.addEventListener('DOMContentLoaded', main);