<script setup lang="ts">
import {
  getSeoCityBySlug,
  getSeoCitySchema,
  seoCityPath,
  SEO_HUB_PATH,
} from '~/data/seo-cities'

const route = useRoute()
const slug = route.params.slug as string
const city = getSeoCityBySlug(slug)

if (!city) {
  throw createError({ statusCode: 404, statusMessage: 'Ciudad SEO no encontrada' })
}

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Posicionamiento web SEO', to: SEO_HUB_PATH },
  { label: city.cityName },
]

usePageSeo({
  title: city.metaTitle,
  description: city.metaDescription,
  path: seoCityPath(city.slug),
  breadcrumbs,
  jsonLd: getSeoCitySchema(city),
})

const agenciaPath = `/agencia-marketing/${city.agenciaSlug}`
</script>

<template>
  <PageHero
    :eyebrow="city.eyebrow"
    :heading="city.h1"
    :intro="city.intro"
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>

  <section class="pt-16 md:pt-24 pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContentSections :sections="city.sections" />

      <CityServiceLinks
        :agencia-to="agenciaPath"
        :agencia-label="`Agencia de marketing en ${city.cityName}`"
      />

      <div class="mt-12">
        <NuxtLink
          :to="SEO_HUB_PATH"
          class="text-[11px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors"
        >
          ← Volver a posicionamiento web SEO
        </NuxtLink>
      </div>
    </div>
  </section>

  <SiteCta />
</template>
