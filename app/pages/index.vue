<script setup lang="ts">
const faqItems = [
  {
    question: 'Was bringt professionelles Webdesign für Google Rankings?',
    answer: 'Professionelles Webdesign verbessert Struktur, Ladezeit, mobile Nutzbarkeit und interne Verlinkung. Damit wird Ihre Website für Nutzer hilfreicher und für Suchmaschinen leichter verständlich.',
  },
  {
    question: 'Wie lange dauert SEO, bis Ergebnisse sichtbar werden?',
    answer: 'Erste Verbesserungen bei Technik, Indexierung und lokalen Suchanfragen sind oft früher sichtbar. Nachhaltige Rankings für umkämpfte Begriffe entwickeln sich in der Regel über mehrere Monate.',
  },
  {
    question: 'Warum sind lokale Standortseiten wichtig?',
    answer: 'Standortseiten helfen Google, Ihren regionalen Bezug klar zu erkennen. Gleichzeitig beantworten sie Fragen von Interessenten aus Dortmund, Bochum, Essen, Bottrop und dem Kreis Unna gezielter.',
  },
  {
    question: 'Welche Seiten sollten priorisiert optimiert werden?',
    answer: 'Zuerst die Startseite, die wichtigsten Leistungsseiten, die Kontaktseite und starke lokale Landingpages. Diese Seiten tragen meist den größten Anteil an Sichtbarkeit, Vertrauen und Anfragen.',
  },
]

useSeoMeta({
  title: 'Webdesign & SEO im Ruhrgebiet – Webagentur Dortmund | Prestige Webdesign',
  description: 'Moderne Websites, SEO und Online-Shops für Unternehmen in Dortmund, Bochum, Essen & Umgebung. Festpreis, persönliche Betreuung, Antwort in 24 h – jetzt kostenlos beraten lassen.',
  ogTitle: 'Prestige Webdesign | Professionelle Webagentur im Ruhrgebiet',
  ogDescription: 'Moderne Websites für Ihr Business in Dortmund, Bochum und Essen. Webdesign, SEO & E-Commerce aus einer Hand.',
})

useHead({
  script: [
    {
      key: 'homepage-faq-schema',
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
</script>

<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <LocationsSection />
    <SeoFaqSection
      title="Häufige Fragen zu Webdesign, SEO und lokaler Sichtbarkeit"
      intro="Diese Antworten stärken die wichtigsten Themen rund um Sichtbarkeit, Conversion und regionale Auffindbarkeit im Ruhrgebiet."
      :items="faqItems"
    />
    <CTASection />
  </div>
</template>
