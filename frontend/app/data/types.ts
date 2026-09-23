export interface HubLink {
  title: string
  description: string
  to: string
  badge?: string
}

export interface ContentSection {
  heading?: string
  /** 2 = H2 (default), 3 = H3 bajo un bloque padre */
  level?: 2 | 3
  paragraphs: string[]
  list?: string[]
  /** Lista numerada (pasos) — preferida sobre `list` si ambas existen */
  orderedList?: string[]
  /** Párrafos después de listados */
  afterList?: string[]
  /** Ítems con título + texto (rubros, features) */
  items?: { title: string; text: string }[]
  /** Enlace interno (anti-canibalización entre ciudades) */
  relatedLink?: {
    before: string
    label: string
    to: string
    after?: string
  }
}

export interface CityFaq {
  question: string
  answer: string
}

export interface CityCta {
  heading: string
  text: string
  buttonLabel: string
}

export interface ServicePage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  eyebrow: string
  intro: string
  sections: ContentSection[]
  keyword: string
}

export interface CityPage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  eyebrow: string
  intro: string
  sections: ContentSection[]
  keyword: string
  principal?: boolean
  region?: string
  faqs?: CityFaq[]
  whyUs?: {
    heading: string
    items: string[]
    linkLabel?: string
    linkTo?: string
  }
  cta?: CityCta
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  date: string
  intro: string
  sections: ContentSection[]
}

export interface SeoCityPage {
  slug: string
  agenciaSlug: string
  cityName: string
  metaTitle: string
  metaDescription: string
  h1: string
  eyebrow: string
  intro: string
  sections: ContentSection[]
  keyword: string
}
