<script setup lang="ts">
/**
 * Fehlerseite. Läuft außerhalb von <NuxtPage>, deshalb
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
    <section class="border-b border-hair" aria-labelledby="error-title">
      <div class="wrap grid gap-12 pb-24 pt-14 md:pb-32 md:pt-20 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-8">
          <p class="font-serif text-[6rem] italic leading-none text-accent sm:text-[9rem]" style="font-variation-settings: 'opsz' 96;" aria-hidden="true">{{ status }}</p>
          <h1 id="error-title" class="t-display mt-6 text-5xl sm:text-6xl lg:text-7xl">
            {{ notFound ? 'Diese Seite gibt es nicht.' : 'Hier ist etwas schiefgelaufen.' }}
          </h1>
          <p class="t-lead mt-7 max-w-2xl text-ink-soft">
            <template v-if="notFound">
              Vielleicht hat sich die Adresse geändert, oder im Link steckt ein Tippfehler (Fehlercode {{ status }}).
              Hier geht es weiter:
            </template>
            <template v-else>
              Bitte versuchen Sie es gleich noch einmal – oder schreiben Sie mir, wenn der Fehler bleibt (Fehlercode {{ status }}).
            </template>
          </p>
          <ul class="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <li v-for="link in links" :key="link.to">
              <a
                :href="link.to"
                class="btn w-full sm:w-auto"
                :class="link.primary ? 'btn-primary' : 'btn-outline'"
                @click.prevent="go(link.to)"
              >{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
