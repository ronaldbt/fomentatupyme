<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

defineProps<{
  index: string
  title: string
  desc: string
}>()
</script>

<template>
  <div class="p-12 bg-white/5 border border-white/10 flex flex-col group transition-colors hover:bg-white/[0.08] hover:scale-[1.02]">
    <div class="flex justify-between items-start mb-8">
      <div class="text-blue-500 transform group-hover:scale-110 transition-transform duration-500">
        <slot name="icon" />
      </div>
      <span class="text-[10px] font-black tracking-[0.3em] text-white/20">{{ index }}</span>
    </div>
    <h3 class="text-2xl font-black uppercase italic mb-4 tracking-tight">{{ title }}</h3>
    <p class="text-white/50 text-sm leading-relaxed mb-10">{{ desc }}</p>
    <div class="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-blue-500 cursor-pointer group-hover:gap-5 transition-all">
      Ver detalles <ArrowRight :size="14" />
    </div>
  </div>
</template>
