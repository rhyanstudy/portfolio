export const siteConfig = {
  name: 'Rhyan Magalhães',
  url: 'https://rhyan.dev.br/',
  email: 'rhyan.magalhaes@outlook.com',
  github: 'https://github.com/rhyanstudy',
  linkedin: 'https://linkedin.com/in/rhyanmagalhaes',
  cvPath: '/cv.pdf',
} as const;

export type SiteConfig = typeof siteConfig;
