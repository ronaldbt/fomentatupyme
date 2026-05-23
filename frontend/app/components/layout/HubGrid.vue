<script setup lang="ts">
import type { HubLink } from '~/data/types'

defineProps<{
  links: HubLink[]
}>()
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="p-10 bg-white/5 border border-white/10 flex flex-col group hover:bg-white/[0.08] transition-colors"
    >
      <div class="flex justify-between items-start mb-6">
        <h2 class="text-xl font-black uppercase italic tracking-tight group-hover:text-blue-500 transition-colors">
          {{ link.title }}
        </h2>
        <span
          v-if="link.badge"
          class="text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white px-2 py-1 rounded-full shrink-0 ml-2"
        >
          {{ link.badge }}
        </span>
      </div>
      <p class="text-white/50 text-sm leading-relaxed mb-8 flex-1">{{ link.description }}</p>
      <span class="text-[10px] font-black uppercase tracking-widest text-blue-500 group-hover:gap-3 inline-flex items-center gap-2 transition-all">
        Ver más →
      </span>
    </NuxtLink>
  </div>
</template>
