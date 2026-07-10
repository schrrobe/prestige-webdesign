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
  title: 'Online-Shop erstellen lassen – WooCommerce & Shopify | Prestige Webdesign',
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
    description: 'Integration von PayPal, Stripe, Klarna, SOFORT und anderen Zahlungsanbietern für sichere Transaktionen.',
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
  <div>
    <PageHero
      badge="E-Commerce Leistung"
      title="Professionelle"
      highlight="E-Commerce Lösungen"
      subtitle="Verkaufen Sie online mit einem professionellen Shop, der nicht nur gut aussieht, sondern auch nachweislich mehr Umsätze generiert. Mit WooCommerce oder Shopify – wir finden die perfekte Lösung für Sie."
    >
      <NuxtLink to="/kontakt" class="btn-primary text-base">Kostenlose Beratung <AppIcon name="arrow-right" class="w-5 h-5" /></NuxtLink>
      <NuxtLink to="/leistungen" class="btn-secondary text-base">Alle Leistungen</NuxtLink>
    </PageHero>

    <!-- Platform Comparison Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Plattformen"
          title="WooCommerce oder"
          highlight="Shopify?"
          subtitle="Beide Plattformen haben Vorteile. Wir helfen Ihnen, die beste Lösung für Ihre Anforderungen zu wählen und perfekt umzusetzen."
          class="mb-16"
        />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="platform in platformFeatures"
            :key="platform.title"
            class="glass-card p-8"
          >
            <IconBadge :icon="platform.icon" tone="orange" size="lg" class="mb-6" />

            <h3 class="text-xl font-semibold text-white mb-3">
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
                  <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                  <span class="text-dark-200">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Service-Portfolio"
          title="Unser E-Commerce"
          highlight="Service-Portfolio"
          subtitle="Von der Shop-Entwicklung bis zur Optimierung – wir kümmern uns um alles, damit Ihr Online-Shop erfolgreich ist."
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="glass-card-hover p-8 group"
          >
            <IconBadge :icon="service.icon" tone="orange" size="lg" class="mb-6 group-hover:scale-105" />
            <h3 class="text-xl font-semibold text-white mb-3">
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
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Vorteile"
          title="Warum ein"
          highlight="professioneller Online-Shop"
          subtitle="Ein gut entwickelter Online-Shop ist eine der besten Investitionen für stabiles, skalierungsfähiges Geschäftswachstum."
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.number"
            class="glass-card-hover p-8 group"
          >
            <div class="text-primary-300 text-5xl font-display font-bold mb-4">
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

    <!-- Trust Stats -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <StatsRow bordered />
      </div>
    </section>

    <!-- Was einen erfolgreichen Shop ausmacht -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Erfolgsfaktoren"
          title="Was einen erfolgreichen"
          highlight="Online-Shop ausmacht"
          subtitle="Ein Shop verkauft nicht durch Zufall. Diese Faktoren entscheiden darüber, ob aus Besuchern Käufer werden."
          class="mb-12"
        />

        <div class="max-w-4xl mx-auto grid gap-4">
          <div class="glass-card p-6 flex gap-4">
            <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-0.5" />
            <p class="text-dark-200 leading-relaxed">
              <span class="text-white font-semibold">Reibungsloser Checkout:</span> Jeder zusätzliche Schritt kostet Conversions. Wir reduzieren den Kaufprozess auf das Nötigste – mit klaren Zahlungswegen und Trust-Signalen.
            </p>
          </div>
          <div class="glass-card p-6 flex gap-4">
            <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-0.5" />
            <p class="text-dark-200 leading-relaxed">
              <span class="text-white font-semibold">Schnelle Ladezeiten:</span> Studien zeigen, dass jede zusätzliche Sekunde Ladezeit die Kaufabbrüche erhöht. Performance ist bei uns kein Nachgedanke, sondern Teil des Fundaments.
            </p>
          </div>
          <div class="glass-card p-6 flex gap-4">
            <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-0.5" />
            <p class="text-dark-200 leading-relaxed">
              <span class="text-white font-semibold">Mobile-First:</span> Der Großteil der Shop-Besuche erfolgt mobil. Ihr Shop muss auf dem Smartphone genauso überzeugen wie am Desktop.
            </p>
          </div>
          <div class="glass-card p-6 flex gap-4">
            <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-0.5" />
            <p class="text-dark-200 leading-relaxed">
              <span class="text-white font-semibold">Auffindbarkeit:</span> Produkte und Kategorien werden von Anfang an suchmaschinenfreundlich strukturiert, damit Sie auch über Google gefunden werden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader title="Häufige Fragen zu" highlight="E-Commerce" class="mb-12" />
        <FaqAccordion :items="faqItems" />
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
