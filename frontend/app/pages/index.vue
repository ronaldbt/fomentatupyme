<script setup lang="ts">
import { getHomeJsonLd, HOME_SEO } from '~/data/home'
import { SITE_URL } from '~/data/site'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: HOME_SEO.title,
  description: HOME_SEO.description,
  path: '/',
  pageType: 'WebPage',
  ogImage: `${SITE_URL}/images/hero_marketing_chile.webp`,
  jsonLd: getHomeJsonLd(),
})

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/hero_marketing_chile.webp',
      type: 'image/webp',
      fetchpriority: 'high',
    },
  ],
})

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection />
    <HomeMarquee />
    <HomeValueSection />

    <HomeServicesGrid />

    <HomeDeepSection
      id="seo"
      kicker="SEO"
      title="Posicionamiento web SEO en Concepción y todo Chile"
      :benefits="[
        { code: 'B·01', title: 'Visibilidad en Google Maps', text: 'y búsquedas locales tipo «tu rubro + Concepción», donde decide el cliente que está listo para comprar.' },
        { code: 'B·02', title: 'Tráfico orgánico constante', text: 'mes a mes, sin pagar por cada clic: el activo digital más rentable de una pyme.' },
        { code: 'B·03', title: 'Autoridad frente a competidores', text: 'que no aparecen: estar primero también comunica confianza.' },
      ]"
      :ctas="[
        { label: 'SEO Concepción', to: '/posicionamiento-web-seo/concepcion', primary: true },
        { label: 'Servicio SEO completo', to: '/posicionamiento-web-seo' },
      ]"
    >
      <template #lead>
        <p>
          El
          <NuxtLink to="/posicionamiento-web-seo" class="text-blue-400 underline underline-offset-4 hover:text-blue-300">posicionamiento web SEO</NuxtLink>
          coloca tu pyme en los primeros resultados cuando alguien busca tu servicio en Concepción, el Gran Concepción o la Región del Biobío. No es magia: es optimización técnica, contenido que responde la intención de búsqueda y una ficha de Google Business Profile trabajada para el mapa.
        </p>
      </template>
      <template #visual>
        <HomeCwvPanel
          caption="Búsqueda: «tu rubro + concepción»"
          :rows="[
            { label: 'Tu pyme con SEO', width: 96, value: '#1' },
            { label: 'Competidor A', width: 62, value: '#4', muted: true },
            { label: 'Competidor B', width: 38, value: '#9', muted: true },
          ]"
          footnote="Ilustrativo · El objetivo del SEO local: la primera posición útil"
        />
      </template>
    </HomeDeepSection>

    <HomeDeepSection
      id="paginas-web"
      kicker="Diseño Web"
      title="Páginas web en Concepción hechas para vender"
      reversed
      muted
      :benefits="[
        { code: 'W·01', title: 'Sitios corporativos, landings y tiendas online', text: 'con carrito y pasarela de pago, según la etapa de tu negocio.' },
        { code: 'W·02', title: 'Estándar de entrega:', text: 'Core Web Vitals en verde, versión móvil impecable y capacitación para que edites tu propio contenido.' },
        { code: 'W·03', title: 'Integraciones reales:', text: 'WhatsApp Business, formularios con notificación, Google Maps y píxeles de Meta y Google listos para campañas.' },
      ]"
      :ctas="[{ label: 'Cotizar mi página web', to: '/contacto', primary: true }]"
    >
      <template #lead>
        <p>
          Una página web que demora en cargar o no se entiende en el celular pierde clientes todos los días. Diseñamos
          <strong class="text-white/80">páginas web para pymes en Concepción</strong>:
          autoadministrables, responsivas y con la base SEO instalada desde el día uno —estructura de encabezados, velocidad, Schema y conexión a Google Analytics y Search Console.
        </p>
      </template>
      <template #visual>
        <HomeCwvPanel
          caption="Estándar mínimo de entrega · Cada web"
          :rows="[
            { label: 'Rendimiento móvil', width: 92, value: '90+' },
            { label: 'SEO on-page', width: 100, value: '100' },
            { label: 'Accesibilidad', width: 95, value: '95+' },
            { label: 'Buenas prácticas', width: 95, value: '95+' },
          ]"
          footnote="Medido con Lighthouse de Google antes de entregar"
        />
      </template>
    </HomeDeepSection>

    <HomeDeepSection
      id="video-corporativo"
      kicker="Producción Audiovisual"
      title="Videos corporativos en Concepción que elevan tu marca"
      :benefits="[
        { code: 'V·01', title: 'Video corporativo e institucional:', text: 'presenta tu empresa, planta o servicio en 60–120 segundos que generan confianza.' },
        { code: 'V·02', title: 'Spots y cápsulas para campañas:', text: 'piezas cortas pensadas para Instagram, TikTok y YouTube, derivadas de una sola jornada de grabación.' },
        { code: 'V·03', title: 'Testimoniales de clientes:', text: 'la prueba social más potente para cerrar ventas B2B y servicios profesionales.' },
      ]"
      :ctas="[{ label: 'Cotizar video corporativo', to: '/contacto', primary: true }]"
    >
      <template #lead>
        <p>
          Somos agencia y productora a la vez: el mismo equipo que define tu estrategia produce tu
          <strong class="text-white/80">video corporativo en Concepción</strong>.
          Guion, grabación profesional, locución y edición con motion graphics, en formatos listos para tu web, licitaciones, ferias y redes sociales.
        </p>
      </template>
      <template #visual>
        <HomeReelMock />
      </template>
    </HomeDeepSection>

    <HomeSocialSection />
    <HomeProcessSection />
    <CalculatorSection />
    <PacksSection />
    <SeoSocialProofSection />
    <HomeCoverageSection />
    <HomeTeamPreview />
    <HomeFaqSection />
    <CtaSection />
  </div>
</template>
