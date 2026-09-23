import type { CityPage, HubLink } from './types'
import { concepcionCityPage } from './cities/concepcion'
import { losAngelesCityPage } from './cities/los-angeles-chile'

export { concepcionFaqs, CONCEPCION_COMUNAS } from './cities/concepcion'
export { losAngelesFaqs, LOS_ANGELES_COMUNAS } from './cities/los-angeles-chile'

export const citiesHubLinks: HubLink[] = [
  {
    title: 'Los Ángeles',
    description: 'Provincia de Biobío · agroindustria, comercio y SEO local.',
    to: '/agencia-marketing/los-angeles-chile',
  },
  {
    title: 'Concepción',
    description: 'Gran conurbación · universidad, retail y servicios.',
    to: '/agencia-marketing/concepcion',
  },
  {
    title: 'Talcahuano',
    description: 'Puerto y comercio · visibilidad para negocios locales.',
    to: '/agencia-marketing/talcahuano',
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
  losAngelesCityPage,
  concepcionCityPage,
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
