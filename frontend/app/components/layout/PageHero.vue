<script setup lang="ts">
defineProps<{
  eyebrow: string
  h1: string
  intro: string
  badge?: string
}>()
</script>

<template>
  <section class="pt-28 md:pt-36 pb-20 md:pb-28 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot name="breadcrumbs" />
      <div class="max-w-3xl">
        <div class="flex flex-wrap items-center gap-3 mb-8">
          <span class="text-[12px] font-black uppercase tracking-[0.4em] text-blue-500">{{ eyebrow }}</span>
          <span
            v-if="badge"
            class="text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white px-3 py-1 rounded-full"
          >
            {{ badge }}
          </span>
        </div>
        <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-10">
          {{ h1 }}
        </h1>
        <p class="text-lg md:text-xl text-white/50 leading-relaxed">
          {{ intro }}
        </p>
      </div>
      <slot />
    </div>
  </section>
</template>
