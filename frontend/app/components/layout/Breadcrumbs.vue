<script setup lang="ts">
import type { BreadcrumbItem } from '~/composables/usePageSeo'

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav aria-label="Breadcrumb" class="mb-8">
    <ol
      class="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30"
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
    >
      <li
        v-for="(item, i) in items"
        :key="i"
        class="flex items-center gap-2"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <meta itemprop="position" :content="String(i + 1)">
        <span v-if="i > 0" class="text-white/20" aria-hidden="true">/</span>
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          itemprop="item"
          class="hover:text-blue-500 transition-colors"
        >
          <span itemprop="name">{{ item.label }}</span>
        </NuxtLink>
        <span v-else class="text-white/50" itemprop="name">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
