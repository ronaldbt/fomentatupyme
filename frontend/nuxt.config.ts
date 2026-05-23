// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './app/data/site'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  site: {
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    defaultLocale: 'es',
  },
  sitemap: {
    sources: ['/api/__sitemap_urls'],
    exclude: ['/nosotros'],
    defaults: {
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  },
  robots: {
    allow: '/',
    disallow: ['/api/'],
    sitemap: `${SITE_URL}/sitemap.xml`,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  routeRules: {
    '/servicios/seo': { redirect: { to: '/posicionamiento-web-seo', statusCode: 301 } },
    '/nosotros': { redirect: { to: '/quienes-somos', statusCode: 301 } },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: [
        '/',
        '/servicios',
        '/posicionamiento-web-seo',
        '/posicionamiento-web-seo/concepcion',
        '/posicionamiento-web-seo/los-angeles',
        '/posicionamiento-web-seo/talcahuano',
        '/posicionamiento-web-seo/chillan',
        '/posicionamiento-web-seo/coronel',
        '/servicios/instagram',
        '/servicios/tiktok',
        '/servicios/redes-sociales',
        '/servicios/estrategia-digital',
        '/agencia-marketing',
        '/agencia-marketing/los-angeles-chile',
        '/agencia-marketing/concepcion',
        '/agencia-marketing/talcahuano',
        '/agencia-marketing/chillan',
        '/agencia-marketing/coronel',
        '/agencia-marketing/region-biobio',
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
