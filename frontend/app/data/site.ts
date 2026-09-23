import { parsePath, withoutTrailingSlash } from 'ufo'

export const SITE_URL = 'https://fomentatupyme.cl'

/** Ruta interna: solo pathname, sin query, hash ni slash final (home = `/`). */
export function normalizeSitePath(path: string): string {
  const { pathname } = parsePath(path || '/')
  const normalized = withoutTrailingSlash(pathname || '/')
  return normalized || '/'
}

/** URL absoluta canónica: home con `/`, resto sin slash final. */
export function canonicalUrl(path: string): string {
  const normalized = normalizeSitePath(path)
  if (normalized === '/') return `${SITE_URL}/`
  return `${SITE_URL}${normalized}`
}
export const SITE_NAME = 'FomentaTuPyme'
export const SITE_DESCRIPTION =
  'Agencia de marketing digital y SEO para pymes en Concepción, Los Ángeles y el Biobío. Contenido audiovisual, redes sociales y posicionamiento en Google.'
export const SITE_LOCALE = 'es-cl'
export type SitePhone = {
  tel: string
  display: string
}

export const SITE_PHONES: SitePhone[] = [
  { tel: '+56979796841', display: '+56 9 7979 6841' },
  { tel: '+56974927111', display: '+56 9 7492 7111' },
]

/** Teléfono principal (schema, WhatsApp). */
export const SITE_PHONE = SITE_PHONES[0]!.tel
export const SITE_EMAIL = 'contacto@fomentatupyme.cl'
export const SITE_ADDRESS = {
  streetAddress: '',
  addressLocality: 'Concepción',
  addressRegion: 'Biobío',
  addressCountry: 'CL',
}
export const SITE_SOCIAL = [
  'https://www.instagram.com/fomentatupyme',
  'https://www.tiktok.com/@fomentatupyme',
]
