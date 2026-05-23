<script setup lang="ts">
import { getServiceSchema } from '~/data/schema'
import { getCityBySlug } from '~/data/cities'
import { getSeoSlugForAgencia, seoCityPath, SEO_HUB_PATH } from '~/data/seo-cities'

const route = useRoute()
const slug = route.params.slug as string
const city = getCityBySlug(slug)

if (!city) {
  throw createError({ statusCode: 404, statusMessage: 'Ciudad no encontrada' })
}

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Agencia marketing', to: '/agencia-marketing' },
  { label: city.title },
]

usePageSeo({
  title: city.metaTitle,
  description: city.metaDescription,
  path: `/agencia-marketing/${city.slug}`,
  breadcrumbs,
  jsonLd: getServiceSchema({
    name: `Agencia de marketing en ${city.title}`,
    description: city.metaDescription,
    path: `/agencia-marketing/${city.slug}`,
    serviceType: 'Agencia de Marketing Digital',
  }),
})

const seoSlug = getSeoSlugForAgencia(city.slug)
const seoPath = seoSlug ? seoCityPath(seoSlug) : undefined
</script>

<template>
  <PageHero
    :eyebrow="city.eyebrow"
    :heading="city.h1"
    :intro="city.intro"
    :badge="city.principal ? 'Principal' : undefined"
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>
  <section class="pt-16 md:pt-24 pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContentSections :sections="city.sections" />

      <CityServiceLinks
        v-if="seoPath"
        :seo-to="seoPath"
        :seo-label="`Posicionamiento SEO en ${city.title}`"
      />

      <div v-else class="mt-16 pt-12 border-t border-white/10 grid sm:grid-cols-2 gap-4">
        <NuxtLink
          :to="SEO_HUB_PATH"
          class="p-8 bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors"
        >
          <p class="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">SEO</p>
          <p class="text-sm font-black uppercase italic">Posicionamiento web SEO →</p>
        </NuxtLink>
        <NuxtLink
          to="/contacto"
          class="p-8 bg-blue-600 border border-blue-500 hover:bg-blue-700 transition-colors"
        >
          <p class="text-[10px] font-black uppercase tracking-widest text-blue-100 mb-2">Cotizar</p>
          <p class="text-sm font-black uppercase italic text-white">Contacto y presupuesto →</p>
        </NuxtLink>
      </div>
    </div>
  </section>
  <SiteCta />
</template>
