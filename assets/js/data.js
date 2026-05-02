/* Single source of truth for portfolio content.
 * Edit here to update the site — pages read from this. */

export const PROFILE = {
  name: 'Enkh Baterdene',
  shortName: 'Enkh',
  title: 'Journey .NET Application Developer · Technical Lead',
  location: 'Shoreline, WA',
  email: 'admin@enkude.com',
  github: 'https://github.com/enkhe',
  site: 'https://enkhe.github.io',
  avatar: 'assets/img-profile/Enkh.jpg',
  tagline:
    'Technical lead building secure, mission-critical .NET systems — modernizing CI/CD, federated identity, and ETL automation while pursuing an M.S. in CS with an AI/ML focus.',
  bio: `Journey .NET Application Developer with 6+ years of progressive experience at the
        Washington State Department of Labor & Industries, serving as technical lead for
        enterprise application development, architecture alignment, and cross-functional
        system integration. Deep expertise in C#/.NET, T-SQL stored procedures, WCF/REST
        web services, and secure Microsoft SDL/SDLC practices. Certified Scrum Master.
        Currently pursuing an M.S. in Computer Science with an AI/ML focus.`,
};

export const STATS = [
  { num: '6+',   label: 'Years engineering' },
  { num: 'Lead', label: 'Technical lead — enterprise .NET' },
  { num: 'CSM',  label: 'Certified Scrum Master' },
  { num: 'M.S.', label: 'CS · AI/ML in progress' },
];

export const EXPERIENCE = [
  {
    org: 'Washington State Department of Labor & Industries',
    role: 'IT Application Developer — Journey (Technical Lead)',
    date: 'Apr 2019 — Present',
    summary:
      'Technical lead on an enterprise .NET application team — guiding architecture alignment, enforcing coding standards, and overseeing the full SDLC for mission-critical systems.',
    bullets: [
      'Technical lead and architecture: guide architecture alignment, enforce coding standards, and provide oversight across the full SDLC — design, development, deployment, and ongoing maintenance.',
      'Design, develop, and maintain high-impact C#/.NET web applications and WCF web services applying MVC, N-Tier, and Singleton design patterns; author and maintain complex MS SQL stored procedures supporting rapid business-rule changes.',
      'Build .NET Core Web API and Blazor applications on personal time to stay current with modern Microsoft platform capabilities and inform future modernization decisions.',
      'Integrated customer-facing applications with enterprise federated identity providers, enabling secure external authentication and streamlined cross-system portal interactions.',
      'Engineered a secure .NET Web API client with JWT/Bearer authentication for validating sensitive financial transactions, with role-based access control and data encryption.',
      'Architected and deployed .NET console applications to automate scheduled bulk ETL operations from secure file-transfer sources, improving data-pipeline efficiency and reliability.',
      'Resolved a high-precision arithmetic defect in financial calculations affecting downstream applications through deep root-cause analysis across interdependent systems.',
      'Migrated 12+ console applications from TFS to Git with full CI/CD pipelines through all environments to production; coordinating remaining web services and UI applications onto Azure Git with CI/CD.',
      'Built automated Cypress E2E UI tests and .NET WCF integration tests to improve release confidence and reduce regression risk.',
      'Mentor co-developers, conduct in-depth code reviews, and facilitate Agile ceremonies; coordinate with mainframe, DevOps, and network operations teams.',
    ],
  },
  {
    org: 'Cognizant',
    role: 'Software Engineer — Full Stack Java',
    date: 'Nov 2018 — Apr 2019',
    summary: 'Built microservices and CI/CD pipelines for cloud-native delivery.',
    bullets: [
      'Built microservices applications with Spring Boot, RESTful services, Spring Cloud, Netflix OSS (Eureka, Zuul, Feign), Pivotal Cloud Foundry, and Jenkins-based CI/CD.',
      'Enabled SSO security with OpenID Connect, OAuth2, and JWT tokens via Keycloak across distributed services.',
      'Followed TDD, producing automated unit, integration, and smoke tests in Angular and Spring Boot.',
    ],
  },
  {
    org: 'AT&T (via Infosys)',
    role: 'Software Engineer — Full Stack Java',
    date: 'Feb 2018 — Nov 2018',
    summary: 'Full-stack Java developer on enterprise telecommunications applications.',
    bullets: [
      'Contributed to enterprise application design, development, testing, debugging, documentation, and deployment for large-scale telecommunications systems.',
      'Translated business requirements into technical designs and implementations across user stories.',
    ],
  },
];

