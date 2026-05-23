<script setup lang="ts">
import { getServiceSchema } from '~/data/schema'
import { getServiceBySlug } from '~/data/services'

const route = useRoute()
const slug = route.params.slug as string

if (slug === 'seo') {
  await navigateTo('/posicionamiento-web-seo', { redirectCode: 301 })
}

const service = getServiceBySlug(slug)

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Servicio no encontrado' })
}

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: service.title },
]

usePageSeo({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/servicios/${service.slug}`,
  breadcrumbs,
  jsonLd: getServiceSchema({
    name: service.title,
    description: service.metaDescription,
    path: `/servicios/${service.slug}`,
    serviceType: service.title,
  }),
})
</script>

<template>
  <PageHero
    :eyebrow="service.eyebrow"
    :heading="service.h1"
    :intro="service.intro"
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>
  <section class="pt-16 md:pt-24 pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContentSections :sections="service.sections" />
      <div class="mt-16 pt-12 border-t border-white/10">
        <p class="text-[11px] font-black uppercase tracking-widest text-white/30 mb-4">También te puede interesar</p>
        <NuxtLink to="/agencia-marketing" class="text-blue-500 hover:text-blue-400 text-sm font-bold uppercase tracking-wider">
          Agencia de marketing por ciudad →
        </NuxtLink>
      </div>
    </div>
  </section>
  <SiteCta />
</template>
