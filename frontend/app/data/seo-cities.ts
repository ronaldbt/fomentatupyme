import type { ContentSection, SeoCityPage } from './types'

export const SEO_HUB_PATH = '/posicionamiento-web-seo'

/** Slug SEO → slug agencia-marketing */
export const SEO_TO_AGENCIA_SLUG: Record<string, string> = {
  'los-angeles': 'los-angeles-chile',
  concepcion: 'concepcion',
  talcahuano: 'talcahuano',
  chillan: 'chillan',
  coronel: 'coronel',
}

export function seoCityPath(slug: string) {
  return `${SEO_HUB_PATH}/${slug}`
}

export function getAgenciaSlugForSeo(slug: string) {
  return SEO_TO_AGENCIA_SLUG[slug]
}

export function getSeoSlugForAgencia(agenciaSlug: string) {
  return Object.entries(SEO_TO_AGENCIA_SLUG).find(([, a]) => a === agenciaSlug)?.[0]
}

function seoCityBase(
  slug: string,
  cityName: string,
  agenciaSlug: string,
  keyword: string,
  sections: ContentSection[],
): SeoCityPage {
  return {
    slug,
    agenciaSlug,
    cityName,
    keyword,
    metaTitle: `Posicionamiento Web SEO en ${cityName} | Pymes | FomentaTuPyme`,
    metaDescription: `Posicionamiento web SEO para pymes en ${cityName}. Aparece en Google y Maps sin pagar anuncios. Auditoría gratis y estrategia local. Cotiza hoy.`,
    h1: `Posicionamiento web SEO para pymes en ${cityName}`,
    eyebrow: `SEO local · ${cityName}`,
    intro: `¿Tu pyme en ${cityName} no aparece cuando te buscan en Google? Trabajamos SEO local, Google Maps y contenido optimizado para que capturas clientes con intención de compra — sin depender solo de publicidad pagada.`,
    sections,
  }
}

