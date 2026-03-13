<script setup lang="ts">
const services = [
  {
    icon: 'code',
    title: 'Webdesign',
    description: 'Moderne, responsive Websites, die auf allen Geräten perfekt aussehen und Besucher in Kunden verwandeln.',
    link: '/leistungen/webdesign',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'search',
    title: 'SEO',
    description: 'Gezielte Suchmaschinenoptimierung für bessere Google Rankings und mehr qualifizierte Besucher.',
    link: '/leistungen/seo',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'cart',
    title: 'E-Commerce',
    description: 'Leistungsstarke Online-Shops mit WooCommerce und Shopify, die verkaufen und Ihre Marke stärken.',
    link: '/leistungen/e-commerce',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: 'shield',
    title: 'Wartung & Support',
    description: 'Regelmäßige Updates, Sicherheits-Backups und Performance-Optimierung für Ihre Website.',
    link: '/leistungen/wartung',
    gradient: 'from-green-500 to-emerald-500',
  },
]
</script>

<template>
  <section class="section-padding relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px] -translate-x-1/2" />

    <div class="container-narrow mx-auto relative">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Unsere Leistungen</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
          Alles für Ihren <span class="text-gradient">digitalen Erfolg</span>
        </h2>
        <p class="text-dark-200 text-lg max-w-2xl mx-auto">
          Von der Konzeption bis zur Umsetzung – wir bieten Ihnen alle Leistungen aus einer Hand für eine starke Online-Präsenz.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="(service, index) in services"
          :key="service.title"
          :to="service.link"
          class="glass-card-hover p-8 group"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br transition-transform duration-500 group-hover:scale-110"
            :class="service.gradient"
          >
            <!-- Code Icon -->
            <svg v-if="service.icon === 'code'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <!-- Search Icon -->
            <svg v-if="service.icon === 'search'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <!-- Cart Icon -->
            <svg v-if="service.icon === 'cart'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <!-- Shield Icon -->
            <svg v-if="service.icon === 'shield'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
            {{ service.title }}
          </h3>
          <p class="text-dark-200 leading-relaxed mb-6">
            {{ service.description }}
          </p>

          <!-- Link arrow -->
          <span class="inline-flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors duration-200">
            Mehr erfahren
            <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
