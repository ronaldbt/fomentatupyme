<script setup lang="ts">
import { whyChooseUs } from '~/data/empresa'

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Por qué elegirnos' },
]

usePageSeo({
  title: 'Por Qué Elegirnos | Ventajas FomentaTuPyme',
  description:
    'Ventajas competitivas de FomentaTuPyme: SEO + audiovisual, enfoque pyme del Biobío, emprendedores con experiencia real y resultados medibles. Cotiza hoy.',
  path: '/por-que-elegirnos',
  breadcrumbs,
})
</script>

<template>
  <PageHero
    eyebrow="Por qué elegirnos"
    heading="Marketing digital hecho por quienes ya impulsaron su propia empresa"
    intro="No somos una agencia genérica. Combinamos comunicación audiovisual y SEO técnico con trato cercano, precios de pyme y foco en la Región del Biobío."
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
  </PageHero>

  <section class="pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
      <article class="max-w-3xl space-y-6">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          Diferenciación en el sector
        </h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed">
          Muchas agencias venden packs iguales para todos. Nosotros armamos estrategia según tu rubro, ciudad y etapa: si necesitas aparecer en Google, producir reels o ambos, el plan nace de una conversación real — no de una plantilla de Santiago.
        </p>
      </article>

      <article>
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 mb-12 md:mb-14">
          Ventajas competitivas
        </h2>
        <div class="grid md:grid-cols-2 gap-5 md:gap-6">
          <div
            v-for="item in whyChooseUs"
            :key="item.title"
            class="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
          >
            <h3 class="text-sm font-black uppercase tracking-wider text-blue-500 mb-4">
              {{ item.title }}
            </h3>
            <p class="text-sm md:text-base text-white/50 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </article>

      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          Frente a agencias tradicionales
        </h2>
        <ul class="space-y-4">
          <li
            v-for="point in [
              'Sin contratos eternos ni letra chica en “alcance creativo”.',
              'Reportes que entiendes: llamadas, leads, posiciones, no solo impresiones.',
              'Páginas por ciudad y servicio con contenido único, no duplicado para Google.',
              'Equipo reducido = respuesta rápida y dueños involucrados en tu cuenta.',
            ]"
            :key="point"
            class="flex items-start gap-3 text-sm text-white/50 font-bold uppercase tracking-wider"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            {{ point }}
          </li>
        </ul>
      </article>

      <article class="rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500/50 p-10 md:p-14 text-center">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
          ¿Listo para comparar con tu situación actual?
        </h2>
        <p class="text-blue-100 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Cuéntanos tu negocio y te decimos qué haríamos en los primeros 90 días — sin compromiso.
        </p>
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center justify-center bg-black text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-all"
        >
          Quiero una propuesta →
        </NuxtLink>
      </article>

      <NuxtLink
        to="/quienes-somos"
        class="text-[11px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors"
      >
        ← Conocer al equipo
      </NuxtLink>
    </div>
  </section>

  <SiteCta />
</template>
