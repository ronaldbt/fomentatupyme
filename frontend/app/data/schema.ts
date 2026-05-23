import type { BreadcrumbItem } from '~/composables/usePageSeo'
import {
  SITE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LOCALE,
  SITE_NAME,
  SITE_PHONE,
  SITE_SOCIAL,
  SITE_URL,
  canonicalUrl,
} from './site'

export function absoluteUrl(path: string) {
  return canonicalUrl(path)
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    image: `${SITE_URL}/images/hero_marketing_chile.webp`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_ADDRESS.addressLocality,
      addressRegion: SITE_ADDRESS.addressRegion,
      addressCountry: SITE_ADDRESS.addressCountry,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Región del Biobío' },
      { '@type': 'AdministrativeArea', name: 'Ñuble' },
      { '@type': 'City', name: 'Concepción' },
      { '@type': 'City', name: 'Los Ángeles' },
      { '@type': 'City', name: 'Talcahuano' },
    ],
    sameAs: SITE_SOCIAL,
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LOCALE,
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

export function getWebPageSchema(options: {
  name: string
  description: string
  path: string
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage' | 'Article'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': options.type ?? 'WebPage',
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    inLanguage: SITE_LOCALE,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  }
}

export function getBreadcrumbSchema(items: BreadcrumbItem[], path: string) {
  const withHome: BreadcrumbItem[] = items[0]?.to === '/' || items[0]?.label === 'Inicio'
    ? items
    : [{ label: 'Inicio', to: '/' }, ...items]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: withHome.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.to ? { item: absoluteUrl(item.to) } : {}),
    })),
  }
}

export function getServiceSchema(options: {
  name: string
  description: string
  path: string
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Región del Biobío, Chile' },
    serviceType: options.serviceType ?? 'Marketing Digital',
    offers: {
      '@type': 'Offer',
      description: 'Diagnóstico inicial gratuito',
      price: '0',
      priceCurrency: 'CLP',
    },
  }
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function getArticleSchema(options: {
  headline: string
  description: string
  path: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    url: absoluteUrl(options.path),
    datePublished: options.datePublished,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: SITE_LOCALE,
    mainEntityOfPage: absoluteUrl(options.path),
  }
}

export function getItemListSchema(options: {
  name: string
  description: string
  path: string
  items: { name: string; url: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    itemListElement: options.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  }
}

/** Esquemas globales en todas las páginas indexables */
export function getGlobalSchemas() {
  return [getWebSiteSchema(), getLocalBusinessSchema()]
}

export function buildPageSchemas(options: {
  title: string
  description: string
  path: string
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage' | 'Article'
  breadcrumbs?: BreadcrumbItem[]
  extra?: Record<string, unknown> | Record<string, unknown>[]
}) {
  const schemas: Record<string, unknown>[] = [
    ...getGlobalSchemas(),
    getWebPageSchema({
      name: options.title,
      description: options.description,
      path: options.path,
      type: options.pageType,
    }),
  ]

  if (options.breadcrumbs?.length) {
    schemas.push(getBreadcrumbSchema(options.breadcrumbs, options.path))
  }

  if (options.extra) {
    const extra = Array.isArray(options.extra) ? options.extra : [options.extra]
    schemas.push(...extra)
  }

  return schemas
}
