import type { CityPage, HubLink } from './types'

export const citiesHubLinks: HubLink[] = [
  {
    title: 'Los Ángeles',
    description: 'Ciudad principal · marketing digital local con foco en conversión.',
    to: '/agencia-marketing/los-angeles-chile',
    badge: 'Principal',
  },
  {
    title: 'Concepción',
    description: 'Gran conurbación · SEO, redes y contenido para pymes urbanas.',
    to: '/agencia-marketing/concepcion',
  },
  {
    title: 'Talcahuano',
    description: 'Puerto y comercio · visibilidad para negocios locales.',
    to: '/agencia-marketing/talcahuano',
  },
  {
    title: 'Chillán',
    description: 'Retail y servicios · campañas para el Valle Central.',
    to: '/agencia-marketing/chillan',
  },
  {
    title: 'Coronel',
    description: 'Industria y barrios · estrategia digital de proximidad.',
    to: '/agencia-marketing/coronel',
  },
  {
    title: 'Región del Biobío',
    description: 'Hub regional · cobertura en comunas del gran sur.',
    to: '/agencia-marketing/region-biobio',
  },
]

const losAngelesSections = [
  {
    heading: 'Por qué tu pyme en Los Ángeles necesita marketing digital profesional',
    paragraphs: [
      'Los Ángeles es un mercado competitivo donde comercios, talleres, clínicas y servicios profesionales comparten la misma calle y las mismas búsquedas en Google. Si tu empresa no aparece cuando alguien escribe "agencia de marketing Los Ángeles Chile" o busca tu rubro con la ciudad, pierdes clientes que ya están listos para comprar.',
      'FomentaTuPyme trabaja con pymes de la zona que necesitan resultados medibles: más llamadas, más mensajes de WhatsApp y más visitas al local. No entregamos plantillas genéricas: cada plan combina SEO local, contenido para Instagram o TikTok y, cuando corresponde, publicidad con seguimiento de conversiones.',
    ],
  },
  {
    heading: 'SEO local para aparecer en Google y Google Maps',
    paragraphs: [
      'El posicionamiento web en Los Ángeles parte por optimizar tu ficha de Google Business Profile, reseñas auténticas y un sitio rápido en móvil. Muchos negocios locales aún dependen solo del boca a boca; quien invierte en SEO local captura demanda que tus competidores dejan pasar.',
      'Trabajamos keywords como marketing digital Los Ángeles Chile, publicidad online pymes Los Ángeles y búsquedas transaccionales de tu industria. Publicamos contenido útil — guías, casos y preguntas frecuentes — para que Google entienda que eres referente en la comuna y en la Región del Biobío.',
    ],
    list: [
      'Auditoría de sitio y ficha Google',
      'Contenido local con intención de compra',
      'Enlaces y menciones en directorios chilenos',
      'Informes mensuales de tráfico y posiciones',
    ],
  },
  {
    heading: 'Redes sociales que generan confianza y ventas',
    paragraphs: [
      'En Instagram y TikTok, los consumidores de Los Ángeles valoran lo cercano: rostros del equipo, procesos reales y ofertas claras. Producimos reels y carruseles que explican tu propuesta en segundos y terminan con un llamado a cotizar o escribir por WhatsApp.',
      'Si ya publicas pero sin estrategia, ordenamos calendario, mensajes y formatos. Si partes desde cero, definimos identidad visual mínima viable y un ritmo de publicación sostenible para tu presupuesto.',
    ],
  },
  {
    heading: 'Publicidad online con control de inversión',
    paragraphs: [
      'Meta Ads y Google Ads pueden acelerar resultados cuando el mensaje y la landing están bien armados. Configuramos campañas geolocalizadas en Los Ángeles y comunas vecinas, segmentamos por intereses relevantes y optimizamos según costo por lead.',
      'Nunca recomendamos subir presupuesto sin datos: primero medimos qué creativo y qué audiencia convierten, luego escalamos.',
    ],
  },
  {
    heading: 'Cómo trabajamos contigo paso a paso',
    paragraphs: [
      'Diagnóstico gratuito de tu presencia digital, propuesta con alcance y plazos claros, producción de contenido o SEO según prioridad, y reunión mensual de resultados. Máximo tres clics desde nuestra web hasta agendar una cotización — porque el tiempo de un empresario local también es negocio.',
    ],
  },
]

