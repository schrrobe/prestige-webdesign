<script setup lang="ts">
/**
 * Ausführliches Kontaktformular. Pflicht ist nur die E-Mail-Adresse –
 * alles andere hilft, hält aber niemanden auf.
 */
import { INQUIRY_TOPICS } from '~/data/services'
import { CONTACT } from '~/data/site'

const route = useRoute()
const initialTopic = typeof route.query.thema === 'string' && (INQUIRY_TOPICS as readonly string[]).includes(route.query.thema)
  ? route.query.thema
  : ''

const form = reactive({ name: '', email: '', topic: initialTopic, message: '', botcheck: '' })
const emailError = ref('')
const emailInput = ref<HTMLInputElement | null>(null)
const statusHeading = ref<HTMLElement | null>(null)
const errorAlert = ref<HTMLElement | null>(null)

const { status, send, reset } = useInquiry()

async function onSubmit() {
  emailError.value = validateEmail(form.email)
  if (emailError.value) {
    emailInput.value?.focus()
    return
  }
  await send({ name: form.name, email: form.email, topic: form.topic, message: form.message, source: 'Kontaktseite' }, form.botcheck)
  if (status.value === 'sent' || status.value === 'mailto') {
    await nextTick()
    statusHeading.value?.focus()
  } else if (status.value === 'error') {
    await nextTick()
    errorAlert.value?.focus()
  }
}

function startOver() {
  Object.assign(form, { name: '', topic: '', message: '' })
  reset()
}
</script>

<template>
  <div class="rounded-2xl border border-hair p-6 md:p-10">
    <div v-if="status === 'sent' || status === 'mailto'" role="status" class="animate-stamp py-6">
      <p class="flex items-center gap-2 text-sm font-semibold text-accent">
        <AppIcon name="check-circle" class="h-5 w-5" />
        {{ status === 'sent' ? 'Nachricht gesendet' : 'Fast geschafft' }}
      </p>
      <h2 ref="statusHeading" tabindex="-1" class="t-headline mt-4 max-w-[18ch] focus:outline-none">
        {{ status === 'sent' ? 'Danke – Ihre Nachricht ist angekommen.' : 'Bitte noch im E-Mail-Programm absenden.' }}
      </h2>
      <p v-if="status === 'sent'" class="t-lead mt-5 max-w-xl text-ink-soft">
        Ich melde mich innerhalb von 24 Stunden persönlich bei Ihnen – mit einer ersten Einschätzung und einem Terminvorschlag.
      </p>
      <p v-else class="t-lead mt-5 max-w-xl text-ink-soft">
        Ihr E-Mail-Programm hat eine vorbereitete Nachricht geöffnet. Falls nicht: schreiben Sie direkt an
        <a :href="`mailto:${CONTACT.email}`" class="link text-ink">{{ CONTACT.email }}</a>.
      </p>
      <button type="button" class="btn btn-outline mt-8" @click="startOver">Weitere Nachricht schreiben</button>
    </div>

    <form v-else novalidate aria-labelledby="cf-title" @submit.prevent="onSubmit">
      <h2 id="cf-title" class="font-serif text-[1.75rem] leading-tight md:text-[2rem]" style="font-weight: 500;">Erzählen Sie mir von Ihrem Vorhaben</h2>
      <p class="mt-2 text-ink-soft">Nur die E-Mail-Adresse ist Pflicht. Alles andere hilft mir, gut vorbereitet ins Gespräch zu gehen.</p>

      <fieldset class="mt-8">
        <legend class="field-label">Worum geht es?</legend>
        <div class="mt-2 flex flex-wrap gap-2">
          <label v-for="t in INQUIRY_TOPICS" :key="t" class="chip">
            <input v-model="form.topic" type="radio" name="cf-topic" :value="t" class="sr-only" />
            {{ t }}
          </label>
        </div>
      </fieldset>

      <div class="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label for="cf-name" class="field-label">Name <span class="font-normal text-ink-soft">(optional)</span></label>
          <input id="cf-name" v-model="form.name" type="text" autocomplete="name" class="input" />
        </div>
        <div>
          <label for="cf-email" class="field-label">E-Mail-Adresse</label>
          <input
            id="cf-email"
            ref="emailInput"
            v-model="form.email"
            type="email"
            inputmode="email"
            autocomplete="email"
            required
            aria-required="true"
            class="input"
            :aria-invalid="!!emailError"
            :aria-describedby="emailError ? 'cf-email-error' : undefined"
            placeholder="name@firma.de"
            @input="emailError && (emailError = validateEmail(form.email))"
          />
          <p v-if="emailError" id="cf-email-error" class="field-error">
            <AppIcon name="alert" class="mt-0.5 h-5 w-5 shrink-0" />{{ emailError }}
          </p>
        </div>
      </div>

      <div class="mt-6">
        <label for="cf-message" class="field-label">Ihre Nachricht <span class="font-normal text-ink-soft">(optional)</span></label>
        <textarea
          id="cf-message"
          v-model="form.message"
          rows="6"
          class="input resize-y"
          aria-describedby="cf-message-hint"
        />
        <p id="cf-message-hint" class="mt-2 text-sm text-ink-soft">
          Hilfreich: Was macht Ihr Betrieb? Gibt es schon eine Website? Bis wann soll es fertig sein?
        </p>
      </div>

      <div class="hidden" aria-hidden="true">
        <label>Bitte leer lassen <input v-model="form.botcheck" type="text" tabindex="-1" autocomplete="off" /></label>
      </div>

      <p v-if="status === 'error'" ref="errorAlert" tabindex="-1" role="alert" class="focus:outline-none mt-6 rounded-lg border border-danger px-4 py-3 font-semibold text-danger">
        Das hat nicht geklappt. Bitte versuchen Sie es noch einmal oder schreiben Sie an
        <a :href="`mailto:${CONTACT.email}`" class="underline">{{ CONTACT.email }}</a>.
      </p>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" class="btn btn-primary" :disabled="status === 'submitting'">
          <template v-if="status === 'submitting'">Wird gesendet …</template>
          <template v-else>
            Nachricht senden
            <AppIcon name="arrow-right" class="h-5 w-5" />
          </template>
        </button>
        <p class="text-sm text-ink-soft">
          Mit dem Absenden gelten die Hinweise im <NuxtLink to="/datenschutz" class="link">Datenschutz</NuxtLink>.
        </p>
      </div>
    </form>
  </div>
</template>
