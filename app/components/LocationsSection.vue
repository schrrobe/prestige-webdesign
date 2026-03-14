<script setup lang="ts">
const locations = [
  {
    city: 'Dortmund',
    description: 'Unser Hauptstandort im Herzen des Ruhrgebiets. Wir kennen den Markt in Dortmund und erstellen Websites, die funktionieren.',
    link: '/webdesign-dortmund',
    highlight: 'Hauptsitz',
  },
  {
    city: 'Bochum',
    description: 'Eine Stadt mit vielfältiger Kultur und wirtschaftlicher Dynamik. Professionelles Webdesign für Bochumer Unternehmen.',
    link: '/webdesign-bochum',
    highlight: null,
  },
  {
    city: 'Essen',
    description: 'Innovativ und modern – genau wie unsere Websites für Essener Unternehmen. Von der Zeche Zollverein bis zur Messe Essen.',
    link: '/webdesign-essen',
    highlight: null,
  },
  {
    city: 'Bottrop',
    description: 'Lokale Websites fuer Unternehmen in Bottrop mit Fokus auf Sichtbarkeit, Vertrauen und mobile Nutzerfreundlichkeit.',
    link: '/webdesign-bottrop',
    highlight: null,
  },
  {
    city: 'Unna',
    description: 'Professionelles Webdesign fuer Unternehmen in Unna und im Kreis Unna, klar strukturiert und lokal suchmaschinenoptimiert.',
    link: '/webdesign-unna',
    highlight: null,
  },
]
</script>

<template>
  <section class="section-padding relative overflow-hidden bg-dark-800/30">
    <div class="container-narrow mx-auto">
      <div class="text-center mb-16">
        <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Unsere Standorte</span>
        <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-6">
          Webdesign im <span class="text-gradient">Ruhrgebiet</span>
        </h2>
        <p class="text-dark-200 text-lg max-w-2xl mx-auto">
          Wir betreuen Unternehmen in Dortmund, Bochum, Essen und dem gesamten Ruhrgebiet mit professionellem Webdesign und SEO.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <NuxtLink
          v-for="location in locations"
          :key="location.city"
          :to="location.link"
          class="glass-card-hover p-8 text-center group relative"
        >
          <div v-if="location.highlight" class="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/20">
            {{ location.highlight }}
          </div>

          <!-- City icon placeholder -->
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center border border-primary-500/20 group-hover:scale-110 transition-transform duration-500">
            <svg class="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Webdesign {{ location.city }}</h3>
          <p class="text-dark-200 text-sm leading-relaxed mb-4">{{ location.description }}</p>

          <span class="inline-flex items-center text-primary-400 text-sm font-medium">
            Mehr erfahren
            <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
