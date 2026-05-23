import { buildPageSchemas } from '~/data/schema'
import { SITE_LOCALE, SITE_NAME, SITE_URL } from '~/data/site'

export interface BreadcrumbItem {
  label: string
  to?: string
}

export function usePageSeo(options: {
  title: string
  description: string
  path?: string
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage' | 'Article'
  breadcrumbs?: BreadcrumbItem[]
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
  ogImage?: string
}) {
  const route = useRoute()
  const path = options.path ?? route.path
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`

  const schemas = buildPageSchemas({
    title: options.title,
    description: options.description,
    path,
    pageType: options.pageType,
    breadcrumbs: options.breadcrumbs,
    extra: options.jsonLd,
  })

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: url,
    ogLocale: SITE_LOCALE,
    ogSiteName: SITE_NAME,
    ogType: options.pageType === 'Article' ? 'article' : 'website',
    twitterCard: 'summary_large_image',
    robots: options.noindex ? 'noindex, nofollow' : 'index, follow',
  })

  useHead({
    htmlAttrs: { lang: SITE_LOCALE },
    link: [{ rel: 'canonical', href: url }],
    script: schemas.map((schema, index) => ({
      type: 'application/ld+json',
      key: `ld-json-${index}-${String(schema['@type'])}`,
      innerHTML: JSON.stringify(schema),
    })),
  })
}
