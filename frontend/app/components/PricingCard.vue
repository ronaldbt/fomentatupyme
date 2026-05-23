<script setup lang="ts">
const props = defineProps<{
  name: string
  price: string
  features: string[]
  popular?: boolean
  cta: string
}>()

const cn = useCn()
</script>

<template>
  <div
    :class="cn(
      'p-12 border flex flex-col transition-all relative overflow-hidden hover:-translate-y-1',
      popular
        ? 'bg-blue-600 text-white border-blue-500 shadow-2xl shadow-blue-500/20 z-10'
        : 'bg-white/5 text-white border-white/10',
    )"
  >
    <div
      v-if="popular"
      class="absolute top-8 right-8 bg-black text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
    >
      Recomendado
    </div>
    <div class="mb-12">
      <h3 :class="cn('text-xs font-black uppercase tracking-[0.3em] mb-6', popular ? 'text-blue-100' : 'text-blue-500')">
        {{ name }}
      </h3>
      <div class="flex items-baseline gap-2">
        <span class="text-sm font-black opacity-50">$</span>
        <span class="text-5xl font-black tracking-tighter font-mono">{{ price }}</span>
        <span class="text-[10px] font-black uppercase tracking-widest opacity-40 ml-2">/ mensual</span>
      </div>
    </div>

    <ul class="space-y-5 mb-14">
      <li
        v-for="(feature, i) in features"
        :key="i"
        class="flex items-center gap-4 text-xs font-bold uppercase tracking-wider"
      >
        <span :class="cn('w-1.5 h-1.5 rounded-full shrink-0', popular ? 'bg-white' : 'bg-blue-500')" />
        <span :class="popular ? 'text-white/90' : 'text-white/50'">{{ feature }}</span>
      </li>
    </ul>

    <button
      type="button"
      :class="cn(
        'w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all',
        popular
          ? 'bg-black text-white hover:bg-zinc-900'
          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10',
      )"
    >
      {{ cta }}
    </button>
  </div>
</template>
