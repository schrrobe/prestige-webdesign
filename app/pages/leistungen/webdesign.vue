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
</script>

<template>
  <div class="bg-dark-900 text-white">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-dark-900" />
      <div class="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[120px]" />

      <div class="container-narrow mx-auto relative">
        <div class="max-w-3xl">
          <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Webdesign Leistung</span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Professionelles <span class="text-gradient">Webdesign</span>
          </h1>
          <p class="text-xl text-dark-200 max-w-2xl leading-relaxed mb-8">
            Moderne, responsive Websites, die nicht nur beeindrucken, sondern auch messbare Ergebnisse liefern. Wir kombinieren anspruchsvolles Design mit intelligenter Technologie für Ihren digitalen Erfolg.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@prestige-webdesign.de" class="btn-primary">
              Kostenlose Beratung
              <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <NuxtLink to="/#kontakt" class="btn-secondary">
              Unsere Arbeiten ansehen
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Das macht unser Webdesign besonders
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Jede Website wird individuell für Ihre Anforderungen entwickelt – mit modernem Design, hoher Benutzerfreundlichkeit und besten SEO-Praktiken.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="glass-card-hover p-8 group"
          >
            <!-- Icon -->
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-primary-500 to-primary-600 group-hover:scale-110 transition-transform duration-300">
              <!-- Responsive Icon -->
              <svg v-if="feature.icon === 'responsive'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20m0 0l-.75 3M9 20H5m15-4v6m0 0v3m0-3h4m0 0l.75 3M19 20h-4" />
              </svg>
              <!-- Speed Icon -->
              <svg v-if="feature.icon === 'speed'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <!-- UX Icon -->
              <svg v-if="feature.icon === 'ux'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9h.01M15 9h.01" />
              </svg>
              <!-- Conversion Icon -->
              <svg v-if="feature.icon === 'conversion'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <!-- SEO Icon -->
              <svg v-if="feature.icon === 'seo'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <!-- Modern Icon -->
              <svg v-if="feature.icon === 'modern'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-dark-200 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Design Process Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[100px]" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Unser <span class="text-gradient">Designprozess</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Von der ersten Idee bis zum Launch – wir arbeiten strukturiert, transparent und in enger Abstimmung mit Ihnen.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(step, index) in processSteps"
            :key="step.number"
            class="relative"
          >
            <!-- Connector line for desktop -->
            <div
              v-if="index < processSteps.length - 1"
              class="hidden lg:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-primary-600/50 to-transparent"
              style="width: calc(100% - 2rem); transform: translateX(2rem);"
            />

            <div class="glass-card p-8 relative z-10 h-full hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div class="text-primary-400 text-5xl font-display font-bold mb-4">
                {{ step.number }}
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">
                {{ step.title }}
              </h3>
              <p class="text-dark-200 leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/5 via-dark-900 to-primary-900/5" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/3 rounded-full blur-[150px]" />

      <div class="container-narrow mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Warum <span class="text-gradient">Prestige Webdesign</span> wählen?
            </h2>
            <p class="text-lg text-dark-200 mb-8 leading-relaxed">
              Mit über 150 erfolgreichen Projekten unterstützen wir Unternehmen im Ruhrgebiet bei ihrer digitalen Transformation. Unser Team aus erfahrenen Designern und Entwicklern bringt Ihre Vision in die Realität.
            </p>

            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Individuelle Lösungen</h3>
                  <p class="text-dark-200">Jede Website wird speziell für Ihre Anforderungen entwickelt – keine Standardlösungen.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Langfristige Partnerschaft</h3>
                  <p class="text-dark-200">Wir unterstützen Sie auch nach dem Launch mit Wartung und kontinuierlicher Optimierung.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Messbare Ergebnisse</h3>
                  <p class="text-dark-200">Wir setzen auf datengesteuerte Strategien, um Ihre Website zu einem echten Business-Tool zu machen.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Lokale Expertise</h3>
                  <p class="text-dark-200">Als Agentur aus Dortmund kennen wir die regionalen Märkte und Besonderheiten.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="glass-card p-8 border-primary-600/30">
              <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="p-6 glass-card text-center">
                  <div class="text-4xl font-display font-bold text-primary-400 mb-2">150+</div>
                  <p class="text-dark-200 text-sm">Erfolgreiche Projekte</p>
                </div>
                <div class="p-6 glass-card text-center">
                  <div class="text-4xl font-display font-bold text-primary-400 mb-2">98%</div>
                  <p class="text-dark-200 text-sm">Kundenzufriedenheit</p>
                </div>
                <div class="p-6 glass-card text-center">
                  <div class="text-4xl font-display font-bold text-primary-400 mb-2">10+</div>
                  <p class="text-dark-200 text-sm">Jahre Erfahrung</p>
                </div>
                <div class="p-6 glass-card text-center">
                  <div class="text-4xl font-display font-bold text-primary-400 mb-2">24/7</div>
                  <p class="text-dark-200 text-sm">Support & Updates</p>
                </div>
              </div>
              <p class="text-dark-200 leading-relaxed">
                Mit unserem bewährten Prozess und moderner Technologie liefern wir Websites, die nicht nur optisch überzeugen, sondern auch echte Geschäftsergebnisse erzielen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection
      title="Bereit für Ihre neue Website?"
      subtitle="Lassen Sie uns ein unverbindliches Gespräch führen. Wir zeigen Ihnen, wie eine professionelle Website Ihr Business voranbringt."
      buttonText="Termin vereinbaren"
      buttonLink="/kontakt"
    />
  </div>
</template>
