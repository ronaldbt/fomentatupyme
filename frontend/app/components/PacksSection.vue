<template>
  <section id="planes" class="py-24 bg-[#0F0F0F] border-y border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal max-w-2xl mb-12">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-5">Inversión</span>
        <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-5">
          Packs de crecimiento con precios claros
        </h2>
        <p class="text-white/60 leading-relaxed">
          Sin letra chica: esto cuesta una agencia de marketing en Concepción. Planes mensuales, sin permanencia forzada. ¿Necesitas solo una página web o un video?
          <NuxtLink to="/contacto" class="text-blue-400 underline underline-offset-4 hover:text-blue-300">Cotiza por proyecto</NuxtLink>.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <PricingCard
          name="Pack Emprendedor"
          price="290.000"
          :features="[
            'Creación o mejora de página web',
            '4 Reels profesionales al mes',
            'Gestión de Instagram Ads',
            'SEO básico (Google Maps)',
            'Reporte de métricas',
          ]"
          cta="Comenzar ahora"
        />
        <PricingCard
          name="Pack Fomento"
          price="450.000"
          popular
          :features="[
            'Creación o mejora de página web',
            '8 Reels de alta producción',
            'Estrategia de Ads avanzada',
            'SEO web completo',
            '1 Video testimonial',
            'Soporte prioritario',
          ]"
          cta="Elegir Fomento"
        />
        <PricingCard
          name="Pack Pro"
          price="750.000"
          :features="[
            'Creación o mejora de página web',
            '12 Reels cinematográficos',
            'Gestión multi-plataforma',
            'SEO + Contenido',
            'Sesión de fotos',
            'Estratega dedicado',
          ]"
          cta="Hablar con un Pro"
        />
      </div>
    </div>
  </section>
</template>
