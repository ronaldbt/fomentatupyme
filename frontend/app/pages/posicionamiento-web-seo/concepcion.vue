<script setup lang="ts">
import {
  CONCEPCION_SEO_PATH,
  concepcionSeoMeta,
  concepcionSeoRubros,
  concepcionSeoServiceFeatures,
  getConcepcionSeoSchema,
} from '~/data/seo-cities/concepcion'
import { SEO_HUB_PATH } from '~/data/seo-cities'

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Posicionamiento web SEO', to: SEO_HUB_PATH },
  { label: 'Concepción' },
]

usePageSeo({
  title: concepcionSeoMeta.title,
  description: concepcionSeoMeta.description,
  path: CONCEPCION_SEO_PATH,
  breadcrumbs,
  jsonLd: getConcepcionSeoSchema(),
})
</script>

<template>
  <PageHero
    :eyebrow="concepcionSeoMeta.eyebrow"
    :h1="concepcionSeoMeta.h1"
    :intro="concepcionSeoMeta.intro"
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>

  <section class="pt-16 md:pt-24 pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          ¿Por qué el SEO es clave para crecer en Concepción?
        </h2>
        <div class="space-y-6">
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            Concepción es la segunda ciudad más importante de Chile y una de las más competitivas del país. Hay cientos de empresas compitiendo por los mismos clientes, y las que aparecen en la primera página de Google se llevan la mayoría. Con una estrategia SEO bien ejecutada, tu pyme puede superar a competidores mucho más grandes simplemente siendo más relevante para Google.
          </p>
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            Rubros como clínicas, ferreterías, constructoras, servicios profesionales y comercio local tienen una oportunidad enorme en Concepción: la mayoría aún no invierte en SEO, lo que significa que llegar primero hoy es más fácil que en 12 meses.
          </p>
        </div>
      </article>

      <article>
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 max-w-3xl mb-12 md:mb-14">
          Qué incluye nuestro servicio SEO en Concepción
        </h2>
        <div class="grid md:grid-cols-2 gap-5 md:gap-6">
          <div
            v-for="feature in concepcionSeoServiceFeatures"
            :key="feature.title"
            class="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
          >
            <h3 class="text-sm font-black uppercase tracking-wider text-blue-500 mb-4">
              {{ feature.title }}
            </h3>
            <p class="text-sm md:text-base text-white/50 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </article>

      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          Empresas de Concepción que deberían estar en Google
        </h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          El SEO funciona para cualquier rubro, pero es especialmente poderoso para negocios locales en Concepción como:
        </p>
        <ul class="space-y-3 pl-0 list-none">
          <li
            v-for="rubro in concepcionSeoRubros"
            :key="rubro"
            class="flex items-start gap-3 text-sm text-white/50 font-bold uppercase tracking-wider"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            {{ rubro }}
          </li>
        </ul>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          Si tu cliente potencial busca en Google antes de comprar o contratar, necesitas estar ahí.
        </p>
      </article>

      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          ¿Por qué FomentaTuPyme y no una agencia de Santiago?
        </h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          Las agencias de Santiago aplican estrategias genéricas sin conocer el mercado local. Nosotros trabajamos en el Biobío, conocemos Concepción, sus barrios, su competencia y cómo buscan los clientes de la región. Eso se traduce en estrategias más precisas y resultados más rápidos para tu pyme.
        </p>
      </article>

      <article class="rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500/50 p-10 md:p-16 text-center shadow-2xl shadow-blue-600/20">
        <h2 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8">
          Cotiza tu plan SEO en Concepción — diagnóstico gratis
        </h2>
        <p class="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Cuéntanos sobre tu negocio y te hacemos una propuesta personalizada sin costo ni compromiso. El primer diagnóstico es completamente gratuito.
        </p>
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center justify-center bg-black text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-xl"
        >
          Quiero aparecer en Google →
        </NuxtLink>
      </article>

      <CityServiceLinks
        agencia-to="/agencia-marketing/concepcion"
        agencia-label="Agencia de marketing en Concepción"
      />

      <div>
        <NuxtLink
          :to="SEO_HUB_PATH"
          class="text-[11px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors"
        >
          ← Volver a posicionamiento web SEO
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
