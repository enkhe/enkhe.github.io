/* Single source of truth for portfolio content.
 * Edit here to update the site — pages read from this. */

export const PROFILE = {
  name: 'Enkh Baterdene',
  shortName: 'Enkh',
  title: 'Software Developer · .NET / Java',
  location: 'Shoreline, WA',
  email: 'enkhe@live.com',
  github: 'https://github.com/enkhe',
  site: 'https://enkhe.github.io',
  avatar: 'assets/img-profile/Enkh.jpg',
  tagline:
    'I build resilient, high-performance enterprise applications with .NET, Java, and modern web tooling.',
  bio: `Software Developer with professional experience in .NET and Java. I follow industry best practices
        and design patterns to build resilient, high-performance, and scalable applications. Strong team
        player committed to technical excellence and continual improvement, with a focus on large-scale
        enterprise applications and solving complex business problems.`,
};

export const STATS = [
  { num: '7+',  label: 'Years engineering' },
  { num: '3',   label: 'Companies' },
  { num: 'CSM', label: 'Certified Scrum Master' },
];

export const EXPERIENCE = [
  {
    org: 'Washington State Department of Labor & Industries',
    role: 'IT Application Developer (Journey)',
    date: 'Apr 2019 — Present',
    summary:
      'Develop and maintain enterprise full-stack .NET web applications for the financial domain.',
    bullets: [
      'Build and maintain enterprise full-stack .NET web applications under Agile methodologies (daily standups, sprint planning, retrospectives).',
      'Collaborate cross-functionally with application developers, database teams, infrastructure, network operations, DevOps, and external partners to coordinate changes across enterprise systems.',
      'Contribute to modernization initiatives across the application portfolio, including source-control migration (TFS to Git), CI/CD pipeline design, and identity/auth migration work spanning legacy and modern stacks.',
    ],
  },
  {
    org: 'Cognizant',
    role: 'Software Engineer',
    date: 'Nov 2018 — Apr 2019',
    summary: 'Built microservices and CI/CD pipelines for cloud-native delivery.',
    bullets: [
      'Built microservices applications with Spring Boot, RESTful services, Spring Cloud Config, Netflix OSS (Eureka, Zuul, Feign), Pivotal Cloud Foundry, Docker, and Jenkins-based CI/CD.',
      'Practiced TDD with automated unit, integration, and smoke tests in Angular and Spring Boot.',
      'Implemented webhook-driven pipelines automating continuous deployment.',
      'Implemented OpenID Connect and OAuth2 with Keycloak for SSO across services using JWT tokens.',
      'Participated in daily standups, sprint planning, and retrospectives.',
    ],
  },
  {
    org: 'AT&T (via Infosys)',
    role: 'Software Engineer',
    date: 'Feb 2018 — Nov 2018',
    summary: 'Full-stack Java developer on enterprise applications.',
    bullets: [
      'Full-stack Java developer on enterprise applications, covering design, development, testing, debugging, documentation, deployment, and integration.',
      'Translated business requirements into technical designs and implementations across user stories.',
    ],
  },
];

export const SUMMARY_BULLETS = [
  'Certified Scrum Master — Scrum Alliance, April 2024.',
  'Built secure .NET Web API clients with JWT/Bearer authentication for transaction validation in financial-domain workflows.',
  'Built automated end-to-end UI test suites with Cypress and integration tests for WCF and REST services.',
  'Maintain and extend MS SQL stored procedures supporting business-rule changes and feature requests.',
  'Built .NET console applications performing scheduled bulk ETL operations against secure file-transfer sources.',
  'Coordinated infrastructure and integration changes across application, database, and network operations teams.',
  'Proficient with Git and TFS: pull-request workflows, code review, and conflict resolution.',
  'Frontend development with HTML5, CSS3, JavaScript, jQuery, Bootstrap, Vue, and Angular.',
  'Strong knowledge of .NET and Java design patterns: MVC, Singleton, Dependency Injection, Factory.',
  'Solid OOP foundation in .NET and Java with emphasis on testable, clean code, refactoring, and code reviews.',
];

export const EDUCATION = [
  {
    org: 'University of Washington — Tacoma',
    role: 'B.S. Computer Engineering and Systems · Minor in Mathematics',
    date: 'Jun 2017',
    summary: '',
  },
];

