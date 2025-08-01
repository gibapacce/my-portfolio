export const projectsData = [
  {
    id: 1,
    name: 'code_challenges',
    title: 'Code Challenges',
    description:
      'Coleção de desafios de programação e algoritmos resolvidos em diferentes linguagens, demonstrando habilidades de resolução de problemas.',
    longDescription:
      'Repositório com soluções para diversos desafios de programação, incluindo algoritmos, estruturas de dados e problemas de lógica. Demonstra capacidade analítica e conhecimento em múltiplas linguagens de programação.',
    language: 'JavaScript',
    primaryTech: 'Algorithms',
    technologies: [
      'JavaScript',
      'Python',
      'C#',
      'Algorithms',
      'Data Structures',
    ],
    stargazers_count: 5,
    html_url: 'https://github.com/gibapacce/code_challenges',
    demo_url: null,
    topics: ['algorithms', 'challenges', 'programming', 'problem-solving'],
    status: 'completed',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
    category: 'Backend',
  },
  {
    id: 2,
    name: 'node_express',
    title: 'Node.js Express API',
    description:
      'API RESTful desenvolvida com Node.js e Express, demonstrando boas práticas de desenvolvimento backend e arquitetura de APIs.',
    longDescription:
      'Implementação completa de uma API REST com Node.js e Express, incluindo middleware personalizado, validação de dados, tratamento de erros e documentação. Projeto focado em demonstrar conhecimentos sólidos em desenvolvimento backend.',
    language: 'JavaScript',
    primaryTech: 'Node.js',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Middleware',
      'REST API',
    ],
    stargazers_count: 8,
    html_url: 'https://github.com/gibapacce/node_express',
    demo_url: null,
    topics: ['nodejs', 'express', 'api', 'backend'],
    status: 'completed',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    category: 'Backend',
  },
  {
    id: 3,
    name: 'twitter-clone',
    title: 'Twitter Clone',
    description:
      'Clone do Twitter desenvolvido para demonstrar habilidades em desenvolvimento full-stack com interface moderna e funcionalidades em tempo real.',
    longDescription:
      'Aplicação completa que replica as principais funcionalidades do Twitter, incluindo sistema de posts, timeline, interações sociais e interface responsiva. Projeto que demonstra competências em desenvolvimento frontend e backend.',
    language: 'JavaScript',
    primaryTech: 'React',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'CSS3',
      'Express',
    ],
    stargazers_count: 12,
    html_url: 'https://github.com/gibapacce/twitter-clone',
    demo_url: null,
    topics: ['react', 'social-media', 'fullstack', 'realtime'],
    status: 'completed',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop',
    category: 'Full Stack',
  },
  {
    id: 4,
    name: 'todo-api',
    title: 'Todo API',
    description:
      'API para gerenciamento de tarefas com funcionalidades completas de CRUD, autenticação e organização de projetos.',
    longDescription:
      'API robusta para gerenciamento de tarefas com recursos avançados como categorização, prioridades, datas de vencimento e sistema de usuários. Implementa boas práticas de segurança e arquitetura RESTful.',
    language: 'JavaScript',
    primaryTech: 'Node.js',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Bcrypt',
      'Mongoose',
    ],
    stargazers_count: 6,
    html_url: 'https://github.com/gibapacce/todo-api',
    demo_url: null,
    topics: ['api', 'todo', 'nodejs', 'mongodb'],
    status: 'completed',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    category: 'Backend',
  },
  {
    id: 5,
    name: 'bikcraft',
    title: 'Bikcraft',
    description:
      'Website moderno e responsivo para empresa de bicicletas customizadas, demonstrando habilidades em design e desenvolvimento frontend.',
    longDescription:
      'Site institucional completo com design moderno, interface responsiva e otimizações de performance. Projeto focado em demonstrar competências em HTML5, CSS3 e JavaScript vanilla, seguindo as melhores práticas de desenvolvimento web.',
    language: 'HTML',
    primaryTech: 'HTML5',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
    stargazers_count: 4,
    html_url: 'https://github.com/gibapacce/bikcraft',
    demo_url: null,
    topics: ['html', 'css', 'javascript', 'responsive', 'website'],
    status: 'completed',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    category: 'Frontend',
  },
  {
    id: 6,
    name: 'animaisfantasticos',
    title: 'Animais Fantásticos',
    description:
      'Website interativo sobre animais com animações suaves e efeitos visuais, demonstrando habilidades avançadas em JavaScript e CSS.',
    longDescription:
      'Projeto educativo e interativo sobre animais com rica experiência visual, incluindo animações CSS, efeitos de scroll, navegação suave e design responsivo. Demonstra domínio em JavaScript vanilla e técnicas avançadas de frontend.',
    language: 'JavaScript',
    primaryTech: 'JavaScript',
    technologies: [
      'JavaScript',
      'CSS3',
      'HTML5',
      'Animations',
      'Scroll Effects',
    ],
    stargazers_count: 7,
    html_url: 'https://github.com/gibapacce/animaisfantasticos',
    demo_url: null,
    topics: ['javascript', 'animations', 'css', 'interactive', 'frontend'],
    status: 'completed',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop',
    category: 'Frontend',
  },
];

export const projectCategories = [
  'Todos',
  'Frontend',
  'Backend',
  'Full Stack',
  'Mobile',
];

export const projectStatus = {
  completed: { label: 'Concluído', color: 'green' },
  'in-progress': { label: 'Em Desenvolvimento', color: 'yellow' },
  planning: { label: 'Planejamento', color: 'blue' },
};
