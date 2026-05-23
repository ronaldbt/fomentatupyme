<script setup lang="ts">
import { ChevronDown, Menu, X } from '@lucide/vue'
import { citiesHubLinks } from '~/data/cities'
import { servicesHubLinks } from '~/data/services'

const isOpen = ref(false)
const mobileExpanded = ref<'servicios' | 'ciudades' | null>(null)
const route = useRoute()

function closeMenu() {
  isOpen.value = false
  mobileExpanded.value = null
}

function toggleMobile(section: 'servicios' | 'ciudades') {
  mobileExpanded.value = mobileExpanded.value === section ? null : section
}

const homeAnchors = [
  { label: 'Calculadora', hash: '#calculadoras' },
  { label: 'Packs', hash: '#packs' },
]

function anchorTo(hash: string) {
  return route.path === '/' ? hash : `/${hash}`
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center overflow-visible">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex justify-between items-center w-full">
        <NuxtLink to="/" class="flex flex-col group shrink-0" @click="closeMenu">
          <p class="text-2xl font-black tracking-tighter uppercase leading-none group-hover:text-blue-500 transition-colors">
            fomentatupyme<span class="text-blue-500">.cl</span>
          </p>
          <span class="text-[10px] uppercase tracking-widest text-white/40">Marketing Digital & Audiovisual · Chile</span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <NavDropdown label="Servicios" hub-to="/servicios" :items="servicesHubLinks" />
          <NavDropdown label="Ciudades" hub-to="/agencia-marketing" :items="citiesHubLinks" />
          <NuxtLink to="/blog" class="text-white hover:text-blue-400 transition-colors">Blog</NuxtLink>
          <NuxtLink to="/nosotros" class="text-white hover:text-blue-400 transition-colors hidden lg:inline">Nosotros</NuxtLink>
          <a
            v-for="item in homeAnchors"
            :key="item.hash"
            :href="anchorTo(item.hash)"
            class="text-white/60 hover:text-blue-400 transition-colors hidden xl:inline"
          >{{ item.label }}</a>
          <NuxtLink
            to="/contacto"
            class="bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            Contacto
          </NuxtLink>
        </div>

        <div class="md:hidden">
          <button
            type="button"
            class="text-white p-2"
            :aria-label="isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
            :aria-expanded="isOpen"
            @click="isOpen = !isOpen"
          >
            <X v-if="isOpen" aria-hidden="true" />
            <Menu v-else aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-screen"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-screen"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="isOpen"
        class="fixed top-20 left-0 right-0 bottom-0 bg-brand-black z-40 md:hidden overflow-y-auto"
      >
        <div class="px-6 py-8 space-y-2">
          <div class="border-b border-white/10 pb-4">
            <button
              type="button"
              class="w-full flex items-center justify-between py-3 text-2xl font-black uppercase tracking-tighter"
              aria-label="Mostrar u ocultar menú de servicios"
              :aria-expanded="mobileExpanded === 'servicios'"
              @click="toggleMobile('servicios')"
            >
              Servicios
              <ChevronDown
                class="w-5 h-5 text-blue-500 transition-transform"
                :class="{ 'rotate-180': mobileExpanded === 'servicios' }"
                aria-hidden="true"
              />
            </button>
            <span v-show="mobileExpanded === 'servicios'" class="block pl-4 space-y-1 pb-2">
              <NuxtLink
                v-for="item in servicesHubLinks"
                :key="item.to"
                :to="item.to"
                class="block py-2.5 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-blue-500"
                @click="closeMenu"
              >
                {{ item.title }}
              </NuxtLink>
              <NuxtLink
                to="/servicios"
                class="block py-2.5 text-[10px] font-black uppercase tracking-widest text-blue-500"
                @click="closeMenu"
              >
                Ver todos →
              </NuxtLink>
            </span>
          </div>

          <div class="border-b border-white/10 pb-4">
            <button
              type="button"
              class="w-full flex items-center justify-between py-3 text-2xl font-black uppercase tracking-tighter"
              aria-label="Mostrar u ocultar menú de ciudades"
              :aria-expanded="mobileExpanded === 'ciudades'"
              @click="toggleMobile('ciudades')"
            >
              Ciudades
              <ChevronDown
                class="w-5 h-5 text-blue-500 transition-transform"
                :class="{ 'rotate-180': mobileExpanded === 'ciudades' }"
                aria-hidden="true"
              />
            </button>
            <span v-show="mobileExpanded === 'ciudades'" class="block pl-4 space-y-1 pb-2">
              <NuxtLink
                v-for="item in citiesHubLinks"
                :key="item.to"
                :to="item.to"
                class="flex items-center gap-2 py-2.5 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-blue-500"
                @click="closeMenu"
              >
                {{ item.title }}
                <span
                  v-if="item.badge"
                  class="text-[8px] font-black bg-blue-600 text-white px-2 py-0.5 rounded-full"
                >{{ item.badge }}</span>
              </NuxtLink>
              <NuxtLink
                to="/agencia-marketing"
                class="block py-2.5 text-[10px] font-black uppercase tracking-widest text-blue-500"
                @click="closeMenu"
              >
                Ver todas →
              </NuxtLink>
            </span>
          </div>

          <NuxtLink
            to="/blog"
            class="block py-3 text-2xl font-black uppercase tracking-tighter hover:text-blue-500"
            @click="closeMenu"
          >Blog</NuxtLink>
          <NuxtLink
            to="/nosotros"
            class="block py-3 text-2xl font-black uppercase tracking-tighter hover:text-blue-500"
            @click="closeMenu"
          >Nosotros</NuxtLink>
          <NuxtLink
            to="/contacto"
            class="block mt-6 w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-center"
            @click="closeMenu"
          >
            Hablar con un experto
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>