export const EXPERTISE = [
  { label: '.NET / C# / Java',           icon: 'code' },
  { label: 'MS SQL / MySQL',             icon: 'database' },
  { label: 'REST APIs · WCF · SOAP',     icon: 'server' },
  { label: 'Git / TFS',                  icon: 'gitbranch' },
  { label: 'JavaScript · jQuery · Node', icon: 'zap' },
  { label: 'Pair programming · TDD',     icon: 'users' },
  { label: 'DevOps · CI/CD',             icon: 'layers' },
  { label: 'CMD · PowerShell · Unix',    icon: 'terminal' },
  { label: 'Postman · SoapUI · Swagger', icon: 'check' },
];

export const SKILLS = [
  { name: '.NET / C#',           level: 92, group: 'Backend' },
  { name: 'Java / Spring Boot',  level: 88, group: 'Backend' },
  { name: 'JavaScript',          level: 88, group: 'Frontend' },
  { name: 'Angular',             level: 85, group: 'Frontend' },
  { name: 'HTML & CSS',          level: 90, group: 'Frontend' },
  { name: 'MS SQL',              level: 86, group: 'Data' },
  { name: 'REST API design',     level: 90, group: 'Backend' },
  { name: 'Git / CI/CD',         level: 88, group: 'Tooling' },
];

export const PROJECTS = [
  {
    title: 'Personal Portfolio',
    summary:
      'This site — a hand-built, dependency-light portfolio with a glass design system, hash router, and accessible components.',
    tags: ['Vanilla JS', 'Design system', 'A11y'],
    href: 'https://github.com/enkhe/enkhe.github.io',
    icon: 'spark',
    cta: 'View source',
  },
  {
    title: 'enkude.com — Photography',
    summary: 'Personal photography portfolio covering outdoor, portrait, event, and product work.',
    tags: ['Photography', 'Portfolio'],
    href: 'http://enkude.com/',
    icon: 'camera',
    cta: 'Visit site',
  },
];

export const TUTORIALS = {
  repo: 'https://github.com/enkhe/coding',
  status: 'Comprehensive tutorial — in progress.',
  intro:
    'I\'m consolidating my coding lessons and tutorials into a single repository covering modern web development end-to-end. Star or watch the repo to follow along as new lessons land.',
};

export const INTERESTS = [
  { label: 'Music',       icon: 'headphones' },
  { label: 'Guitar',      icon: 'guitar' },
  { label: 'Piano',       icon: 'music' },
  { label: 'Gaming',      icon: 'gamepad-2' },
  { label: 'Tech',        icon: 'monitor' },
  { label: 'Photography', icon: 'camera' },
  { label: 'Film',        icon: 'film' },
  { label: 'Cooking',     icon: 'utensils' },
];

export const PHOTO = {
  site: 'http://enkude.com/',
  email: 'admin@enkude.com',
  intro:
    'On the side I shoot outdoor, portrait, event, and product photography. Selected work below — the full portfolio lives at enkude.com.',
  gallery: [
    { src: 'assets/img/photography/001.jpg', category: 'Outdoor',   alt: 'Outdoor scene — Seattle street with shuttle bus and bus stop signage', span: 'wide' },
    { src: 'assets/img/photography/002.jpg', category: 'Portrait',  alt: 'Portrait — outdoor portrait by the water', span: 'tall' },
    { src: 'assets/img/photography/008.jpg', category: 'Full Body', alt: 'Full-body shot — pedestrians in downtown Seattle', span: '' },
    { src: 'assets/img/photography/003.jpg', category: 'Event',     alt: 'Event — banquet bar service', span: '' },
    { src: 'assets/img/photography/004.jpg', category: 'Event',     alt: 'Event — Mongolian book fair table', span: 'wide' },
    { src: 'assets/img/photography/005.jpg', category: 'Event',     alt: 'Event — author table with framed scroll', span: '' },
    { src: 'assets/img/photography/006.jpg', category: 'Event',     alt: 'Event — sanitization station detail', span: '' },
    { src: 'assets/img/photography/007.jpg', category: 'Product',   alt: 'Product — handcrafted leather notebooks at Pike Place Market', span: 'tall' },
  ],
};
