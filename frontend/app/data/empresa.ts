export interface TeamMember {
  name: string
  role: string
  bio: string
  focus: string[]
}

export interface CaseStudy {
  client: string
  industry: string
  city: string
  challenge: string
  solution: string
  results: string[]
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Juan Pablo Gallardo',
    role: 'Comunicación audiovisual',
    bio: 'Experto en comunicación audiovisual. Lidera la producción de reels, spots y contenido visual que conecta con clientes reales del Biobío — no solo estética vacía.',
    focus: ['Producción de video', 'Reels e Instagram', 'Dirección creativa', 'Identidad visual'],
  },
  {
    name: 'Ronald Bravo',
    role: 'Ingeniero informático · SEO',
    bio: 'Ingeniero Informático con 15 años de experiencia en programación y posicionamiento web SEO. Diseña la arquitectura digital, la velocidad del sitio y las estrategias para aparecer en Google.',
    focus: ['SEO técnico y local', 'Desarrollo web', 'Analytics y métricas', 'Automatización'],
  },
]

export const companyValues = [
  {
    title: 'Transparencia',
    description: 'Presupuestos y entregables claros. Sabes qué compras y qué resultado esperar cada mes.',
  },
  {
    title: 'Resultados medibles',
    description: 'Llamadas, formularios, posiciones en Google y ventas — no solo métricas de vanidad.',
  },
  {
    title: 'Cercanía regional',
    description: 'Trabajamos en el Biobío. Conocemos cómo buscan y compran las pymes de la zona.',
  },
]

export const whyChooseUs = [
  {
    title: 'Dos especialistas, un solo equipo',
    description:
      'Audiovisual y SEO bajo el mismo techo. No coordinas agencia de video por un lado y consultor SEO por otro: todo encaja en una estrategia.',
  },
  {
    title: 'Emprendedores que ya lo vivieron',
    description:
      'Impulsamos nuestras propias empresas antes de vender servicios. Entendemos el presupuesto ajustado, la urgencia y la necesidad de vender ya.',
  },
  {
    title: 'Enfoque pyme, no corporativo',
    description:
      'Planes adaptados a negocios locales: clínicas, ferreterías, restaurantes, servicios profesionales. Sin contratos imposibles ni jerga innecesaria.',
  },
  {
    title: 'SEO + contenido que convierte',
    description:
      'Páginas optimizadas para Google y piezas audiovisuales con llamado a la acción. Visibilidad y cierre en el mismo plan.',
  },
  {
    title: 'Comunicación directa',
    description:
      'Trato cercano por WhatsApp, reportes en lenguaje simple y ajustes según temporada y competencia de tu rubro.',
  },
  {
    title: 'Biobío y Ñuble',
    description:
      'Estrategias para Concepción, Los Ángeles, Talcahuano, Chillán y comunas cercanas — con páginas y keywords locales reales.',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    client: 'Clínica dental (Concepción)',
    industry: 'Salud',
    city: 'Concepción',
    challenge: 'Poca visibilidad en Google Maps y sin contenido que explicara tratamientos.',
    solution: 'SEO local, optimización de ficha Google Business y reels educativos mensuales.',
    results: [
      'Aumento de consultas por búsqueda local',
      'Mejor posición en Maps para keywords de la comuna',
      'Contenido reutilizable en Instagram',
    ],
  },
  {
    client: 'Ferretería (Los Ángeles)',
    industry: 'Retail',
    city: 'Los Ángeles',
    challenge: 'Competencia de cadenas grandes y dependencia del tráfico presencial.',
    solution: 'Páginas de categoría optimizadas, campañas en Instagram y reporte de llamadas desde web.',
    results: [
      'Más visitas orgánicas al sitio',
      'Leads por WhatsApp desde redes',
      'Catálogo digital ordenado por rubro',
    ],
  },
  {
    client: 'Estudio de arquitectura (Gran Concepción)',
    industry: 'Construcción',
    city: 'Talcahuano / Concepción',
    challenge: 'Portfolio online lento y sin posicionamiento para búsquedas de proyectos locales.',
    solution: 'Rediseño técnico del sitio, SEO on-page y video de casos de obra.',
    results: [
      'Sitio más rápido en móvil',
      'Consultas de proyectos residenciales',
      'Mayor tiempo de permanencia en portfolio',
    ],
  },
  {
    client: 'Restaurante (Chillán)',
    industry: 'Gastronomía',
    city: 'Chillán',
    challenge: 'Solo dependían de delivery y boca a boba, sin presencia en TikTok ni Google.',
    solution: 'Contenido corto para TikTok, gestión de redes y SEO local con menú indexable.',
    results: [
      'Crecimiento de seguidores con intención local',
      'Reservas y pedidos vía mensajes directos',
      'Aparición en búsquedas “restaurant Chillán”',
    ],
  },
]