const concepcionSections = [
  {
    heading: 'Marketing digital en Concepción para pymes que quieren escalar',
    paragraphs: [
      'Concepción concentra miles de pymes en retail, gastronomía, salud, educación y servicios B2B. La competencia en buscadores y redes es alta; quien tiene estrategia coherente gana visibilidad sostenida sin quemar presupuesto en tácticas aisladas.',
      'Como agencia de marketing en Concepción, Chile, unimos SEO, contenido audiovisual y gestión de redes para que tu marca sea encontrada y elegida. Trabajamos con equipos reducidos que necesitan un partner claro, no una lista de tareas sueltas.',
    ],
  },
  {
    heading: 'Posicionamiento web y SEO en la Gran Concepción',
    paragraphs: [
      'Optimizamos tu sitio para búsquedas como "agencia de marketing Concepción", "marketing digital pymes Concepción" y términos de tu rubro con intención local. Mejoramos velocidad, estructura de URLs, textos de servicio y enlazado interno hacia páginas de ciudad y servicios.',
      'En Google Maps, trabajamos categorías correctas, horarios, fotos y respuesta a reseñas. El SEO local en Concepción suele ser el canal de mayor retorno para negocios con atención presencial o regional.',
    ],
  },
  {
    heading: 'Contenido para Instagram y TikTok con enfoque comercial',
    paragraphs: [
      'Producimos piezas pensadas para convertir: reels con gancho, testimonios de clientes de la zona y ofertas medibles. En TikTok, aprovechamos tendencias adaptadas al Biobío sin perder autenticidad.',
      'Cada pieza incluye CTA hacia WhatsApp, formulario o landing. Medimos guardados, comentarios y clics para duplicar lo que funciona.',
    ],
  },
  {
    heading: 'Estrategia integral y reporting',
    paragraphs: [
      'Definimos prioridades trimestrales: primero base SEO, luego contenido, luego ads si hay presupuesto. Entregamos dashboard simple con leads, alcance y recomendaciones. Así sabes cuánto cuesta tu crecimiento digital y qué viene después.',
    ],
  },
]

function cityBase(
  slug: string,
  cityName: string,
  keyword: string,
  sections: CityPage['sections'],
  extra?: Partial<CityPage>,
): CityPage {
  return {
    slug,
    title: cityName,
    keyword,
    metaTitle: `Agencia de Marketing en ${cityName} Chile | FomentaTuPyme`,
    metaDescription: `Agencia de marketing en ${cityName}, Chile: SEO local, Instagram, TikTok y estrategia digital para pymes. Más clientes y visibilidad. Cotiza hoy.`,
    h1: `Agencia de marketing en ${cityName}, Chile`,
    eyebrow: `Ciudad · ${cityName}`,
    intro: `Impulsamos pymes de ${cityName} con marketing digital orientado a ventas: posicionamiento en Google, contenido en redes y campañas medibles. Conocemos el mercado del Biobío y hablamos el idioma de los empresarios locales.`,
    sections,
    region: 'Región del Biobío',
    ...extra,
  }
}

