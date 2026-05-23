<script setup lang="ts">
import { caseStudies } from '~/data/empresa'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Casos de Éxito y Proyectos | FomentaTuPyme',
  description:
    'Proyectos de marketing digital y SEO para pymes del Biobío: clínicas, retail, gastronomía y más. Ejemplos de soluciones implementadas por FomentaTuPyme.',
  path: '/casos-de-exito',
})
</script>

<template>
  <PageHero
    eyebrow="Casos de éxito"
    h1="Proyectos que fomentan crecimiento real"
    intro="Ejemplos de cómo combinamos SEO, contenido audiovisual y estrategia digital para pymes de Concepción, Los Ángeles, Chillán y el Biobío. Cada caso es distinto; el método es el mismo: medir, ajustar y escalar."
  >
    <template #breadcrumbs>
      <Breadcrumbs
        :items="[
          { label: 'Inicio', to: '/' },
          { label: 'Casos de éxito' },
        ]"
      />
    </template>
  </PageHero>

  <section class="pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
      <p class="text-white/40 text-[10px] font-black uppercase tracking-widest max-w-3xl">
        Los nombres se presentan por rubro y ciudad para resguardar la confidencialidad de nuestros clientes. Los resultados son representativos del tipo de trabajo que entregamos.
      </p>

      <div class="grid gap-8 md:gap-10">
        <article
          v-for="(study, index) in caseStudies"
          :key="study.client"
          class="p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/[0.03]"
        >
          <div class="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <p class="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">
                Proyecto {{ String(index + 1).padStart(2, '0') }}
              </p>
              <h2 class="text-xl md:text-2xl font-black uppercase tracking-tight text-white/90">
                {{ study.client }}
              </h2>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="text-[9px] font-black uppercase tracking-widest bg-white/10 text-white/60 px-3 py-1.5 rounded-full">
                {{ study.industry }}
              </span>
              <span class="text-[9px] font-black uppercase tracking-widest bg-blue-600/30 text-blue-300 px-3 py-1.5 rounded-full">
                {{ study.city }}
              </span>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <h3 class="text-xs font-black uppercase tracking-wider text-white/50 mb-3">
                Desafío
              </h3>
              <p class="text-sm text-white/50 leading-relaxed">
                {{ study.challenge }}
              </p>
            </div>
            <div>
              <h3 class="text-xs font-black uppercase tracking-wider text-white/50 mb-3">
                Solución
              </h3>
              <p class="text-sm text-white/50 leading-relaxed">
                {{ study.solution }}
              </p>
            </div>
            <div>
              <h3 class="text-xs font-black uppercase tracking-wider text-white/50 mb-3">
                Resultados
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="result in study.results"
                  :key="result"
                  class="flex items-start gap-2 text-sm text-white/50"
                >
                  <span class="text-blue-500 shrink-0">✓</span>
                  {{ result }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <article class="rounded-[2rem] bg-white/[0.03] border border-white/10 p-10 md:p-14 text-center">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
          Tu pyme puede ser el próximo caso
        </h2>
        <p class="text-white/50 text-base leading-relaxed max-w-2xl mx-auto mb-10">
          No importa si partes desde cero o ya tienes redes y web: revisamos tu situación y te proponemos un plan con entregables claros.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contacto"
            class="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all"
          >
            Cotizar mi proyecto →
          </NuxtLink>
          <NuxtLink
            to="/por-que-elegirnos"
            class="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Por qué elegirnos
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>

  <SiteCta />
</template>
