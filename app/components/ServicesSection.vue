<script setup lang="ts">
const services = [
  {
    icon: 'code',
    tone: 'blue',
    title: 'Webdesign',
    description: 'Moderne, responsive Websites, die auf allen Geräten perfekt aussehen und Besucher in Kunden verwandeln.',
    link: '/leistungen/webdesign',
  },
  {
    icon: 'search',
    tone: 'purple',
    title: 'SEO',
    description: 'Gezielte Suchmaschinenoptimierung für bessere Google Rankings und mehr qualifizierte Besucher.',
    link: '/leistungen/seo',
  },
  {
    icon: 'cart',
    tone: 'orange',
    title: 'E-Commerce',
    description: 'Leistungsstarke Online-Shops mit WooCommerce und Shopify, die verkaufen und Ihre Marke stärken.',
    link: '/leistungen/e-commerce',
  },
  {
    icon: 'shield',
    tone: 'green',
    title: 'Wartung & Support',
    description: 'Regelmäßige Updates, Sicherheits-Backups und Performance-Optimierung für Ihre Website.',
    link: '/leistungen/wartung',
  },
  {
    icon: 'app',
    tone: 'indigo',
    title: 'Webanwendungen',
    description: 'Komplexe individuelle Web-Apps, Portale und digitale Tools für Prozesse, Plattformen und interne Abläufe.',
    link: '/leistungen/webanwendungen',
  },
] as const

const { el, revealed } = useReveal()
</script>

<template>
  <section class="section-padding relative overflow-hidden">
    <div class="container-narrow mx-auto relative">
      <SectionHeader
        label="Unsere Leistungen"
        title="Alles für Ihren"
        highlight="digitalen Erfolg"
        subtitle="Von der Konzeption bis zur Umsetzung – alle Leistungen aus einer Hand für eine starke Online-Präsenz."
        class="mb-16"
      />

      <div
        ref="el"
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <NuxtLink
          v-for="service in services"
          :key="service.title"
          :to="service.link"
          class="glass-card-hover p-8 group"
          :aria-label="`${service.title} – mehr erfahren`"
        >
          <IconBadge :icon="service.icon" :tone="service.tone" size="lg" class="mb-6 group-hover:scale-105" />
          <h3 class="text-xl font-semibold text-white mb-3">
            {{ service.title }}
          </h3>
          <p class="text-dark-200 leading-relaxed mb-6">
            {{ service.description }}
          </p>
          <span class="inline-flex items-center gap-2 text-primary-300 text-sm font-medium group-hover:gap-3 transition-all duration-200">
            {{ service.title }} entdecken
            <AppIcon name="arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
