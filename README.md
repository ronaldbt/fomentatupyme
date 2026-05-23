# FomentaTuPyme

Sitio web de marketing digital para pymes del Biobío (Nuxt 3 + Tailwind).

## Desarrollo

```bash
cd frontend
npm install
npm run dev
```

## Producción

```bash
cd frontend
npm run build
```

El despliegue en Firebase Hosting usa `frontend/.output/public` (ver `frontend/firebase.json`).

## SEO

- **Módulos:** `@nuxtjs/sitemap`, `@nuxtjs/robots`, `@nuxt/content`, `nuxt-site-config`
- **URLs:** `https://fomentatupyme.cl/robots.txt` y `https://fomentatupyme.cl/sitemap.xml` (generadas en build)
- **Datos estructurados:** LocalBusiness, WebSite, WebPage, BreadcrumbList, Service, FAQPage, Article, ItemList (`app/data/schema.ts`)
- **Auditoría local:** `cd frontend && npm run build:seo`
