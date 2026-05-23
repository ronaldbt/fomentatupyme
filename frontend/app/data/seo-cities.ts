import type { SeoCityPage } from './types'
import { getServiceSchema } from './schema'

export const SEO_HUB_PATH = '/posicionamiento-web-seo'

/** Slug SEO → slug agencia-marketing */
export const SEO_TO_AGENCIA_SLUG: Record<string, string> = {
  'los-angeles-chile': 'los-angeles-chile',
  'los-angeles': 'los-angeles-chile',
  concepcion: 'concepcion',
  talcahuano: 'talcahuano',
}

/** Páginas SEO con vista estática propia (no usan [slug].vue) */
export const SEO_STATIC_CITY_SLUGS = ['concepcion', 'talcahuano', 'los-angeles-chile'] as const

export function seoCityPath(slug: string) {
  return `${SEO_HUB_PATH}/${slug}`
}

export function getAgenciaSlugForSeo(slug: string) {
  return SEO_TO_AGENCIA_SLUG[slug]
}

export function getSeoSlugForAgencia(agenciaSlug: string) {
  return Object.entries(SEO_TO_AGENCIA_SLUG).find(([, a]) => a === agenciaSlug)?.[0]
}

/** Sin ciudades dinámicas; solo vistas estáticas en SEO_STATIC_CITY_SLUGS */
export const seoCities: SeoCityPage[] = []

export function getSeoCityBySlug(slug: string) {
  return seoCities.find((c) => c.slug === slug)
}

const SEO_HUB_CITIES: { slug: string; cityName: string }[] = [
  { slug: 'los-angeles-chile', cityName: 'Los Ángeles' },
  { slug: 'concepcion', cityName: 'Concepción' },
  { slug: 'talcahuano', cityName: 'Talcahuano' },
]

export function getSeoCityHubLinks() {
  const descriptions: Record<string, string> = {
    'los-angeles-chile': 'Ciudad base · estrategia SEO desde adentro del mercado local.',
    concepcion: 'Gran mercado · competir y ganar en Google.',
    talcahuano: 'Puerto e industria · poca competencia digital, actúa primero.',
  }
  return SEO_HUB_CITIES.map(({ slug, cityName }) => ({
    label: `Posicionamiento SEO en ${cityName}`,
    description: descriptions[slug] ?? `SEO local para pymes en ${cityName}.`,
    to: seoCityPath(slug),
  }))
}

export function getSeoCitySchema(city: SeoCityPage) {
  return getServiceSchema({
    name: `Posicionamiento Web SEO en ${city.cityName}`,
    description: city.metaDescription,
    path: seoCityPath(city.slug),
    serviceType: 'SEO y Posicionamiento Web',
  })
}
