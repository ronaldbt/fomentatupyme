import { getServiceSchema } from '../schema'

export const CONCEPCION_SEO_PATH = '/posicionamiento-web-seo/concepcion'

export const concepcionSeoMeta = {
  title: 'Posicionamiento Web SEO en Concepción | Pymes Biobío | FomentaTuPyme',
  description:
    'Sube al top de Google con SEO profesional para tu pyme en Concepción. Más clientes orgánicos, sin pagar anuncios. Diagnóstico gratuito. ¡Cotiza hoy!',
  h1: 'Posicionamiento Web SEO en Concepción para Pymes',
  eyebrow: 'SEO local · Concepción',
  intro:
    'Si tienes una empresa en Concepción y tus clientes no te encuentran en Google, estás perdiendo ventas todos los días. En FomentaTuPyme aplicamos estrategias de posicionamiento web SEO diseñadas para pymes de Concepción y el Gran Biobío, con resultados orgánicos sostenibles y sin depender de publicidad pagada.',
}

export const concepcionSeoRubros = [
  'Clínicas, dentistas y centros de salud',
  'Empresas de construcción y arquitectura',
  'Ferreterías, distribuidoras y comercio',
  'Estudios jurídicos y contables',
  'Restaurantes y servicios de catering',
  'Tiendas con o sin ecommerce',
]

export const concepcionSeoServiceFeatures = [
  {
    title: 'Auditoría y diagnóstico inicial',
    description:
      'Revisamos tu sitio web completo: velocidad, errores técnicos, keywords actuales y posición en Google. Te entregamos un informe claro con prioridades.',
  },
  {
    title: 'Palabras clave para el mercado de Concepción',
    description:
      'Investigamos los términos exactos que usan tus clientes en Concepción y el Biobío para buscar lo que vendes. Trabajamos con keywords de alta intención de compra, no solo de alto volumen.',
  },
  {
    title: 'Optimización on-page y técnica',
    description:
      'Optimizamos títulos, textos, imágenes, velocidad de carga y estructura del sitio para que Google te entienda y te posicione correctamente.',
  },
  {
    title: 'SEO local en Concepción',
    description:
      'Optimizamos tu Google Business Profile para que aparezcas en Google Maps cuando alguien cerca busca tus servicios en Concepción, Talcahuano, Hualpén o San Pedro de la Paz.',
  },
  {
    title: 'Contenido SEO',
    description:
      'Creamos páginas y artículos optimizados que responden las preguntas reales de tus clientes y refuerzan tu autoridad en Google mes a mes.',
  },
]

export function getConcepcionSeoSchema() {
  return getServiceSchema({
    name: 'Posicionamiento Web SEO en Concepción',
    description: concepcionSeoMeta.description,
    path: CONCEPCION_SEO_PATH,
    serviceType: 'SEO y Posicionamiento Web',
  })
}
