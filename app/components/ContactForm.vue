<script setup lang="ts">
const config = useRuntimeConfig()
const accessKey = (config.public.web3formsKey as string) || ''

const form = reactive({
  name: '',
  email: '',
  projekt: '',
  message: '',
  botcheck: '', // Honeypot
})

const errors = reactive<Record<string, string>>({
  name: '',
  email: '',
  projekt: '',
  message: '',
})

type Status = 'idle' | 'submitting' | 'success' | 'error'
const status = ref<Status>('idle')

const projektOptionen = [
  'Webdesign',
  'SEO',
  'E-Commerce',
  'Webanwendung',
  'Wartung & Support',
  'Sonstiges',
]

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(): boolean {
  errors.name = form.name.trim() ? '' : 'Bitte geben Sie Ihren Namen an.'
  errors.email = !form.email.trim()
    ? 'Bitte geben Sie Ihre E-Mail-Adresse an.'
    : emailRegex.test(form.email.trim())
      ? ''
      : 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
  errors.projekt = form.projekt ? '' : 'Bitte wählen Sie ein Thema.'
  errors.message = form.message.trim().length >= 10
    ? ''
    : 'Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).'
  return !errors.name && !errors.email && !errors.projekt && !errors.message
}

async function onSubmit() {
  if (form.botcheck) return // Bot erkannt -> still verwerfen
  if (!validate()) return

  status.value = 'submitting'
  const subject = `Anfrage (${form.projekt}) über prestige-webdesign.de`

  try {
    if (accessKey) {
      const res = await $fetch<{ success: boolean }>('https://api.web3forms.com/submit', {
        method: 'POST',
        body: {
          access_key: accessKey,
          subject,
          from_name: 'Prestige Webdesign Kontaktformular',
          name: form.name,
          email: form.email,
          projekt: form.projekt,
          message: form.message,
        },
      })
      if (!res?.success) throw new Error('submit failed')
    } else {
      // Fallback ohne konfigurierten Endpunkt: vorbefülltes E-Mail-Programm öffnen
      const body = `Name: ${form.name}\nE-Mail: ${form.email}\nThema: ${form.projekt}\n\n${form.message}`
      window.location.href = `mailto:info@prestige-webdesign.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.projekt = ''
  form.message = ''
  status.value = 'idle'
}
</script>

<template>
  <div class="glass-card p-8 md:p-10">
    <!-- Erfolg -->
    <div v-if="status === 'success'" class="text-center py-8">
      <span class="mx-auto mb-6 flex w-14 h-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/25">
        <AppIcon name="check-circle" class="w-7 h-7" />
      </span>
      <h2 class="text-2xl font-display font-semibold text-white mb-3">Vielen Dank!</h2>
      <p class="text-dark-200 leading-relaxed max-w-md mx-auto">
        Ihre Nachricht ist bei uns eingegangen. Wir melden uns in der Regel innerhalb von 24 Stunden persönlich bei Ihnen.
      </p>
      <button type="button" class="btn-ghost mt-6" @click="resetForm">
        Weitere Nachricht senden
      </button>
    </div>

    <!-- Formular -->
    <form v-else novalidate class="space-y-6" @submit.prevent="onSubmit">
      <div>
        <h2 class="text-2xl font-display font-semibold text-white mb-2">Schreiben Sie uns</h2>
        <p class="text-dark-200 text-sm leading-relaxed">
          Erzählen Sie uns von Ihrem Projekt. Alle Felder mit * sind Pflichtfelder.
        </p>
      </div>

      <!-- Honeypot (visuell versteckt) -->
      <div class="hidden" aria-hidden="true">
        <label>Bitte nicht ausfüllen
          <input v-model="form.botcheck" type="text" tabindex="-1" autocomplete="off" />
        </label>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label for="cf-name" class="block text-sm font-medium text-dark-100 mb-2">Name *</label>
          <input
            id="cf-name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            class="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-dark-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-colors"
            :class="errors.name ? 'border-red-400/60' : ''"
            :aria-invalid="!!errors.name"
            :aria-describedby="errors.name ? 'cf-name-error' : undefined"
            placeholder="Ihr Name"
          />
          <p v-if="errors.name" id="cf-name-error" class="mt-1.5 text-sm text-red-300">{{ errors.name }}</p>
        </div>

        <div>
          <label for="cf-email" class="block text-sm font-medium text-dark-100 mb-2">E-Mail *</label>
          <input
            id="cf-email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            class="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-dark-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-colors"
            :class="errors.email ? 'border-red-400/60' : ''"
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'cf-email-error' : undefined"
            placeholder="name@beispiel.de"
          />
          <p v-if="errors.email" id="cf-email-error" class="mt-1.5 text-sm text-red-300">{{ errors.email }}</p>
        </div>
      </div>

      <div>
        <label for="cf-projekt" class="block text-sm font-medium text-dark-100 mb-2">Thema *</label>
        <select
          id="cf-projekt"
          v-model="form.projekt"
          class="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-colors"
          :class="[errors.projekt ? 'border-red-400/60' : '', form.projekt ? 'text-white' : 'text-dark-400']"
          :aria-invalid="!!errors.projekt"
          :aria-describedby="errors.projekt ? 'cf-projekt-error' : undefined"
        >
          <option value="" disabled>Bitte auswählen …</option>
          <option v-for="opt in projektOptionen" :key="opt" :value="opt" class="bg-dark-800 text-white">{{ opt }}</option>
        </select>
        <p v-if="errors.projekt" id="cf-projekt-error" class="mt-1.5 text-sm text-red-300">{{ errors.projekt }}</p>
      </div>

      <div>
        <label for="cf-message" class="block text-sm font-medium text-dark-100 mb-2">Ihre Nachricht *</label>
        <textarea
          id="cf-message"
          v-model="form.message"
          rows="5"
          class="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-dark-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-colors resize-y"
          :class="errors.message ? 'border-red-400/60' : ''"
          :aria-invalid="!!errors.message"
          :aria-describedby="errors.message ? 'cf-message-error' : undefined"
          placeholder="Beschreiben Sie kurz Ihr Vorhaben, Ihre Ziele und Ihren Zeitrahmen."
        />
        <p v-if="errors.message" id="cf-message-error" class="mt-1.5 text-sm text-red-300">{{ errors.message }}</p>
      </div>

      <div v-if="status === 'error'" class="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
        Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an
        <a href="mailto:info@prestige-webdesign.de" class="underline hover:text-white">info@prestige-webdesign.de</a>.
      </div>

      <button type="submit" class="btn-primary w-full sm:w-auto" :disabled="status === 'submitting'">
        <template v-if="status === 'submitting'">Wird gesendet …</template>
        <template v-else>
          Nachricht senden
          <AppIcon name="arrow-right" class="w-5 h-5" />
        </template>
      </button>
    </form>
  </div>
</template>
