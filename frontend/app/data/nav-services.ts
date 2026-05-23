import { getSeoCityHubLinks, SEO_HUB_PATH } from './seo-cities'

export interface NavServiceLink {
  title: string
  to: string
}

export interface NavServiceGroup {
  id: string
  label: string
  to?: string
  children: NavServiceLink[]
}

export const seoNavGroup: NavServiceGroup = {
  id: 'seo',
  label: 'SEO',
  children: [
    { title: 'Posicionamiento web SEO', to: SEO_HUB_PATH },
    ...getSeoCityHubLinks().map((city) => ({
      title: `Posicionamiento web · ${city.label.replace(/^Posicionamiento SEO en /i, '')}`,
      to: city.to,
    })),
  ],
}

export const redesNavGroup: NavServiceGroup = {
  id: 'redes',
  label: 'Gestión de redes sociales',
  to: '/servicios/redes-sociales',
  children: [
    { title: 'Contenido para Instagram', to: '/servicios/instagram' },
    { title: 'Contenido para TikTok', to: '/servicios/tiktok' },
    { title: 'Gestión de Contenido y Redes Sociales', to: '/servicios/redes-sociales' },
    { title: 'Producción Audiovisual y Diseño Gráfico', to: '/contacto' },
  ],
}

export const mainNavServiceGroups = [seoNavGroup, redesNavGroup]
