<script setup lang="ts">
const locations = [
  {
    city: 'Dortmund',
    description: 'Unser Hauptstandort im Herzen des Ruhrgebiets. Wir kennen den Markt in Dortmund und erstellen Websites, die funktionieren.',
    link: '/webdesign-dortmund',
  },
  {
    city: 'Bochum',
    description: 'Eine Stadt mit vielfältiger Kultur und wirtschaftlicher Dynamik. Professionelles Webdesign für Bochumer Unternehmen.',
    link: '/webdesign-bochum',
  },
  {
    city: 'Essen',
    description: 'Innovativ und modern – genau wie unsere Websites für Essener Unternehmen. Von der Zeche Zollverein bis zur Messe Essen.',
    link: '/webdesign-essen',
  },
  {
    city: 'Bottrop',
    description: 'Lokale Websites für Unternehmen in Bottrop mit Fokus auf Sichtbarkeit, Vertrauen und mobile Nutzerfreundlichkeit.',
    link: '/webdesign-bottrop',
  },
  {
    city: 'Unna',
    description: 'Professionelles Webdesign für Unternehmen in Unna und im Kreis Unna, klar strukturiert und lokal suchmaschinenoptimiert.',
    link: '/webdesign-unna',
  },
]

const { el, revealed } = useReveal()
</script>

<template>
  <section class="section-padding relative overflow-hidden">
    <div class="container-narrow mx-auto relative">
      <SectionHeader
        label="Unsere Standorte"
        title="Webdesign im"
        highlight="Ruhrgebiet"
        subtitle="Wir betreuen Unternehmen in Dortmund, Bochum, Essen und dem gesamten Ruhrgebiet mit professionellem Webdesign und SEO."
        class="mb-16"
      />

      <div
        ref="el"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <NuxtLink
          v-for="location in locations"
          :key="location.city"
          :to="location.link"
          class="glass-card-hover p-8 group"
        >
          <IconBadge icon="map-pin" tone="primary" size="lg" class="mb-6 group-hover:scale-105" />
          <h3 class="text-xl font-semibold text-white mb-3">Webdesign {{ location.city }}</h3>
          <p class="text-dark-200 text-sm leading-relaxed mb-5">{{ location.description }}</p>
          <span class="inline-flex items-center gap-2 text-primary-300 text-sm font-medium group-hover:gap-3 transition-all duration-200">
            Standort ansehen
            <AppIcon name="arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>

        <!-- CTA-Karte -->
        <NuxtLink
          to="/kontakt"
          class="glass-card-hover p-8 group flex flex-col justify-center bg-primary-500/[0.06]"
        >
          <IconBadge icon="chat" tone="accent" size="lg" class="mb-6 group-hover:scale-105" />
          <h3 class="text-xl font-semibold text-white mb-3">Ihre Stadt nicht dabei?</h3>
          <p class="text-dark-200 text-sm leading-relaxed mb-5">
            Wir arbeiten remote für Kunden im gesamten Ruhrgebiet und darüber hinaus. Sprechen Sie uns an.
          </p>
          <span class="inline-flex items-center gap-2 text-accent-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
            Kontakt aufnehmen
            <AppIcon name="arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
