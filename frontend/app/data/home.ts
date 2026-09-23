import { getFaqSchema } from './schema'
import { SITE_URL } from './site'

export const HOME_SEO = {
  title: 'Agencia de Marketing en Concepción Chile | FomentaTuPyme',
  description:
    'Agencia de marketing en Concepción: SEO local, páginas web, videos corporativos y campañas Google y Meta Ads para pymes del Biobío. Cotiza gratis hoy.',
  ogDescription:
    'SEO local, páginas web, videos corporativos y campañas digitales para pymes del Gran Concepción y la Región del Biobío.',
}

export const homeHero = {
  eyebrow: 'Concepción, Biobío · Chile',
  h1: 'Agencia de Marketing Digital en Concepción para Pymes del Biobío',
  displayLine1: 'Impulsa',
  displayLine2: 'Tu Pyme',
  lead:
    'FomentaTuPyme es una agencia de marketing digital en Concepción, Chile, especializada en pymes del Gran Concepción y la Región del Biobío. Combinamos posicionamiento SEO, diseño de páginas web, videos corporativos y campañas en Google y Meta Ads para convertir búsquedas y contenido en clientes reales.',
  proof: [
    { value: '+200', label: 'Pymes fomentadas' },
    { value: '+1.5M', label: 'Views generadas' },
    { value: '<24h', label: 'Respuesta hábil' },
    { value: '100%', label: 'Foco pyme local' },
  ],
}

export const marqueeKeywords = [
  'SEO Local',
  'Páginas Web',
  'Video Corporativo',
  'Google Ads',
  'Meta Ads',
  'Instagram',
  'TikTok',
  'Google Maps',
  'Branding',
  'Reels',
  'E-commerce',
]

export const homeServices = [
  {
    num: '01',
    title: 'Posicionamiento SEO',
    description:
      'Tu empresa no aparece cuando buscan tu servicio en Google. Optimizamos tu sitio, contenido y ficha de Google Maps para captar tráfico orgánico que compra.',
    who: 'Para pymes que dependen de búsquedas locales',
    to: '/posicionamiento-web-seo/concepcion',
    cta: 'SEO en Concepción',
  },
  {
    num: '02',
    title: 'Páginas Web',
    description:
      'Tu web no carga, no convence o no existe. Diseñamos sitios autoadministrables, rápidos y optimizados para SEO desde el primer día, con foco en conversión.',
    who: 'Para negocios sin web o con web que no vende',
    to: '/contacto',
    cta: 'Cotizar diseño web',
  },
  {
    num: '03',
    title: 'Videos Corporativos',
    description:
      'Tu marca no transmite confianza. Producimos videos corporativos, spots y cápsulas con guion, grabación profesional y edición lista para web, RRSS y licitaciones.',
    who: 'Para empresas que necesitan presentarse en serio',
    to: '/contacto',
    cta: 'Cotizar video',
  },
  {
    num: '04',
    title: 'Campañas Google & Meta Ads',
    description:
      'Inviertes en publicidad y no sabes qué vuelve. Configuramos campañas con segmentación local, tracking de conversiones y optimización mensual del costo por lead.',
    who: 'Para pymes que necesitan resultados este mes',
    to: '/contacto',
    cta: 'Cotizar campañas',
  },
  {
    num: '05',
    title: 'Redes Sociales',
    description:
      'Publicas sin plan y sin respuesta. Gestionamos Instagram y TikTok con calendario, reels, carruseles e historias diseñados para convertir alcance en consultas.',
    who: 'Para marcas que quieren comunidad que compra',
    to: '/servicios/redes-sociales',
    cta: 'Gestión de redes',
  },
  {
    num: '06',
    title: 'Branding & Diseño',
    description:
      'Tu imagen no está a la altura de tu servicio. Creamos identidad visual, piezas gráficas y fotografía de producto coherentes en web, redes y material impreso.',
    who: 'Para negocios que van a relanzarse o profesionalizarse',
    to: '/contacto',
    cta: 'Cotizar branding',
  },
]

export const homeProcessSteps = [
  {
    num: '01',
    title: 'Diagnóstico',
    description:
      'Auditamos tu web, tu ficha de Google Maps, tus redes y a tu competencia directa en Concepción. Detectamos las búsquedas y canales con mayor oportunidad para tu rubro.',
    deliverable: 'Entregable → Informe de oportunidades',
  },
  {
    num: '02',
    title: 'Estrategia',
    description:
      'Definimos el plan: keywords a posicionar, calendario de contenido, campañas y presupuesto. Fijamos juntos las metas de leads y ventas del trimestre.',
    deliverable: 'Entregable → Plan de 90 días con KPIs',
  },
  {
    num: '03',
    title: 'Producción',
    description:
      'Ejecutamos: optimización web y SEO, grabación de reels y video, piezas gráficas y puesta en marcha de campañas en Google y Meta con tracking de conversiones.',
    deliverable: 'Entregable → Contenido y campañas activas',
  },
  {
    num: '04',
    title: 'Resultados',
    description:
      'Medimos leads, alcance, posiciones en Google y ventas. Reporte mensual en lenguaje claro y ajustes para escalar lo que funciona y cortar lo que no.',
    deliverable: 'Entregable → Reporte mensual + ajustes',
  },
]

