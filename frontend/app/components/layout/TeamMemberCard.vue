<script setup lang="ts">
import type { TeamMember } from '~/data/empresa'

defineProps<{
  member: TeamMember
}>()
</script>

<template>
  <article class="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
    <p class="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-3">
      {{ member.role }}
    </p>
    <h3 class="text-2xl font-black uppercase tracking-tight italic text-white/90 mb-4">
      {{ member.name }}
    </h3>
    <p class="text-white/50 text-sm md:text-base leading-relaxed mb-6">
      {{ member.bio }}
    </p>
    <ul class="space-y-2">
      <li
        v-for="item in member.focus"
        :key="item"
        class="flex items-start gap-3 text-xs font-bold uppercase tracking-wider text-white/50"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
        {{ item }}
      </li>
    </ul>
  </article>
</template>
