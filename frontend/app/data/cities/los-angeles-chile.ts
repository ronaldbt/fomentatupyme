import type { CityFaq, CityPage, ContentSection } from '../types'

export const LOS_ANGELES_COMUNAS = [
  'Nacimiento',
  'Mulchén',
  'Santa Bárbara',
  'Quilaco',
  'Quilleco',
  'Antuco',
  'Tucapel',
  'Negrete',
  'Laja',
  'San Rosendo',
  'Cabrero',
] as const

export const losAngelesFaqs: CityFaq[] = [
  {
    question: '¿Cuánto tiempo toma ver resultados de SEO local en Los Ángeles?',
    answer:
      'Los primeros movimientos en Google Business Profile suelen notarse entre 4 y 8 semanas. El posicionamiento orgánico completo toma entre 3 y 6 meses, dependiendo de la competencia de tu rubro.',
  },
  {
    question: '¿Trabajan solo con negocios de la ciudad de Los Ángeles o también de la provincia?',
    answer:
      'Trabajamos con pymes de Los Ángeles y de comunas como Nacimiento, Mulchén, Laja y Santa Bárbara, especialmente negocios que dependen de clientes que viajan hacia la ciudad.',
  },
  {
    question: '¿Cuál es la diferencia entre SEO local y publicidad paga?',
    answer:
      'El SEO local construye visibilidad orgánica sostenida en Google y Maps; la publicidad paga (Meta Ads y Google Ads) genera resultados inmediatos mientras el SEO madura. Recomendamos combinarlos según la urgencia de tu negocio.',
  },
  {
    question: '¿Tienen exclusividad de rubro o zona?',
    answer:
      'Evaluamos cada caso para evitar trabajar con dos competidores directos en la misma comuna y rubro al mismo tiempo.',
  },
  {
    question: '¿Qué pasa si ya tengo redes sociales activas pero sin resultados?',
    answer:
      'Auditamos lo que ya existe, ordenamos calendario y mensajes, y ajustamos el formato antes de proponer contenido nuevo desde cero.',
  },
]

