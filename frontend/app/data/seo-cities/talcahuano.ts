import { getServiceSchema } from '../schema'

export const TALCAHUANO_SEO_PATH = '/posicionamiento-web-seo/talcahuano'

export const talcahuanoSeoMeta = {
  title: 'Posicionamiento Web SEO en Talcahuano | Pymes Biobío',
  description:
    'Posicionamiento Web SEO en Talcahuano. ¿Tu empresa no aparece en Google? Hacemos SEO para negocios industriales, comerciales y de servicios del puerto. Diagnóstico gratuito.',
  h1: 'Posicionamiento Web SEO en Talcahuano',
  eyebrow: 'SEO local · Talcahuano',
  intro:
    'Talcahuano tiene una de las economías más activas del Biobío — puerto, industria naval, zona franca, comercio — pero la mayoría de sus empresas aún no existe en Google. Si alguien en Talcahuano busca hoy lo que tú vendes, ¿apareces tú o aparece tu competencia? En FomentaTuPyme te posicionamos en Google para que los clientes lleguen a ti antes de llegar a ellos.',
}

export const talcahuanoSeoRubros = [
  'Servicios industriales y logística portuaria',
  'Mantención, maestranza y metalurgia',
  'Comercio y distribución de insumos',
  'Servicios de salud y clínicas',
  'Talleres mecánicos y automotriz',
  'Gastronomía y servicios locales',
]

export const talcahuanoSeoServiceFeatures = [
  {
    title: 'Keyword research local',
    description:
      'Buscamos los términos exactos que usan los clientes de Talcahuano, Hualpén y el sector portuario. No usamos listas genéricas — investigamos la demanda real de tu mercado.',
  },
  {
    title: 'Google Maps y búsquedas locales',
    description:
      'Optimizamos tu ficha de Google Business para que aparezcas en el mapa cuando alguien busca tu servicio "cerca de mí" o con el nombre de la ciudad.',
  },
  {
    title: 'Optimización técnica y de contenido',
    description:
      'Corregimos los problemas técnicos de tu sitio y creamos contenido orientado a capturar las búsquedas con intención de compra de tu rubro.',
  },
  {
    title: 'Resultados medibles',
    description:
      'Cada mes recibes un informe con tus posiciones reales en Google, el tráfico orgánico y los avances. Sin tecnicismos.',
  },
]

export const talcahuanoSeoInterlinks = [
  { label: 'posicionamiento web SEO', to: '/posicionamiento-web-seo' },
  { label: 'agencia de marketing en Talcahuano', to: '/agencia-marketing/talcahuano' },
  { label: 'SEO en Concepción', to: '/posicionamiento-web-seo/concepcion' },
  { label: 'cotiza aquí', to: '/contacto' },
]

export function getTalcahuanoSeoSchema() {
  return getServiceSchema({
    name: 'SEO para Empresas en Talcahuano',
    description: talcahuanoSeoMeta.description,
    path: TALCAHUANO_SEO_PATH,
    serviceType: 'SEO y Posicionamiento Web',
  })
}
