<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { homeServices } from '~/data/home'
</script>

<template>
  <section id="servicios" class="py-20 bg-[#0F0F0F] border-y border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal max-w-2xl mb-12">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-5">Servicios</span>
        <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-5">
          Marketing digital que resuelve un problema concreto
        </h2>
        <p class="text-white/60 leading-relaxed">
          Seis servicios, un solo objetivo: que tu pyme venda más. Cada uno indica qué problema resuelve y para quién es.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="svc in homeServices"
          :key="svc.num"
          class="scroll-reveal flex flex-col gap-3 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all"
        >
          <span class="text-[10px] font-black tracking-[0.3em] text-white/20">{{ svc.num }}</span>
          <h3 class="text-base font-black uppercase italic">{{ svc.title }}</h3>
          <p class="text-sm text-white/50 flex-1">{{ svc.description }}</p>
          <span class="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">{{ svc.who }}</span>
          <NuxtLink :to="svc.to" class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-blue-400 hover:text-blue-300 mt-2 group">
            {{ svc.cta }}
            <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>
