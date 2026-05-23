<script setup lang="ts">
import { companyValues, teamMembers } from '~/data/empresa'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Quiénes Somos | Equipo FomentaTuPyme Chile',
  description:
    'Conoce a Juan Pablo Gallardo y Ronald Bravo: comunicación audiovisual y SEO con 15 años de experiencia. Dos emprendedores del Biobío que impulsan pymes.',
  path: '/quienes-somos',
})
</script>

<template>
  <PageHero
    eyebrow="Quiénes somos"
    h1="Dos amigos, dos oficios, una misma meta: que tu pyme crezca"
    intro="FomentaTuPyme nace cuando dos emprendedores del sur de Chile — uno del audiovisual, otro del código y el SEO — decidieron unir fuerzas después de impulsar sus propias empresas y ver lo difícil que es encontrar marketing serio sin pagar de más."
  >
    <template #breadcrumbs>
      <Breadcrumbs
        :items="[
          { label: 'Inicio', to: '/' },
          { label: 'Quiénes somos' },
        ]"
      />
    </template>
  </PageHero>

  <section class="pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          Nuestra historia
        </h2>
        <div class="space-y-6 text-white/50 text-base md:text-lg leading-relaxed">
          <p>
            Juan Pablo Gallardo lleva años en comunicación audiovisual: reels, spots y piezas que venden servicios, no solo likes. Ronald Bravo es Ingeniero Informático con <strong class="text-white/80">15 años de experiencia en programación y SEO</strong>, obsesionado con que las pymes aparezcan en Google sin depender solo de anuncios.
          </p>
          <p>
            Somos amigos. Cada uno armó su propio negocio, aprendió en la práctica qué funciona y qué es humo. Ahí entendimos el mismo problema: las pymes del Biobío necesitan alguien que hable claro, cobre justo y entregue resultados — no presentaciones de Santiago que no conocen Concepción, Los Ángeles ni Chillán.
          </p>
          <p>
            Así nació FomentaTuPyme: la unión de producción audiovisual de alto impacto con estrategia digital, posicionamiento web y datos reales. Hoy acompañamos a emprendedores que quieren más clientes, más visibilidad y más ventas medibles.
          </p>
        </div>
      </article>

      <article>
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 mb-12 md:mb-14">
          El equipo
        </h2>
        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <TeamMemberCard
            v-for="member in teamMembers"
            :key="member.name"
            :member="member"
          />
        </div>
      </article>

      <article>
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 mb-12 md:mb-14">
          Misión y valores
        </h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed max-w-3xl mb-10">
          <strong class="text-white/80">Misión:</strong> empoderar a pymes del Biobío y Ñuble con marketing digital estratégico — SEO, contenido audiovisual y redes — para que compitan en igualdad con negocios más grandes.
        </p>
        <div class="grid sm:grid-cols-3 gap-6">
          <div
            v-for="value in companyValues"
            :key="value.title"
            class="p-8 rounded-2xl border border-white/10 bg-white/[0.03]"
          >
            <h3 class="text-sm font-black uppercase tracking-wider text-blue-500 mb-4">
              {{ value.title }}
            </h3>
            <p class="text-sm text-white/50 leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </article>

      <div class="flex flex-wrap gap-4">
        <NuxtLink
          to="/por-que-elegirnos"
          class="text-[11px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors"
        >
          Por qué elegirnos →
        </NuxtLink>
        <NuxtLink
          to="/casos-de-exito"
          class="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-blue-400 transition-colors"
        >
          Casos de éxito →
        </NuxtLink>
      </div>
    </div>
  </section>

  <SiteCta />
</template>
