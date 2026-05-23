/**
 * Respaldo cliente: redirige www → apex si la página Nuxt llega a cargar.
 * La redirección principal debe estar en Cloudflare o Firebase (fomentatupyme-redirect).
 */
export default defineNuxtPlugin(() => {
  if (window.location.hostname !== 'www.fomentatupyme.cl') {
    return
  }

  const target = new URL(window.location.href)
  target.hostname = 'fomentatupyme.cl'
  target.protocol = 'https:'
  window.location.replace(target.toString())
})
