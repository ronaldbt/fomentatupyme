<script setup lang="ts">
import type { ContentSection } from '~/data/types'

defineProps<{
  sections: ContentSection[]
}>()
</script>

<template>
  <div class="space-y-20 md:space-y-24 max-w-3xl">
    <article
      v-for="(section, i) in sections"
      :key="i"
      class="space-y-8"
    >
      <h2
        v-if="section.heading"
        class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90"
      >
        {{ section.heading }}
      </h2>
      <div class="space-y-6">
        <p
          v-for="(p, j) in section.paragraphs"
          :key="j"
          class="text-white/50 text-base md:text-lg leading-relaxed"
        >
          {{ p }}
        </p>
      </div>
      <ul
        v-if="section.list?.length"
        class="space-y-3 pl-0 list-none"
      >
        <li
          v-for="(item, k) in section.list"
          :key="k"
          class="flex items-start gap-3 text-sm text-white/50 font-bold uppercase tracking-wider"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
          {{ item }}
        </li>
      </ul>
    </article>
  </div>
</template>
