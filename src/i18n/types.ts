export const locales = ['en', 'pt-br'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export type ExperienceEntry = {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
};

export type Translations = {
  htmlLang: string;
  ogLocale: string;
  meta: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    experienceTitle: string;
    experienceDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    notesTitle: string;
    notesDescription: string;
  };
  nav: {
    about: string;
    projects: string;
    notes: string;
    experience: string;
    contact: string;
  };
  a11y: {
    mainNav: string;
    languageSwitcher: string;
    menu: string;
  };
  footer: {
    github: string;
    linkedin: string;
    email: string;
    cv: string;
    rights: string;
  };
  lang: {
    en: string;
    ptBr: string;
  };
  home: {
    getInTouch: string;
    featuredProject: string;
    recentProjects: string;
    readCaseStudy: string;
    viewAllProjects: string;
    technicalProfile: string;
    languages: string;
    backend: string;
    frontend: string;
    toolsAndPractices: string;
    latestNotes: string;
    allNotes: string;
    experienceEducation: string;
    fullExperience: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    background: string;
    currentFocus: string;
    careerObjective: string;
    education: string;
    professionalBackground: string;
    viewProjects: string;
    contact: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
    cv: string;
    downloadCv: string;
    availability: string;
    availabilityText: string;
  };
  experience: {
    label: string;
    title: string;
    description: string;
    downloadCv: string;
    professionalExperience: string;
    education: string;
    technicalProfile: string;
    languages: string;
    backend: string;
    frontend: string;
    toolsAndPractices: string;
  };
  projects: {
    label: string;
    title: string;
    description: string;
  };
  projectDetail: {
    label: string;
    date: string;
    role: string;
    status: string;
    viewGithub: string;
    liveDemo: string;
    context: string;
    problem: string;
    solution: string;
    technicalDecisions: string;
    technicalImplementation: string;
    challenges: string;
    learnings: string;
    results: string;
    backToProjects: string;
  };
  notes: {
    label: string;
    title: string;
    description: string;
  };
  articleDetail: {
    published: string;
    category: string;
    backToNotes: string;
  };
  status: {
    completed: string;
    'in-progress': string;
    archived: string;
  };
  site: {
    label: string;
    headline: string;
    intro: string;
    about: {
      whoIAm: string;
      currentFocus: string;
      careerObjective: string;
    };
    experience: ExperienceEntry[];
    education: EducationEntry[];
    technologies: {
      languages: string[];
      backend: string[];
      frontend: string[];
      tools: string[];
      practices: string[];
    };
  };
};
