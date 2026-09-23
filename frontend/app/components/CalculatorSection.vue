<script setup lang="ts">
import { Minus, Plus } from '@lucide/vue'
import { ROI_MODELS, type RoiServiceKey, WHATSAPP_HOME } from '~/data/home'

const budget = ref(500_000)
const service = ref<RoiServiceKey>('integral')

const model = computed(() => ROI_MODELS[service.value])

const estimatedReachK = computed(() => (budget.value / 1000) * model.value.reachK)
const estimatedLeads = computed(() => Math.round((budget.value / 100_000) * model.value.leadPer1k * 100))
const projectedSales = computed(() => Math.round(budget.value * model.value.roi))

function formatCLP(value: number) {
  return value.toLocaleString('es-CL')
}

function formatReach(k: number) {
  return k >= 1000 ? `${(k / 1000).toFixed(1).replace('.', ',')}M` : `${k.toFixed(1).replace('.', ',')}k`
}

function setService(key: RoiServiceKey) {
  service.value = key
}
</script>

<template>
  <section id="simulador" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
      <div class="rounded-[2rem] p-8 md:p-12 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 relative overflow-hidden">
        <div class="absolute -top-6 -right-4 text-[9rem] font-black text-black/10 pointer-events-none select-none" aria-hidden="true">
          ROI
        </div>
        <div class="relative z-10 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 class="text-3xl md:text-4xl font-black uppercase italic leading-tight mb-2">
              Simulador de<br>Resultados
            </h2>
            <p class="text-blue-100 text-[11px] font-black uppercase tracking-[0.25em] opacity-85 mb-8">
              Calcula el impacto estimado de tu inversión
            </p>

            <p class="text-[10px] font-black uppercase tracking-[0.25em] text-white/75 mb-3">Servicio principal</p>
            <div class="flex flex-wrap gap-2 mb-6" role="group" aria-label="Selecciona servicio">
              <button
                v-for="key in (['integral', 'ads', 'seo'] as RoiServiceKey[])"
                :key="key"
                type="button"
                class="flex-1 min-w-[110px] rounded-xl px-3 py-3 text-[9px] font-black uppercase tracking-[0.2em] border transition-colors"
                :class="service === key ? 'bg-white text-blue-700 border-white' : 'bg-black/20 text-white/75 border-white/20'"
                :aria-pressed="service === key"
                @click="setService(key)"
              >
                {{ key === 'integral' ? 'Plan Integral' : key === 'ads' ? 'Solo Ads' : 'Solo SEO' }}
              </button>
            </div>

            <label for="invRange" class="text-[10px] font-black uppercase tracking-[0.25em] text-white/75 block mb-3">Inversión mensual (CLP)</label>
            <div class="bg-black/20 border border-white/20 rounded-2xl p-5 flex justify-between items-center gap-4 mb-3">
              <b class="font-mono text-2xl font-bold">${{ formatCLP(budget) }}</b>
              <div class="flex gap-2">
                <button type="button" aria-label="Disminuir inversión" class="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20" @click="budget = Math.max(190_000, budget - 50_000)">
                  <Minus class="w-4 h-4 mx-auto" />
                </button>
                <button type="button" aria-label="Aumentar inversión" class="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20" @click="budget = Math.min(2_000_000, budget + 50_000)">
                  <Plus class="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>
            <input
              id="invRange"
              v-model.number="budget"
              type="range"
              min="190000"
              max="2000000"
              step="10000"
              class="w-full accent-white mb-6"
              aria-label="Inversión mensual en pesos chilenos"
            >

            <div class="grid grid-cols-2 gap-3 mb-4">
              <div class="bg-black/20 border border-white/20 rounded-2xl p-4">
                <b class="font-mono text-xl block">{{ formatReach(estimatedReachK) }}</b>
                <span class="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">Alcance est.</span>
              </div>
              <div class="bg-black/20 border border-white/20 rounded-2xl p-4">
                <b class="font-mono text-xl block">{{ formatCLP(estimatedLeads) }}+</b>
                <span class="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">Leads est.</span>
              </div>
              <div class="bg-black/20 border border-white/20 rounded-2xl p-4">
                <b class="font-mono text-xl block">{{ model.roi.toFixed(1).replace('.', ',') }}x</b>
                <span class="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">Retorno proyectado</span>
              </div>
              <div class="bg-black/20 border border-white/20 rounded-2xl p-4">
                <b class="font-mono text-xl block">${{ formatCLP(projectedSales) }}</b>
                <span class="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">Ventas est.</span>
              </div>
            </div>
            <p class="text-[9px] font-black uppercase tracking-[0.15em] text-white/55 mb-5">
              Proyección referencial según datos históricos de campañas en pymes chilenas. No constituye garantía de resultados.
            </p>
            <NuxtLink to="/contacto" class="inline-flex w-full justify-center bg-white text-blue-700 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">
              Obtener propuesta detallada
            </NuxtLink>
          </div>

          <div class="text-white/90">
            <h3 class="text-base font-black uppercase italic mb-6">Datos que fomentan crecimiento</h3>
            <ul class="space-y-5 text-sm text-white/75">
              <li class="flex gap-3"><i class="w-2 h-2 rounded-full bg-white mt-2 shrink-0" /><span><strong class="text-white">Transparencia:</strong> proyecciones basadas en datos históricos del mercado chileno.</span></li>
              <li class="flex gap-3"><i class="w-2 h-2 rounded-full bg-white mt-2 shrink-0" /><span><strong class="text-white">Optimización mensual:</strong> modelos ajustados según rendimiento real de campañas y posiciones en Google.</span></li>
              <li class="flex gap-3"><i class="w-2 h-2 rounded-full bg-white mt-2 shrink-0" /><span><strong class="text-white">Tracking completo:</strong> conversiones en GA4, Meta y WhatsApp para saber qué canal vende.</span></li>
              <li class="flex gap-3"><i class="w-2 h-2 rounded-full bg-white mt-2 shrink-0" /><span><strong class="text-white">Sin permanencia forzada:</strong> planes mensuales; renuevas porque los números cierran.</span></li>
            </ul>
            <a :href="WHATSAPP_HOME" target="_blank" rel="noopener noreferrer" class="inline-flex mt-8 text-[10px] font-black uppercase tracking-widest text-blue-100 underline underline-offset-4">
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
