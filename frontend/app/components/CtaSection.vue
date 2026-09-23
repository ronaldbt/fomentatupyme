<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { WHATSAPP_HOME } from '~/data/home'
</script>

<template>
  <section id="cotizar" class="py-28 border-t border-white/10 text-center relative overflow-hidden">
    <div class="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(700px_360px_at_50%_0%,rgba(37,99,235,0.25),transparent_70%)] pointer-events-none" aria-hidden="true" />
    <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
      <div class="inline-flex items-center gap-2 bg-white/5 text-blue-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-6 border border-white/10">
        Cotización gratuita · Respuesta &lt;24h hábiles
      </div>
      <p
        class="text-[clamp(2.5rem,7vw,5.25rem)] font-black leading-[0.85] tracking-tighter uppercase mb-6 select-none"
        aria-hidden="true"
      >
        Cotiza<br><span class="text-stroke">Hoy</span>
      </p>
      <h2 class="text-xl md:text-2xl font-bold normal-case tracking-normal mb-5 max-w-xl mx-auto">
        Cotiza tu estrategia de marketing digital en Concepción
      </h2>
      <p class="text-white/60 mb-10 leading-relaxed">
        Cuéntanos tu rubro y tu meta. Te enviamos un diagnóstico inicial y una propuesta a la medida de tu pyme, sin compromiso y sin permanencia forzada.
      </p>
      <div class="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
        <a
          :href="WHATSAPP_HOME"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-[#25D366] text-[#06250f] text-[12px] font-black uppercase tracking-widest hover:brightness-105 transition-all"
        >
          WhatsApp directo
        </a>
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-blue-600 text-white text-[12px] font-black uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-500/30 group"
        >
          Cotizar por formulario
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </NuxtLink>
      </div>
      <p class="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
        Compromiso: <strong class="text-blue-300">propuesta en menos de 24 horas hábiles</strong> · planes mensuales sin permanencia forzada
      </p>
    </div>
  </section>
</template>
