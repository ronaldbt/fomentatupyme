<script setup lang="ts">
import { servicesHubLinks } from '~/data/services'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Servicios de Marketing Digital para Pymes | FomentaTuPyme',
  description:
    'SEO, Instagram, TikTok, gestión de redes y estrategia digital para pymes en Chile. Elige el servicio que tu negocio necesita.',
  path: '/servicios',
})
</script>

<template>
  <PageHero
    eyebrow="Servicios"
    h1="Marketing digital que convierte"
    intro="Cada servicio está pensado para un objetivo claro: más visibilidad, más contenido que vende o un plan integral. Máximo dos clics desde aquí hasta el detalle."
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="[{ label: 'Inicio', to: '/' }, { label: 'Servicios' }]" />
    </template>
  </PageHero>
  <section class="pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HubGrid :links="servicesHubLinks" />
    </div>
  </section>
  <SiteCta />
</template>
