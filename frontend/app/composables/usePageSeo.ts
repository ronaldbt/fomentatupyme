export function usePageSeo(options: {
  title: string
  description: string
  path?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}) {
  const route = useRoute()
  const base = 'https://fomentatupyme.cl'
  const path = options.path ?? route.path
  const url = `${base}${path === '/' ? '' : path}`

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: url,
    ogLocale: 'es_CL',
    twitterCard: 'summary_large_image',
  })

  const scripts = options.jsonLd
    ? (Array.isArray(options.jsonLd) ? options.jsonLd : [options.jsonLd]).map((schema) => ({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
      }))
    : []

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: scripts,
  })
}
