import { getFaqSchema, getServiceSchema } from './schema'

export const SEO_PAGE_PATH = '/posicionamiento-web-seo'

export { getSeoCityHubLinks as seoCityLinks } from './seo-cities'

export const seoPageMeta = {
  title: 'Posicionamiento Web SEO para Pymes | Los Ángeles y Concepción Chile | FomentaTuPyme',
  description:
    'Sube al top de Google con SEO profesional para pymes en Los Ángeles, Concepción y toda la Región del Biobío. Más clientes, sin pagar anuncios. Cotiza gratis.',
  h1: 'Posicionamiento Web SEO para Pymes en Chile',
  intro:
    '¿Tu empresa no aparece en Google cuando tus clientes te buscan? Eso significa que estás perdiendo ventas todos los días sin saberlo. En FomentaTuPyme somos especialistas en posicionamiento web SEO para pymes en Los Ángeles, Concepción y toda la Región del Biobío. Te llevamos a la primera página de Google de forma orgánica, sin pagar anuncios por cada clic.',
}

export const seoServiceFeatures = [
  {
    title: 'Auditoría SEO inicial',
    description:
      'Analizamos el estado actual de tu sitio web: velocidad de carga, estructura de URLs, errores técnicos, palabras clave y posición actual en Google. Te entregamos un diagnóstico claro con prioridades.',
  },
  {
    title: 'Investigación de palabras clave',
    description:
      'Identificamos los términos exactos que tus clientes usan para buscar en Google en tu ciudad y rubro. Trabajamos con keywords de alta intención de compra, no solo de alto volumen.',
  },
  {
    title: 'Optimización on-page',
    description:
      'Optimizamos títulos, meta descripciones, encabezados, imágenes y estructura de cada página de tu sitio para que Google las entienda y las posicione correctamente.',
  },
  {
    title: 'SEO técnico',
    description:
      'Mejoramos la velocidad de carga, la indexación, la versión móvil y la arquitectura interna del sitio. Google premia los sitios rápidos, seguros y bien estructurados.',
  },
  {
    title: 'Creación de contenido SEO',
    description:
      'Redactamos textos, artículos de blog y páginas de servicio optimizadas con las palabras clave de tu industria. Contenido que responde lo que tu cliente ideal busca.',
  },
  {
    title: 'SEO local para tu ciudad',
    description:
      'Optimizamos tu presencia en Google Maps, Google Business Profile y búsquedas locales para que aparezcas cuando alguien en tu ciudad busca lo que ofreces.',
  },
  {
    title: 'Reporte mensual',
    description:
      'Cada mes recibes un informe con tus posiciones en Google, el tráfico orgánico y los avances del trabajo. Sin tecnicismos, en lenguaje simple.',
  },
]

export const seoFaqs = [
  {
    question: '¿Cuánto tiempo tarda en verse resultados con SEO?',
    answer:
      'Los primeros resultados visibles generalmente se ven entre los 2 y 4 meses, dependiendo de la competencia de tu rubro y el estado inicial de tu sitio. En ciudades como Los Ángeles o Talcahuano, donde la competencia es baja, los tiempos pueden ser menores.',
  },
  {
    question: '¿El SEO reemplaza la publicidad en Google Ads?',
    answer:
      'No necesariamente. El SEO construye visibilidad a largo plazo y sin costo por clic. Google Ads entrega resultados inmediatos pero dejan de llegar cuando paras de pagar. Lo ideal es combinar ambos en una etapa inicial.',
  },
  {
    question: '¿Necesito tener una página web para contratar SEO?',
    answer:
      'Sí, el SEO se aplica sobre tu sitio web. Si aún no tienes uno, podemos ayudarte a crear un sitio optimizado desde cero.',
  },
  {
    question: '¿Trabajan con cualquier tipo de pyme?',
    answer:
      'Trabajamos con todo tipo de negocios: tiendas, clínicas, restaurantes, ferreterías, constructoras, servicios profesionales, entre otros. Si tienes clientes en Chile y quieres que te encuentren en Google, podemos ayudarte.',
  },
]

export function getSeoPageSchema() {
  return getServiceSchema({
    name: 'Posicionamiento Web SEO para Pymes',
    description:
      'Servicio de posicionamiento web SEO para pymes en Los Ángeles, Concepción, Talcahuano y toda la Región del Biobío, Chile. Incluye auditoría SEO, optimización on-page, SEO técnico, contenido y SEO local.',
    path: SEO_PAGE_PATH,
    serviceType: 'SEO y Posicionamiento Web',
  })
}

export function getSeoFaqSchema() {
  return getFaqSchema(seoFaqs)
}