export const cities: CityPage[] = [
  {
    ...cityBase('los-angeles-chile', 'Los Ángeles', 'agencia de marketing Los Ángeles Chile', losAngelesSections, {
      principal: true,
      metaTitle: 'Agencia de Marketing en Los Ángeles Chile | FomentaTuPyme',
      metaDescription:
        'Agencia de marketing Los Ángeles Chile: SEO local, Instagram, TikTok y publicidad para pymes. Más clientes en Los Ángeles y el Biobío. Cotiza tu estrategia.',
      h1: 'Agencia de marketing en Los Ángeles, Chile',
    }),
  },
  {
    ...cityBase('concepcion', 'Concepción', 'agencia de marketing Concepción Chile', concepcionSections),
  },
  cityBase('talcahuano', 'Talcahuano', 'marketing digital Talcahuano', [
    {
      heading: 'Pymes portuarias y comerciales en Talcahuano',
      paragraphs: [
        'Talcahuano combina actividad portuaria, comercio barrial y servicios a familias. Las búsquedas locales en Google crecen cada año; las empresas que aparecen primero en Maps y en resultados orgánicos capturan la mayor parte de la demanda.',
        'Diseñamos estrategias de SEO local para Talcahuano, contenido en redes que muestra tu equipo y campañas geolocalizadas cuando necesitas resultados rápidos. Adaptamos mensajes al ritmo de la comuna y a comunas vecinas como Hualpén o Concepción según tu zona de servicio.',
      ],
    },
    {
      heading: 'Servicios que más contratan en la zona',
      paragraphs: [
        'Gestión de Instagram para retail y gastronomía, fichas Google optimizadas para clínicas y talleres, y landings simples para captar leads por WhatsApp. Todo con reportes claros y sin jerga innecesaria.',
      ],
      list: ['SEO local Talcahuano', 'Reels y stories', 'Google Business Profile', 'Formularios de contacto'],
    },
    {
      heading: 'Resultados medibles',
      paragraphs: [
        'Medimos llamadas, formularios y visitas al sitio desde búsquedas locales. Ajustamos mensajes y presupuesto según temporada — por ejemplo, mayor demanda en verano para turismo y servicios en la costa.',
      ],
    },
  ]),
  cityBase('chillan', 'Chillán', 'agencia marketing Chillán', [
    {
      heading: 'Marketing digital para el Valle Central',
      paragraphs: [
        'Chillán y su área metropolitana tienen un tejido de pymes fuerte en alimentos, retail y servicios. Muchos negocios aún no explotan Google ni redes con método; hay espacio para crecer con contenido útil y SEO local bien ejecutado.',
        'Trabajamos con empresas que quieren llegar a Chillán y comunas cercanas sin depender solo de portales tradicionales. Combinamos posicionamiento web, Instagram y estrategia de ads cuando el margen lo permite.',
      ],
    },
    {
      heading: 'Contenido y autoridad de marca',
      paragraphs: [
        'Publicamos artículos y piezas sociales que responden preguntas reales de tus clientes: precios, plazos, garantías. Eso mejora SEO y reduce objeciones antes del contacto.',
      ],
    },
    {
      heading: 'Planes flexibles para pymes',
      paragraphs: [
        'Desde packs de contenido mensual hasta proyectos SEO de seis meses. Siempre con KPIs acordados al inicio: leads, tráfico o alcance según tu objetivo principal.',
      ],
    },
  ]),
  cityBase('coronel', 'Coronel', 'marketing digital Coronel', [
    {
      heading: 'Digitalización de pymes en Coronel',
      paragraphs: [
        'Coronel reúne barrios residenciales, industria y comercio de proximidad. Las pymes que invierten en presencia digital destacan frente a competidores que solo usan volantes o grupos de Facebook sin estrategia.',
        'Ofrecemos SEO local, producción de reels y gestión de redes con tono cercano — importante en comunas donde la confianza personal sigue siendo clave.',
      ],
    },
    {
      heading: 'Cobertura Biobío sur',
      paragraphs: [
        'Si atiendes clientes en Lota, San Pedro o el área de Coronel, geolocalizamos campañas y palabras clave para que no pagues por clics fuera de tu zona de servicio.',
      ],
    },
    {
      heading: 'Trabajo en equipo con tu negocio',
      paragraphs: [
        'Sesiones cortas de planificación, aprobación de guiones por WhatsApp y entrega de métricas en lenguaje simple. Queremos que entiendas qué compras y qué resultado obtienes.',
      ],
    },
  ]),
  {
    slug: 'region-biobio',
    title: 'Región del Biobío',
    keyword: 'marketing digital región del Biobío',
    metaTitle: 'Agencia de Marketing Región del Biobío | FomentaTuPyme',
    metaDescription:
      'Marketing digital para pymes de la Región del Biobío: Los Ángeles, Concepción, Talcahuano, Chillán, Coronel y más. SEO, redes y estrategia.',
    h1: 'Marketing digital para pymes del Biobío',
    eyebrow: 'Región · Biobío',
    intro:
      'Cubrimos la Región del Biobío con estrategia digital por ciudad y por rubro. Desde Los Ángeles hasta Coronel, ayudamos a pymes a ser encontradas en Google, generar confianza en redes y convertir interés en ventas.',
    region: 'Región del Biobío',
    sections: [
      {
        heading: 'Cobertura por comuna',
        paragraphs: [
          'Cada comuna tiene competencia y hábitos de búsqueda distintos. Por eso creamos páginas y campañas específicas — no una sola landing genérica para todo el sur.',
          'Puedes contratar foco en una ciudad o un plan regional si operas en varias comunas.',
        ],
        list: ['Los Ángeles', 'Concepción', 'Talcahuano', 'Chillán', 'Coronel'],
      },
      {
        heading: 'Servicios disponibles en toda la región',
        paragraphs: [
          'SEO local y nacional, contenido Instagram/TikTok, gestión de redes, estrategia digital y packs de producción audiovisual. Un solo equipo, un solo informe mensual.',
        ],
      },
      {
        heading: 'Por qué un hub regional ayuda a tu SEO',
        paragraphs: [
          'Enlazar desde esta página hacia cada ciudad refuerza la arquitectura del sitio y ayuda a Google a entender tu cobertura territorial — buena práctica para agencias con servicio presencial y remoto en el Biobío.',
        ],
      },
    ],
  },
]

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug)
}