export const SUMMARY_BULLETS = [
  'Technical lead on enterprise .NET applications — architecture alignment, code standards, full-SDLC oversight.',
  'Built secure .NET Web API clients with JWT/Bearer authentication for sensitive financial transactions, with RBAC and data encryption.',
  'Integrated customer-facing applications with enterprise federated identity providers for secure external authentication.',
  'Architected .NET console applications automating scheduled bulk ETL from secure file-transfer sources.',
  'Resolved a high-precision arithmetic defect in financial calculations through deep cross-system root-cause analysis.',
  'Migrated 12+ console applications from TFS to Git with full CI/CD pipelines through production.',
  'Authored and maintained complex MS SQL stored procedures supporting rapid business-rule and feature changes.',
  'Built Cypress E2E UI tests and .NET WCF integration tests for release confidence and regression safety.',
  'Mentored co-developers via pair programming, in-depth code reviews, and Agile ceremony facilitation.',
  'Apply Microsoft SDL/SDLC and OWASP-aligned secure coding practices across the application portfolio.',
  'Certified Scrum Master — Scrum Alliance, April 2024.',
];

export const EDUCATION = [
  {
    org: 'City University of Seattle',
    role: 'M.S., Computer Science (AI/ML focus)',
    date: 'Jan 2025 — Present',
    summary: 'Graduate coursework in secure systems, machine learning, deep learning, AI for data science, and full-stack development.',
  },
  {
    org: 'University of Washington — Tacoma',
    role: 'B.S. Computer Engineering & Systems · Minor in Mathematics',
    date: 'Jun 2017',
    summary: '',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Scrum Master Certified (SMC)',
    issuer: 'Scrum Alliance',
    date: 'Issued Apr 2024',
    credentialId: '1939695',
    verifyUrl: 'https://bcert.me/bc/html/show-badge.html?b=suzozwmy',
  },
];

export const ACADEMIC_PROJECTS = [
  {
    title: 'Serverless E-Commerce Backend Security: A Comparative Case Study',
    course: 'CS 547 — Secure Systems & Programs',
    summary:
      'Architected a secure serverless application in Python and .NET applying the Microsoft SDL; performed STRIDE threat modeling and DREAD/CVSS risk scoring to mitigate OWASP Top 10 vulnerabilities. Engineered backend controls with advanced authentication, RBAC, and cryptographic standards for data in transit and at rest.',
    tags: ['Python', '.NET', 'STRIDE', 'OWASP', 'RBAC'],
    icon: 'server',
  },
  {
    title: 'Predictive Modeling & Neural Network Development',
    course: 'CS 620 — Machine Learning & Deep Learning',
    summary:
      'Designed and trained ML models in Python (scikit-learn, TensorFlow, PyTorch) for classification and regression with feature engineering, normalization, and EDA. Tuned deep neural networks to optimize accuracy, evaluated with F1, RMSE, and confusion matrices.',
    tags: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch'],
    icon: 'zap',
  },
  {
    title: 'Autonomous Deep Q-Network (DQN) Agent',
    course: 'DS 510 — Artificial Intelligence for Data Science',
    summary:
      'Trained a reinforcement-learning agent in PyTorch to navigate a dynamic PyPacman environment as an MDP with a custom OpenAI Gym-compatible interface. Evaluated Standard, Dueling, and Convolutional DQN architectures stabilized over 5,000 episodes via experience replay, target networks, and epsilon-greedy exploration.',
    tags: ['PyTorch', 'Reinforcement Learning', 'OpenAI Gym', 'DQN'],
    icon: 'spark',
  },
  {
    title: 'eCommerce Web Application with Local AI (Gemma)',
    course: 'CS 628 — Full-Stack Web Application Development',
    summary:
      'Built a full MERN stack application (MongoDB, Express, React, Node) with an Ollama / Gemma 2 chat assistant for product recommendations. Delivered RESTful APIs, dynamic React UI, and modular architecture with structured IEEE documentation.',
    tags: ['MongoDB', 'Express', 'React', 'Node', 'Ollama', 'Gemma 2'],
    icon: 'layers',
  },
];