const losAngelesSections: ContentSection[] = [
  {
    heading: 'Por qué tu pyme en Los Ángeles necesita marketing digital profesional',
    paragraphs: [
      'Los Ángeles concentra el comercio, los servicios y la industria agro-forestal de toda la provincia de Biobío. Eso significa dos cosas: que tu competencia directa está a dos cuadras, y que tus clientes potenciales no solo están en la ciudad, sino también en Nacimiento, Mulchén, Laja, Santa Bárbara y Cabrero buscando proveedores en Google antes de viajar.',
      'Si tu ficha de Google no aparece cuando alguien busca tu rubro + "Los Ángeles", o si tus redes sociales no muestran actividad reciente, estás perdiendo clientes que ya decidieron comprar y solo están eligiendo dónde. FomentaTuPyme trabaja con pymes lasanguinas que necesitan resultados concretos: más llamadas, más consultas por WhatsApp y más clientes de comunas vecinas que llegan a comprar a la ciudad.',
    ],
  },
  {
    heading: 'Servicios de marketing digital para empresas de Los Ángeles',
    paragraphs: [
      'Combinamos SEO local, redes sociales, publicidad online y producción audiovisual con diseño gráfico —según lo que tu pyme necesite primero— para generar demanda medible en la ciudad y en la provincia.',
    ],
  },
  {
    heading: 'SEO local y posicionamiento en Google Maps',
    level: 3,
    paragraphs: [
      'El posicionamiento web en Los Ángeles empieza por tu ficha de Google Business Profile: categoría correcta, horarios reales, reseñas auténticas y fotos actualizadas. Es el primer lugar donde un cliente de Mulchén o Nacimiento te compara con otro negocio antes de viajar a la ciudad — y donde más pymes locales pierden oportunidades por tener la ficha desactualizada o duplicada.',
      'Trabajamos keywords como marketing digital Los Ángeles Chile, tu rubro + Los Ángeles y búsquedas transaccionales específicas de tu industria (agro, salud, comercio, servicios técnicos). Publicamos contenido útil —guías, casos reales y respuestas a preguntas frecuentes— para que Google entienda que eres el referente de tu rubro en la ciudad y en toda la provincia de Biobío, no solo en tu comuna.',
    ],
    list: [
      'Auditoría de sitio web y ficha de Google Business Profile',
      'Optimización para búsquedas cerca de mí y por comuna',
      'Contenido local con intención de compra (no genérico)',
      'Enlaces y menciones en directorios chilenos y del Biobío',
      'Informes mensuales de tráfico, posiciones y llamadas generadas',
    ],
  },
  {
    heading: 'Redes sociales que generan confianza y ventas',
    level: 3,
    paragraphs: [
      'En Instagram y TikTok, el público de Los Ángeles —desde comerciantes del centro hasta productores agrícolas de la provincia— responde mejor a contenido cercano: rostros reales del equipo, procesos de trabajo y ofertas claras, sin producciones sobreactuadas. Creamos reels y carruseles que explican tu servicio en segundos y siempre cierran con un llamado a cotizar o escribir por WhatsApp.',
      'Si ya publicas pero sin estrategia, ordenamos calendario, mensajes y formatos de publicación. Si partes desde cero, definimos una identidad visual mínima viable y un ritmo de publicación sostenible para el presupuesto real de una pyme de provincia — no el de una marca nacional.',
    ],
  },
  {
    heading: 'Publicidad online con control de inversión',
    level: 3,
    paragraphs: [
      'Meta Ads y Google Ads aceleran resultados cuando el mensaje y la landing están bien armados. Configuramos campañas geolocalizadas que cubren Los Ángeles y las comunas de la provincia —Nacimiento, Mulchén, Laja, Santa Bárbara, Cabrero— segmentando por intereses relevantes y optimizando según costo por lead real, no por clics vacíos.',
      'Nunca recomendamos subir presupuesto sin datos: primero medimos qué creativo y qué audiencia convierten mejor en cada comuna, luego escalamos lo que funciona.',
    ],
  },
  {
    heading: 'Rubros y sectores que atendemos en Los Ángeles',
    paragraphs: [
      'Cada rubro busca distinto en Google y se mueve distinto en redes. Por eso no aplicamos la misma estrategia a todos los clientes:',
    ],
    items: [
      {
        title: 'Comercio y retail del centro',
        text: 'SEO local + contenido de temporada para captar tráfico peatonal y búsquedas cerca de mí.',
      },
      {
        title: 'Agroindustria, maquinaria y proveedores agrícolas',
        text: 'Contenido técnico, presencia en directorios especializados y campañas dirigidas a productores de Nacimiento, Mulchén y Santa Bárbara.',
      },
      {
        title: 'Clínicas, salud y bienestar',
        text: 'Ficha de Google optimizada para reservas, reseñas gestionadas y campañas de confianza.',
      },
      {
        title: 'Servicios profesionales (legal, contable, técnico)',
        text: 'Posicionamiento por especialidad + contenido que responde preguntas frecuentes de clientes indecisos.',
      },
      {
        title: 'Talleres y servicios técnicos',
        text: 'SEO transaccional (reparación de…, servicio técnico de… en Los Ángeles) y publicidad de respuesta rápida.',
      },
    ],
  },
  {
    heading: 'Cobertura: Los Ángeles y la provincia de Biobío',
    paragraphs: [
      'Trabajamos con pymes de Los Ángeles y también con negocios de las comunas de la provincia que dependen de clientes de la ciudad o viajan hacia ella: Nacimiento, Mulchén, Santa Bárbara, Quilaco, Quilleco, Antuco, Tucapel, Negrete, Laja, San Rosendo y Cabrero. Conocer esta dinámica —dónde vive tu cliente y hacia dónde se mueve— es parte de cómo diseñamos tus campañas de SEO y publicidad.',
    ],
    list: [...LOS_ANGELES_COMUNAS],
  },
  {
    heading: '¿Cuánto cuesta una agencia de marketing digital en Los Ángeles?',
    paragraphs: [
      'El precio depende de qué combinación de servicios necesita tu pyme: SEO local, gestión de redes sociales, publicidad paga, producción audiovisual o una mezcla de ellos. No usamos paquetes cerrados de plantilla — el plan se arma según tu rubro, tu presupuesto y qué tan urgente necesitas resultados.',
      'Lo que sí puedes esperar siempre: una propuesta con alcance y plazos claros, sin letra chica, y sin obligarte a contratar servicios que no necesitas. Cuéntanos tu rubro y tu ciudad y te enviamos un presupuesto real, no una tarifa genérica.',
    ],
  },
  {
    heading: 'Cómo trabajamos contigo paso a paso',
    paragraphs: [
      'Así trabajamos con una pyme de Los Ángeles o de cualquier comuna de la provincia:',
    ],
    orderedList: [
      'Diagnóstico gratuito de tu presencia digital actual (ficha de Google, redes, sitio web).',
      'Propuesta con alcance y plazos claros — sin letra chica ni servicios que no necesitas.',
      'Ejecución de SEO, contenido o publicidad según lo que dé resultados más rápido para tu rubro.',
      'Reunión mensual de resultados, con datos reales de tráfico, posiciones y contactos.',
    ],
    afterList: [
      'Máximo tres clics desde nuestra web hasta agendar una cotización, porque el tiempo de un empresario de provincia también es negocio.',
    ],
  },
]

