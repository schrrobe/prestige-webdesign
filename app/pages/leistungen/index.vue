<script setup lang="ts">
useSeoMeta({
  title: 'Leistungen | Prestige Webdesign – Webdesign, SEO, E-Commerce & Wartung',
  description: 'Modernes, responsive Webdesign für Ihr Unternehmen. Prestige Webdesign entwickelt Websites, die funktionieren. Kostenlose Beratung im Ruhrgebiet!',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-dark-900" />
      <div class="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative">
        <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Unsere Leistungen</span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
          Alles für Ihren <span class="text-gradient">digitalen Erfolg</span>
        </h1>
        <p class="text-dark-200 text-lg max-w-2xl">
          Von der Konzeption bis zur Umsetzung – wir bieten vollständige digitale Lösungen aus einer Hand.
        </p>
      </div>
    </section>

    <ServicesSection />
    <CTASection />
  </div>
</template>
