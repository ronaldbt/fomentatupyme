<script setup lang="ts">
import {
  LOS_ANGELES_SEO_PATH,
  getLosAngelesSeoSchema,
  losAngelesSeoInterlinks,
  losAngelesSeoMeta,
  losAngelesSeoRubros,
  losAngelesSeoServiceFeatures,
} from '~/data/seo-cities/los-angeles-chile'
import { SEO_HUB_PATH } from '~/data/seo-cities'

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Posicionamiento web SEO', to: SEO_HUB_PATH },
  { label: 'Los Ángeles Chile' },
]

usePageSeo({
  title: losAngelesSeoMeta.title,
  description: losAngelesSeoMeta.description,
  path: LOS_ANGELES_SEO_PATH,
  breadcrumbs,
  jsonLd: getLosAngelesSeoSchema(),
})
</script>

<template>
  <PageHero
    :eyebrow="losAngelesSeoMeta.eyebrow"
    :heading="losAngelesSeoMeta.h1"
    :intro="losAngelesSeoMeta.intro"
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>

  <section class="pt-16 md:pt-24 pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          La oportunidad SEO en Los Ángeles es enorme y casi nadie la está aprovechando
        </h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          Haz la prueba ahora: busca en Google "electricista Los Ángeles Chile", "dentista Los Ángeles Chile" o "abogado Los Ángeles Chile". Los resultados que aparecen no están ahí por ser los mejores — están porque nadie más se preocupó de hacer SEO. Eso significa que con un trabajo bien hecho, tu empresa puede estar en el top 3 de Google en tu rubro en Los Ángeles en pocos meses.
        </p>
      </article>

      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          SEO para los rubros más activos de Los Ángeles
        </h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          La economía de Los Ángeles gira en torno a sectores muy definidos. Tenemos experiencia en:
        </p>
        <ul class="space-y-3 pl-0 list-none">
          <li
            v-for="rubro in losAngelesSeoRubros"
            :key="rubro"
            class="flex items-start gap-3 text-sm text-white/50 font-bold uppercase tracking-wider"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            {{ rubro }}
          </li>
        </ul>
      </article>

      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          Cómo buscan los clientes en Los Ángeles
        </h2>
        <div class="space-y-6">
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            A diferencia de las grandes ciudades, en Los Ángeles los clientes buscan con intención muy local y muy directa: "nombre del servicio + Los Ángeles" o "nombre del servicio + cerca". Eso simplifica enormemente la estrategia SEO — no necesitas competir con todo Chile, solo necesitas ser el más relevante para tu ciudad.
          </p>
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            Trabajamos con esa lógica: keywords específicas, contenido local y Google Maps optimizado para que aparezcas justo cuando alguien en Los Ángeles te está buscando.
          </p>
        </div>
      </article>

      <article>
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 max-w-3xl mb-12 md:mb-14">
          Estrategia SEO completa para tu pyme en Los Ángeles
        </h2>
        <div class="grid md:grid-cols-2 gap-5 md:gap-6">
          <div
            v-for="feature in losAngelesSeoServiceFeatures"
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

      <article class="rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500/50 p-10 md:p-16 text-center shadow-2xl shadow-blue-600/20">
        <h2 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8">
          Somos de Los Ángeles. Hacemos SEO para Los Ángeles.
        </h2>
        <p class="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          No somos una agencia lejana que aplica fórmulas genéricas. Somos FomentaTuPyme, y conocemos tu mercado desde adentro. Cuéntanos sobre tu negocio y te mostramos cómo podemos posicionarte en Google.
        </p>
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center justify-center bg-black text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-xl"
        >
          Hablemos sobre tu negocio →
        </NuxtLink>
      </article>

      <nav class="max-w-3xl" aria-label="Enlaces relacionados">
        <p class="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">También te puede interesar</p>
        <ul class="flex flex-wrap gap-3">
          <li v-for="link in losAngelesSeoInterlinks" :key="link.to">
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
        agencia-to="/agencia-marketing/los-angeles-chile"
        agencia-label="Agencia de marketing en Los Ángeles"
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
