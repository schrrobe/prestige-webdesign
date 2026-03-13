<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Bereit für Ihren digitalen Erfolg?',
  subtitle: 'Lassen Sie sich von unseren Experten beraten – kostenlos und unverbindlich. Wir antworten meist innerhalb von 24 Stunden.',
  buttonText: 'Kostenlose Beratung vereinbaren',
  buttonLink: '/kontakt',
})
</script>

<template>
  <section class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-primary-950/20" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[120px]" />

    <div class="container-narrow mx-auto relative text-center">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
        {{ title }}
      </h2>
      <p class="text-dark-200 text-lg max-w-2xl mx-auto mb-10">
        {{ subtitle }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink :to="buttonLink" class="btn-primary text-lg">
          {{ buttonText }}
          <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
        <a href="mailto:info@prestige-webdesign.de" class="btn-secondary text-lg">
          info@prestige-webdesign.de
        </a>
      </div>
    </div>
  </section>
</template>
