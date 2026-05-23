<script setup lang="ts">
import { ArrowRight, Play } from '@lucide/vue'
</script>

<template>
  <section class="relative pt-40 pb-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 bg-white/5 text-blue-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">
            <span>Concepción, Biobío · Chile</span>
          </div>
          <h1 class="text-xl sm:text-2xl font-black uppercase tracking-tight leading-snug mb-6 text-white/90 max-w-xl">
            Agencia de Marketing en Concepción, Chile — Haz Crecer Tu Pyme
          </h1>
          <p class="text-[70px] sm:text-[100px] lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-8" aria-hidden="true">
            Impulsa<br><span class="text-stroke">Tu Pyme</span>
          </p>
          <p class="text-lg text-white/60 mb-12 max-w-md leading-relaxed">
            Transformamos empresas de Concepción en referentes digitales con estrategias de alto impacto visual y posicionamiento inteligente.
          </p>
          <div class="flex flex-col sm:flex-row gap-6">
            <NuxtLink
              to="/contacto"
              class="bg-blue-600 text-white px-10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-blue-500/30"
            >
              Comenzar ahora
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </NuxtLink>
            <a
              href="#packs"
              class="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center"
            >
              Casos de Éxito
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 relative mt-12 lg:mt-0">
          <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5">
            <img
              src="/images/hero_marketing_chile.png"
              alt="Agencia de marketing digital en Concepción, Chile — FomentaTuPyme"
              width="800"
              height="1000"
              class="w-full aspect-square lg:aspect-[4/5] object-cover"
              style="filter: grayscale(20%)"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 pointer-events-none" />
            <div class="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10">
              <div class="text-white">
                <p class="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Audiovisual</p>
                <p class="text-2xl font-bold italic tracking-tight">FomentaTuPyme AV</p>
              </div>
              <div class="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 text-white flex items-center justify-center">
                <Play class="w-5 h-5 fill-white stroke-white" />
              </div>
            </div>
          </div>

          <div class="absolute -top-6 -right-6 bg-blue-600 p-8 rounded-3xl shadow-2xl hidden md:block animate-float z-10">
            <div class="text-4xl font-black italic">+1.5M</div>
            <div class="text-[10px] font-black uppercase tracking-widest text-blue-100 opacity-80 mt-1">Views Generadas</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
