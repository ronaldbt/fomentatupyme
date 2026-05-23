<script setup lang="ts">
import {
  TALCAHUANO_SEO_PATH,
  getTalcahuanoSeoSchema,
  talcahuanoSeoInterlinks,
  talcahuanoSeoMeta,
  talcahuanoSeoRubros,
  talcahuanoSeoServiceFeatures,
} from '~/data/seo-cities/talcahuano'
import { SEO_HUB_PATH } from '~/data/seo-cities'

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Posicionamiento web SEO', to: SEO_HUB_PATH },
  { label: 'Talcahuano' },
]

usePageSeo({
  title: talcahuanoSeoMeta.title,
  description: talcahuanoSeoMeta.description,
  path: TALCAHUANO_SEO_PATH,
  breadcrumbs,
  jsonLd: getTalcahuanoSeoSchema(),
})
</script>

<template>
  <PageHero
    :eyebrow="talcahuanoSeoMeta.eyebrow"
    :heading="talcahuanoSeoMeta.h1"
    :intro="talcahuanoSeoMeta.intro"
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>

  <section class="pt-16 md:pt-24 pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          Talcahuano: una ciudad industrial con muy poca competencia digital
        </h2>
        <div class="space-y-6">
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            Mientras Santiago tiene cientos de empresas peleando cada keyword, en Talcahuano la competencia SEO es prácticamente nula. Eso significa una ventaja enorme para quien se mueva primero: posicionarse hoy en Google en Talcahuano es mucho más rápido y barato que en cualquier ciudad grande.
          </p>
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            La zona industrial de Huachipato, el puerto, los servicios navales y el comercio del centro tienen una demanda local real que nadie está capturando orgánicamente. Ese espacio es tuyo si actúas ahora.
          </p>
        </div>
      </article>

      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          Sectores en Talcahuano donde el SEO genera más impacto
        </h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          Talcahuano tiene una estructura económica muy específica. Trabajamos con empresas de:
        </p>
        <ul class="space-y-3 pl-0 list-none">
          <li
            v-for="rubro in talcahuanoSeoRubros"
            :key="rubro"
            class="flex items-start gap-3 text-sm text-white/50 font-bold uppercase tracking-wider"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            {{ rubro }}
          </li>
        </ul>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          Si tu cliente busca en Google antes de llamar o visitar, el SEO es tu canal más rentable.
        </p>
      </article>

      <article>
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 max-w-3xl mb-12 md:mb-14">
          Qué hacemos para posicionarte en Talcahuano
        </h2>
        <div class="grid md:grid-cols-2 gap-5 md:gap-6">
          <div
            v-for="feature in talcahuanoSeoServiceFeatures"
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
          Trabajamos en todo el sector del Gran Concepción
        </h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          Además de Talcahuano, operamos en
          <NuxtLink to="/posicionamiento-web-seo/concepcion" class="text-blue-500 hover:text-blue-400 transition-colors">
            Concepción
          </NuxtLink>,
          Hualpén, San Pedro de la Paz, Coronel y Los Ángeles. Si tu negocio atiende varias comunas, diseñamos una estrategia de
          <NuxtLink to="/posicionamiento-web-seo" class="text-blue-500 hover:text-blue-400 transition-colors">
            posicionamiento web SEO
          </NuxtLink>
          que cubra todo tu territorio.
        </p>
      </article>

      <article class="rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500/50 p-10 md:p-16 text-center shadow-2xl shadow-blue-600/20">
        <h2 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8">
          ¿Listo para que Google trabaje por tu empresa en Talcahuano?
        </h2>
        <p class="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          El diagnóstico inicial es gratuito. Te mostramos cómo está tu sitio hoy y qué se necesita para subir en Google.
        </p>
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center justify-center bg-black text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-xl"
        >
          Quiero mi diagnóstico gratis →
        </NuxtLink>
      </article>

      <nav class="max-w-3xl" aria-label="Enlaces relacionados">
        <p class="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">También te puede interesar</p>
        <ul class="flex flex-wrap gap-3">
          <li v-for="link in talcahuanoSeoInterlinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="text-[11px] font-bold uppercase tracking-wider text-blue-500 hover:text-blue-400 border border-white/10 rounded-full px-4 py-2 hover:border-blue-500/30 transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <CityServiceLinks
        agencia-to="/agencia-marketing/talcahuano"
        agencia-label="Agencia de marketing en Talcahuano"
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
