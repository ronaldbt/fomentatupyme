<script setup lang="ts">
import { SITE_PHONES } from '~/data/site'

withDefaults(
  defineProps<{
    heading?: string
    text?: string
    buttonLabel?: string
    buttonTo?: string
  }>(),
  {
    heading: 'Cotiza tu estrategia de marketing digital hoy',
    text: 'Cuéntanos tu ciudad y rubro. Te respondemos con un plan claro y presupuesto sin letra chica.',
    buttonLabel: 'Contactar',
    buttonTo: '/contacto',
  },
)
</script>

<template>
  <section class="py-20 border-t border-white/10 bg-white/[0.02]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-8 p-10 bg-blue-600 rounded-[2rem]">
        <div class="max-w-xl">
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
            {{ heading }}
          </h2>
          <p class="text-blue-100 text-sm leading-relaxed">
            {{ text }}
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 shrink-0">
          <NuxtLink
            :to="buttonTo"
            class="bg-black text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-all text-center"
          >
            {{ buttonLabel }}
          </NuxtLink>
          <div class="flex flex-col gap-2 shrink-0">
            <a
              v-for="phone in SITE_PHONES"
              :key="phone.tel"
              :href="`tel:${phone.tel}`"
              class="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/20 transition-all text-center whitespace-nowrap"
            >
              {{ phone.display }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
