<script setup lang="ts">
import { Search, Video } from '@lucide/vue'
</script>

<template>
  <section id="servicios" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <span class="text-[12px] font-black uppercase tracking-[0.4em] text-blue-500 block mb-6">Expertiz</span>
          <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Nuestros <span class="italic font-normal">Servicios</span>
          </h2>
        </div>
        <p class="text-white/40 text-sm max-w-xs uppercase tracking-widest leading-loose">
          Soluciones de alto rendimiento para el mercado chileno.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
        <ServiceCard index="01" title="Instagram Ads" desc="Campañas de video diseñadas para convertir scrolls en ventas directas.">
          <template #icon>
            <IconInstagram class="w-8 h-8" />
          </template>
        </ServiceCard>
        <ServiceCard index="02" title="Producción AV" desc="Contenido cinematográfico que eleva el valor percibido de tu marca.">
          <template #icon>
            <Video class="w-8 h-8" />
          </template>
        </ServiceCard>
        <ServiceCard index="03" title="SEO Orgánico" desc="Escala posiciones en Google y domina las búsquedas locales en tu rubro.">
          <template #icon>
            <Search class="w-8 h-8" />
          </template>
        </ServiceCard>
      </div>
    </div>
  </section>
</template>
