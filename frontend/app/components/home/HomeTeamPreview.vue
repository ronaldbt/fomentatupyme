<script setup lang="ts">
import { teamMembers } from '~/data/empresa'

function initials(name: string) {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase()
}
</script>

<template>
  <section id="equipo" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
      <div class="scroll-reveal">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-5">Quiénes somos</span>
        <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-5">
          Un equipo penquista, con nombre y apellido
        </h2>
        <p class="text-white/60 leading-relaxed">
          FOMENTA TU PYME SPA nace en Concepción para resolver un problema que vivimos de cerca: pymes con buen producto e invisible presencia digital. No somos una franquicia de Santiago; estamos en el Biobío, atendemos en persona o por videollamada y respondemos en menos de 24 horas hábiles.
        </p>
        <NuxtLink
          to="/quienes-somos"
          class="inline-flex mt-7 px-8 py-4 rounded-2xl border border-white/20 text-[11px] font-black uppercase tracking-widest hover:border-blue-400 hover:text-blue-400 transition-colors"
        >
          Conoce la historia completa
        </NuxtLink>
      </div>
      <div class="grid gap-4">
        <article
          v-for="member in teamMembers"
          :key="member.name"
          class="scroll-reveal flex gap-5 items-center p-6 rounded-3xl bg-white/5 border border-white/10"
        >
          <span class="w-[76px] h-[76px] rounded-2xl bg-gradient-to-br from-blue-700 to-blue-400 grid place-items-center font-black text-xl shrink-0">
            {{ initials(member.name) }}
          </span>
          <div>
            <b class="block uppercase tracking-wide text-sm">{{ member.name }}</b>
            <span class="text-[9px] font-black uppercase tracking-[0.2em] text-blue-300 block my-1">{{ member.role }}</span>
            <p class="text-sm text-white/50">{{ member.bio }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
