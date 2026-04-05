<script setup lang="ts">
const faqItems = [
  {
    question: 'WooCommerce oder Shopify – was ist die bessere Wahl?',
    answer: 'Das hängt von Ihren Anforderungen ab. WooCommerce bietet maximale Flexibilität und ist ideal für komplexe Shops mit besonderen Anforderungen. Shopify ist einfacher zu verwalten und eignet sich hervorragend für einen schnellen Marktstart. Wir beraten Sie kostenlos bei der Wahl der richtigen Plattform.',
  },
  {
    question: 'Was kostet ein professioneller Online-Shop?',
    answer: 'Ein professioneller Online-Shop kostet je nach Umfang zwischen 2.500 und 15.000 €. Entscheidend sind Produktanzahl, individuelle Funktionen, Zahlungsanbieter und Designaufwand. Wir erstellen Ihnen ein transparentes, unverbindliches Angebot.',
  },
  {
    question: 'Welche Zahlungsanbieter können integriert werden?',
    answer: 'Wir integrieren alle gängigen Zahlungsanbieter: PayPal, Stripe, Klarna, SOFORT, Kreditkarte und mehr. Die Auswahl richtet sich nach Ihrer Zielgruppe und Ihren Präferenzen.',
  },
  {
    question: 'Ist der Shop DSGVO-konform?',
    answer: 'Ja, wir entwickeln alle Shops von Anfang an DSGVO-konform: SSL-Verschlüsselung, korrekte Datenschutzhinweise, Cookie-Consent und PCI-DSS-konforme Zahlungsabwicklung sind selbstverständlich enthalten.',
  },
]

useSeoMeta({
  title: 'E-Commerce | Prestige Webdesign – Online-Shop Entwicklung',
  description: 'E-Commerce Lösungen und Online-Shop Entwicklung mit WooCommerce und Shopify. Professionelle Shop-Entwicklung im Ruhrgebiet mit Payment-Integration und Produktverwaltung.',
  ogTitle: 'E-Commerce Shop Entwicklung | Prestige Webdesign',
  ogDescription: 'Online-Shop Entwicklung: WooCommerce & Shopify Expertise. Professionelle E-Commerce Lösungen für Ihren Online-Handel.',
})

useHead({
  script: [
    {
      key: 'ecommerce-faq-schema',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }),
    },
  ],
})

const platformFeatures = [
  {
    icon: 'woocommerce',
    title: 'WooCommerce',
    description: 'Flexible, open-source E-Commerce-Lösung für WordPress mit unbegrenzter Skalierbarkeit und voller Kontrolle über Ihren Shop.',
    features: ['Unbegrenzte Produkte', 'Volle Anpassbarkeit', 'Niedrige Gebühren', 'Community-Support'],
  },
  {
    icon: 'shopify',
    title: 'Shopify',
    description: 'Moderne Cloud-basierte Plattform mit integrierten Tools, automatischen Updates und weltweiter Reichweite für schnelle Umsätze.',
    features: ['Einfache Verwaltung', 'Integrierte Tools', 'Hohe Sicherheit', 'Multi-Channel Selling'],
  },
]

const services = [
  {
    icon: 'cart',
    title: 'Shop-Design & Setup',
    description: 'Professionelles Design Ihres Online-Shops mit benutzerfreundlicher Navigation und optimiertem Checkout-Prozess.',
  },
  {
    icon: 'products',
    title: 'Produktverwaltung',
    description: 'Intelligente Produktdatenbank mit Kategorien, Varianten, Bestände und automatische Lagerbestandsverwaltung.',
  },
  {
    icon: 'payment',
    title: 'Payment-Integration',
    description: 'Integration von PayPal, Stripe, Klarna, SOFORT und anderen Zahlungsgatewayss für sichere Transaktionen.',
  },
  {
    icon: 'shipping',
    title: 'Versand & Logistik',
    description: 'Automatische Versandberechnung, Integration mit Versandanbietern und Tracking-Benachrichtigungen für Kunden.',
  },
  {
    icon: 'security',
    title: 'Sicherheit & DSGVO',
    description: 'SSL-Verschlüsselung, PCI-DSS-Konformität, DSGVO-Compliance und Schutz vor Betrug für maximale Kundensicherheit.',
  },
  {
    icon: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Umfassende Verkaufs- und Kundenanalysen mit detaillierten Reports über Ihre Shop-Performance.',
  },
]

const benefits = [
  {
    number: '01',
    title: 'Höhere Konversionsraten',
    description: 'Optimierter Checkout und intuitive Navigation führen zu mehr Käufen und weniger Warenkörbe-Abbrüchen.',
  },
  {
    number: '02',
    title: '24/7 Verkaufskanal',
    description: 'Ihr Online-Shop arbeitet rund um die Uhr, selbst wenn Sie schlafen – kontinuierliche Umsatzgenerierung.',
  },
  {
    number: '03',
    title: 'Kundenbeziehungen stärken',
    description: 'E-Mails, Newsletter und Kundenloyalitätsprogramme für wiederholte Käufe und bessere Kundenbindung.',
  },
  {
    number: '04',
    title: 'Skalierbarkeit',
    description: 'Einfach wachsen: Von wenigen bis zu tausenden Produkten – Ihr Shop wächst mit Ihrem Business.',
  },
  {
    number: '05',
    title: 'Datengesteuerte Entscheidungen',
    description: 'Detaillierte Analysen zeigen Ihnen, wie Kunden kaufen und wo es noch Optimierungspotential gibt.',
  },
  {
    number: '06',
    title: 'Kosteneffizienz',
    description: 'Reduzierte Verwaltungskosten durch Automatisierung und effiziente Lagerbestandsverwaltung.',
  },
]
</script>

