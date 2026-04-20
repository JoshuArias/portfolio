export const brand = 'Portfolio'

export const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  title: 'Hola, soy Joshua',
  subtitle: 'Desarrollador web enfocado en interfaces modernas y funcionales',
  ctaLabel: 'Ver mis proyectos',
  ctaHref: '#proyectos',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/JoshuArias', icon: 'github' },
    { label: 'Email', href: 'mailto:xigo.mx@gmail.com', icon: 'mail' },
  ],
}

export const about = {
  title: 'Sobre mí',
  description:
    'Soy un desarrollador apasionado por crear aplicaciones web modernas, funcionales y con un diseño excepcional. Me especializo en transformar ideas en productos digitales de alta calidad.',
  highlights: [
    {
      icon: 'code',
      title: 'Desarrollo Frontend',
      description: 'Construción de interfaces web modernas, limpias y enfocadas en experiencia de usuario',
    },
    {
      icon: 'lightbulb',
      title: 'Enfoque en Negocio',
      description: 'Desarrollo de páginas orientadas a conversión, generación de leads y resultados reales',
    },
    {
      icon: 'rocket',
      title: 'Aprendizaje Continuo',
      description: 'Evolucionando constantemente en tecnologías para contruir soluciones más complejas y eficientes',
    },
  ],
}

export const projects = [
  {
    title: 'Landing Inmobiliaria de Captación de Leads',
    description:
      'Landing page enfocada en generación de leads para bienes raíces, con formulario de contacto.',
    tags: ['React', 'Vite', 'CSS', 'Responsive Design'],
    image: '/images/landing-inmobiliaria.png',
    links: [
      { label: 'Demo', href: 'https://landing-inmobiliaria-murex.vercel.app', icon: 'external' },
      { label: 'Código', href: 'https://github.com/JoshuArias/landing-inmobiliaria.git', icon: 'github' },
    ],
  },
  {
    title: 'Auth Dashboard SaaS',
    description:
      'Sistema de autenticación con login, registro y rutas protegidas que simula el flujo de acceso en aplicaciones SaaS modernas.',
    tags: ['React', 'Vite', 'JavaScript', 'React Router'],
    image: '/images/auth-dashboard.png',
    links: [
      { label: 'Demo', href: 'https://auth-dashboard-saas.vercel.app', icon: 'external' },
      { label: 'Código', href: 'https://github.com/JoshuArias/auth-dashboard-saas.git', icon: 'github' },
    ],
  },
  {
    title: 'CRM Dashboard de leads',
    description:
      'Panel tipo CRM para gestionar prospectos, visualizar estados comerciales y mejorar el seguimiento de oportunidades de venta en tiempo real.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    image: '/images/crm-dashboard.png',
    links: [
      { label: 'Demo', href: 'https://crm-dashboard-leads.vercel.app', icon: 'external' },
      { label: 'Código', href: 'https://github.com/JoshuArias/crm-dashboard-leads.git', icon: 'github' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
  },
  {
    title: 'Desarrollo de interfaces',
    skills: [
      'React Router',
      'Formularios',
      'Validación de datos',
      'Estado local',
      'Componentización',
    ],
  },
  {
    title: 'Herramientas',
    skills: ['Git & GitHub', 'VS Code', 'Vite', 'Figma'],
  },
]

export const contact = {
  title: 'Contacto',
  subtitle:
    'Cuéntame qué necesitas construir y te responderé con una propuesta clara para avanzar.',
  introTitle: 'Disponible para nuevos proyectos',
  introText:
    'Trabajo con negocios y profesionales que buscan interfaces web claras, rápidas y enfocadas en generar confianza desde el primer contacto.',
  responseNote: 'Normalmente respondo en menos de 24 horas hábiles.',
  email: 'xigo.mx@gmail.com',
  location: 'Monterrey, México',
  details: [
    { label: 'Email', value: 'xigo.mx@gmail.com', href: 'mailto:xigo.mx@gmail.com', icon: 'mail' },
    { label: 'Ubicación', value: 'Monterrey, México', icon: 'location' },
  ],
}
