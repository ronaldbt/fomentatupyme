/**
 * Redirige www.fomentatupyme.cl → https://fomentatupyme.cl (301)
 * Desplegar: npx wrangler deploy (desde frontend/cloudflare)
 */
export default {
  fetch(request) {
    const url = new URL(request.url)

    if (url.hostname === 'www.fomentatupyme.cl') {
      url.hostname = 'fomentatupyme.cl'
      url.protocol = 'https:'
      return Response.redirect(url.toString(), 301)
    }

    return fetch(request)
  },
}
