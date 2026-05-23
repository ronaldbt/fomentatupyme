<script setup lang="ts">
import { ChevronDown } from '@lucide/vue'
import type { NavServiceLink } from '~/data/nav-services'

defineProps<{
  label: string
  to?: string
  children: NavServiceLink[]
}>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}
</script>

<template>
  <div class="relative group/nav" @mouseleave="close">
    <button
      v-if="!to"
      type="button"
      class="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      {{ label }}
      <ChevronDown
        class="w-3.5 h-3.5 opacity-60 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        aria-hidden="true"
      />
    </button>

    <div v-else class="flex items-center gap-0.5">
      <NuxtLink
        :to="to"
        class="text-white hover:text-blue-400 transition-colors group-hover/nav:text-blue-400"
      >
        {{ label }}
      </NuxtLink>
      <button
        type="button"
        class="p-1 text-white/60 hover:text-blue-400 transition-colors"
        :aria-label="`Ver submenú de ${label}`"
        :aria-expanded="isOpen"
        @click.stop="toggle"
      >
        <ChevronDown
          class="w-3.5 h-3.5 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          aria-hidden="true"
        />
      </button>
    </div>

    <div
      class="absolute top-full left-0 pt-3 opacity-0 invisible translate-y-1 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-200 pointer-events-none group-hover/nav:pointer-events-auto z-50"
      :class="{ '!opacity-100 !visible !translate-y-0 pointer-events-auto': isOpen }"
    >
      <div class="w-72 bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden py-2">
        <NuxtLink
          v-for="child in children"
          :key="`${child.to}-${child.title}`"
          :to="child.to"
          class="block px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white/55 hover:text-blue-400 hover:bg-white/5 transition-colors leading-snug"
          @click="close"
        >
          {{ child.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
