<script setup lang="ts">
import { citiesHubLinks } from '~/data/cities'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Agencia de Marketing por Ciudad en el Biobío | FomentaTuPyme',
  description:
    'Marketing digital para pymes en Los Ángeles, Concepción, Talcahuano, Chillán, Coronel y toda la Región del Biobío. SEO local y redes sociales.',
  path: '/agencia-marketing',
})
</script>

<template>
  <PageHero
    eyebrow="Ciudades · SEO local"
    h1="Agencia de marketing en tu ciudad"
    intro="Páginas con contenido propio por comuna — no plantillas vacías. Elige tu ciudad y conoce cómo trabajamos SEO, Instagram y TikTok en tu mercado local."
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="[{ label: 'Inicio', to: '/' }, { label: 'Agencia marketing' }]" />
    </template>
  </PageHero>
  <section class="pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HubGrid :links="citiesHubLinks" />
    </div>
  </section>
  <SiteCta />
</template>
