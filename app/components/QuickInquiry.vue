<script setup lang="ts">
/**
 * Kurzanfrage in zwei Schritten (Thema antippen, E-Mail eintragen).
 * Nachricht optional. Nach dem Absenden: klare Bestätigung mit Fokus.
 */
import { INQUIRY_TOPICS } from '~/data/services'
import { CONTACT } from '~/data/site'

const props = withDefaults(defineProps<{
  source?: string
  headingLevel?: 'h2' | 'h3'
  /** inline: Startseite unter dem Vorspann; panel: Kasten mit Überschrift */
  variant?: 'inline' | 'panel'
  framed?: boolean
}>(), {
  source: 'Kurzanfrage',
  headingLevel: 'h2',
  variant: 'panel',
  framed: true,
})

const uid = useId()
const ids = {
  title: `${uid}-title`,
  topic: `${uid}-topic`,
  email: `${uid}-email`,
  emailError: `${uid}-email-error`,
  emailHint: `${uid}-email-hint`,
  message: `${uid}-message`,
  status: `${uid}-status`,
}

const topic = ref('')
const email = ref('')
const message = ref('')
const botcheck = ref('')
const showMessage = ref(false)
const emailError = ref('')

const emailInput = ref<HTMLInputElement | null>(null)
const messageInput = ref<HTMLTextAreaElement | null>(null)
const statusHeading = ref<HTMLElement | null>(null)

const { status, send, reset } = useInquiry()

async function openMessage() {
  showMessage.value = true
  await nextTick()
  messageInput.value?.focus()
}

async function onSubmit() {
  emailError.value = validateEmail(email.value)
  if (emailError.value) {
    emailInput.value?.focus()
    return
  }
  await send({ email: email.value, topic: topic.value, message: message.value, source: props.source }, botcheck.value)
  if (status.value === 'sent' || status.value === 'mailto') {
    await nextTick()
    statusHeading.value?.focus()
  }
}

function startOver() {
  topic.value = ''
  message.value = ''
  showMessage.value = false
  reset()
}
</script>

