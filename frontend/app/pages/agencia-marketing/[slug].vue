<script setup lang="ts">
import { getFaqSchema, getServiceSchema } from '~/data/schema'
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

const jsonLd = [
  getServiceSchema({
    name: `Agencia de marketing digital en ${city.title}`,
    description: city.metaDescription,
    path: `/agencia-marketing/${city.slug}`,
    serviceType: 'Agencia de Marketing Digital',
  }),
  ...(city.faqs?.length ? [getFaqSchema(city.faqs)] : []),
]

usePageSeo({
  title: city.metaTitle,
  description: city.metaDescription,
  path: `/agencia-marketing/${city.slug}`,
  breadcrumbs,
  jsonLd,
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

      <article v-if="city.whyUs" class="mt-20 md:mt-24 max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          {{ city.whyUs.heading }}
        </h2>
        <ul class="space-y-3 pl-0 list-none">
          <li
            v-for="item in city.whyUs.items"
            :key="item"
            class="flex items-start gap-3 text-sm md:text-base text-white/50 leading-relaxed"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
            {{ item }}
          </li>
        </ul>
        <NuxtLink
          v-if="city.whyUs.linkTo && city.whyUs.linkLabel"
          :to="city.whyUs.linkTo"
          class="inline-flex text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
        >
          {{ city.whyUs.linkLabel }} →
        </NuxtLink>
      </article>

      <CityFaqSection
        v-if="city.faqs?.length"
        :faqs="city.faqs"
      />

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
  <SiteCta
    v-if="city.cta"
    :heading="city.cta.heading"
    :text="city.cta.text"
    :button-label="city.cta.buttonLabel"
  />
  <SiteCta v-else />
</template>
