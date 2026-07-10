<script setup lang="ts">
useSeoMeta({
  title: 'Leistungen | Prestige Webdesign – Webdesign, SEO, E-Commerce & Wartung',
  description: 'Modernes, responsive Webdesign für Ihr Unternehmen. Prestige Webdesign entwickelt Websites, die funktionieren. Kostenlose Beratung im Ruhrgebiet!',
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
