<script setup lang="ts">
useSeoMeta({
  title: 'Kontakt | Prestige Webdesign – Kostenlose Beratung',
  description: 'Kontaktieren Sie Prestige Webdesign in Dortmund. Kostenlose Beratung für Webdesign & SEO. Schnelle Antworten, persönliche Betreuung.',
  ogTitle: 'Kontakt | Prestige Webdesign',
  ogDescription: 'Kontaktieren Sie Prestige Webdesign in Dortmund fuer Webdesign, SEO und E-Commerce. Wir antworten meist innerhalb von 24 Stunden.',
})

useHead({
  script: [
    {
      key: 'contact-structured-data',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Kontakt',
        url: 'https://prestige-webdesign.de/kontakt',
        mainEntity: {
          '@type': 'ProfessionalService',
          name: 'Prestige Webdesign',
          email: 'info@prestige-webdesign.de',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Kapitelwiese 14',
            postalCode: '44263',
            addressLocality: 'Dortmund',
            addressCountry: 'DE',
          },
        },
      }),
    },
  ],
})

const contactInfo = [
  {
    icon: 'mail',
    label: 'E-Mail',
    value: 'info@prestige-webdesign.de',
    href: 'mailto:info@prestige-webdesign.de',
  },
  {
    icon: 'location',
    label: 'Adresse',
    value: 'Kapitelwiese 14, 44263 Dortmund',
    href: 'https://maps.google.com/?q=Kapitelwiese+14+44263+Dortmund',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-dark-900" />
      <div class="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative">
        <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Kontakt</span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
          Lassen Sie uns <span class="text-gradient">sprechen</span>
        </h1>
        <p class="text-dark-200 text-lg max-w-2xl">
          Sprechen Sie mit unseren Experten – per E-Mail oder über das Kontaktformular. Wir antworten meist innerhalb von 24 Stunden.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding !pt-0">
      <div class="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-1 space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="glass-card p-6"
            >
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                  <svg v-if="info.icon === 'mail'" class="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <svg v-if="info.icon === 'location'" class="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-dark-300 text-sm mb-1">{{ info.label }}</p>
                  <a :href="info.href" :target="info.icon === 'location' ? '_blank' : undefined" :rel="info.icon === 'location' ? 'noreferrer' : undefined" class="text-white font-medium hover:text-primary-400 transition-colors">
                    {{ info.value }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="glass-card p-6">
              <h3 class="text-white font-semibold mb-3">Antwortzeit</h3>
              <p class="text-dark-200 text-sm leading-relaxed">
                Wir antworten auf Ihre Anfrage in der Regel innerhalb von 24 Stunden. Für dringende Anliegen erreichen Sie uns per E-Mail.
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="glass-card p-8 md:p-10">
              <div class="space-y-6">
                <div class="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-2xl font-display font-bold text-white mb-2">Kontaktformular voruebergehend deaktiviert</h2>
                  <p class="text-dark-200 leading-relaxed">
                    Das Formular ist aktuell nicht aktiv, da das derzeitige Hosting keinen serverseitigen Node.js-Betrieb fuer den sicheren Versand unterstuetzt.
                    Schreiben Sie uns bitte direkt per E-Mail. Wir antworten in der Regel innerhalb von 24 Stunden.
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p class="text-sm uppercase tracking-wider text-dark-300 mb-2">Direkter Kontakt</p>
                  <a
                    href="mailto:info@prestige-webdesign.de?subject=Anfrage%20ueber%20prestige-webdesign.de"
                    class="inline-flex items-center gap-2 text-lg font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    info@prestige-webdesign.de
                  </a>
                </div>
                <p class="text-sm text-dark-300">
                  Sobald eine passende serverseitige Umgebung oder ein externer Formularservice eingerichtet ist, kann das Formular wieder aktiviert werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
