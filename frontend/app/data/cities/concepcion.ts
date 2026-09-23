import type { CityFaq, CityPage, ContentSection } from '../types'

/** Comunas propias del Gran Concepción (sin Talcahuano como mercado propio). */
export const CONCEPCION_COMUNAS = [
  'San Pedro de la Paz',
  'Chiguayante',
  'Hualpén',
  'Penco',
  'Tomé',
  'Coronel',
  'Hualqui',
] as const

export const concepcionFaqs: CityFaq[] = [
  {
    question: '¿Cuánto tiempo toma ver resultados de SEO local en Concepción?',
    answer:
      'Las primeras mejoras en Google Business Profile suelen notarse entre 4 y 8 semanas. El posicionamiento orgánico completo toma entre 3 y 6 meses, dependiendo de cuánta competencia tenga tu rubro en la conurbación.',
  },
  {
    question: '¿Trabajan con negocios de toda la conurbación o solo de la comuna de Concepción?',
    answer:
      'Trabajamos con pymes de Concepción y de comunas como San Pedro de la Paz, Chiguayante, Hualpén, Penco, Tomé, Coronel y Hualqui. Si tu negocio está en Talcahuano, tenemos un enfoque específico para el sector portuario en nuestra página dedicada a esa ciudad.',
  },
  {
    question: '¿Cómo adaptan el contenido a la población universitaria de Concepción?',
    answer:
      'Ajustamos formato, tono y frecuencia de publicación según el calendario académico, aprovechando que buena parte del comercio y la gastronomía local depende de esa población flotante.',
  },
  {
    question: '¿Qué incluye el dashboard trimestral?',
    answer:
      'Leads generados, alcance en redes, posiciones SEO y recomendaciones concretas para el trimestre siguiente, sin informes de más de una página.',
  },
  {
    question: '¿Cuál es la diferencia entre SEO local y publicidad paga?',
    answer:
      'El SEO local construye visibilidad orgánica sostenida en Google y Maps; la publicidad paga genera resultados inmediatos mientras el SEO madura. En nuestra metodología trimestral, primero afirmamos el SEO y solo después sumamos publicidad.',
  },
]

const concepcionSections: ContentSection[] = [
  {
    heading: 'Marketing digital en Concepción para pymes que quieren escalar',
    paragraphs: [
      'Concepción es el centro comercial, educacional y de servicios del Biobío: miles de pymes de retail, gastronomía, salud, educación y servicios B2B compiten por el mismo público en Talcahuano, San Pedro de la Paz, Chiguayante, Hualpén, Penco y Tomé. La competencia en buscadores y redes es alta; quien tiene una estrategia coherente gana visibilidad sostenida sin quemar presupuesto en tácticas aisladas.',
      'Como agencia de marketing digital en Concepción, unimos SEO, contenido audiovisual y gestión de redes para que tu marca sea encontrada y elegida —tanto por vecinos del centro como por la población flotante de estudiantes universitarios que mueve el comercio y la gastronomía local. Trabajamos con equipos reducidos que necesitan un partner claro, no una lista de tareas sueltas.',
    ],
  },
  {
    heading: 'Posicionamiento web y SEO en la Gran Concepción',
    paragraphs: [
      'Optimizamos tu sitio para búsquedas como marketing digital Concepción Chile, tu rubro + Concepción y términos de intención local. Mejoramos velocidad, estructura de URLs, textos de servicio y enlazado interno hacia páginas de ciudad y servicios.',
      'En Google Maps, trabajamos categorías correctas, horarios, fotos y respuesta a reseñas — clave en una conurbación donde un cliente de Chiguayante o San Pedro de la Paz decide antes de salir de su comuna a cuál negocio del centro visitar. El SEO local en Concepción suele ser el canal de mayor retorno para negocios con atención presencial o regional, especialmente cuando compites con decenas de negocios similares a pocas cuadras.',
    ],
  },
  {
    heading: 'Contenido para Instagram y TikTok con enfoque comercial',
    paragraphs: [
      'Producimos piezas pensadas para convertir: reels con gancho, testimonios de clientes de la zona y ofertas medibles. En una ciudad con alta población universitaria, TikTok y Reels funcionan distinto que en otras zonas del Biobío: aprovechamos tendencias reales sin perder autenticidad ni sonar forzado.',
      'Cada pieza incluye un llamado a la acción hacia WhatsApp, formulario o landing. Medimos guardados, comentarios y clics para duplicar lo que funciona en tu rubro específico.',
    ],
  },
  {
    heading: 'Rubros y sectores que atendemos en el Gran Concepción',
    paragraphs: [
      'Cada rubro compite distinto en una conurbación de más de un millón de habitantes. Por eso no aplicamos la misma estrategia a todos los clientes:',
    ],
    items: [
      {
        title: 'Retail y comercio metropolitano',
        text: 'SEO local + campañas geolocalizadas por comuna para captar tráfico de centros comerciales y calles comerciales tradicionales.',
      },
      {
        title: 'Gastronomía y vida universitaria',
        text: 'Contenido de alta frecuencia en Instagram y TikTok dirigido a estudiantes de Udec, UBB y UCSC, con ofertas y promociones de temporada académica.',
      },
      {
        title: 'Clínicas y salud privada',
        text: 'Ficha de Google optimizada para reservas, gestión de reseñas y campañas de confianza para pacientes de toda la conurbación.',
      },
      {
        title: 'Educación (institutos, academias, cursos)',
        text: 'Posicionamiento por especialidad y contenido que responde preguntas frecuentes de estudiantes y apoderados.',
      },
      {
        title: 'Servicios profesionales y B2B (legal, contable, consultoría)',
        text: 'SEO especializado y presencia en LinkedIn/Google para captar empresas de la región.',
      },
    ],
  },
  {
    heading: 'Cobertura: Concepción y el Gran Concepción',
    paragraphs: [
      'Trabajamos con pymes de Concepción y de las comunas que forman la conurbación: San Pedro de la Paz, Chiguayante, Hualpén, Penco, Tomé, Coronel y Hualqui. Conocer cómo se mueve un cliente entre estas comunas —dónde vive, dónde estudia, dónde compra— es parte de cómo diseñamos tus campañas de SEO y redes sociales.',
    ],
    list: [...CONCEPCION_COMUNAS],
    relatedLink: {
      before: 'Si tu negocio está en Talcahuano, también trabajamos contigo — conoce nuestro enfoque específico para el sector portuario e industrial en nuestra',
      label: 'página de Talcahuano',
      to: '/agencia-marketing/talcahuano',
      after: '.',
    },
  },
  {
    heading: 'Estrategia integral y reporting',
    paragraphs: [
      'Así ordenamos el trabajo trimestre a trimestre:',
    ],
    orderedList: [
      'Primero, base SEO — ficha de Google, sitio web y estructura de contenido.',
      'Luego, contenido en redes — calendario, formatos y mensajes consistentes.',
      'Después, publicidad paga — solo cuando hay presupuesto y datos suficientes para invertir con criterio.',
    ],
    afterList: [
      'Entregamos un dashboard simple con leads generados, alcance y recomendaciones concretas para el trimestre siguiente. Así sabes exactamente cuánto cuesta tu crecimiento digital y qué decisión viene después — sin sorpresas ni reportes que nadie entiende.',
    ],
  },
  {
    heading: '¿Cuánto cuesta una agencia de marketing digital en Concepción?',
    paragraphs: [
      'El precio depende de la combinación de servicios que necesita tu pyme: SEO local, gestión de redes sociales, publicidad paga, o una mezcla de los tres, además del nivel de competencia de tu rubro en la conurbación. No usamos paquetes cerrados de plantilla — el plan se arma según tu negocio, tu presupuesto y qué tan rápido necesitas resultados.',
      'Lo que sí puedes esperar siempre: una propuesta con alcance y plazos claros, un dashboard trimestral con resultados reales, y sin obligarte a contratar servicios que no necesitas. Cuéntanos tu rubro y comuna y te enviamos un presupuesto real.',
    ],
  },
]

