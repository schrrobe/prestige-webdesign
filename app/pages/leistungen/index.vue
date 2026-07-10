<script setup lang="ts">
useSeoMeta({
  title: 'Leistungen: Webdesign, SEO, E-Commerce & Wartung | Prestige Webdesign',
  description: 'Alle Leistungen im Überblick: Webdesign, Suchmaschinenoptimierung, Online-Shops, Webanwendungen und Wartung – aus einer Hand im Ruhrgebiet. Jetzt kostenlos beraten lassen.',
})
</script>

<template>
  <div>
    <PageHero
      badge="Leistungen"
      title="Digitale Lösungen aus"
      highlight="einer Hand"
      subtitle="Von der Konzeption bis zur Umsetzung – Webdesign, SEO, E-Commerce, Webanwendungen und Wartung für eine starke Online-Präsenz."
    >
      <NuxtLink to="/kontakt" class="btn-primary text-base">
        Kostenlose Beratung
        <AppIcon name="arrow-right" class="w-5 h-5" />
      </NuxtLink>
    </PageHero>

    <ServicesSection />
    <CTASection />
  </div>
</template>
