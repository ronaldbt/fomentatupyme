<script setup lang="ts">
import {
  SEO_PAGE_PATH,
  getSeoFaqSchema,
  getSeoPageSchema,
  seoCityLinks,
  seoFaqs,
  seoPageMeta,
  seoServiceFeatures,
} from '~/data/posicionamiento-web-seo'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: seoPageMeta.title,
  description: seoPageMeta.description,
  path: SEO_PAGE_PATH,
  jsonLd: [getSeoPageSchema(), getSeoFaqSchema()],
})
</script>

<template>
  <PageHero
    eyebrow="Posicionamiento web SEO"
    :h1="seoPageMeta.h1"
    :intro="seoPageMeta.intro"
  >
    <template #breadcrumbs>
      <Breadcrumbs
        :items="[
          { label: 'Inicio', to: '/' },
          { label: 'Servicios', to: '/servicios' },
          { label: 'Posicionamiento web SEO' },
        ]"
      />
    </template>
  </PageHero>

  <section class="pt-16 md:pt-24 pb-24 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          ¿Qué es el posicionamiento web SEO y por qué tu pyme lo necesita?
        </h2>
        <div class="space-y-6">
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            El SEO (Search Engine Optimization) es el conjunto de estrategias que le indican a Google que tu página es la mejor respuesta cuando alguien busca lo que tú vendes. A diferencia de la publicidad pagada, el tráfico orgánico que genera el SEO no tiene costo por clic y sigue llegando mes a mes, incluso cuando no estás invirtiendo activamente.
          </p>
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            Para una pyme en Los Ángeles o Concepción, aparecer en los primeros resultados de Google puede ser la diferencia entre tener el teléfono sonando todos los días o depender completamente del boca a boca.
          </p>
        </div>
      </article>

      <article>
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 max-w-3xl mb-12 md:mb-14">
          Nuestro servicio de posicionamiento SEO incluye
        </h2>
        <div class="grid md:grid-cols-2 gap-5 md:gap-6">
          <div
            v-for="feature in seoServiceFeatures"
            :key="feature.title"
            class="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
          >
            <h3 class="text-sm font-black uppercase tracking-wider text-blue-500 mb-4">
              {{ feature.title }}
            </h3>
            <p class="text-sm md:text-base text-white/50 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </article>

      <article>
        <div class="max-w-3xl space-y-6 mb-12 md:mb-14">
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
            Ciudades donde hacemos posicionamiento web SEO
          </h2>
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            Trabajamos con pymes de toda la Región del Biobío y Ñuble:
          </p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <NuxtLink
            v-for="city in seoCityLinks"
            :key="city.to"
            :to="city.to"
            class="group p-7 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-blue-500/30 hover:bg-white/[0.05] transition-colors"
          >
            <h3 class="text-sm font-black uppercase tracking-tight text-white/90 group-hover:text-blue-400 transition-colors mb-3">
              {{ city.label }}
            </h3>
            <p class="text-xs md:text-sm text-white/40 leading-relaxed">
              {{ city.description }}
            </p>
          </NuxtLink>
        </div>
      </article>

      <article class="max-w-3xl space-y-8">
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90">
          ¿Por qué elegir FomentaTuPyme para tu SEO?
        </h2>
        <div class="space-y-6">
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            Somos una agencia de marketing digital especializada en pymes, no en grandes corporaciones. Eso significa que entendemos tu presupuesto, tu mercado local y los resultados que realmente importan para tu negocio.
          </p>
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            No te vendemos promesas vacías: te mostramos las métricas reales en Google Search Console y Analytics desde el primer mes. Trabajamos con transparencia total.
          </p>
          <p class="text-white/50 text-base md:text-lg leading-relaxed">
            Además, a diferencia de las agencias de Santiago que aplican estrategias genéricas, nosotros conocemos Los Ángeles, Concepción y el Biobío. Sabemos cómo buscan los clientes en tu ciudad y optimizamos para eso.
          </p>
        </div>
      </article>

      <article>
        <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white/90 mb-12 md:mb-14">
          Preguntas frecuentes sobre SEO para pymes
        </h2>
        <div class="space-y-4 max-w-3xl">
          <details
            v-for="faq in seoFaqs"
            :key="faq.question"
            class="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05] transition-colors"
          >
            <summary class="cursor-pointer list-none p-6 md:p-7 flex items-center justify-between gap-6">
              <h3 class="text-sm font-black uppercase tracking-tight text-white/90">
                {{ faq.question }}
              </h3>
              <span class="text-blue-500 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p class="px-6 md:px-7 pb-6 md:pb-7 pt-1 text-sm md:text-base text-white/50 leading-relaxed">
              {{ faq.answer }}
            </p>
          </details>
        </div>
      </article>

      <article class="rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500/50 p-10 md:p-16 text-center shadow-2xl shadow-blue-600/20">
        <h2 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8">
          ¿Listo para aparecer en Google? Cotiza tu plan SEO gratis
        </h2>
        <p class="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Cuéntanos sobre tu negocio y te hacemos una propuesta personalizada sin compromiso. El diagnóstico inicial es completamente gratuito.
        </p>
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center justify-center bg-black text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-xl"
        >
          Quiero cotizar mi plan SEO →
        </NuxtLink>
      </article>
    </div>
  </section>
</template>
