<script setup lang="ts">
useSeoMeta({
  title: 'Kontakt | Prestige Webdesign – Kostenlose Beratung',
  description: 'Kontaktieren Sie Prestige Webdesign in Dortmund. Kostenlose Beratung für Webdesign & SEO. Schnelle Antworten, persönliche Betreuung.',
  ogTitle: 'Kontakt | Prestige Webdesign',
  ogDescription: 'Kontaktieren Sie Prestige Webdesign in Dortmund fuer Webdesign, SEO und E-Commerce. Wir antworten meist innerhalb von 24 Stunden.',
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const hasAcceptedPrivacyPolicy = ref(false)

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

async function handleSubmit() {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
}

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
              <div v-if="isSubmitted" class="text-center py-12" role="status" aria-live="polite">
                <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <svg class="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-2xl font-display font-bold text-white mb-3">Nachricht gesendet!</h3>
                <p class="text-dark-200">Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>

              <form v-else @submit.prevent="handleSubmit" class="space-y-6">
                <h2 class="text-2xl font-display font-bold text-white mb-2">Kostenlose Beratung anfordern</h2>
                <p id="contact-form-description" class="text-dark-300 text-sm mb-8">Füllen Sie das Formular aus und wir melden uns bei Ihnen.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-dark-100 mb-2">Name *</label>
                    <input
                      id="name"
                      v-model="form.name"
                      name="name"
                      type="text"
                      required
                      autocomplete="name"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-300 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-dark-100 mb-2">E-Mail *</label>
                    <input
                      id="email"
                      v-model="form.email"
                      name="email"
                      type="email"
                      required
                      autocomplete="email"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-300 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-dark-100 mb-2">Telefon</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      name="phone"
                      type="tel"
                      autocomplete="tel"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-300 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                  <div>
                    <label for="company" class="block text-sm font-medium text-dark-100 mb-2">Unternehmen</label>
                    <input
                      id="company"
                      v-model="form.company"
                      name="company"
                      type="text"
                      autocomplete="organization"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-300 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                </div>

                <div>
                  <label for="service" class="block text-sm font-medium text-dark-100 mb-2">Gewünschte Leistung</label>
                  <select
                    id="service"
                    v-model="form.service"
                    name="service"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="" class="bg-dark-800">Bitte wählen...</option>
                    <option value="webdesign" class="bg-dark-800">Webdesign</option>
                    <option value="seo" class="bg-dark-800">SEO / Suchmaschinenoptimierung</option>
                    <option value="ecommerce" class="bg-dark-800">E-Commerce / Online-Shop</option>
                    <option value="wartung" class="bg-dark-800">Wartung & Support</option>
                    <option value="sonstiges" class="bg-dark-800">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-dark-100 mb-2">Nachricht *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    name="message"
                    required
                    rows="5"
                    autocomplete="off"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-300 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                </div>

                <div class="flex items-start gap-3">
                  <input id="privacy-policy" v-model="hasAcceptedPrivacyPolicy" name="privacy-policy" type="checkbox" required class="mt-1 accent-primary-500" />
                  <label for="privacy-policy" class="text-dark-300 text-sm">
                    Ich habe die <NuxtLink to="/datenschutz" class="text-primary-400 hover:text-primary-300 underline">Datenschutzerklärung</NuxtLink> gelesen und bin mit der Verarbeitung meiner Daten einverstanden.
                  </label>
                </div>

                <button
                  type="submit"
                  class="btn-primary w-full md:w-auto"
                  :disabled="isSubmitting"
                  :aria-busy="isSubmitting"
                  aria-describedby="contact-form-description"
                >
                  <svg v-if="isSubmitting" class="animate-spin w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht senden' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
