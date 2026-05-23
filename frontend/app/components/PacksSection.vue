<template>
  <section id="packs" class="py-24 bg-brand-black border-y border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-20">
        <span class="text-[12px] font-black uppercase tracking-[0.4em] text-blue-500 block mb-6">Inversión</span>
        <h2 class="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          Packs de <span class="italic font-normal">Crecimiento</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-1">
        <PricingCard
          name="Pack Emprendedor"
          price="190.000"
          :features="[
            '4 Reels Profesionales al mes',
            'Gestión de Instagram Ads',
            'SEO Básico (Google Maps)',
            'Reporte de Métricas',
          ]"
          cta="Comenzar ahora"
        />
        <PricingCard
          name="Pack Fomento"
          price="350.000"
          popular
          :features="[
            '8 Reels de alta producción',
            'Estrategia de Ads avanzada',
            'SEO Web Completo',
            '1 Video Testimonial',
            'Soporte prioritario',
          ]"
          cta="Elegir Fomento"
        />
        <PricingCard
          name="Pack Pro"
          price="650.000"
          :features="[
            '12 Reels Cinematográficos',
            'Gestión Multi-plataforma',
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