export const concepcionCityPage: CityPage = {
  slug: 'concepcion',
  title: 'Concepción',
  keyword: 'agencia de marketing digital Concepción Chile',
  region: 'Gran Concepción · Región del Biobío',
  metaTitle: 'Agencia de Marketing Digital en Concepción, Gran Concepción | FomentaTuPyme',
  metaDescription:
    'Agencia de marketing digital en Concepción: SEO local, redes sociales y campañas para pymes de San Pedro de la Paz, Chiguayante, Hualpén y todo el Gran Concepción. Cotiza gratis.',
  h1: 'Agencia de Marketing Digital en Concepción, Chile',
  eyebrow: 'Ciudad · Concepción · Gran Concepción',
  intro:
    'Ayudamos a pymes del Gran Concepción —desde retail y gastronomía del centro hasta clínicas, servicios profesionales y negocios que le venden a la población universitaria— a vender más con posicionamiento en Google, redes sociales activas y campañas medibles. Conocemos la dinámica de una conurbación de más de un millón de habitantes: no es lo mismo captar clientes en San Pedro de la Paz que en el centro histórico.',
  sections: concepcionSections,
  faqs: concepcionFaqs,
  whyUs: {
    heading: 'Por qué elegir a FomentaTuPyme en Concepción',
    items: [
      'Entendemos la dinámica de una conurbación: no tratamos a Concepción como una sola comuna, sino como un ecosistema de más de un millón de habitantes con hábitos de consumo distintos por zona.',
      'Reporting trimestral con dashboard simple, no informes de 40 páginas que nadie lee.',
      'No trabajamos con plantillas genéricas: cada estrategia se arma según tu rubro y tu comuna.',
      'Diagnóstico inicial sin costo y propuesta con plazos claros.',
    ],
    linkLabel: 'Conoce más sobre nuestro equipo y trayectoria',
    linkTo: '/por-que-elegirnos',
  },
  cta: {
    heading: 'Cotiza tu estrategia de marketing digital hoy',
    text: 'Cuéntanos tu rubro y tu comuna —sea en Concepción o en cualquier punto del Gran Concepción— y te respondemos con un plan claro y presupuesto sin letra chica, en menos de 24 horas hábiles.',
    buttonLabel: 'Cotizar mi estrategia en Concepción',
  },
}
