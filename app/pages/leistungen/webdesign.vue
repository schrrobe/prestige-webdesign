<script setup lang="ts">
const faqItems = [
  {
    question: 'Was kostet eine professionelle Website?',
    answer: 'Die Kosten für eine professionelle Website variieren je nach Umfang, Design und Funktionen. Einfache Unternehmenswebsites starten ab etwa 1.500 €, umfangreichere Projekte mit individuellen Funktionen kosten entsprechend mehr. Wir erstellen Ihnen gerne ein unverbindliches Angebot.',
  },
  {
    question: 'Wie lange dauert die Entwicklung einer Website?',
    answer: 'Eine typische Unternehmenswebsite ist in 2 bis 6 Wochen fertig, abhängig von Umfang und Feedbackzeiten. Wir arbeiten in einem klar strukturierten Prozess und halten Sie in jedem Schritt auf dem Laufenden.',
  },
  {
    question: 'Was ist responsives Webdesign?',
    answer: 'Responsives Webdesign bedeutet, dass Ihre Website auf allen Geräten – Desktop, Tablet und Smartphone – perfekt aussieht und funktioniert. Da mehr als 60 % der Nutzer mobil surfen, ist responsives Design heute ein absolutes Muss.',
  },
  {
    question: 'Kümmern Sie sich auch um Texte und Inhalte?',
    answer: 'Ja, auf Wunsch übernehmen wir die Erstellung von SEO-optimierten Texten, die Ihre Zielgruppe ansprechen und gleichzeitig bei Google gut ranken. Alternativ können Sie eigene Inhalte liefern, die wir dann einpflegen.',
  },
]

useSeoMeta({
  title: 'Webdesign | Prestige Webdesign – Moderne Responsive Websites',
  description: 'Professionelles Webdesign für moderne Responsive Websites. Wir entwickeln benutzerfreundliche und suchmaschinenoptimierte Websites, die Ihre Besucher in Kunden verwandeln. Jetzt beraten lassen!',
  ogTitle: 'Webdesign Agentur | Prestige Webdesign',
  ogDescription: 'Professionelles Webdesign: Responsive Websites mit modernem Design und hoher Benutzerfreundlichkeit aus Dortmund.',
})

