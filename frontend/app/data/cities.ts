import type { CityPage, HubLink } from './types'

export const citiesHubLinks: HubLink[] = [
  {
    title: 'Los Ángeles',
    description: 'Marketing digital local con foco en conversión.',
    to: '/agencia-marketing/los-angeles-chile',
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
]

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug)
}
