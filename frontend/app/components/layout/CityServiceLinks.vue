<script setup lang="ts">
defineProps<{
  seoTo?: string
  seoLabel?: string
  agenciaTo?: string
  agenciaLabel?: string
}>()
</script>

<template>
  <div class="mt-16 pt-12 border-t border-white/10 grid sm:grid-cols-2 gap-4 md:gap-6">
    <NuxtLink
      v-if="seoTo && seoLabel"
      :to="seoTo"
      class="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-blue-500/30 transition-colors"
    >
      <p class="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">SEO local</p>
      <p class="text-sm font-black uppercase italic leading-snug">{{ seoLabel }} →</p>
    </NuxtLink>
    <NuxtLink
      v-if="agenciaTo && agenciaLabel"
      :to="agenciaTo"
      class="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-blue-500/30 transition-colors"
    >
      <p class="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Agencia marketing</p>
      <p class="text-sm font-black uppercase italic leading-snug">{{ agenciaLabel }} →</p>
    </NuxtLink>
    <NuxtLink
      to="/contacto"
      class="p-8 md:p-10 rounded-2xl bg-blue-600 border border-blue-500 hover:bg-blue-700 transition-colors sm:col-span-2"
    >
      <p class="text-[10px] font-black uppercase tracking-widest text-blue-100 mb-2">Cotizar</p>
      <p class="text-sm font-black uppercase italic text-white">Contacto y presupuesto SEO →</p>
    </NuxtLink>
  </div>
</template>
