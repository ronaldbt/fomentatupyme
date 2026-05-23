export interface HubLink {
  title: string
  description: string
  to: string
  badge?: string
}

export interface ContentSection {
  heading?: string
  paragraphs: string[]
  list?: string[]
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
