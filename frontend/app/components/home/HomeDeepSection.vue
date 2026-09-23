<script setup lang="ts">
export interface DeepBenefit {
  code: string
  title: string
  text: string
}

export interface DeepCta {
  label: string
  to: string
  primary?: boolean
}

defineProps<{
  id: string
  kicker: string
  title: string
  reversed?: boolean
  muted?: boolean
  benefits: DeepBenefit[]
  ctas: DeepCta[]
}>()
</script>

<template>
  <section :id="id" class="py-24" :class="muted ? 'bg-[#0F0F0F] border-y border-white/10' : ''">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        :class="reversed ? 'lg:[&>*:first-child]:order-2' : ''"
      >
        <div class="scroll-reveal">
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-5">{{ kicker }}</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-6">
            {{ title }}
          </h2>
          <div class="text-white/60 leading-relaxed space-y-4 mb-8">
            <slot name="lead" />
          </div>
          <div class="grid gap-4 mb-8">
            <div v-for="b in benefits" :key="b.code" class="flex gap-4 items-start">
              <span class="text-[9px] font-black tracking-[0.25em] text-blue-400 border border-blue-500/35 rounded-lg px-2.5 py-1.5 shrink-0">{{ b.code }}</span>
              <p class="text-sm text-white/60">
                <strong class="text-white/90">{{ b.title }}</strong>
                {{ b.text }}
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-4">
            <NuxtLink
              v-for="cta in ctas"
              :key="cta.to + cta.label"
              :to="cta.to"
              class="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all"
              :class="cta.primary
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700'
                : 'border border-white/20 text-white/90 hover:border-blue-400 hover:text-blue-400'"
            >
              {{ cta.label }}
            </NuxtLink>
          </div>
        </div>
        <div class="scroll-reveal">
          <slot name="visual" />
        </div>
      </div>
    </div>
  </section>
</template>
