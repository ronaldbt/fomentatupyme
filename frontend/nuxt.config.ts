// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
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
        '/nosotros',
        '/contacto',
      ],
    },
  },
})