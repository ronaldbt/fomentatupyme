<script setup lang="ts">
defineProps<{
  caption: string
  rows: { label: string; width: number; value: string; muted?: boolean }[]
  footnote: string
}>()
</script>

<template>
  <div class="p-8 rounded-3xl bg-white/5 border border-white/10" :aria-label="caption">
    <p class="text-[9px] font-black uppercase tracking-[0.18em] text-white/40 mb-5">{{ caption }}</p>
    <div v-for="row in rows" :key="row.label" class="grid grid-cols-[1fr_auto] gap-4 items-center mb-4 last:mb-0">
      <div>
        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">{{ row.label }}</span>
        <div class="h-2 bg-white/5 border border-white/10 rounded-full overflow-hidden mt-2">
          <i
            class="block h-full rounded-full bg-gradient-to-r from-blue-700 to-blue-400 transition-all duration-1000"
            :style="{ width: `${row.width}%` }"
          />
        </div>
      </div>
      <span class="font-mono font-bold text-lg" :class="row.muted ? 'text-white/40' : 'text-blue-300'">{{ row.value }}</span>
    </div>
    <p class="text-[9px] font-black uppercase tracking-[0.18em] text-white/40 mt-5">{{ footnote }}</p>
  </div>
</template>
