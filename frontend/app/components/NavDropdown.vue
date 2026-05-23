<script setup lang="ts">
import { ChevronDown } from '@lucide/vue'
import type { HubLink } from '~/data/types'

defineProps<{
  label: string
  hubTo: string
  items: HubLink[]
}>()
</script>

<template>
  <div class="relative group">
    <NuxtLink
      :to="hubTo"
      class="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors group-hover:text-blue-400"
    >
      {{ label }}
      <ChevronDown class="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
    </NuxtLink>

    <div
      class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50"
    >
      <div class="w-80 bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
        <div class="py-2">
          <NuxtLink
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="block px-5 py-3.5 hover:bg-white/5 transition-colors group/item"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-white/90 group-hover/item:text-blue-400 transition-colors">
                {{ item.title }}
              </span>
              <span
                v-if="item.badge"
                class="text-[8px] font-black uppercase tracking-widest bg-blue-600 text-white px-2 py-0.5 rounded-full shrink-0"
              >
                {{ item.badge }}
              </span>
            </div>
            <span class="text-[10px] text-white/35 mt-1 block normal-case tracking-normal leading-snug">
              {{ item.description }}
            </span>
          </NuxtLink>
        </div>
        <NuxtLink
          :to="hubTo"
          class="block px-5 py-3.5 border-t border-white/10 text-[10px] font-black uppercase tracking-widest text-blue-500 hover:bg-white/5 transition-colors"
        >
          Ver todos →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
