<script setup lang="ts">
import { getItemListSchema } from '~/data/schema'
import { citiesHubLinks } from '~/data/cities'

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Agencia marketing' },
]

usePageSeo({
  title: 'Agencia de Marketing por Ciudad en el Biobío | FomentaTuPyme',
  description:
    'Marketing digital para pymes en Los Ángeles, Concepción y Talcahuano. SEO local, redes sociales y contenido.',
  path: '/agencia-marketing',
  pageType: 'CollectionPage',
  breadcrumbs,
  jsonLd: getItemListSchema({
    name: 'Agencia de marketing por ciudad',
    description: 'Páginas locales de FomentaTuPyme en el Biobío.',
    path: '/agencia-marketing',
    items: citiesHubLinks.map((c) => ({ name: c.title, url: c.to })),
  }),
})
</script>

<template>
  <PageHero
    eyebrow="Ciudades · SEO local"
    heading="Agencia de marketing en tu ciudad"
    intro="Páginas con contenido propio por comuna — no plantillas vacías. Elige tu ciudad y conoce cómo trabajamos SEO, Instagram y TikTok en tu mercado local."
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>
  <section class="pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HubGrid :links="citiesHubLinks" />
    </div>
  </section>
  <SiteCta />
</template>