export const seoCities: SeoCityPage[] = [
  seoCityBase('los-angeles', 'Los Ángeles', 'los-angeles-chile', 'posicionamiento SEO Los Ángeles', [
    {
      heading: 'Por qué el SEO local importa en Los Ángeles',
      paragraphs: [
        'Los Ángeles concentra comercios, talleres, clínicas y servicios que compiten por las mismas búsquedas en Google. Si alguien escribe "posicionamiento web Los Ángeles" o busca tu rubro con la ciudad, quien aparece primero recibe la llamada.',
        'El SEO local no es solo tener página web: es optimizar Google Business Profile, reseñas, velocidad móvil y contenido con keywords de la comuna. Muchas pymes del Biobío aún no lo hacen bien — hay oportunidad real para destacar.',
      ],
    },
    {
      heading: 'Qué incluye nuestro plan SEO en Los Ángeles',
      paragraphs: [
        'Auditoría técnica de tu sitio, investigación de palabras clave locales, optimización on-page y trabajo en tu ficha de Google Maps. Publicamos contenido que responde dudas reales de clientes en Los Ángeles y comunas cercanas.',
      ],
      list: [
        'Keywords: marketing digital Los Ángeles, SEO local Biobío',
        'Optimización Google Business Profile',
        'Contenido de blog y páginas de servicio',
        'Informe mensual de posiciones y tráfico',
      ],
    },
    {
      heading: 'Tiempos y resultados esperados',
      paragraphs: [
        'En mercados como Los Ángeles, donde la competencia digital es moderada, los primeros movimientos en posiciones suelen verse entre 2 y 4 meses. Medimos llamadas, formularios y visitas desde búsquedas orgánicas — no solo rankings abstractos.',
        'Si necesitas una agencia integral en la zona — redes, ads y estrategia — también puedes conocer nuestro enfoque de marketing completo para Los Ángeles.',
      ],
    },
  ]),
  seoCityBase('talcahuano', 'Talcahuano', 'talcahuano', 'posicionamiento SEO Talcahuano', [
    {
      heading: 'Oportunidad SEO en Talcahuano',
      paragraphs: [
        'Talcahuano combina comercio portuario, barrios residenciales y servicios locales. Las búsquedas en Google crecen cada año; muchas pymes aún no tienen ficha optimizada ni sitio rápido en móvil.',
        'Posicionarse para "SEO Talcahuano" o keywords de tu industria + ciudad puede generar leads constantes con inversión predecible mes a mes.',
      ],
    },
    {
      heading: 'Servicios SEO adaptados al puerto y comercio local',
      paragraphs: [
        'Optimizamos tu presencia para clientes en Talcahuano, Hualpén y zona conurbada con Concepción si corresponde a tu cobertura. Trabajamos fichas Google, landings de captura y artículos que resuelven dudas de compra.',
      ],
      list: [
        'Auditoría SEO inicial gratuita',
        'Palabras clave geolocalizadas',
        'Optimización móvil',
        'Reportes claros sin tecnicismos',
      ],
    },
    {
      heading: 'Resultados para pymes talcahuano',
      paragraphs: [
        'Medimos impacto en llamadas y mensajes de WhatsApp desde Google. Ajustamos la estrategia según temporada y competencia. Para marketing integral en la comuna, conoce también nuestros servicios de agencia en Talcahuano.',
      ],
    },
  ]),
  seoCityBase('chillan', 'Chillán', 'chillan', 'posicionamiento SEO Chillán', [
    {
      heading: 'SEO para pymes del Valle Central',
      paragraphs: [
        'Chillán y su área metropolitana tienen un tejido de pymes fuerte que aún subutiliza Google. Aparecer en búsquedas locales de tu rubro es una ventaja competitiva frente a negocios que solo usan redes sin método.',
      ],
    },
    {
      heading: 'Plan SEO Chillán',
      paragraphs: [
        'Investigación de keywords, optimización on-page, contenido útil y SEO local en Maps. Ideal para retail, alimentos, servicios profesionales y clínicas que quieren crecer en Ñuble y comunas cercanas.',
      ],
    },
  ]),
  seoCityBase('coronel', 'Coronel', 'coronel', 'posicionamiento SEO Coronel', [
    {
      heading: 'SEO local en Coronel y Biobío sur',
      paragraphs: [
        'Coronel reúne barrios, industria y comercio de proximidad. Las pymes con presencia digital sólida destacan frente a competidores offline. El SEO local captura demanda de Lota, San Pedro y el área de Coronel.',
      ],
    },
    {
      heading: 'Qué hacemos por tu negocio en Coronel',
      paragraphs: [
        'Auditoría, optimización técnica, Google Business Profile y contenido con tono cercano — importante en comunas donde la confianza personal sigue siendo clave para cerrar ventas.',
      ],
    },
  ]),
]

export function getSeoCityBySlug(slug: string) {
  return seoCities.find((c) => c.slug === slug)
}

const SEO_HUB_CITIES: { slug: string; cityName: string }[] = [
  { slug: 'los-angeles', cityName: 'Los Ángeles' },
  { slug: 'concepcion', cityName: 'Concepción' },
  { slug: 'talcahuano', cityName: 'Talcahuano' },
  { slug: 'chillan', cityName: 'Chillán' },
  { slug: 'coronel', cityName: 'Coronel' },
]

export function getSeoCityHubLinks() {
  const descriptions: Record<string, string> = {
    'los-angeles': 'Ciudad base · SEO local con foco en conversión orgánica.',
    concepcion: 'Segunda ciudad de Chile · SEO local a medida.',
    talcahuano: 'Puerto y comercio · poca competencia digital.',
    chillan: 'Valle Central · crecimiento en Google.',
    coronel: 'Biobío sur · oportunidad orgánica.',
  }
  return SEO_HUB_CITIES.map(({ slug, cityName }) => ({
    label: `Posicionamiento SEO en ${cityName}`,
    description: descriptions[slug] ?? `SEO local para pymes en ${cityName}.`,
    to: seoCityPath(slug),
  }))
}

export function getSeoCitySchema(city: SeoCityPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Posicionamiento Web SEO en ${city.cityName}`,
    description: city.metaDescription,
    url: `https://fomentatupyme.cl${seoCityPath(city.slug)}/`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'FomentaTuPyme',
      url: 'https://fomentatupyme.cl',
      telephone: '+56-9-7979-6841',
      email: 'contacto@fomentatupyme.cl',
    },
    areaServed: {
      '@type': 'City',
      name: city.cityName,
    },
    serviceType: 'SEO y Posicionamiento Web',
  }
}
