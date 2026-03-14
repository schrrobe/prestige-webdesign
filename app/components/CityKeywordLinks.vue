<script setup lang="ts">
const props = defineProps<{
  citySlug: 'dortmund' | 'essen' | 'bochum' | 'bottrop'
  cityName: string
}>()

const keywordLinks = [
  { label: 'Website erstellen lassen', slug: 'website-erstellen-lassen' },
  { label: 'Webdesign für kleine Unternehmen', slug: 'webdesign-fuer-kleine-unternehmen' },
  { label: 'Webdesign Stadt', slug: 'webdesign-stadt' },
  { label: 'Webdesign Agentur', slug: 'webdesign-agentur' },
  { label: 'Webdesigner beauftragen', slug: 'webdesigner-beauftragen' },
  { label: 'Professionelle Website für Firma', slug: 'professionelle-website-fuer-firma' },
  { label: 'WordPress Webdesign für Unternehmen', slug: 'wordpress-webdesign-fuer-unternehmen' },
  { label: 'Website erstellen lassen für Handwerker', slug: 'website-erstellen-lassen-fuer-handwerker' },
  { label: 'Webdesign für Kanzleien', slug: 'webdesign-fuer-kanzleien' },
  { label: 'SEO optimierte Website erstellen lassen', slug: 'seo-optimierte-website-erstellen-lassen' },
  { label: 'Professionelle Firmenwebsite in Stadt', slug: 'professionelle-firmenwebsite-in-stadt' },
  { label: 'Webdesign für kleine Unternehmen in Stadt', slug: 'webdesign-fuer-kleine-unternehmen-in-stadt' },
]
</script>

<template>
  <section class="section-padding bg-dark-850">
    <div class="container-narrow">
      <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gradient">
        Weitere Unterseiten für {{ props.cityName }}
      </h2>
      <p class="text-gray-300 mb-8 max-w-3xl">
        Keyword-Landingpages mit klarer Kaufabsicht, lokalem Bezug und B2B-Fokus in {{ props.cityName }}.
      </p>
      <div class="grid md:grid-cols-2 gap-4">
        <NuxtLink
          v-for="link in keywordLinks"
          :key="link.slug"
          :to="`/${props.citySlug}/${link.slug}`"
          class="glass-card glass-card-hover p-5 rounded-xl text-white hover:text-primary-300 transition-colors duration-200"
        >
          {{ link.label.replace('Stadt', props.cityName) }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
