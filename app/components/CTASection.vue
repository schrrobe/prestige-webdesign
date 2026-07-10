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
    <div class="container-narrow mx-auto relative">
      <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-800/40 px-6 py-16 md:px-16 md:py-20 text-center">
        <div class="absolute inset-0 bg-mesh" aria-hidden="true" />
        <div class="blur-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] max-w-[80%] bg-primary-600/10" aria-hidden="true" />

        <div class="relative">
          <span class="eyebrow mb-4">Jetzt starten</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-5 text-balance">
            {{ title }}
          </h2>
          <p class="text-dark-200 text-lg max-w-2xl mx-auto mb-10">
            {{ subtitle }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink :to="buttonLink" class="btn-primary text-base">
              {{ buttonText }}
              <AppIcon name="arrow-right" class="w-5 h-5" />
            </NuxtLink>
            <a href="mailto:info@prestige-webdesign.de" class="btn-secondary text-base">
              <AppIcon name="mail" class="w-5 h-5" />
              info@prestige-webdesign.de
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
