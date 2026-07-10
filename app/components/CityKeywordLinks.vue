<script setup lang="ts">
const props = defineProps<{
  citySlug: 'dortmund' | 'essen' | 'bochum' | 'bottrop' | 'unna'
  cityName: string
}>()

const serviceLinks = [
  {
    title: 'Webdesign für Unternehmen',
    description: 'Individuelle Websites mit klarer Nutzerführung und sauberer technischer Basis.',
    to: '/leistungen/webdesign',
  },
  {
    title: 'SEO für lokale Sichtbarkeit',
    description: `Technisches SEO, Content und lokale Optimierung für bessere Rankings in ${props.cityName}.`,
    to: '/leistungen/seo',
  },
  {
    title: 'Webanwendungen und Portale',
    description: 'Digitale Prozesse, Kundenbereiche und individuelle Tools für wachsende Unternehmen.',
    to: '/leistungen/webanwendungen',
  },
  {
    title: 'Kontakt und Erstgespräch',
    description: 'Unverbindliche Anfrage für Webdesign, SEO oder Relaunch im Ruhrgebiet.',
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
    <div class="container-narrow mx-auto space-y-12">
      <div class="max-w-3xl">
        <h2 class="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
          Relevante Leistungen für Unternehmen in {{ props.cityName }}
        </h2>
        <p class="text-dark-200 leading-relaxed">
          Für bessere Rankings helfen wenige starke Zielseiten deutlich mehr als viele dünne Unterseiten. Deshalb verlinken wir hier direkt auf die zentralen Leistungen und Kontaktpunkte.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="link in serviceLinks"
          :key="link.to"
          :to="link.to"
          class="glass-card-hover p-6 group"
        >
          <h3 class="text-lg font-semibold text-white mb-2 flex items-center justify-between gap-3">
            {{ link.title }}
            <AppIcon name="arrow-right" class="w-4 h-4 text-primary-300 shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
          </h3>
          <p class="text-dark-200 text-sm leading-relaxed">
            {{ link.description }}
          </p>
        </NuxtLink>
      </div>

      <div>
        <h3 class="font-display text-2xl font-semibold text-white mb-4">
          Weitere Standorte im Ruhrgebiet
        </h3>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            v-for="link in cityLinks"
            :key="link.to"
            :to="link.to"
            class="glass-card px-5 py-2.5 rounded-full text-sm text-dark-100 hover:text-white hover:border-white/20 transition-colors duration-200"
          >
            Webdesign {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