export const coverageCities = {
  linked: [
    { label: 'Concepción', to: '/agencia-marketing/concepcion', main: true },
    { label: 'Talcahuano', to: '/agencia-marketing/talcahuano' },
    { label: 'Los Ángeles', to: '/agencia-marketing/los-angeles-chile' },
  ],
  labels: [
    'San Pedro de la Paz',
    'Chiguayante',
    'Hualpén',
    'Penco',
    'Coronel',
    'Tomé',
    'Hualqui',
    'Lota',
  ],
}

export const homeFaqs = [
  {
    question: '¿Cuánto cuesta una agencia de marketing en Concepción?',
    answer:
      'En FomentaTuPyme los planes parten en $290.000 CLP (Pack Emprendedor: creación o mejora de página web, 4 reels, Instagram Ads y SEO básico en Google Maps) y llegan a $750.000 CLP (Pack Pro: web, 12 reels, gestión multiplataforma, SEO con contenido y estratega dedicado). El plan más contratado es el Pack Fomento, de $450.000 CLP. Todos los packs incluyen creación o mejora de página web. Proyectos puntuales —por ejemplo un video corporativo aislado— se cotizan por separado. Toda cotización es gratuita y la enviamos en menos de 24 horas hábiles.',
  },
  {
    question: '¿Cuánto demora el SEO en dar resultados en Concepción?',
    answer:
      'Para búsquedas locales del Gran Concepción, los primeros movimientos de posiciones suelen verse entre el segundo y el cuarto mes, y la tracción consolidada entre el cuarto y el octavo, dependiendo de la competencia de tu rubro y el estado inicial de tu sitio. Las keywords locales posicionan más rápido que los términos nacionales. Por eso combinamos SEO con campañas de Google o Meta Ads: las campañas generan leads desde la primera semana mientras el posicionamiento orgánico madura.',
  },
  {
    question: '¿Qué incluye la gestión de redes sociales para una pyme?',
    answer:
      'Incluye estrategia y calendario mensual de contenido, producción de reels, carruseles e historias para Instagram y TikTok, redacción de copies con llamados a la acción, publicación, y gestión de campañas de Instagram Ads según tu plan. Todo se graba con equipo profesional; no trabajamos solo con material del cliente. Cada mes recibes un reporte con alcance, interacciones, clics y consultas generadas.',
  },
  {
    question: '¿Hacen páginas web autoadministrables y optimizadas para Google?',
    answer:
      'Sí. Diseñamos páginas web autoadministrables para pymes de Concepción: tú puedes editar textos, fotos y productos sin depender de nosotros, y te capacitamos para hacerlo. Cada sitio se entrega responsivo, con velocidad optimizada (Core Web Vitals en verde), estructura SEO, Schema markup y conexión a Google Analytics y Search Console. Hacemos sitios corporativos, landings para campañas y tiendas online con carrito y pasarela de pago chilena.',
  },
  {
    question: '¿Trabajan con empresas fuera de Concepción?',
    answer:
      'Sí. Atendemos todo el Gran Concepción —Talcahuano, San Pedro de la Paz, Chiguayante, Hualpén, Penco, Coronel, Tomé, Hualqui y Lota—, además de Los Ángeles y el resto de la Región del Biobío. Para clientes de otras regiones de Chile trabajamos de forma remota, con reuniones por videollamada y reportes mensuales. Las grabaciones audiovisuales se coordinan en terreno dentro de la región.',
  },
  {
    question: '¿Cómo mido si la inversión en marketing está funcionando?',
    answer:
      'Definimos juntos los KPIs al inicio: leads (formularios, llamadas, WhatsApp), posiciones en Google para tus keywords, alcance y ventas atribuidas. Instalamos el tracking en Google Analytics 4 y los píxeles de Meta y Google para que cada conversión quede registrada con su canal de origen. Recibes un reporte mensual con esos números y una reunión de revisión. Si un canal no rinde, lo decimos y reasignamos el presupuesto.',
  },
]

export function getHomeJsonLd() {
  const faq = getFaqSchema(homeFaqs)
  const services = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Posicionamiento SEO en Concepción',
        serviceType: 'SEO local',
        url: `${SITE_URL}/posicionamiento-web-seo/concepcion`,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'Región del Biobío, Chile',
        description:
          'Optimización técnica, contenido y Google Business Profile para posicionar pymes en las búsquedas locales de Concepción y el Biobío.',
      },
      {
        '@type': 'Service',
        name: 'Gestión de redes sociales',
        serviceType: 'Social media',
        url: `${SITE_URL}/servicios/redes-sociales`,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'Chile',
        description:
          'Estrategia, calendario y producción de reels, carruseles e historias para Instagram y TikTok orientados a conversión.',
      },
    ],
  }
  return [faq, services]
}

export const ROI_MODELS = {
  integral: { reachK: 0.25, leadPer1k: 5, roi: 3.2 },
  ads: { reachK: 0.32, leadPer1k: 4.2, roi: 2.6 },
  seo: { reachK: 0.12, leadPer1k: 7, roi: 3.8 },
} as const

export type RoiServiceKey = keyof typeof ROI_MODELS

export const WHATSAPP_HOME =
  'https://wa.me/56979796841?text=Hola%2C%20quiero%20cotizar%20marketing%20digital%20para%20mi%20pyme%20en%20Concepci%C3%B3n.'
