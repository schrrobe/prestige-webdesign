<script setup lang="ts">
/**
 * Fehlerseite („Abseits“). Läuft außerhalb von <NuxtPage>, deshalb
 * selbst in <NuxtLayout> gewickelt, damit Kopf und Fuß erscheinen.
 * Links funktionieren auch ohne JavaScript (statische 404.html),
 * mit JavaScript räumt clearError() den Fehlerzustand auf.
 */
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const status = computed(() => props.error?.status ?? props.error?.statusCode ?? 500)
const notFound = computed(() => status.value === 404)

useHead({
  title: () => notFound.value
    ? 'Seite nicht gefunden | Prestige Webdesign'
    : 'Fehler | Prestige Webdesign',
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})

const links = [
  { label: 'Zur Startseite', to: '/', primary: true },
  { label: 'Leistungen', to: '/leistungen', primary: false },
  { label: 'Kontakt', to: '/kontakt', primary: false },
]

function go(to: string) {
  clearError({ redirect: to })
}
</script>

<template>
  <NuxtLayout>
    <section class="on-field" data-rubric="Abseits" aria-labelledby="error-title">
      <div class="wrap grid gap-12 pb-20 pt-12 md:pb-28 md:pt-16 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-8">
          <h1 id="error-title" class="t-display text-[4rem] sm:text-8xl lg:text-[9rem]">
            {{ notFound ? 'Abseits.' : 'Spiel\u00ADunterbrechung.' }}
          </h1>
          <p class="t-lead mt-6 max-w-2xl md:mt-8">
            <template v-if="notFound">
              Diese Seite gibt es hier nicht – vielleicht hat sich die Adresse geändert, oder im Link steckt ein Tippfehler.
              Von hier aus geht es zurück ins Spiel:
            </template>
            <template v-else>
              Hier ist gerade etwas schiefgelaufen. Bitte versuchen Sie es gleich noch einmal –
              oder schreiben Sie mir, wenn der Fehler bleibt.
            </template>
          </p>
          <ul class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <li v-for="link in links" :key="link.to">
              <a
                :href="link.to"
                class="btn w-full sm:w-auto"
                :class="link.primary ? 'btn-signal' : 'btn-outline'"
                @click.prevent="go(link.to)"
              >{{ link.label }}</a>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-4">
          <dl class="inline-flex flex-col bg-board px-6 py-5 text-board-dot">
            <dt class="text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-[#e9e2d0]" style="font-stretch: 88%;">Fehlercode</dt>
            <dd class="t-board order-first text-7xl leading-none sm:text-8xl">{{ status }}</dd>
          </dl>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
