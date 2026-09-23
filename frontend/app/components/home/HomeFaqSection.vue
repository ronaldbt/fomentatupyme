<script setup lang="ts">
import { homeFaqs } from '~/data/home'

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="preguntas-frecuentes" class="py-24 bg-[#0F0F0F] border-y border-white/10">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal mb-10">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-5">FAQ</span>
        <h2 class="text-3xl md:text-4xl font-black uppercase tracking-tighter italic leading-tight">
          Preguntas frecuentes sobre marketing en Concepción
        </h2>
      </div>
      <div
        v-for="(faq, index) in homeFaqs"
        :key="faq.question"
        class="scroll-reveal border border-white/10 rounded-2xl bg-white/5 overflow-hidden mb-3"
      >
        <button
          type="button"
          class="w-full flex justify-between items-center gap-6 text-left px-6 py-5"
          :aria-expanded="openIndex === index"
          @click="toggle(index)"
        >
          <h3 class="text-base font-bold normal-case tracking-normal">{{ faq.question }}</h3>
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
    </div>
  </section>
</template>
