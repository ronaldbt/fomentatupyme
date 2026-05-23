<script setup lang="ts">
definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Agencia de Marketing en Concepción Chile | FomentaTuPyme',
  description:
    'Somos la agencia de marketing de Concepción, Chile, especializada en hacer crecer tu pyme. Más ventas, más clientes, más visibilidad. ¡Cotiza hoy!',
  path: '/',
})
</script>

<template>
  <div>
    <HeroSection />
    <HomeSeoSections />
    <ServicesSection />
    <CalculatorSection />
    <PacksSection />
    <SeoSocialProofSection />
    <CtaSection />
  </div>
</template>