<template>
  <div class="bg-dark-900 text-white">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-dark-900" />
      <div class="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[120px]" />

      <div class="container-narrow mx-auto relative">
        <div class="max-w-3xl">
          <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">E-Commerce Leistung</span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Professionelle <span class="text-gradient">E-Commerce Lösungen</span>
          </h1>
          <p class="text-xl text-dark-200 max-w-2xl leading-relaxed mb-8">
            Verkaufen Sie online mit einem professionellen Shop, der nicht nur gut aussieht, sondern auch nachweislich mehr Umsätze generiert. Mit WooCommerce oder Shopify – wir finden die perfekte Lösung für Sie.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@prestige-webdesign.de" class="btn-primary">
              Kostenlose Shop-Beratung
              <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <NuxtLink to="/#kontakt" class="btn-secondary">
              Unsere Projekte
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Comparison Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            WooCommerce oder <span class="text-gradient">Shopify?</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Beide Plattformen haben Vorteile. Wir helfen Ihnen, die beste Lösung für Ihre Anforderungen zu wählen und perfekt umzusetzen.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="platform in platformFeatures"
            :key="platform.title"
            class="glass-card-hover p-8"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-blue-500 to-cyan-500">
              <svg v-if="platform.icon === 'woocommerce'" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <svg v-if="platform.icon === 'shopify'" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 class="text-2xl font-display font-bold text-white mb-3">
              {{ platform.title }}
            </h3>
            <p class="text-dark-200 mb-6 leading-relaxed">
              {{ platform.description }}
            </p>

            <div class="space-y-3">
              <h4 class="text-white font-semibold text-sm uppercase tracking-wider">Hauptmerkmale</h4>
              <ul class="space-y-2">
                <li
                  v-for="feature in platform.features"
                  :key="feature"
                  class="flex items-start gap-3"
                >
                  <svg class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-dark-200">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/5 via-dark-900 to-primary-900/5" />
      <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[100px]" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Unser E-Commerce <span class="text-gradient">Service-Portfolio</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Von der Shop-Entwicklung bis zur Optimierung – wir kümmern uns um alles, damit Ihr Online-Shop erfolgreich ist.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="glass-card-hover p-8 group"
          >
            <!-- Icon -->
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
              <!-- Cart Icon -->
              <svg v-if="service.icon === 'cart'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <!-- Products Icon -->
              <svg v-if="service.icon === 'products'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <!-- Payment Icon -->
              <svg v-if="service.icon === 'payment'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h6m4 0h2M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
              <!-- Shipping Icon -->
              <svg v-if="service.icon === 'shipping'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <!-- Security Icon -->
              <svg v-if="service.icon === 'security'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <!-- Analytics Icon -->
              <svg v-if="service.icon === 'analytics'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
              {{ service.title }}
            </h3>
            <p class="text-dark-200 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/4 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Warum ein <span class="text-gradient">professioneller Online-Shop</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Ein gut entwickelter Online-Shop ist eine der besten Investitionen für stabiles, skalierungsfähiges Geschäftswachstum.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="benefit in benefits"
            :key="benefit.number"
            class="glass-card p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
          >
            <div class="text-primary-400 text-5xl font-display font-bold mb-4">
              {{ benefit.number }}
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              {{ benefit.title }}
            </h3>
            <p class="text-dark-200 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Story Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-dark-900" />
      <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[100px]" />

      <div class="container-narrow mx-auto relative">
        <div class="max-w-4xl">
          <div class="glass-card p-10 md:p-12 border-primary-600/30">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-xl">⭐</span>
              <span class="text-xl">⭐</span>
              <span class="text-xl">⭐</span>
              <span class="text-xl">⭐</span>
              <span class="text-xl">⭐</span>
            </div>

            <h3 class="text-3xl font-display font-bold text-white mb-4">
              "Seitdem wir unseren Shop online haben, sind unsere Umsätze um über 300% gestiegen."
            </h3>

            <p class="text-lg text-dark-200 mb-8 leading-relaxed">
              Mit Prestige Webdesign haben wir einen professionellen Online-Shop aufgebaut, der nicht nur gut aussieht, sondern auch wirklich verkauft. Das Team hat uns vom Anfang bis nach dem Launch begleitet und bietet kontinuierlichen Support. Wir sind sehr zufrieden!
            </p>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600" />
              <div>
                <p class="font-semibold text-white">Jennifer Weber</p>
                <p class="text-dark-300 text-sm">Gründerin, Fashion Boutique Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection
      title="Lassen Sie uns Ihren Online-Shop entwickeln"
      subtitle="Mit unserem E-Commerce Expertise und bewährten Prozess bauen wir einen Shop, der Ihre Umsätze steigert. Vereinbaren Sie ein unverbindliches Beratungsgespräch."
      buttonText="Shop-Beratung buchen"
      buttonLink="/kontakt"
    />
  </div>
</template>
