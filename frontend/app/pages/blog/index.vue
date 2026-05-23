<script setup lang="ts">
import { blogHubLinks } from '~/data/blog'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Blog de Marketing Digital para Pymes | FomentaTuPyme',
  description:
    'Artículos sobre SEO, Instagram, TikTok y estrategia digital para pymes en Chile. Guías prácticas desde el Biobío.',
  path: '/blog',
})
</script>

<template>
  <PageHero
    eyebrow="Blog"
    h1="Contenido y guías para pymes"
    intro="Estrategias accionables de SEO, redes sociales y crecimiento digital. Sin relleno — solo lo que puedes aplicar en tu negocio."
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="[{ label: 'Inicio', to: '/' }, { label: 'Blog' }]" />
    </template>
  </PageHero>
  <section class="pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HubGrid :links="blogHubLinks" />
    </div>
  </section>
  <SiteCta />
</template>
