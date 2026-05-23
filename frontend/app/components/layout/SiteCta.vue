<template>
  <section class="py-20 border-t border-white/10 bg-white/[0.02]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-8 p-10 bg-blue-600 rounded-[2rem]">
        <div class="max-w-xl">
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
            Cotiza tu estrategia de marketing digital hoy
          </h2>
          <p class="text-blue-100 text-sm leading-relaxed">
            Cuéntanos tu ciudad y rubro. Te respondemos con un plan claro y presupuesto sin letra chica.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 shrink-0">
          <NuxtLink
            to="/contacto"
            class="bg-black text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-all text-center"
          >
            Contactar
          </NuxtLink>
          <a
            href="tel:+56979796841"
            class="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/20 transition-all text-center"
          >
            +56 9 7979 6841
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
