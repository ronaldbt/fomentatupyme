import { buildPageSchemas } from '~/data/schema'
import { canonicalUrl, normalizeSitePath, SITE_LOCALE, SITE_NAME } from '~/data/site'

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
  // route.path (no route.fullPath): sin query ni hash; normalizeSitePath quita slash final
  const path = computed(() => normalizeSitePath(options.path ?? route.path))
  const url = computed(() => canonicalUrl(path.value))

  const schemas = computed(() =>
    buildPageSchemas({
      title: options.title,
      description: options.description,
      path: path.value,
      pageType: options.pageType,
      breadcrumbs: options.breadcrumbs,
      extra: options.jsonLd,
    }),
  )

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: () => url.value,
    ogLocale: SITE_LOCALE,
    ogSiteName: SITE_NAME,
    ogType: options.pageType === 'Article' ? 'article' : 'website',
    twitterCard: 'summary_large_image',
    robots: options.noindex ? 'noindex, nofollow' : 'index, follow',
  })

  useHead({
    htmlAttrs: { lang: SITE_LOCALE },
    link: computed(() => [{ rel: 'canonical', href: url.value }]),
    script: computed(() =>
      schemas.value.map((schema, index) => ({
        type: 'application/ld+json',
        key: `ld-json-${index}-${String(schema['@type'])}`,
        innerHTML: JSON.stringify(schema),
      })),
    ),
  })
}
