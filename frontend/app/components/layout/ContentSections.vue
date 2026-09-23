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
      :class="section.level === 3 ? 'pl-0 md:pl-4 border-l border-white/10 md:ml-2' : ''"
    >
      <h2
        v-if="section.heading && (section.level ?? 2) === 2"
        class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90"
      >
        {{ section.heading }}
      </h2>
      <h3
        v-else-if="section.heading"
        class="text-xl md:text-2xl font-black uppercase tracking-tight text-white/85"
      >
        {{ section.heading }}
      </h3>
      <div v-if="section.paragraphs.length" class="space-y-6">
        <p
          v-for="(p, j) in section.paragraphs"
          :key="j"
          class="text-white/50 text-base md:text-lg leading-relaxed"
        >
          {{ p }}
        </p>
      </div>
      <ul
        v-if="section.items?.length"
        class="space-y-5 pl-0 list-none"
      >
        <li
          v-for="(item, k) in section.items"
          :key="k"
          class="flex items-start gap-3"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
          <p class="text-sm md:text-base text-white/50 leading-relaxed">
            <strong class="text-white/85 font-bold">{{ item.title }}:</strong>
            {{ item.text }}
          </p>
        </li>
      </ul>
      <ol
        v-if="section.orderedList?.length"
        class="space-y-4 pl-0 list-none"
      >
        <li
          v-for="(item, k) in section.orderedList"
          :key="k"
          class="flex items-start gap-4 text-sm md:text-base text-white/50 leading-relaxed"
        >
          <span
            class="shrink-0 w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-black grid place-items-center"
            aria-hidden="true"
          >{{ k + 1 }}</span>
          <span>{{ item }}</span>
        </li>
      </ol>
      <ul
        v-else-if="section.list?.length"
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
      <div v-if="section.afterList?.length" class="space-y-6">
        <p
          v-for="(p, j) in section.afterList"
          :key="`after-${j}`"
          class="text-white/50 text-base md:text-lg leading-relaxed"
        >
          {{ p }}
        </p>
      </div>
      <p
        v-if="section.relatedLink"
        class="text-white/50 text-base md:text-lg leading-relaxed"
      >
        {{ section.relatedLink.before }}
        <NuxtLink
          :to="section.relatedLink.to"
          class="text-blue-400 hover:text-blue-300 underline underline-offset-4 font-semibold transition-colors"
        >
          {{ section.relatedLink.label }}
        </NuxtLink>{{ section.relatedLink.after ?? '' }}
      </p>
    </article>
  </div>
</template>