export const EXPERTISE = [
  { label: '.NET / C# / .NET Core',      icon: 'code' },
  { label: 'Java · Spring Boot',         icon: 'code' },
  { label: 'Python · ML / DL',           icon: 'spark' },
  { label: 'MS SQL · T-SQL · ETL',       icon: 'database' },
  { label: 'REST APIs · WCF · SOAP',     icon: 'server' },
  { label: 'JWT · OAuth2 · OIDC',        icon: 'award' },
  { label: 'Microsoft SDL · OWASP',      icon: 'check' },
  { label: 'Git · Azure DevOps · CI/CD', icon: 'gitbranch' },
  { label: 'JavaScript · jQuery · Node', icon: 'zap' },
  { label: 'Pair programming · TDD',     icon: 'users' },
  { label: 'CMD · PowerShell · Unix',    icon: 'terminal' },
  { label: 'Postman · SoapUI · Swagger', icon: 'check' },
];

export const SKILLS = [
  { name: '.NET / C#',           level: 92, group: 'Backend' },
  { name: 'Java / Spring Boot',  level: 88, group: 'Backend' },
  { name: 'Python (ML / DL)',    level: 82, group: 'Backend' },
  { name: 'MS SQL / T-SQL',      level: 88, group: 'Data' },
  { name: 'REST API design',     level: 90, group: 'Backend' },
  { name: 'JavaScript',          level: 88, group: 'Frontend' },
  { name: 'Angular / React',     level: 82, group: 'Frontend' },
  { name: 'HTML & CSS',          level: 90, group: 'Frontend' },
  { name: 'Azure DevOps · CI/CD', level: 86, group: 'Tooling' },
  { name: 'Microsoft SDL · OWASP', level: 84, group: 'Security' },
];

export const PROJECTS = [
  {
    title: 'py-playground',
    summary:
      'A Python sandbox for experiments and learning — small focused scripts and exercises covering language fundamentals, data work, and ML/DL building blocks.',
    tags: ['Python', 'Sandbox', 'Learning'],
    href: 'https://github.com/enkhe/apps/tree/main/py-playground',
    icon: 'code',
    cta: 'View on GitHub',
  },
  {
    title: 'mermaid-to-html',
    summary:
      'Converts Mermaid diagrams into self-contained HTML — a small utility for embedding architecture and flow diagrams without runtime dependencies.',
    tags: ['Tooling', 'Mermaid', 'HTML'],
    href: 'https://github.com/enkhe/apps/tree/main/mermaid-to-html',
    icon: 'layers',
    cta: 'View on GitHub',
  },
  {
    title: 'markdown-to-html',
    summary:
      'A lightweight Markdown-to-HTML converter focused on clean output and easy theming — handy for docs, notes, and static pages.',
    tags: ['Tooling', 'Markdown', 'HTML'],
    href: 'https://github.com/enkhe/apps/tree/main/markdown-to-html',
    icon: 'book',
    cta: 'View on GitHub',
  },
  {
    title: 'Coding tutorials repo',
    summary:
      'Consolidated coding lessons covering modern web development end-to-end — examples and reference patterns growing iteratively.',
    tags: ['Tutorials', 'Reference', 'Web'],
    href: 'https://github.com/enkhe/coding',
    icon: 'book',
    cta: 'Browse lessons',
  },
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
