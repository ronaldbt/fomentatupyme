import { blogPosts } from './blog'
import { cities } from './cities'
import { services } from './services'
import { SEO_HUB_CITIES } from './seo-cities-sitemap'
import { canonicalUrl } from './site'

export interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

/** URL absoluta canónica (siempre fomentatupyme.cl, nunca localhost) */
export function sitemapAbsoluteUrl(path: string) {
  return canonicalUrl(path)
}

function withAbsoluteLoc(entry: Omit<SitemapEntry, 'loc'> & { loc: string }): SitemapEntry {
  return { ...entry, loc: sitemapAbsoluteUrl(entry.loc) }
}

const STATIC_ROUTES: SitemapEntry[] = [
  { loc: '/', changefreq: 'weekly', priority: 1 },
  { loc: '/servicios', changefreq: 'weekly', priority: 0.9 },
  { loc: '/posicionamiento-web-seo', changefreq: 'weekly', priority: 0.9 },
  { loc: '/posicionamiento-web-seo/concepcion', changefreq: 'weekly', priority: 0.85 },
  { loc: '/posicionamiento-web-seo/talcahuano', changefreq: 'weekly', priority: 0.85 },
  { loc: '/posicionamiento-web-seo/los-angeles-chile', changefreq: 'weekly', priority: 0.85 },
  { loc: '/agencia-marketing', changefreq: 'weekly', priority: 0.9 },
  { loc: '/blog', changefreq: 'weekly', priority: 0.8 },
  { loc: '/quienes-somos', changefreq: 'monthly', priority: 0.7 },
  { loc: '/por-que-elegirnos', changefreq: 'monthly', priority: 0.7 },
  { loc: '/casos-de-exito', changefreq: 'monthly', priority: 0.7 },
  { loc: '/contacto', changefreq: 'monthly', priority: 0.8 },
]

export function getSitemapEntries(): SitemapEntry[] {
  const dynamic: SitemapEntry[] = [
    ...services.map((s) => ({
      loc: `/servicios/${s.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.8,
    })),
    ...cities.map((c) => ({
      loc: `/agencia-marketing/${c.slug}`,
      changefreq: 'monthly' as const,
      priority: c.principal ? 0.85 : 0.75,
    })),
    ...SEO_HUB_CITIES.map((slug) => ({
      loc: `/posicionamiento-web-seo/${slug}`,
      changefreq: 'monthly' as const,
      priority: 0.75,
    })),
    ...blogPosts.map((p) => ({
      loc: `/blog/${p.slug}`,
      lastmod: p.date,
      changefreq: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [...STATIC_ROUTES, ...dynamic].map(withAbsoluteLoc)
}
