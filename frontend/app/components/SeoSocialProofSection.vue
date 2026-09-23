<script setup lang="ts">
import { caseStudies } from '~/data/empresa'
</script>

<template>
  <section id="resultados" class="py-24 border-y border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal max-w-3xl mb-12">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-5">Resultados</span>
        <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-5">
          Empresas de Concepción que ya crecen con nosotros
        </h2>
        <p class="text-white/60 leading-relaxed">
          Somos la
          <strong class="text-white/80">agencia de marketing en Concepción</strong>
          que acompaña a comercios, servicios y emprendedores del Gran Concepción y la Región del Biobío. Desde
          <NuxtLink to="/posicionamiento-web-seo/concepcion" class="text-blue-400 underline underline-offset-4">posicionamiento web en Concepción</NuxtLink>
          hasta campañas en Instagram y TikTok: resultados medibles, no promesas.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4 mb-10 scroll-reveal">
        <div class="p-10 bg-white/5 border border-white/10 rounded-3xl text-center">
          <b class="font-mono text-4xl text-blue-400 block">+200</b>
          <span class="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">Pymes fomentadas</span>
        </div>
        <div class="p-10 bg-white/5 border border-white/10 rounded-3xl text-center">
          <b class="font-mono text-4xl text-blue-400 block">+1.5M</b>
          <span class="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">Views generadas</span>
        </div>
        <div class="p-10 bg-white/5 border border-white/10 rounded-3xl text-center">
          <b class="font-mono text-4xl text-blue-400 block">3.2x</b>
          <span class="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">ROI promedio proyectado</span>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <article
          v-for="study in caseStudies.slice(0, 3)"
          :key="study.client"
          class="scroll-reveal flex flex-col gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 h-full"
        >
          <span class="text-blue-400 tracking-widest text-sm" aria-label="Proyecto verificado">★★★★★</span>
          <p class="text-sm text-white/60 italic flex-1">
            “{{ study.results[0] }}. {{ study.solution }}”
          </p>
          <footer>
            <b class="block text-[11px] uppercase tracking-wide">{{ study.client }}</b>
            <span class="text-[9px] font-black uppercase tracking-[0.18em] text-white/40">{{ study.industry }} · {{ study.city }}</span>
          </footer>
        </article>
      </div>

      <p class="scroll-reveal mt-8 text-center">
        <NuxtLink to="/casos-de-exito" class="text-[11px] font-black uppercase tracking-widest text-blue-400 hover:text-blue-300">
          Ver todos los casos de éxito →
        </NuxtLink>
      </p>
    </div>
  </section>
</template>
