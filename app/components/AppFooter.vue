<script setup lang="ts">
import { CONTACT, CITIES, SERVICE_NAV } from '~/data/site'

const currentYear = new Date().getFullYear()
const { measurementId, reopen } = useConsent()

const pages = [
  { label: 'Referenzen', to: '/referenzen' },
  { label: 'Preise', to: '/preise' },
  { label: 'Über mich', to: '/ueber-mich' },
  { label: 'Kontakt', to: '/kontakt' },
]
</script>

<template>
  <footer class="on-field" data-rubric="Abpfiff">
    <div class="wrap pb-10 pt-16 md:pt-20">
      <div class="grid gap-x-8 gap-y-12 md:grid-cols-12">
        <div class="md:col-span-5">
          <p class="t-display text-[3.25rem] sm:text-7xl">Glück auf<br>aus Dortmund.</p>
          <p class="mt-6 max-w-sm text-field-soft">
            Webdesign für Betriebe im Ruhrgebiet. Ein Ansprechpartner von der ersten Idee bis zum Launch.
          </p>
          <address class="mt-6 not-italic leading-relaxed">
            {{ CONTACT.owner }} · {{ CONTACT.company }}<br>
            {{ CONTACT.street }}, {{ CONTACT.zip }} {{ CONTACT.city }}<br>
            <a :href="`mailto:${CONTACT.email}`" class="link mt-1 inline-flex min-h-11 items-center font-semibold">{{ CONTACT.email }}</a>
          </address>
        </div>

        <nav class="md:col-span-2" aria-labelledby="footer-services">
          <h2 id="footer-services" class="t-label mb-3 text-field-soft">Leistungen</h2>
          <ul>
            <li v-for="link in SERVICE_NAV" :key="link.to">
              <NuxtLink :to="link.to" class="footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav class="md:col-span-2" aria-labelledby="footer-cities">
          <h2 id="footer-cities" class="t-label mb-3 text-field-soft">Standorte</h2>
          <ul>
            <li v-for="city in CITIES" :key="city.to">
              <NuxtLink :to="city.to" class="footer-link">Webdesign {{ city.name }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav class="md:col-span-3" aria-labelledby="footer-pages">
          <h2 id="footer-pages" class="t-label mb-3 text-field-soft">Mehr</h2>
          <ul>
            <li v-for="link in pages" :key="link.to">
              <NuxtLink :to="link.to" class="footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
          <NuxtLink to="/kontakt" class="btn btn-signal mt-6">
            Erstgespräch anfragen
            <AppIcon name="arrow-right" class="h-5 w-5" />
          </NuxtLink>
        </nav>
      </div>

      <div class="mt-16 flex flex-col gap-8 border-t-2 border-field-ink/40 pt-8 md:flex-row md:items-end md:justify-between">
        <ThemeSwitch />
        <div class="flex flex-col gap-3 text-sm md:items-end">
          <ul class="flex flex-wrap gap-x-6">
            <li><NuxtLink to="/impressum" class="footer-link">Impressum</NuxtLink></li>
            <li><NuxtLink to="/datenschutz" class="footer-link">Datenschutz</NuxtLink></li>
            <li v-if="measurementId">
              <button type="button" class="footer-link" @click="reopen">Cookie-Einstellungen</button>
            </li>
          </ul>
          <p class="text-field-soft">© {{ currentYear }} {{ CONTACT.company }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply inline-flex min-h-11 items-center font-semibold underline decoration-transparent decoration-2 underline-offset-[0.22em] transition-colors duration-150 hover:decoration-signal;
}
</style>
