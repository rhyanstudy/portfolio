import type { Translations } from './types';

export const en: Translations = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    homeTitle: 'Rhyan Magalhães — Software Engineer',
    homeDescription:
      'Computer engineering student building reliable software, documenting technical work, and solving practical problems.',
    aboutTitle: 'About — Rhyan Magalhães',
    aboutDescription: 'Background, education, professional focus, and career objectives.',
    contactTitle: 'Contact — Rhyan Magalhães',
    contactDescription: 'Get in touch via email, GitHub, or LinkedIn.',
    experienceTitle: 'Experience — Rhyan Magalhães',
    experienceDescription: 'Professional experience, education, and downloadable curriculum vitae.',
    projectsTitle: 'Projects — Rhyan Magalhães',
    projectsDescription: 'Archive of software projects, case studies, and technical work.',
    notesTitle: 'Notes — Rhyan Magalhães',
    notesDescription:
      'Technical notes and articles on software engineering, architecture, and practice.',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    notes: 'Notes',
    experience: 'Experience',
    contact: 'Contact',
  },
  a11y: {
    mainNav: 'Main navigation',
    languageSwitcher: 'Language selection',
    menu: 'Menu',
  },
  footer: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    cv: 'CV',
    rights: 'All rights reserved.',
  },
  lang: {
    en: 'EN',
    ptBr: 'PT-BR',
  },
  home: {
    getInTouch: 'Get in touch',
    featuredProject: 'Featured Project',
    recentProjects: 'Recent Projects',
    readCaseStudy: 'Read case study →',
    viewAllProjects: 'View all projects →',
    technicalProfile: 'Technical Profile',
    languages: 'Languages',
    backend: 'Backend',
    frontend: 'Frontend',
    toolsAndPractices: 'Tools & Practices',
    latestNotes: 'Latest Notes',
    allNotes: 'All notes →',
    experienceEducation: 'Experience & Education',
    fullExperience: 'Full experience & CV →',
  },
  about: {
    label: 'About',
    title: 'Who I am',
    description: 'A brief overview of my background, what I work on, and where I am headed.',
    background: 'Background',
    currentFocus: 'Current Focus',
    careerObjective: 'Career Objective',
    education: 'Education',
    professionalBackground: 'Professional Background',
    viewProjects: 'View projects',
    contact: 'Contact',
  },
  contact: {
    label: 'Contact',
    title: 'Get in touch',
    description:
      'Open to conversations about engineering roles, collaborations, and technical projects.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'CV',
    downloadCv: 'Download curriculum vitae (PDF)',
    availability: 'Availability',
    availabilityText:
      'I am currently exploring software engineering opportunities and open to discussing backend development, infrastructure, and developer tooling roles. Feel free to reach out with a brief description of what you are working on.',
  },
  experience: {
    label: 'Career',
    title: 'Experience & Education',
    description:
      'A record of professional roles, academic background, and technical focus areas.',
    downloadCv: 'Download CV',
    professionalExperience: 'Professional Experience',
    education: 'Education',
    technicalProfile: 'Technical Profile',
    languages: 'Languages',
    backend: 'Backend',
    frontend: 'Frontend',
    toolsAndPractices: 'Tools & Practices',
  },
  projects: {
    label: 'Archive',
    title: 'Projects',
    description:
      'Selected work spanning backend systems, developer tooling, and research infrastructure.',
  },
  projectDetail: {
    label: 'Case Study',
    date: 'Date',
    role: 'Role',
    status: 'Status',
    viewGithub: 'View on GitHub',
    liveDemo: 'Live demo',
    context: 'Context',
    problem: 'Problem',
    solution: 'Solution',
    technicalDecisions: 'Technical Decisions',
    technicalImplementation: 'Technical Implementation',
    challenges: 'Challenges',
    learnings: 'What I Learned',
    results: 'Results',
    backToProjects: '← Back to projects',
  },
  notes: {
    label: 'Publication',
    title: 'Notes',
    description:
      'Technical writing on architecture, backend development, and engineering practice.',
  },
  articleDetail: {
    published: 'Published',
    category: 'Category',
    backToNotes: '← Back to notes',
  },
  status: {
    completed: 'completed',
    'in-progress': 'in progress',
    archived: 'archived',
  },
  site: {
    label: 'COMPUTER ENGINEERING · SOFTWARE DEVELOPMENT',
    headline: 'Building software, learning in public, and solving real problems.',
    intro:
      'I am a software engineer focused on backend systems, developer tooling, and clear technical communication. I write code that is maintainable, testable, and grounded in real-world constraints.',
    about: {
      whoIAm:
        'I am a computer engineering graduate with a strong interest in systems programming, web infrastructure, and the craft of building software that lasts. I value clarity in code, precision in documentation, and humility in problem-solving.',
      currentFocus:
        'Currently focused on backend development with TypeScript and Go, improving observability in distributed systems, and publishing technical notes on software design and engineering practice.',
      careerObjective:
        'Seeking roles where I can contribute to well-architected products, grow as an engineer through meaningful challenges, and collaborate with teams that prioritize quality and learning.',
    },
    experience: [
      {
        title: 'Software Engineer',
        company: 'Northline Systems',
        location: 'Remote',
        period: '2024 — Present',
        summary:
          'Develop and maintain backend services for a logistics platform serving regional clients.',
        highlights: [
          'Reduced API response times by 40% through query optimization and caching strategy.',
          'Designed and implemented a webhook delivery system with retry logic and dead-letter handling.',
          'Contributed to migration from monolith to modular service architecture.',
        ],
      },
      {
        title: 'Junior Developer',
        company: 'Meridian Digital',
        location: 'São Paulo, Brazil',
        period: '2022 — 2024',
        summary:
          'Built internal tools and client-facing features for a digital agency specializing in data dashboards.',
        highlights: [
          'Developed REST APIs and admin interfaces used by 12+ client teams.',
          'Introduced automated testing pipeline, increasing deployment confidence.',
          'Collaborated with designers to implement accessible, responsive interfaces.',
        ],
      },
      {
        title: 'Software Engineering Intern',
        company: 'Campus Research Lab',
        location: 'University',
        period: '2021 — 2022',
        summary:
          'Supported research projects in embedded systems and IoT data collection.',
        highlights: [
          'Built firmware utilities and data ingestion scripts for sensor networks.',
          'Documented experimental protocols and tooling for lab reproducibility.',
        ],
      },
    ],
    education: [
      {
        degree: 'B.S. Computer Engineering',
        institution: 'State University of Technology',
        location: 'Brazil',
        period: '2018 — 2022',
        details:
          'Coursework in algorithms, operating systems, computer networks, databases, and software engineering. Final project: distributed task scheduler for edge computing environments.',
      },
      {
        degree: 'Technical Certificate in Web Development',
        institution: 'Regional Technical Institute',
        location: 'Brazil',
        period: '2017 — 2018',
        details:
          'Foundational training in HTML, CSS, JavaScript, and relational databases.',
      },
    ],
    technologies: {
      languages: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
      backend: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Redis'],
      frontend: ['HTML', 'CSS', 'Astro', 'Vue'],
      tools: ['Git', 'GitHub Actions'],
      practices: ['Test-driven development', 'REST API design', 'Technical writing', 'Code review'],
    },
  },
};