export const losAngelesCityPage: CityPage = {
  slug: 'los-angeles-chile',
  title: 'Los Ángeles',
  keyword: 'agencia de marketing digital Los Ángeles Chile',
  principal: true,
  region: 'Provincia de Biobío',
  metaTitle: 'Agencia de Marketing Digital en Los Ángeles, Biobío | FomentaTuPyme',
  metaDescription:
    'Agencia de marketing digital en Los Ángeles: SEO local, redes sociales y publicidad para pymes de Nacimiento, Mulchén, Laja y toda la provincia de Biobío. Cotiza gratis.',
  h1: 'Agencia de Marketing Digital en Los Ángeles, Chile',
  eyebrow: 'Ciudad · Los Ángeles · Provincia de Biobío',
  intro:
    'Ayudamos a pymes de Los Ángeles y de la provincia de Biobío —desde comercios del centro hasta negocios agro-industriales de Nacimiento, Mulchén y Laja— a vender más con posicionamiento en Google, redes sociales activas y campañas de publicidad que sí se pueden medir. No trabajamos con plantillas: conocemos la diferencia entre vender en la ciudad y vender en la provincia.',
  sections: losAngelesSections,
  faqs: losAngelesFaqs,
  whyUs: {
    heading: 'Por qué elegir a FomentaTuPyme en Los Ángeles',
    items: [
      'Conocemos la diferencia entre vender en el centro de la ciudad y venderle a un cliente de Mulchén o Nacimiento.',
      'No trabajamos con plantillas genéricas: cada estrategia se arma según tu rubro.',
      'Reportamos resultados reales cada mes: tráfico, posiciones y contactos generados.',
      'Diagnóstico inicial sin costo y propuesta con plazos claros.',
    ],
    linkLabel: 'Conoce más sobre nuestro equipo y trayectoria',
    linkTo: '/por-que-elegirnos',
  },
  cta: {
    heading: 'Cotiza tu estrategia de marketing digital hoy',
    text: 'Cuéntanos tu rubro y tu comuna —sea en Los Ángeles o en cualquier punto de la provincia de Biobío— y te respondemos con un plan claro y presupuesto sin letra chica, en menos de 24 horas hábiles.',
    buttonLabel: 'Cotizar mi estrategia en Los Ángeles',
  },
}
