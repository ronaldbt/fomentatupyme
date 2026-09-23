<script setup lang="ts">
import type { CityFaq } from '~/data/types'

const props = defineProps<{
  faqs: CityFaq[]
  heading?: string
}>()

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="preguntas-frecuentes" class="mt-20 md:mt-24 max-w-3xl">
    <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 mb-8">
      {{ heading ?? 'Preguntas frecuentes' }}
    </h2>
    <div
      v-for="(faq, index) in props.faqs"
      :key="faq.question"
      class="border border-white/10 rounded-2xl bg-white/5 overflow-hidden mb-3"
    >
      <button
        type="button"
        class="w-full flex justify-between items-center gap-6 text-left px-6 py-5"
        :aria-expanded="openIndex === index"
        @click="toggle(index)"
      >
        <h3 class="text-base font-bold normal-case tracking-normal text-white/90">{{ faq.question }}</h3>
        <span
          class="shrink-0 w-8 h-8 rounded-lg border border-white/20 grid place-items-center font-bold transition-transform"
          :class="openIndex === index ? 'rotate-45 border-blue-400 text-blue-400' : ''"
          aria-hidden="true"
        >+</span>
      </button>
      <div
        class="overflow-hidden transition-all duration-300"
        :class="openIndex === index ? 'max-h-96' : 'max-h-0'"
      >
        <p class="px-6 pb-5 text-white/60 text-sm leading-relaxed">{{ faq.answer }}</p>
      </div>
    </div>
  </section>
</template>
