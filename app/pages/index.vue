<script setup lang="ts">
const faqItems = [
  {
    question: 'Was bringt professionelles Webdesign fuer Google Rankings?',
    answer: 'Professionelles Webdesign verbessert Struktur, Ladezeit, mobile Nutzbarkeit und interne Verlinkung. Damit wird Ihre Website fuer Nutzer hilfreicher und fuer Suchmaschinen leichter verstaendlich.',
  },
  {
    question: 'Wie lange dauert SEO, bis Ergebnisse sichtbar werden?',
    answer: 'Erste Verbesserungen bei Technik, Indexierung und lokalen Suchanfragen sind oft frueher sichtbar. Nachhaltige Rankings fuer umkaempfte Begriffe entwickeln sich in der Regel ueber mehrere Monate.',
  },
  {
    question: 'Warum sind lokale Standortseiten wichtig?',
    answer: 'Standortseiten helfen Google, Ihren regionalen Bezug klar zu erkennen. Gleichzeitig beantworten sie Fragen von Interessenten aus Dortmund, Bochum, Essen, Bottrop und dem Kreis Unna gezielter.',
  },
  {
    question: 'Welche Seiten sollten priorisiert optimiert werden?',
    answer: 'Zuerst die Startseite, die wichtigsten Leistungsseiten, die Kontaktseite und starke lokale Landingpages. Diese Seiten tragen meist den groessten Anteil an Sichtbarkeit, Vertrauen und Anfragen.',
  },
]

useSeoMeta({
  title: 'Prestige Webdesign | Webagentur Dortmund – Webdesign, SEO & E-Commerce',
  description: 'Prestige Webdesign: Professionelle Webagentur für modernes Webdesign, SEO & E-Commerce im Ruhrgebiet. Jetzt Kontakt aufnehmen!',
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
    <h1 class="sr-only">
      Prestige Webdesign – Webagentur für Webdesign, SEO und E-Commerce im Ruhrgebiet
    </h1>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <LocationsSection />
    <SeoFaqSection
      title="Haeufige Fragen zu Webdesign, SEO und lokaler Sichtbarkeit"
      intro="Diese Antworten staerken die wichtigsten Themen rund um Sichtbarkeit, Conversion und regionale Auffindbarkeit im Ruhrgebiet."
      :items="faqItems"
    />
    <CTASection />
  </div>
</template>
