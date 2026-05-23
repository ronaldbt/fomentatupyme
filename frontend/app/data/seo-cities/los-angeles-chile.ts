import { getServiceSchema } from '../schema'

export const LOS_ANGELES_SEO_PATH = '/posicionamiento-web-seo/los-angeles-chile'

export const losAngelesSeoMeta = {
  title: 'Posicionamiento Web SEO en Los Ángeles Chile | Pymes Biobío',
  description:
    'Posicionamiento Web SEO en Los Ángeles, Chile. Posicionamos pymes locales en Google con estrategias pensadas para el mercado de la Provincia de Biobío. Diagnóstico gratuito.',
  h1: 'Posicionamiento Web SEO en Los Ángeles, Chile',
  eyebrow: 'SEO local · Los Ángeles Chile',
  intro:
    'Los Ángeles es nuestra ciudad. Conocemos su comercio, sus barrios, sus rubros y cómo buscan los clientes locales en Google. Por eso ofrecemos algo que ninguna agencia de Santiago puede darte: una estrategia SEO pensada desde adentro, con conocimiento real del mercado de la Provincia de Biobío.',
}

export const losAngelesSeoRubros = [
  'Servicios de salud: clínicas, dentistas, psicólogos, fonoaudiólogos',
  'Comercio local: ferreterías, tiendas de ropa, abarrotes, materiales',
  'Construcción y arquitectura: contratistas, proyectistas, instaladores',
  'Servicios profesionales: abogados, contadores, asesores',
  'Gastronomía: restaurantes, cafeterías, delivery',
  'Agro y forestal: proveedores, maquinaria, servicios asociados',
]

export const losAngelesSeoServiceFeatures = [
  {
    title: 'Diagnóstico gratuito',
    description:
      'Analizamos tu sitio, tus keywords actuales y tu posición real en Google hoy. Sin costo.',
  },
  {
    title: 'Optimización para búsquedas locales',
    description:
      'Configuramos y optimizamos tu Google Business Profile para el mapa de Los Ángeles y las comunas cercanas como Mulchén, Nacimiento y Santa Bárbara.',
  },
  {
    title: 'Contenido que refleja tu ciudad',
    description:
      'Creamos textos que mencionan referencias locales reales — no textos genéricos copiados de plantillas. Google premia el contenido con contexto geográfico auténtico.',
  },
  {
    title: 'Seguimiento mensual',
    description:
      'Ves tus posiciones en Google crecer mes a mes con informes claros y sin tecnicismos.',
  },
]

export const losAngelesSeoInterlinks = [
  { label: 'posicionamiento web SEO', to: '/posicionamiento-web-seo' },
  { label: 'agencia de marketing en Los Ángeles', to: '/agencia-marketing/los-angeles-chile' },
  { label: 'SEO en Concepción', to: '/posicionamiento-web-seo/concepcion' },
  { label: 'SEO en Talcahuano', to: '/posicionamiento-web-seo/talcahuano' },
  { label: 'cotiza aquí', to: '/contacto' },
]

export function getLosAngelesSeoSchema() {
  return getServiceSchema({
    name: 'Posicionamiento Web SEO en Los Ángeles, Chile',
    description: losAngelesSeoMeta.description,
    path: LOS_ANGELES_SEO_PATH,
    serviceType: 'SEO y Posicionamiento Web',
  })
}
