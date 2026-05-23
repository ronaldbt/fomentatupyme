// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './app/data/site'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Nuxt 4: equivalente a router.trailingSlash: false (Nuxt 2)
  router: {
    options: {
      strict: true,
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'remove',
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  components: {
    dirs: [
      { path: '~/components', ignore: ['layout/**'] },
      { path: '~/components/layout', pathPrefix: false },
    ],
  },
  runtimeConfig: {
    public: {
      siteUrl: SITE_URL,
    },
  },
  site: {
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    defaultLocale: 'es-cl',
  },
  sitemap: {
    sources: ['/api/__sitemap_urls'],
    excludeAppSources: true,
    exclude: ['/nosotros'],
    defaults: {
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  },
  robots: {
    allow: '/',
    disallow: ['/api/', '/_nuxt/', '/cdn-cgi/'],
    sitemap: `${SITE_URL}/sitemap.xml`,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es-cl' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  routeRules: {
    '/servicios/seo': { redirect: { to: '/posicionamiento-web-seo', statusCode: 301 } },
    '/nosotros': { redirect: { to: '/quienes-somos', statusCode: 301 } },
    '/posicionamiento-web-seo/los-angeles': {
      redirect: { to: '/posicionamiento-web-seo/los-angeles-chile', statusCode: 301 },
    },
    '/servicios/estrategia-digital': {
      redirect: { to: '/servicios', statusCode: 301 },
    },
    '/posicionamiento-web-seo/chillan': {
      redirect: { to: '/posicionamiento-web-seo', statusCode: 301 },
    },
    '/posicionamiento-web-seo/coronel': {
      redirect: { to: '/posicionamiento-web-seo', statusCode: 301 },
    },
    '/agencia-marketing/chillan': {
      redirect: { to: '/agencia-marketing', statusCode: 301 },
    },
    '/agencia-marketing/coronel': {
      redirect: { to: '/agencia-marketing', statusCode: 301 },
    },
    '/agencia-marketing/region-biobio': {
      redirect: { to: '/agencia-marketing', statusCode: 301 },
    },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      autoSubfolderIndex: false,
      routes: [
        '/',
        '/servicios',
        '/posicionamiento-web-seo',
        '/posicionamiento-web-seo/concepcion',
        '/posicionamiento-web-seo/talcahuano',
        '/posicionamiento-web-seo/los-angeles-chile',
        '/servicios/instagram',
        '/servicios/tiktok',
        '/servicios/redes-sociales',
        '/agencia-marketing',
        '/agencia-marketing/los-angeles-chile',
        '/agencia-marketing/concepcion',
        '/agencia-marketing/talcahuano',
        '/blog',
        '/blog/como-posicionar-pyme-en-google',
        '/quienes-somos',
        '/por-que-elegirnos',
        '/casos-de-exito',
        '/contacto',
        '/sitemap.xml',
        '/robots.txt',
      ],
    },
  },
})
