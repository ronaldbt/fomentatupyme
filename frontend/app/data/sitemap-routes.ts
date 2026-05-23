import { blogPosts } from './blog'
import { cities } from './cities'
import { services } from './services'
import { SEO_HUB_CITIES } from './seo-cities-sitemap'

export interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

const STATIC_ROUTES: SitemapEntry[] = [
  { loc: '/', changefreq: 'weekly', priority: 1 },
  { loc: '/servicios', changefreq: 'weekly', priority: 0.9 },
  { loc: '/posicionamiento-web-seo', changefreq: 'weekly', priority: 0.9 },
  { loc: '/posicionamiento-web-seo/concepcion', changefreq: 'weekly', priority: 0.85 },
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
    ...SEO_HUB_CITIES.filter((slug) => slug !== 'concepcion').map((slug) => ({
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

  return [...STATIC_ROUTES, ...dynamic]
}
