<script setup lang="ts">
definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Nosotros | Agencia FomentaTuPyme Chile',
  description:
    'Conoce al equipo de FomentaTuPyme: agencia de marketing digital para pymes del Biobío. Transparencia, resultados y enfoque local.',
  path: '/nosotros',
})

const sections = [
  {
    heading: 'Quiénes somos',
    paragraphs: [
      'FomentaTuPyme nace para acompañar a emprendedores y pymes que necesitan marketing digital serio, sin agencias de Santiago que no entienden el mercado del sur.',
      'Combinamos SEO, producción audiovisual y gestión de redes con reportes claros. Trabajamos desde la Región del Biobío con clientes en Los Ángeles, Concepción, Talcahuano y comunas cercanas.',
    ],
  },
  {
    heading: 'Cómo nos diferenciamos',
    paragraphs: [
      'No vendemos packs opacos: cada propuesta detalla entregables, plazos y métricas. Priorizamos páginas de ciudad y de servicio con contenido real porque eso convierte mejor que landings genéricas.',
    ],
    list: ['Comunicación directa por WhatsApp', 'Informes mensuales entendibles', 'Estrategia antes de producir contenido'],
  },
]
</script>

<template>
  <PageHero
    eyebrow="Nosotros"
    h1="Personas que entienden tu pyme"
    intro="Creemos que el marketing digital debe generar ventas medibles, no solo likes. Esta es nuestra forma de trabajar."
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="[{ label: 'Inicio', to: '/' }, { label: 'Nosotros' }]" />
    </template>
  </PageHero>
  <section class="pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContentSections :sections="sections" />
    </div>
  </section>
  <SiteCta />
</template>
