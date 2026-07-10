<script setup lang="ts">
useSeoMeta({
  title: 'Kontakt | Prestige Webdesign – Kostenlose Beratung',
  description: 'Kontaktieren Sie Prestige Webdesign in Dortmund. Kostenlose Beratung für Webdesign & SEO. Schnelle Antworten, persönliche Betreuung.',
  ogTitle: 'Kontakt | Prestige Webdesign',
  ogDescription: 'Kontaktieren Sie Prestige Webdesign in Dortmund für Webdesign, SEO und E-Commerce. Wir antworten meist innerhalb von 24 Stunden.',
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
    external: false,
  },
  {
    icon: 'map-pin',
    label: 'Adresse',
    value: 'Kapitelwiese 14, 44263 Dortmund',
    href: 'https://maps.google.com/?q=Kapitelwiese+14+44263+Dortmund',
    external: true,
  },
]

const steps = [
  { title: 'Sie schreiben uns', description: 'Beschreiben Sie kurz Ihr Vorhaben über das Formular oder per E-Mail.' },
  { title: 'Wir melden uns', description: 'In der Regel innerhalb von 24 Stunden mit einer ersten Einschätzung.' },
  { title: 'Kostenloses Erstgespräch', description: 'Wir besprechen Ziele, Umfang und die passenden nächsten Schritte.' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <PageHero
      badge="Kontakt"
      title="Lassen Sie uns"
      highlight="sprechen"
      subtitle="Erzählen Sie uns von Ihrem Projekt. Wir antworten in der Regel innerhalb von 24 Stunden – persönlich und unverbindlich."
      compact
    />

    <!-- Kontakt: Formular + Kanäle -->
    <section class="section-padding relative overflow-hidden !pt-4">
      <div class="container-narrow mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <!-- Formular -->
          <div class="lg:col-span-3">
            <ContactForm />
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-2 space-y-6">
            <div v-for="info in contactInfo" :key="info.label" class="glass-card p-6">
              <div class="flex items-start gap-4">
                <IconBadge :icon="info.icon" tone="primary" size="md" />
                <div>
                  <p class="text-dark-300 text-sm mb-1">{{ info.label }}</p>
                  <a
                    :href="info.href"
                    :target="info.external ? '_blank' : undefined"
                    :rel="info.external ? 'noopener noreferrer' : undefined"
                    class="text-white font-medium hover:text-primary-300 transition-colors break-words"
                  >
                    {{ info.value }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Ablauf -->
            <div class="glass-card p-6">
              <h2 class="text-white font-semibold mb-5">So läuft die Zusammenarbeit</h2>
              <ol class="space-y-5">
                <li v-for="(step, i) in steps" :key="step.title" class="flex gap-4">
                  <span class="w-8 h-8 rounded-lg bg-primary-500/10 ring-1 ring-inset ring-primary-500/25 flex items-center justify-center text-primary-300 text-sm font-semibold shrink-0">
                    {{ i + 1 }}
                  </span>
                  <div>
                    <h3 class="text-white text-sm font-semibold">{{ step.title }}</h3>
                    <p class="text-dark-300 text-sm mt-0.5 leading-relaxed">{{ step.description }}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
