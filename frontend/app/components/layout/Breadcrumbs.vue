<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<template>
  <nav aria-label="Breadcrumb" class="mb-8">
    <ol class="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30">
      <li v-for="(item, i) in items" :key="i" class="flex items-center gap-2">
        <span v-if="i > 0" class="text-white/20">/</span>
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          class="hover:text-blue-500 transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-white/50">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
