<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { homeHero } from '~/data/home'

const barHeights = [34, 52, 41, 66, 58, 80, 72, 96]
</script>

<template>
  <section class="relative pt-32 pb-20 lg:pt-36 overflow-hidden">
    <div
      class="pointer-events-none absolute inset-x-[-10%] top-[-20%] h-[70%] bg-[radial-gradient(600px_380px_at_75%_20%,rgba(37,99,235,0.22),transparent_70%)]"
      aria-hidden="true"
    />
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-white/5 text-blue-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-6 border border-white/10">
            <span aria-hidden="true">●</span>
            {{ homeHero.eyebrow }}
          </div>
          <h1 class="text-xl sm:text-2xl font-black tracking-tight leading-snug mb-6 text-white/90 max-w-xl">
            {{ homeHero.h1 }}
          </h1>
          <p
            class="text-[clamp(3.5rem,11vw,7.5rem)] font-black leading-[0.85] tracking-tighter uppercase mb-8 select-none"
            aria-hidden="true"
          >
            {{ homeHero.displayLine1 }}<br><span class="text-stroke">{{ homeHero.displayLine2 }}</span>
          </p>
          <p class="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
            {{ homeHero.lead }}
          </p>
          <div class="flex flex-col sm:flex-row flex-wrap gap-5 mb-10">
            <NuxtLink
              to="/contacto"
              class="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 group"
            >
              Solicitar cotización gratis
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </NuxtLink>
            <NuxtLink
              to="/casos-de-exito"
              class="inline-flex items-center justify-center bg-white/5 text-white border border-white/20 px-10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              Ver casos de éxito
            </NuxtLink>
          </div>
          <div class="flex flex-wrap gap-8" aria-label="Indicadores de la agencia">
            <div v-for="item in homeHero.proof" :key="item.label">
              <strong class="block font-mono text-xl font-bold text-white">{{ item.value }}</strong>
              <span class="text-[9px] font-black uppercase tracking-[0.22em] text-white/40">{{ item.label }}</span>
            </div>
          </div>
        </div>

        <div class="relative min-h-[420px] lg:min-h-[600px]" aria-hidden="true">
          <div class="absolute top-[8%] right-[6%] w-[min(330px,86%)] p-6 rounded-3xl bg-[#0f0f0f]/90 border border-white/20 shadow-2xl backdrop-blur-sm">
            <div class="flex items-center justify-between mb-5">
              <b class="text-[11px] font-black uppercase tracking-[0.22em]">FomentaTuPyme AV</b>
              <span class="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-blue-300">
                <i class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-dot" />
                En vivo
              </span>
            </div>
            <div class="flex items-end gap-1.5 h-24 mb-5">
              <i
                v-for="(h, idx) in barHeights"
                :key="idx"
                class="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400 origin-bottom animate-bar-grow"
                :class="idx % 2 ? 'opacity-55' : ''"
                :style="{ height: `${h}%`, animationDelay: `${idx * 0.05}s` }"
              />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white/5 border border-white/10 rounded-xl p-3">
                <b class="font-mono text-base block">1.5M+</b>
                <span class="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">Views</span>
              </div>
              <div class="bg-white/5 border border-white/10 rounded-xl p-3">
                <b class="font-mono text-base block">3.2x</b>
                <span class="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">ROI proy.</span>
              </div>
              <div class="bg-white/5 border border-white/10 rounded-xl p-3">
                <b class="font-mono text-base block">Top 3</b>
                <span class="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">Google Maps*</span>
              </div>
              <div class="bg-white/5 border border-white/10 rounded-xl p-3">
                <b class="font-mono text-base block">24/7</b>
                <span class="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">Tracking</span>
              </div>
            </div>
          </div>
          <div class="absolute left-0 bottom-[18%] lg:bottom-[84px] flex items-center gap-3 px-5 py-4 rounded-3xl bg-[#0f0f0f]/90 border border-white/20 shadow-xl animate-float-slow">
            <span class="w-10 h-10 rounded-xl bg-blue-600/20 grid place-items-center text-blue-400 text-sm">▶</span>
            <span>
              <b class="block text-[11px] uppercase tracking-wider">Video corporativo</b>
              <span class="text-[9px] font-black uppercase tracking-wider text-white/40">4K · Guion · Edición</span>
            </span>
          </div>
          <div class="absolute right-0 bottom-0 flex items-center gap-3 px-5 py-4 rounded-3xl bg-[#0f0f0f]/90 border border-white/20 shadow-xl animate-float">
            <span class="w-10 h-10 rounded-xl bg-blue-600/20 grid place-items-center text-blue-400 text-sm">⌕</span>
            <span>
              <b class="block text-[11px] uppercase tracking-wider">SEO Local activo</b>
              <span class="text-[9px] font-black uppercase tracking-wider text-white/40">Concepción · Biobío</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
