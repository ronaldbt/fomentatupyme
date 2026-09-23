<script setup lang="ts">
import { coverageCities } from '~/data/home'
</script>

<template>
  <section id="cobertura" class="py-24 bg-[#0F0F0F] border-y border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
      <div class="scroll-reveal">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-5">Cobertura</span>
        <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-5">
          Marketing digital para todo el Gran Concepción
        </h2>
        <p class="text-white/60 leading-relaxed mb-7">
          Trabajamos con pymes de toda el área metropolitana de Concepción y la Región del Biobío. Conocemos cómo busca el cliente penquista: por comuna, por barrio y por urgencia.
        </p>
        <div class="flex flex-wrap gap-2" aria-label="Comunas con cobertura">
          <NuxtLink
            v-for="city in coverageCities.linked"
            :key="city.to"
            :to="city.to"
            class="text-[10px] font-black uppercase tracking-[0.18em] border rounded-full px-4 py-2.5 transition-colors"
            :class="city.main
              ? 'bg-blue-600 border-blue-600 text-white'
              : 'border-white/10 text-white/60 hover:border-blue-400 hover:text-blue-400'"
          >
            {{ city.label }}
          </NuxtLink>
          <span
            v-for="label in coverageCities.labels"
            :key="label"
            class="text-[10px] font-black uppercase tracking-[0.18em] border border-white/10 rounded-full px-4 py-2.5 text-white/60"
          >
            {{ label }}
          </span>
        </div>
      </div>
      <div class="scroll-reveal p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center gap-4">
        <p class="text-[9px] font-black uppercase tracking-[0.18em] text-white/40">¿Por qué importa lo local?</p>
        <p class="text-white/60 text-sm leading-relaxed">
          Se estima que cerca de la mitad de las búsquedas en Google tiene intención local. Cuando alguien busca “tu rubro + comuna”, Google prioriza negocios con presencia local sólida: ficha optimizada, reseñas y contenido geolocalizado. Eso es exactamente lo que construimos.
        </p>
        <NuxtLink
          to="/agencia-marketing"
          class="self-start inline-flex px-6 py-3 rounded-2xl border border-white/20 text-[11px] font-black uppercase tracking-widest hover:border-blue-400 hover:text-blue-400 transition-colors"
        >
          Ver hub de ciudades
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
