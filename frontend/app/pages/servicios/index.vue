<script setup lang="ts">
import { getItemListSchema } from '~/data/schema'
import { servicesHubLinks } from '~/data/services'

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios' },
]

usePageSeo({
  title: 'Servicios de Marketing Digital para Pymes | FomentaTuPyme',
  description:
    'SEO, Instagram, TikTok y gestión de redes para pymes en Chile. Elige el servicio que tu negocio necesita.',
  path: '/servicios',
  pageType: 'CollectionPage',
  breadcrumbs,
  jsonLd: getItemListSchema({
    name: 'Servicios de marketing digital',
    description: 'Catálogo de servicios FomentaTuPyme para pymes.',
    path: '/servicios',
    items: servicesHubLinks.map((s) => ({ name: s.title, url: s.to })),
  }),
})
</script>

<template>
  <PageHero
    eyebrow="Servicios"
    heading="Marketing digital que convierte"
    intro="Cada servicio está pensado para un objetivo claro: más visibilidad, más contenido que vende o un plan integral. Máximo dos clics desde aquí hasta el detalle."
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>
  <section class="pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HubGrid :links="servicesHubLinks" />
    </div>
  </section>
  <SiteCta />
</template>
