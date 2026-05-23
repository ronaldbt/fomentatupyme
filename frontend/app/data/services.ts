import type { HubLink, ServicePage } from './types'

export const servicesHubLinks: HubLink[] = [
  {
    title: 'Posicionamiento Web SEO',
    description: 'Aparece en Google cuando te buscan — Los Ángeles, Concepción y todo el Biobío.',
    to: '/posicionamiento-web-seo',
  },
  {
    title: 'Contenido para Instagram',
    description: 'Reels, carruseles e historias que convierten scrolls en clientes.',
    to: '/servicios/instagram',
  },
  {
    title: 'Contenido para TikTok',
    description: 'Alcance orgánico y viralidad para pymes que quieren crecer rápido.',
    to: '/servicios/tiktok',
  },
  {
    title: 'Gestión de redes sociales',
    description: 'Community management, calendario editorial y respuesta a mensajes.',
    to: '/servicios/redes-sociales',
  },
  {
    title: 'Estrategia de marketing digital',
    description: 'Plan integral: SEO, ads, contenido y métricas en un solo roadmap.',
    to: '/servicios/estrategia-digital',
  },
]

export const services: ServicePage[] = [
  {
    slug: 'instagram',
    title: 'Contenido para Instagram',
    keyword: 'creación de contenido para Instagram empresa',
    metaTitle: 'Contenido para Instagram que Vende | FomentaTuPyme',
    metaDescription:
      'Creación de contenido para Instagram: reels, carruseles e historias para pymes en Chile. Piezas pensadas para convertir, no solo para likes.',
    h1: 'Creación de contenido para Instagram que vende',
    eyebrow: 'Servicio · Instagram',
    intro:
      'Instagram sigue siendo el canal donde las pymes chilenas generan confianza y ventas directas. Producimos contenido con estética profesional y mensajes claros para mover a la audiencia del scroll al WhatsApp o a tu web.',
    sections: [
      {
        heading: 'Formatos que producimos',
        paragraphs: [
          'Reels con gancho en los primeros segundos, carruseles educativos y historias con CTA para promociones o lanzamientos. Todo alineado a tu identidad visual y tono de marca.',
        ],
        list: ['Reels de producto o servicio', 'Carruseles de autoridad', 'Historias con encuestas y CTA', 'Copys y hashtags estratégicos'],
      },
      {
        heading: 'Integración con publicidad',
        paragraphs: [
          'Si ya inviertes en Instagram Ads, reutilizamos los mejores creativos orgánicos como anuncios para bajar costo por resultado y escalar lo que ya funciona.',
        ],
      },
    ],
  },
  {
    slug: 'tiktok',
    title: 'Contenido para TikTok',
    keyword: 'agencia TikTok para empresas Chile',
    metaTitle: 'Contenido y Estrategia TikTok para Empresas | FomentaTuPyme',
    metaDescription:
      'Agencia TikTok para empresas en Chile: videos cortos, tendencias locales y estrategia orgánica para pymes que quieren viralidad con propósito comercial.',
    h1: 'Haz viral tu negocio con TikTok en Chile',
    eyebrow: 'Servicio · TikTok',
    intro:
      'TikTok no es solo entretenimiento: es descubrimiento de marcas para nuevas audiencias. Ayudamos a pymes del Biobío y Chile a crear videos auténticos que generan alcance orgánico y consultas reales.',
    sections: [
      {
        heading: 'Estrategia orgánica vs solo ads',
        paragraphs: [
          'Priorizamos contenido que la plataforma premia sin depender exclusivamente de presupuesto publicitario. Cuando tiene sentido, activamos Spark Ads o campañas para amplificar piezas ganadoras.',
        ],
        list: ['Guiones con hook y CTA', 'Grabación y edición vertical', 'Calendario de publicación', 'Análisis de retención y comentarios'],
      },
    ],
  },
  {
    slug: 'redes-sociales',
    title: 'Gestión de redes sociales',
    keyword: 'gestión de redes sociales pymes',
    metaTitle: 'Gestión de Redes Sociales para Pymes | FomentaTuPyme',
    metaDescription:
      'Gestión profesional de redes sociales: calendario, diseño, community management y reportes. Tu marca activa todos los días sin que tú pierdas tiempo.',
    h1: 'Gestión de redes sociales para tu pyme',
    eyebrow: 'Servicio · Redes',
    intro:
      'Publicar por impulso quema tiempo y resultados. Nos encargamos del calendario, respuestas, diseño y métricas para que tu presencia digital sea constante y coherente en Instagram, TikTok y Facebook.',
    sections: [
      {
        paragraphs: [
          'Incluimos planificación mensual, aprobación de piezas, publicación programada y monitoreo de mensajes directos y comentarios en horario comercial.',
          'Entregamos reporte con alcance, interacción y recomendaciones para el mes siguiente.',
        ],
      },
    ],
  },
  {
    slug: 'estrategia-digital',
    title: 'Estrategia de marketing digital',
    keyword: 'estrategia marketing digital pyme',
    metaTitle: 'Estrategia de Marketing Digital para Pymes | FomentaTuPyme',
    metaDescription:
      'Diseñamos estrategia de marketing digital integral: diagnóstico, prioridades, presupuesto y roadmap para hacer crecer tu empresa en el mundo digital.',
    h1: 'Estrategia de marketing digital a medida',
    eyebrow: 'Servicio · Estrategia',
    intro:
      'Antes de producir contenido o invertir en ads, definimos hacia dónde va tu negocio online: buyer persona, canales, mensajes y KPIs. Una estrategia clara evita gastar en tácticas que no convierten.',
    sections: [
      {
        heading: 'Qué incluye el diagnóstico',
        paragraphs: [
          'Revisamos web, redes, competencia local y embudo de ventas. Priorizamos acciones de mayor impacto en 90 días: SEO, contenido, ads o automatización según tu etapa.',
        ],
        list: ['Workshop con el equipo', 'Documento de estrategia', 'Plan trimestral', 'Definición de presupuesto sugerido'],
      },
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
