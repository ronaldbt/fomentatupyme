<script setup lang="ts">
import { Minus, Plus } from '@lucide/vue'

const budget = ref(500_000)

const industries = {
  retail: { multiplier: 2.5, label: 'Retail / E-commerce' },
  services: { multiplier: 1.8, label: 'Servicios Profesionales' },
  food: { multiplier: 3.2, label: 'Gastronomía' },
  realestate: { multiplier: 0.8, label: 'Inmobiliaria' },
} as const

const industry = ref<keyof typeof industries>('retail')

const estimatedReach = computed(() =>
  Math.round((budget.value / 100) * industries[industry.value].multiplier * 10),
)

const estimatedLeads = computed(() => Math.round(estimatedReach.value * 0.02))

function formatCLP(value: number) {
  return value.toLocaleString('es-CL')
}
</script>

<template>
  <section id="calculadoras" class="py-24 bg-brand-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 items-stretch">
        <div class="lg:col-span-5 bg-blue-600 rounded-[2.5rem] p-10 flex flex-col shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 text-[160px] font-black text-black/10 select-none leading-none -mr-12 -mt-12 pointer-events-none">
            ROI
          </div>

          <div class="relative z-10 flex-1">
            <h2 class="text-3xl font-black uppercase tracking-tight mb-4 italic leading-none">
              Simulador de<br>Resultados
            </h2>
            <p class="text-blue-100 text-xs mb-10 max-w-[200px] font-bold uppercase tracking-widest opacity-80">
              Calcula el impacto estimado de tu inversión.
            </p>

            <div class="space-y-8">
              <div>
                <label class="text-[10px] uppercase font-black tracking-widest mb-4 block text-white/70">Inversión Mensual (CLP)</label>
                <div class="bg-black/20 p-5 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span class="text-2xl font-mono font-bold">${{ formatCLP(budget) }}</span>
                  <div class="flex gap-2">
                    <button
                      type="button"
                      aria-label="Disminuir inversión mensual"
                      class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      @click="budget = Math.max(50_000, budget - 50_000)"
                    >
                      <Minus :size="18" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label="Aumentar inversión mensual"
                      class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      @click="budget = budget + 50_000"
                    >
                      <Plus :size="18" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="bg-black/20 p-5 rounded-2xl border border-white/5">
                  <span class="text-[9px] uppercase font-black text-blue-200 block mb-2 tracking-widest">Alcance Est.</span>
                  <span class="text-3xl font-black font-mono">{{ (estimatedReach / 1000).toFixed(1) }}k</span>
                </div>
                <div class="bg-black/20 p-5 rounded-2xl border border-white/5">
                  <span class="text-[9px] uppercase font-black text-blue-200 block mb-2 tracking-widest">Leads Est.</span>
                  <span class="text-3xl font-black font-mono">{{ estimatedLeads }}+</span>
                </div>
              </div>

              <div class="bg-white p-8 rounded-3xl text-black">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-[10px] uppercase font-black text-blue-600 block tracking-widest mb-1">Retorno Proyectado</span>
                    <span class="text-5xl font-black tracking-tighter">3.2x</span>
                  </div>
                  <div class="text-right">
                    <span class="text-[10px] font-black block text-gray-400 uppercase tracking-widest mb-1">Ventas Est.</span>
                    <span class="text-xl font-black">${{ formatCLP(Math.round(budget * 3.2)) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="w-full mt-12 bg-black text-white py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-zinc-950 transition-all shadow-xl"
            >
              Obtener Propuesta Detallada
            </button>
          </div>
        </div>

        <div class="lg:col-span-7 flex flex-col justify-center">
          <span class="text-[12px] font-black uppercase tracking-[0.4em] text-blue-500 block mb-8">Estrategia</span>
          <h2 class="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
            Datos que<br><span class="text-stroke">Fomentan</span><br>Crecimiento
          </h2>
          <div class="grid sm:grid-cols-2 gap-8 max-w-xl">
            <div class="space-y-4">
              <div class="w-8 h-px bg-blue-500" />
              <h3 class="text-lg font-black uppercase italic">Transparencia</h3>
              <p class="text-white/40 text-sm leading-relaxed">
                Mostramos proyecciones reales basadas en datos históricos del mercado chileno.
              </p>
            </div>
            <div class="space-y-4">
              <div class="w-8 h-px bg-white/20" />
              <h3 class="text-lg font-black uppercase italic">Optimización</h3>
              <p class="text-white/40 text-sm leading-relaxed">
                Nuestros modelos se ajustan mensualmente según el rendimiento de Ads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
