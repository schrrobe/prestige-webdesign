<script setup lang="ts">
/**
 * Die Eintrittskarte: Kurzanfrage in zwei Schritten (Thema antippen,
 * E-Mail eintragen). Nachricht optional. Erfolg = Stempel auf der Karte.
 */
import { INQUIRY_TOPICS } from '~/data/services'
import { CONTACT } from '~/data/site'

const props = withDefaults(defineProps<{ source?: string; headingLevel?: 'h2' | 'h3' }>(), {
  source: 'Eintrittskarte',
  headingLevel: 'h2',
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
  <div class="ticket border-2 border-ink">
    <!-- Abriss-Abschnitt -->
    <div class="flex h-[var(--tear)] items-center justify-between gap-4 px-6">
      <component :is="headingLevel" :id="ids.title" class="text-[1.75rem] uppercase leading-[0.95]" style="font-stretch: 62%; font-weight: 880;">
        Erstgespräch<span class="block text-ink-soft">Eintritt frei</span>
      </component>
      <DotMark class="h-7 w-auto shrink-0" />
    </div>
    <div class="ticket-tear" aria-hidden="true" />

    <div class="relative px-6 pb-6 pt-7">
      <!-- Erfolg / mailto: Stempel und klare nächste Schritte -->
      <div v-if="status === 'sent' || status === 'mailto'" role="status" :id="ids.status" class="min-h-[18rem]">
        <p
          class="animate-stamp absolute right-5 top-4 border-[3px] border-signal-ink px-3 py-1 text-xl uppercase text-signal-ink"
          style="font-stretch: 62%; font-weight: 880;"
          aria-hidden="true"
        >{{ status === 'sent' ? 'Angefragt' : 'Fast fertig' }}</p>
        <h3 ref="statusHeading" tabindex="-1" class="t-title max-w-[14ch] pt-10 focus:outline-none">
          {{ status === 'sent' ? 'Danke – Ihre Anfrage ist da.' : 'Bitte noch im E-Mail-Programm absenden.' }}
        </h3>
        <p v-if="status === 'sent'" class="mt-3 text-ink-soft">
          Ich melde mich innerhalb von 24 Stunden bei <strong class="text-ink">{{ email }}</strong> und schlage einen Termin für das Erstgespräch vor.
        </p>
        <p v-else class="mt-3 text-ink-soft">
          Ihr E-Mail-Programm hat eine vorbereitete Nachricht geöffnet. Hat das nicht geklappt? Schreiben Sie direkt an
          <a :href="`mailto:${CONTACT.email}`" class="link font-semibold text-ink">{{ CONTACT.email }}</a>.
        </p>
        <button type="button" class="link mt-6 inline-flex min-h-11 items-center font-semibold" @click="startOver">
          Weitere Anfrage stellen
        </button>
      </div>

      <form v-else novalidate :aria-labelledby="ids.title" @submit.prevent="onSubmit">
        <fieldset>
          <legend :id="ids.topic" class="field-label">Worum geht es? <span class="font-normal text-ink-soft">(optional)</span></legend>
          <div class="flex flex-wrap gap-2">
            <label v-for="t in INQUIRY_TOPICS" :key="t" class="chip text-[0.9375rem]">
              <input v-model="topic" type="radio" :name="`${uid}-topic`" :value="t" class="sr-only" />
              {{ t }}
            </label>
          </div>
        </fieldset>

        <div class="mt-6">
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
          <p v-if="emailError" :id="ids.emailError" class="field-error">
            <AppIcon name="alert" class="mt-0.5 h-5 w-5 shrink-0" />{{ emailError }}
          </p>
          <p :id="ids.emailHint" class="mt-2 text-sm text-ink-soft">Nur für meine Antwort. Kein Newsletter.</p>
        </div>

        <div class="mt-4">
          <button
            v-if="!showMessage"
            type="button"
            class="inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-2 underline-offset-4 decoration-ink/30 hover:decoration-signal"
            :aria-controls="ids.message"
            aria-expanded="false"
            @click="openMessage"
          >
            <AppIcon name="plus" class="h-4 w-4" />
            Nachricht hinzufügen
          </button>
          <div v-else>
            <label :for="ids.message" class="field-label">Ihre Nachricht <span class="font-normal text-ink-soft">(optional)</span></label>
            <textarea
              :id="ids.message"
              ref="messageInput"
              v-model="message"
              rows="3"
              class="input resize-y"
              placeholder="Zum Beispiel: Wir sind ein Malerbetrieb mit 8 Leuten und brauchen eine neue Website."
            />
          </div>
        </div>

        <!-- Honeypot -->
        <div class="hidden" aria-hidden="true">
          <label>Bitte leer lassen <input v-model="botcheck" type="text" tabindex="-1" autocomplete="off" /></label>
        </div>

        <p v-if="status === 'error'" role="alert" class="mt-5 border-2 border-danger px-4 py-3 text-[0.9375rem] font-semibold text-danger">
          Das hat nicht geklappt. Bitte versuchen Sie es noch einmal oder schreiben Sie an
          <a :href="`mailto:${CONTACT.email}`" class="underline">{{ CONTACT.email }}</a>.
        </p>

        <button type="submit" class="btn btn-signal mt-6 w-full" :disabled="status === 'submitting'">
          <template v-if="status === 'submitting'">Wird gesendet …</template>
          <template v-else>
            Erstgespräch anfragen
            <AppIcon name="arrow-right" class="h-5 w-5" />
          </template>
        </button>
        <p class="mt-2 flex flex-wrap items-center justify-center gap-x-2 text-sm text-ink-soft">
          Antwort innerhalb von 24 Stunden ·
          <NuxtLink to="/datenschutz" class="link inline-flex min-h-11 items-center">Datenschutz</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>
