<script setup lang="ts">
import { Clock, Mail, MapPin, Phone } from '@lucide/vue'

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Contacto' },
]

usePageSeo({
  title: 'Contacto y Cotización | FomentaTuPyme',
  description:
    'Cotiza tu estrategia de marketing digital. WhatsApp, teléfono y formulario. Agencia de marketing para pymes en Chile.',
  path: '/contacto',
  pageType: 'ContactPage',
  breadcrumbs,
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contacto"
      h1="Cotiza tu estrategia de marketing digital"
      intro="Cuéntanos tu ciudad, rubro y objetivo. Te respondemos con una propuesta clara, sin compromiso y sin letra chica."
    >
      <template #breadcrumbs>
        <Breadcrumbs :items="breadcrumbs" />
      </template>
    </PageHero>

    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center gap-3 mb-10">
          <span class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
            <Clock class="w-3.5 h-3.5" />
            Respuesta en menos de 24 horas
          </span>
        </div>

        <div class="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div class="lg:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10 flex flex-col gap-8 h-fit">
            <div>
              <h2 class="text-2xl font-black uppercase tracking-tight mb-2">Hablemos</h2>
              <p class="text-sm text-white/40 leading-relaxed">
                También puedes llamarnos o escribir directo. Atendemos pymes de Concepción, Los Ángeles y todo el Biobío.
              </p>
            </div>

            <div class="space-y-6">
              <a
                href="tel:+56979796841"
                class="flex items-start gap-5 group p-4 -mx-4 rounded-2xl hover:bg-white/[0.04] transition-colors"
              >
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone class="w-5 h-5" />
                </span>
                <span>
                  <span class="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">Teléfono / WhatsApp</span>
                  <span class="text-xl font-black group-hover:text-blue-400 transition-colors">+56 9 7979 6841</span>
                </span>
              </a>

              <a
                href="mailto:contacto@fomentatupyme.cl"
                class="flex items-start gap-5 group p-4 -mx-4 rounded-2xl hover:bg-white/[0.04] transition-colors"
              >
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/60 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
                  <Mail class="w-5 h-5" />
                </span>
                <span>
                  <span class="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">Email</span>
                  <span class="text-base font-bold group-hover:text-blue-400 transition-colors break-all">contacto@fomentatupyme.cl</span>
                </span>
              </a>

              <div class="flex items-start gap-5 p-4 -mx-4">
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/60">
                  <MapPin class="w-5 h-5" />
                </span>
                <address class="not-italic">
                  <span class="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">Oficina</span>
                  <span class="text-sm text-white/60 leading-relaxed">Concepción, Región del Biobío, Chile</span>
                </address>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3">
            <ContactForm />
          </div>
        </div>

        <div class="mt-12 grid sm:grid-cols-3 gap-4">
          <NuxtLink
            to="/servicios"
            class="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-colors text-center"
          >
            <p class="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Servicios</p>
            <p class="text-sm font-bold uppercase">Ver qué ofrecemos →</p>
          </NuxtLink>
          <NuxtLink
            to="/agencia-marketing"
            class="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-colors text-center"
          >
            <p class="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Ciudades</p>
            <p class="text-sm font-bold uppercase">Marketing en tu comuna →</p>
          </NuxtLink>
          <NuxtLink
            to="/quienes-somos"
            class="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-colors text-center"
          >
            <p class="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Equipo</p>
            <p class="text-sm font-bold uppercase">Conoce al equipo →</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
