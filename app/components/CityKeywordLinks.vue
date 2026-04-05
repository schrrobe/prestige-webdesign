<script setup lang="ts">
const props = defineProps<{
  citySlug: 'dortmund' | 'essen' | 'bochum' | 'bottrop' | 'unna'
  cityName: string
}>()

const serviceLinks = [
  {
    title: 'Webdesign fuer Unternehmen',
    description: 'Individuelle Websites mit klarer Nutzerfuehrung und sauberer technischer Basis.',
    to: '/leistungen/webdesign',
  },
  {
    title: 'SEO fuer lokale Sichtbarkeit',
    description: `Technisches SEO, Content und lokale Optimierung fuer bessere Rankings in ${props.cityName}.`,
    to: '/leistungen/seo',
  },
  {
    title: 'Webanwendungen und Portale',
    description: 'Digitale Prozesse, Kundenbereiche und individuelle Tools fuer wachsende Unternehmen.',
    to: '/leistungen/webanwendungen',
  },
  {
    title: 'Kontakt und Erstgespraech',
    description: 'Unverbindliche Anfrage fuer Webdesign, SEO oder Relaunch im Ruhrgebiet.',
    to: '/kontakt',
  },
]

const cityLinks = [
  { label: 'Dortmund', to: '/webdesign-dortmund' },
  { label: 'Bochum', to: '/webdesign-bochum' },
  { label: 'Essen', to: '/webdesign-essen' },
  { label: 'Bottrop', to: '/webdesign-bottrop' },
  { label: 'Unna', to: '/webdesign-unna' },
].filter(link => link.to !== `/webdesign-${props.citySlug}`)
</script>

<template>
  <section class="section-padding bg-dark-850">
    <div class="container-narrow space-y-12">
      <div>
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-4 text-gradient">
          Relevante Leistungen fuer Unternehmen in {{ props.cityName }}
        </h2>
        <p class="text-gray-300 max-w-3xl">
          Fuer bessere Rankings helfen wenige starke Zielseiten deutlich mehr als viele duenne Unterseiten. Deshalb verlinken wir hier direkt auf die zentralen Leistungen und Kontaktpunkte.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <NuxtLink
          v-for="link in serviceLinks"
          :key="link.to"
          :to="link.to"
          class="glass-card glass-card-hover p-6 rounded-xl"
        >
          <h3 class="text-xl font-semibold text-white mb-3">
            {{ link.title }}
          </h3>
          <p class="text-gray-300 leading-relaxed">
            {{ link.description }}
          </p>
        </NuxtLink>
      </div>

      <div>
        <h3 class="font-display text-2xl font-bold text-white mb-4">
          Weitere Standorte im Ruhrgebiet
        </h3>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            v-for="link in cityLinks"
            :key="link.to"
            :to="link.to"
            class="glass-card px-5 py-3 rounded-full text-white hover:text-primary-300 transition-colors duration-200"
          >
            Webdesign {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
