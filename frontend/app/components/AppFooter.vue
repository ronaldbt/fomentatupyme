<template>
  <footer class="bg-brand-black pt-20 md:pt-24 pb-12 md:pb-16 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14 md:mb-16">
        <div class="sm:col-span-2 lg:col-span-1">
          <NuxtLink to="/" class="inline-block mb-5">
            <p class="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none text-white">
              fomentatupyme
            </p>
          </NuxtLink>
          <p class="text-white/60 text-xs uppercase tracking-widest leading-relaxed mb-6">
            Empoderando a emprendedores y pymes del Biobío con marketing digital estratégico.
          </p>
          <address class="not-italic text-white/60 text-sm leading-relaxed space-y-2">
            <p class="font-black uppercase tracking-widest text-white/70 text-[10px]">Fomenta Tu Pyme</p>
            <p>Concepción, Región del Biobío, Chile</p>
            <p>
              <a href="tel:+56979796841" class="hover:text-blue-400 transition-colors">+56 9 7979 6841</a>
            </p>
            <p>
              <a href="mailto:contacto@fomentatupyme.cl" class="hover:text-blue-400 transition-colors">contacto@fomentatupyme.cl</a>
            </p>
          </address>
        </div>

        <nav aria-label="Servicios" class="space-y-4">
          <p class="text-[10px] font-black uppercase tracking-widest text-white/70">Servicios</p>
          <ul class="space-y-2.5 text-[11px] uppercase tracking-[0.15em] font-bold">
            <li><NuxtLink to="/servicios" class="hover:text-blue-400 text-white/70 transition-colors">Todos los servicios</NuxtLink></li>
            <li><NuxtLink to="/posicionamiento-web-seo" class="hover:text-blue-400 text-white/70 transition-colors">SEO</NuxtLink></li>
            <li><NuxtLink to="/servicios/instagram" class="hover:text-blue-400 text-white/70 transition-colors">Instagram</NuxtLink></li>
            <li><NuxtLink to="/servicios/tiktok" class="hover:text-blue-400 text-white/70 transition-colors">TikTok</NuxtLink></li>
            <li><NuxtLink to="/servicios/redes-sociales" class="hover:text-blue-400 text-white/70 transition-colors">Redes sociales</NuxtLink></li>
          </ul>
        </nav>

        <nav aria-label="Ciudades" class="space-y-4">
          <p class="text-[10px] font-black uppercase tracking-widest text-white/70">Ciudades</p>
          <ul class="space-y-2.5 text-[11px] uppercase tracking-[0.15em] font-bold">
            <li><NuxtLink to="/agencia-marketing" class="hover:text-blue-400 text-white/70 transition-colors">Hub ciudades</NuxtLink></li>
            <li><NuxtLink to="/agencia-marketing/los-angeles-chile" class="hover:text-blue-400 text-white/70 transition-colors">Los Ángeles</NuxtLink></li>
            <li><NuxtLink to="/agencia-marketing/concepcion" class="hover:text-blue-400 text-white/70 transition-colors">Concepción</NuxtLink></li>
            <li><NuxtLink to="/agencia-marketing/talcahuano" class="hover:text-blue-400 text-white/70 transition-colors">Talcahuano</NuxtLink></li>
          </ul>
        </nav>

        <nav aria-label="Sitio" class="space-y-4">
          <p class="text-[10px] font-black uppercase tracking-widest text-white/70">Sitio</p>
          <ul class="space-y-2.5 text-[11px] uppercase tracking-[0.15em] font-bold">
            <li><NuxtLink to="/quienes-somos" class="hover:text-blue-400 text-white/70 transition-colors">Quiénes somos</NuxtLink></li>
            <li><NuxtLink to="/por-que-elegirnos" class="hover:text-blue-400 text-white/70 transition-colors">Por qué elegirnos</NuxtLink></li>
            <li><NuxtLink to="/casos-de-exito" class="hover:text-blue-400 text-white/70 transition-colors">Casos de éxito</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-blue-400 text-white/70 transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/contacto" class="hover:text-blue-400 text-blue-400 transition-colors">Contacto / Cotizar</NuxtLink></li>
          </ul>
        </nav>
      </div>

      <div class="pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/50 font-bold">
        <p>© 2024 FOMENTA TU PYME SPA. TODOS LOS DERECHOS RESERVADOS.</p>
        <span class="text-white/40">Concepción, Chile</span>
      </div>
    </div>
  </footer>
</template>
