import type { BlogPost, HubLink } from './types'

export const blogHubLinks: HubLink[] = [
  {
    title: 'Cómo posicionar tu pyme en Google',
    description: 'Guía práctica de SEO local y contenido para aparecer en búsquedas.',
    to: '/blog/como-posicionar-pyme-en-google',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-posicionar-pyme-en-google',
    title: 'Cómo posicionar tu pyme en Google',
    metaTitle: 'Cómo Posicionar tu Pyme en Google (Guía 2025) | FomentaTuPyme',
    metaDescription:
      'Aprende a posicionar tu pyme en Google con SEO local, Google Maps y contenido útil. Pasos accionables para pymes en Chile.',
    h1: 'Cómo posicionar tu pyme en Google',
    date: '2025-03-15',
    intro:
      'Aparecer en Google no es cuestión de suerte: es método. Esta guía resume lo que aplicamos con pymes del Biobío para ganar visibilidad orgánica y leads sin depender solo de anuncios pagados.',
    sections: [
      {
        heading: '1. Optimiza tu ficha de Google Business Profile',
        paragraphs: [
          'Completa categoría, horarios, teléfono, web y fotos reales. Pide reseñas a clientes satisfechos y responde siempre. La ficha es tu vitrina en búsquedas locales y en Maps.',
        ],
      },
      {
        heading: '2. Sitio web rápido y claro en móvil',
        paragraphs: [
          'La mayoría busca desde el celular. Títulos claros, botón de WhatsApp visible y páginas de servicio separadas. Google premia velocidad y experiencia móvil.',
        ],
      },
      {
        heading: '3. Contenido que responde preguntas reales',
        paragraphs: [
          'Artículos cortos sobre precios, plazos, comparativas y casos locales. Cada texto debe apuntar a una keyword con intención (por ejemplo, "marketing digital Concepción" o tu rubro + ciudad).',
        ],
      },
      {
        heading: '4. Mide y ajusta cada mes',
        paragraphs: [
          'Usa Search Console y Analytics. Revisa qué páginas traen tráfico y qué consultas activan formularios. El SEO es iteración, no un proyecto de una semana.',
        ],
      },
    ],
  },
]

export function getBlogBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
