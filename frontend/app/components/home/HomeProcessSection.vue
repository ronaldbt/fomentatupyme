<script setup lang="ts">
import { homeProcessSteps } from '~/data/home'
</script>

<template>
  <section id="proceso" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal max-w-2xl mb-12">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-5">Proceso</span>
        <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-5">
          Así hacemos crecer tu pyme, paso a paso
        </h2>
        <p class="text-white/60 leading-relaxed">
          Metodología FOMENTA: cuatro fases con entregables concretos. Sabes qué recibes en cada una.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <article
          v-for="step in homeProcessSteps"
          :key="step.num"
          class="scroll-reveal p-8 bg-white/5 border border-white/10 rounded-none"
        >
          <p class="text-[10px] font-black tracking-[0.3em] text-white/20 mb-5">{{ step.num }}</p>
          <h3 class="text-lg font-black uppercase italic mb-3">{{ step.title }}</h3>
          <p class="text-sm text-white/50 leading-relaxed mb-4">{{ step.description }}</p>
          <p class="text-[9px] font-black uppercase tracking-[0.18em] text-blue-300">{{ step.deliverable }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
