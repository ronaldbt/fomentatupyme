<script setup lang="ts">
import { Send } from '@lucide/vue'
import { openWhatsApp } from '~/composables/useWhatsApp'

const form = reactive({
  nombre: '',
  ciudad: '',
  rubro: '',
  objetivo: '',
  webRedes: '',
  presupuesto: '',
  mensaje: '',
})

const objetivos = [
  { value: 'seo', label: 'SEO / Posicionamiento en Google' },
  { value: 'instagram', label: 'Contenido para Instagram' },
  { value: 'tiktok', label: 'Contenido para TikTok' },
  { value: 'redes', label: 'Gestión de redes sociales' },
  { value: 'estrategia', label: 'Estrategia integral' },
  { value: 'ads', label: 'Publicidad pagada (Ads)' },
  { value: 'otro', label: 'Otro' },
]

const isSubmitting = ref(false)

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors'

function getObjetivoLabel(value: string) {
  return objetivos.find(o => o.value === value)?.label ?? value
}

function buildMessage() {
  const lines = [
    'Hola, quiero cotizar marketing digital para mi pyme.',
    '',
    `*Nombre:* ${form.nombre.trim()}`,
    `*Ciudad:* ${form.ciudad.trim()}`,
    `*Rubro:* ${form.rubro.trim()}`,
    `*Objetivo:* ${getObjetivoLabel(form.objetivo)}`,
  ]

  if (form.webRedes.trim()) {
    lines.push(`*Web / Redes:* ${form.webRedes.trim()}`)
  }
  if (form.presupuesto.trim()) {
    lines.push(`*Presupuesto mensual:* ${form.presupuesto.trim()}`)
  }
  if (form.mensaje.trim()) {
    lines.push('', `*Mensaje:* ${form.mensaje.trim()}`)
  }

  return lines.join('\n')
}

function onSubmit() {
  isSubmitting.value = true
  openWhatsApp(buildMessage())
}
</script>

<template>
  <form
    class="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"
    @submit.prevent="onSubmit"
  >
    <div class="mb-8">
      <h2 class="text-2xl font-black uppercase tracking-tight mb-2">Cuéntanos tu proyecto</h2>
      <p class="text-sm text-white/40 leading-relaxed">
        Completa el formulario y te redirigimos a WhatsApp con tu mensaje listo para enviar.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-4 mb-4">
      <div class="sm:col-span-1">
        <label for="contact-nombre" class="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">
          Nombre *
        </label>
        <input
          id="contact-nombre"
          v-model="form.nombre"
          type="text"
          required
          autocomplete="name"
          placeholder="Tu nombre"
          :class="inputClass"
        >
      </div>
      <div class="sm:col-span-1">
        <label for="contact-ciudad" class="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">
          Ciudad *
        </label>
        <input
          id="contact-ciudad"
          v-model="form.ciudad"
          type="text"
          required
          placeholder="Ej. Concepción, Los Ángeles"
          :class="inputClass"
        >
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-4 mb-4">
      <div>
        <label for="contact-rubro" class="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">
          Rubro de tu pyme *
        </label>
        <input
          id="contact-rubro"
          v-model="form.rubro"
          type="text"
          required
          placeholder="Ej. Restaurante, taller, retail"
          :class="inputClass"
        >
      </div>
      <div>
        <label for="contact-objetivo" class="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">
          Objetivo principal *
        </label>
        <select
          id="contact-objetivo"
          v-model="form.objetivo"
          required
          :class="[inputClass, 'appearance-none cursor-pointer']"
        >
          <option value="" disabled class="bg-[#0A0A0A]">Selecciona una opción</option>
          <option v-for="opt in objetivos" :key="opt.value" :value="opt.value" class="bg-[#0A0A0A]">
            {{ opt.label }}
          </option>
        </select>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-4 mb-4">
      <div>
        <label for="contact-web" class="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
          Sitio web o redes (opcional)
        </label>
        <input
          id="contact-web"
          v-model="form.webRedes"
          type="url"
          placeholder="https://instagram.com/tuempresa"
          :class="inputClass"
        >
      </div>
      <div>
        <label for="contact-presupuesto" class="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
          Presupuesto mensual (opcional)
        </label>
        <input
          id="contact-presupuesto"
          v-model="form.presupuesto"
          type="text"
          placeholder="Ej. $200.000 - $500.000"
          :class="inputClass"
        >
      </div>
    </div>

    <div class="mb-6">
      <label for="contact-mensaje" class="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
        Mensaje adicional (opcional)
      </label>
      <textarea
        id="contact-mensaje"
        v-model="form.mensaje"
        rows="4"
        placeholder="Cuéntanos qué necesitas o qué problema quieres resolver..."
        :class="[inputClass, 'resize-none']"
      />
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="flex w-full items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#20bd5a] transition-all shadow-xl shadow-green-500/20 disabled:opacity-70"
    >
      <Send class="w-4 h-4" />
      Enviar y abrir WhatsApp
    </button>
    <p class="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-white/30">
      Sin compromiso · Respuesta en menos de 24 h
    </p>
  </form>
</template>
