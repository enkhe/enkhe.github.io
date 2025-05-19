function showPage(page) {
  const main = document.getElementById('mainContent');
  if (page === 'home') {
    main.innerHTML = `
      <h2>Welcome to Enkhe's Portfolio</h2>
      
      <br />
      <br />
      <p>This is the home page. Use the menu to navigate.</p>
      <br />
    `;
  } else if (page === 'resume') {
    main.innerHTML = `
      <h2>Resume</h2>
      <p><a href="resume.pdf" target="_blank">Download my resume (PDF)</a></p>
      <ul>
        <!-- <li><strong>Education:</strong> Your education info here</li> -->
        <li><strong>Experience:</strong> Your work experience here</li>
        <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, ...</li>
      </ul>
    `;
  } else if (page === 'tutorials') {
    main.innerHTML = `
      <h2>Tutorials</h2>
      <ul>
        <li><a href="https://github.com/enkhe/HTML-CSS-JS/HTML" target="_blank">HTML Examples</a></li>
        <li><a href="https://github.com/enkhe/HTML-CSS-JS/CSS" target="_blank">CSS Examples</a></li>
        <li><a href="https://github.com/enkhe/HTML-CSS-JS/JS" target="_blank">JavaScript Examples</a></li>
        <li><a href="https://github.com/enkhe/HTML-CSS-JS/React" target="_blank">React Examples</a></li>
        <li><a href="https://github.com/enkhe/HTML-CSS-JS/React-Native" target="_blank">React Native Examples</a></li>
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
      <section class="resume2-section container">
        <div class="resume2-sidebar">
          <img src="assets/img-profile/Enkh.jpg" alt="avatar" class="avatar rounded-circle shadow">
          <div class="my-name">Enkh Baterdene</div>
          <div class="my-title">Full Stack Engineer</div>
          <div class="links">
            <!-- <div class="link-item"><svg class="icon" viewBox="0 0 1792 1792" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path></svg><a href="http://enkhe.github.io" target="_blank">enkhe.github.io</a></div> -->
            <div class="link-item"><svg class="icon" viewBox="0 0 1792 1792" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path></svg><a href="mailto:contact.enkude@gmail.com">contact.enkude@gmail.com</a></div>
            <!-- <div class="link-item"><svg class="icon" viewBox="0 0 1792 1792" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path></svg><a href="tel:206-602-7194">(111) 222-3344</a></div> -->
          </div>
        </div>
        <div class="resume2-main">
          <p>I am a seasoned Software Developer proficient in both .NET and Java, dedicated to following industry best practices and design patterns to deliver robust, high-performance, and scalable applications. I excel as a collaborative team member, prioritizing technical excellence and a commitment to ongoing innovation. My passion lies in crafting large-scale solutions and tackling intricate business challenges.</p>
          <section class="mb-4">
            <div class="section-title h5 mb-3">Experience</div>
            <div class="job mb-3">
              <div class="job-title-container d-flex justify-content-between align-items-center">
                <div>
                  <div class="job-company fw-bold">Labor and Industries of Washington State</div>
                  <div class="job-title">Software Engineer</div>
                </div>
                <div>April 2019 - Present</div>
              </div>
              <p>Enhance and sustain the financial application through an iterative Agile approach encompassing software analysis, design, development, testing, and deployment.</p>
            </div>
          </section>
          <section class="mb-4">
            <div class="section-title h5 mb-3">Education</div>
            <div class="job mb-3">
              <div class="job-title-container d-flex justify-content-between align-items-center">
                <div>
                  <div class="job-company fw-bold">University of Washington Tacoma</div>
                  <div class="job-title">B.S. in Computer Engineering</div>
                  <div class="job-title">Minor in Mathematics</div>
                </div>
                <div>Sep 2014 - Jun 2017</div>
              </div>
              <p>Specialised in Software Development and Computer Engineering.</p>
            </div>
          </section>
          <section class="mb-4">
            <div class="section-title h5 mb-3">Skills</div>
            <div class="skills-container row">
              <ul class="col-md-4">
                <li>HTML / CSS</li>
                <li>Angular</li>
              </ul>
              <ul class="col-md-4">
                <li>JavaScript / ES6</li>
                <li>J2EE / Spring Boot</li>
              </ul>
              <ul class="col-md-4">
                <li>Git / Version Control</li>
                <li>CI / CD</li>
              </ul>
            </div>
            <p>Front-end with Angular 4/Node JS/HTML/CSS where client side object are interfaced with HTTP Requests/Responses via JSON complex models to accomplish GET/POST operations.</p>
            <p>Back-end Rest API with Dependency Injection for Auto wiring the framework that takes the entities; permeates to the down Service Layer that communicates with the Data Access Layer which supports Transactional sessions within Repository functionalities utilizing Criteria Builder Queries to push and pull the entity that is in Oracle Database.</p>
          </section>
          <section class="mb-4">
            <div class="section-title h5 mb-3">Interests</div>
            <div class="interests-container d-flex flex-wrap gap-2">
              <img alt="icon" src="assets/img/guitar.svg" style="width:32px;">
              <img alt="icon" src="assets/img/piano.svg" style="width:32px;">
              <img alt="icon" src="assets/img/controller.svg" style="width:32px;">
              <img alt="icon" src="assets/img/headphones.svg" style="width:32px;">
              <img alt="icon" src="assets/img/monitor.svg" style="width:32px;">
              <img alt="icon" src="assets/img/camera.svg" style="width:32px;">
              <img alt="icon" src="assets/img/video.svg" style="width:32px;">
              <img alt="icon" src="assets/img/cutlery.svg" style="width:32px;">
            </div>
          </section>
        </div>
      </section>
    `;
  }

  renderTutorials() {
    this.main.innerHTML = `
      <section class="tutorials-section">
        <h2>Tutorials</h2>
        <ul>
          <li><a href="https://github.com/enkhe/HTML-CSS-JS/HTML" target="_blank">HTML Examples</a></li>
          <li><a href="https://github.com/enkhe/HTML-CSS-JS/CSS" target="_blank">CSS Examples</a></li>
          <li><a href="https://github.com/enkhe/HTML-CSS-JS/JS" target="_blank">JavaScript Examples</a></li>
          <li><a href="https://github.com/enkhe/HTML-CSS-JS/React" target="_blank">React Examples</a></li>
          <li><a href="https://github.com/enkhe/HTML-CSS-JS/React-Native" target="_blank">React Native Examples</a></li>
        </ul>
      </section>
    `;
  }

  renderResume2() {
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
}

class Navigation {
  constructor(menuSelectors, renderer) {
    this.menus = menuSelectors.map(sel => document.querySelector(sel));
    this.renderer = renderer;
    this.links = [
      { id: 'home', label: 'Home', render: () => this.renderer.renderHome() },
      { id: 'resume', label: 'Resume', render: () => this.renderer.renderResume() },
      // { id: 'resume2', label: 'Resume 2', render: () => this.renderer.renderResume2() },
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