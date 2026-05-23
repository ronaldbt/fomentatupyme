<script setup lang="ts">
import { ChevronDown, Menu, X } from '@lucide/vue'
import { citiesHubLinks } from '~/data/cities'
import { empresaNavLinks } from '~/data/empresa-nav'
import { mainNavServiceGroups } from '~/data/nav-services'

const isOpen = ref(false)
const mobileExpanded = ref<'seo' | 'redes' | 'ciudades' | 'empresa' | null>(null)
const route = useRoute()

function closeMenu() {
  isOpen.value = false
  mobileExpanded.value = null
}

function toggleMobile(section: 'seo' | 'redes' | 'ciudades' | 'empresa') {
  mobileExpanded.value = mobileExpanded.value === section ? null : section
}

const homeAnchors = [{ label: 'Packs', hash: '#packs' }]

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
          <NavGroupDropdown
            v-for="group in mainNavServiceGroups"
            :key="group.id"
            :label="group.label"
            :to="group.to"
            :children="group.children"
          />
          <NavDropdown label="Ciudades" hub-to="/agencia-marketing" :items="citiesHubLinks" :show-footer-link="false" />
          <NavDropdown label="Empresa" hub-to="/quienes-somos" :items="empresaNavLinks" :show-footer-link="false" />
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
          <div
            v-for="group in mainNavServiceGroups"
            :key="group.id"
            class="border-b border-white/10 pb-4"
          >
            <div class="flex items-center gap-1">
              <button
                v-if="!group.to"
                type="button"
                class="flex-1 flex items-center justify-between py-3 text-2xl font-black uppercase tracking-tighter"
                :aria-expanded="mobileExpanded === group.id"
                @click="toggleMobile(group.id as 'seo' | 'redes')"
              >
                {{ group.label }}
                <ChevronDown
                  class="w-5 h-5 text-blue-500 transition-transform"
                  :class="{ 'rotate-180': mobileExpanded === group.id }"
                  aria-hidden="true"
                />
              </button>
              <template v-else>
                <NuxtLink
                  :to="group.to"
                  class="flex-1 py-3 text-2xl font-black uppercase tracking-tighter hover:text-blue-500"
                  @click="closeMenu"
                >
                  {{ group.label }}
                </NuxtLink>
                <button
                  type="button"
                  class="p-3 text-blue-500"
                  :aria-label="`Ver submenú de ${group.label}`"
                  :aria-expanded="mobileExpanded === group.id"
                  @click="toggleMobile('redes')"
                >
                  <ChevronDown
                    class="w-5 h-5 transition-transform"
                    :class="{ 'rotate-180': mobileExpanded === group.id }"
                    aria-hidden="true"
                  />
                </button>
              </template>
            </div>
            <span v-show="mobileExpanded === group.id" class="block pl-4 space-y-1 pb-2">
              <NuxtLink
                v-for="child in group.children"
                :key="`${child.to}-${child.title}`"
                :to="child.to"
                class="block py-2 text-sm font-bold uppercase tracking-wider text-white/50 hover:text-blue-500"
                @click="closeMenu"
              >
                {{ child.title }}
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
                class="block py-2.5 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-blue-500"
                @click="closeMenu"
              >
                {{ item.title }}
              </NuxtLink>
            </span>
          </div>

          <div class="border-b border-white/10 pb-4">
            <button
              type="button"
              class="w-full flex items-center justify-between py-3 text-2xl font-black uppercase tracking-tighter"
              aria-label="Mostrar u ocultar menú de empresa"
              :aria-expanded="mobileExpanded === 'empresa'"
              @click="toggleMobile('empresa')"
            >
              Empresa
              <ChevronDown
                class="w-5 h-5 text-blue-500 transition-transform"
                :class="{ 'rotate-180': mobileExpanded === 'empresa' }"
                aria-hidden="true"
              />
            </button>
            <span v-show="mobileExpanded === 'empresa'" class="block pl-4 space-y-1 pb-2">
              <NuxtLink
                v-for="item in empresaNavLinks"
                :key="item.to"
                :to="item.to"
                class="block py-2.5 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-blue-500"
                @click="closeMenu"
              >
                {{ item.title }}
              </NuxtLink>
            </span>
          </div>

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