useHead({
  script: [
    {
      key: 'webdesign-faq-schema',
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

const processSteps = [
  {
    number: '01',
    title: 'Analyse & Strategie',
    description: 'Wir analysieren Ihre Zielgruppe, Ihre Konkurrenz und Ihre Geschäftsziele, um eine solide Grundlage für das Design zu schaffen.',
  },
  {
    number: '02',
    title: 'Design & Konzept',
    description: 'Unser Designteam erstellt beeindruckende Wireframes und hochwertige Mockups, abgestimmt auf Ihre Marke und Ziele.',
  },
  {
    number: '03',
    title: 'Entwicklung & Testing',
    description: 'Wir entwickeln Ihre Website mit modernen Technologien und testen umfassend auf Funktionalität, Sicherheit und Performance.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Nach dem Launch bieten wir kontinuierliche Unterstützung, Updates und Optimierungen für langfristigen Erfolg.',
  },
]

const features = [
  {
    icon: 'responsive',
    title: 'Responsive Design',
    description: 'Ihre Website funktioniert perfekt auf Desktop, Tablet und Smartphone – ein konsistentes Nutzererlebnis auf allen Geräten.',
  },
  {
    icon: 'speed',
    title: 'Blitzschnelle Performance',
    description: 'Optimierte Ladezeiten durch modernes Code, Bildkompression und Best Practices für schnellere Seiten und bessere SEO.',
  },
  {
    icon: 'ux',
    title: 'Nutzerfreundliche UX',
    description: 'Intuitive Navigation und angenehme Bedienung führen Ihre Besucher zielgerichtet zu Ihren Leistungen und Produkten.',
  },
  {
    icon: 'conversion',
    title: 'Conversion-optimiert',
    description: 'Jedes Element ist darauf ausgerichtet, Besucher in Kunden zu verwandeln – mit klaren Calls-to-Action und überzeugenden Inhalten.',
  },
  {
    icon: 'seo',
    title: 'SEO-freundlich',
    description: 'Technisch optimiert für Suchmaschinen mit sauberer Struktur, schnellen Ladezeiten und mobiler Optimierung.',
  },
  {
    icon: 'modern',
    title: 'Moderne Technologie',
    description: 'Wir nutzen zukunftssichere Technologien wie Vue, Nuxt und Tailwind CSS für robuste und wartbare Websites.',
  },
]

const reasons = [
  { title: 'Individuelle Lösungen', description: 'Jede Website wird speziell für Ihre Anforderungen entwickelt – keine Standardlösungen.' },
  { title: 'Langfristige Partnerschaft', description: 'Wir unterstützen Sie auch nach dem Launch mit Wartung und kontinuierlicher Optimierung.' },
  { title: 'Messbare Ergebnisse', description: 'Wir setzen auf datengesteuerte Strategien, um Ihre Website zu einem echten Business-Tool zu machen.' },
  { title: 'Lokale Expertise', description: 'Als Agentur aus Dortmund kennen wir die regionalen Märkte und Besonderheiten.' },
]
</script>

<template>
  <div>
    <PageHero
      badge="Webdesign"
      title="Professionelles"
      highlight="Webdesign"
      subtitle="Moderne, responsive Websites, die nicht nur beeindrucken, sondern messbare Ergebnisse liefern. Anspruchsvolles Design trifft intelligente Technologie."
    >
      <NuxtLink to="/kontakt" class="btn-primary text-base">
        Kostenlose Beratung
        <AppIcon name="arrow-right" class="w-5 h-5" />
      </NuxtLink>
      <NuxtLink to="/leistungen" class="btn-secondary text-base">
        Alle Leistungen
      </NuxtLink>
    </PageHero>

    <!-- Features -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Das macht unser Webdesign"
          highlight="besonders"
          subtitle="Jede Website wird individuell entwickelt – mit modernem Design, hoher Benutzerfreundlichkeit und besten SEO-Praktiken."
          class="mb-16"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="feature in features" :key="feature.title" class="glass-card-hover p-8 group">
            <IconBadge :icon="feature.icon" tone="primary" size="lg" class="mb-6 group-hover:scale-105" />
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-dark-200 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Unser"
          highlight="Designprozess"
          subtitle="Von der ersten Idee bis zum Launch – strukturiert, transparent und in enger Abstimmung mit Ihnen."
          class="mb-16"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="step in processSteps" :key="step.number" class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">{{ step.number }}</div>
            <h3 class="text-lg font-semibold text-white mb-3">{{ step.title }}</h3>
            <p class="text-dark-300 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              Warum <span class="text-gradient">Prestige Webdesign</span> wählen?
            </h2>
            <p class="text-lg text-dark-200 mb-8 leading-relaxed">
              Wir unterstützen Unternehmen im Ruhrgebiet bei ihrer digitalen Präsenz. Unser Team aus erfahrenen Designern und Entwicklern bringt Ihre Vision in die Realität.
            </p>
            <ul class="space-y-5">
              <li v-for="reason in reasons" :key="reason.title" class="flex gap-4">
                <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-base font-semibold text-white">{{ reason.title }}</h3>
                  <p class="text-dark-300 text-sm mt-1">{{ reason.description }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="glass-card p-8 md:p-10">
            <p class="text-dark-200 leading-relaxed mb-8">
              Mit einem bewährten Prozess und moderner Technologie liefern wir Websites, die optisch überzeugen und echte Geschäftsergebnisse erzielen.
            </p>
            <StatsRow bordered />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Häufige Fragen zum"
          highlight="Webdesign"
          class="mb-12"
        />
        <FaqAccordion :items="faqItems" />
      </div>
    </section>

    <CTASection
      title="Bereit für Ihre neue Website?"
      subtitle="Lassen Sie uns ein unverbindliches Gespräch führen. Wir zeigen Ihnen, wie eine professionelle Website Ihr Business voranbringt."
      buttonText="Termin vereinbaren"
      buttonLink="/kontakt"
    />
  </div>
</template>
