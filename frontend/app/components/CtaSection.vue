<template>
  <section class="py-32 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col items-center text-center">
        <h2 class="text-[60px] md:text-[120px] font-black uppercase tracking-tighter leading-[0.8] mb-12">
          Cotiza tu estrategia<br><span class="text-blue-600">de marketing digital hoy</span>
        </h2>
        <p class="text-white/60 text-lg max-w-xl mb-16 px-4">
          ¿Cuánto cuesta una agencia de marketing en Chile? Cotiza sin compromiso y descubre un plan a la medida de tu pyme en Concepción.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <a
            href="https://wa.me/56979796841"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 bg-blue-600 text-white py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-blue-600/30"
          >
            <IconInstagram class="w-5 h-5" />
            WhatsApp Pro
          </a>
          <NuxtLink
            to="/contacto"
            class="flex-1 bg-white/5 text-white border border-white/10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center"
          >
            Cotizar
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-white/[0.02] select-none uppercase tracking-tighter pointer-events-none">
      Fomenta
    </div>
  </section>
</template>
