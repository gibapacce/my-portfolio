// Navigation sections
export const SECTIONS = {
  ABOUT: 'sobre',
  EXPERIENCE: 'experiencia',
  SKILLS: 'habilidades',
  PROJECTS: 'projetos',
  CONTACT: 'contato',
};

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideIn: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Color mappings for programming languages
export const LANGUAGE_COLORS = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-400',
  Python: 'bg-green-400',
  Vue: 'bg-green-500',
  React: 'bg-blue-500',
  HTML: 'bg-orange-400',
  CSS: 'bg-blue-300',
  'Node.js': 'bg-green-600',
  PHP: 'bg-purple-400',
  Java: 'bg-red-400',
  'C#': 'bg-purple-600',
};

// Skill category colors
export const SKILL_COLORS = {
  blue: 'bg-blue-600/20 text-blue-300 border-blue-500/30',
  green: 'bg-green-600/20 text-green-300 border-green-500/30',
  purple: 'bg-purple-600/20 text-purple-300 border-purple-500/30',
  orange: 'bg-orange-600/20 text-orange-300 border-orange-500/30',
  gray: 'bg-gray-600/20 text-gray-300 border-gray-500/30',
};

// Social media links
export const SOCIAL_LINKS = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  EMAIL: 'email',
  TWITTER: 'twitter',
  INSTAGRAM: 'instagram',
};

// SEO Meta tags
export const SEO_CONFIG = {
  title: 'Gilberto Pacce - Software Engineer',
  description:
    'Software Engineer especializado em .NET/C#, React e Node.js. Desenvolvedor Full Stack na Dell Technologies com experiência em aplicações de alto desempenho e integração de sistemas.',
  keywords:
    'software engineer, desenvolvedor, full stack, .net, c#, react, nodejs, javascript, dell technologies, porto alegre',
  author: 'Gilberto Pacce',
  siteUrl: 'https://github.com/gibapacce',
  image: 'https://github.com/gibapacce/og-image.jpg',
};

// Contact form validation
export const FORM_VALIDATION = {
  name: {
    required: 'Nome é obrigatório',
    minLength: { value: 2, message: 'Nome deve ter pelo menos 2 caracteres' },
  },
  email: {
    required: 'Email é obrigatório',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email inválido',
    },
  },
  message: {
    required: 'Mensagem é obrigatória',
    minLength: {
      value: 10,
      message: 'Mensagem deve ter pelo menos 10 caracteres',
    },
  },
};

// API endpoints
export const API_ENDPOINTS = {
  GITHUB_REPOS: username =>
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
  GITHUB_USER: username => `https://api.github.com/users/${username}`,
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'portfolio_theme',
  LANGUAGE: 'portfolio_language',
  ACTIVE_SECTION: 'portfolio_active_section',
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