<template>
  <div :class="variant === 'panel' && framed ? 'rounded-2xl border border-hair bg-paper p-6 md:p-8' : ''">
    <component
      :is="headingLevel"
      :id="ids.title"
      :class="variant === 'inline' ? 'sr-only' : 'font-serif text-[1.75rem] leading-tight'"
      style="font-weight: 500; font-variation-settings: 'opsz' 36;"
    >Kostenloses Erstgespräch anfragen</component>
    <p v-if="variant === 'panel'" class="mt-2 text-ink-soft">Zwei Angaben genügen – ich melde mich innerhalb von 24 Stunden.</p>

    <!-- Erfolg / mailto -->
    <div v-if="status === 'sent' || status === 'mailto'" :id="ids.status" role="status" class="animate-stamp" :class="variant === 'panel' ? 'mt-8' : 'mt-2'">
      <p class="flex items-center gap-2 text-sm font-semibold text-accent [.on-accent_&]:text-ink">
        <AppIcon name="check-circle" class="h-5 w-5" />
        {{ status === 'sent' ? 'Anfrage gesendet' : 'Fast geschafft' }}
      </p>
      <h3 ref="statusHeading" tabindex="-1" class="mt-3 font-serif text-2xl leading-snug focus:outline-none md:text-[1.75rem]" style="font-weight: 500;">
        {{ status === 'sent' ? 'Danke – Ihre Anfrage ist angekommen.' : 'Bitte noch im E-Mail-Programm absenden.' }}
      </h3>
      <p v-if="status === 'sent'" class="mt-3 text-ink-soft">
        Ich melde mich innerhalb von 24 Stunden bei <strong class="font-semibold text-ink">{{ email }}</strong> und schlage einen Termin für das Erstgespräch vor.
      </p>
      <p v-else class="mt-3 text-ink-soft">
        Ihr E-Mail-Programm hat eine vorbereitete Nachricht geöffnet. Hat das nicht geklappt? Schreiben Sie direkt an
        <a :href="`mailto:${CONTACT.email}`" class="link text-ink">{{ CONTACT.email }}</a>.
      </p>
      <button type="button" class="link mt-5 inline-flex min-h-11 items-center font-medium" @click="startOver">
        Weitere Anfrage stellen
      </button>
    </div>

    <form v-else novalidate :aria-labelledby="ids.title" :class="variant === 'panel' ? 'mt-7' : ''" @submit.prevent="onSubmit">
      <fieldset>
        <legend :id="ids.topic" class="field-label">Worum geht es? <span class="font-normal text-ink-soft">(optional)</span></legend>
        <div class="mt-2 flex flex-wrap gap-2">
          <label v-for="t in INQUIRY_TOPICS" :key="t" class="chip">
            <input v-model="topic" type="radio" :name="`${uid}-topic`" :value="t" class="sr-only" />
            {{ t }}
          </label>
        </div>
      </fieldset>

      <div class="mt-7" :class="variant === 'inline' ? 'sm:flex sm:items-end sm:gap-4' : ''">
        <div class="flex-1">
          <label :for="ids.email" class="field-label">Ihre E-Mail-Adresse</label>
          <input
            :id="ids.email"
            ref="emailInput"
            v-model="email"
            type="email"
            inputmode="email"
            autocomplete="email"
            required
            aria-required="true"
            class="input"
            :aria-invalid="!!emailError"
            :aria-describedby="emailError ? `${ids.emailError} ${ids.emailHint}` : ids.emailHint"
            placeholder="name@firma.de"
            @input="emailError && (emailError = validateEmail(email))"
          />
        </div>
        <button
          v-if="variant === 'inline'"
          type="submit"
          class="btn btn-primary mt-5 w-full sm:mt-0 sm:w-auto"
          :disabled="status === 'submitting'"
        >
          <template v-if="status === 'submitting'">Wird gesendet …</template>
          <template v-else>
            Erstgespräch anfragen
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </template>
        </button>
      </div>
      <p v-if="emailError" :id="ids.emailError" class="field-error">
        <AppIcon name="alert" class="mt-0.5 h-5 w-5 shrink-0" />{{ emailError }}
      </p>
      <p :id="ids.emailHint" class="mt-2 text-sm text-ink-soft">
        Nur für meine Antwort, kein Newsletter ·
        <NuxtLink to="/datenschutz" class="link inline-flex min-h-11 items-center">Datenschutz</NuxtLink>
      </p>

      <div v-if="variant === 'panel'" class="mt-2">
        <button
          v-if="!showMessage"
          type="button"
          class="inline-flex min-h-11 items-center gap-2 font-medium underline decoration-1 underline-offset-4 decoration-line hover:decoration-current"
          :aria-controls="ids.message"
          aria-expanded="false"
          @click="openMessage"
        >
          <AppIcon name="plus" class="h-4 w-4" />
          Nachricht hinzufügen
        </button>
        <div v-else class="mt-2">
          <label :for="ids.message" class="field-label">Ihre Nachricht <span class="font-normal text-ink-soft">(optional)</span></label>
          <textarea
            :id="ids.message"
            ref="messageInput"
            v-model="message"
            rows="3"
            class="input mt-1 resize-y"
            placeholder="Zum Beispiel: Wir sind ein Malerbetrieb mit 8 Leuten und brauchen eine neue Website."
          />
        </div>
      </div>

      <!-- Honeypot -->
      <div class="hidden" aria-hidden="true">
        <label>Bitte leer lassen <input v-model="botcheck" type="text" tabindex="-1" autocomplete="off" /></label>
      </div>

      <p v-if="status === 'error'" role="alert" class="mt-5 rounded-lg border border-danger px-4 py-3 text-[0.9375rem] font-semibold text-danger">
        Das hat nicht geklappt. Bitte versuchen Sie es noch einmal oder schreiben Sie an
        <a :href="`mailto:${CONTACT.email}`" class="underline">{{ CONTACT.email }}</a>.
      </p>

      <button v-if="variant === 'panel'" type="submit" class="btn btn-primary mt-6 w-full" :disabled="status === 'submitting'">
        <template v-if="status === 'submitting'">Wird gesendet …</template>
        <template v-else>
          Erstgespräch anfragen
          <AppIcon name="arrow-right" class="h-4 w-4" />
        </template>
      </button>
    </form>
  </div>
</template>
