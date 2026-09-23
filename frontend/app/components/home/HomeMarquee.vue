<script setup lang="ts">
import { marqueeKeywords } from '~/data/home'

const track = [...marqueeKeywords, ...marqueeKeywords]
</script>

<template>
  <div class="border-y border-white/10 py-4 overflow-hidden bg-[#0F0F0F]" aria-hidden="true">
    <div class="flex gap-12 w-max animate-marquee text-[11px] font-black uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">
      <span v-for="(kw, i) in track" :key="i">
        {{ kw }} <b class="text-blue-400">·</b>
      </span>
    </div>
  </div>
</template>
