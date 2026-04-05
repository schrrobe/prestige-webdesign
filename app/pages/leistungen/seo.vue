<script setup lang="ts">
const faqItems = [
  {
    question: 'Welche SEO-Massnahmen bringen zuerst Wirkung?',
    answer: 'Am schnellsten wirken meist technische Bereinigungen, bessere Seitentitel, staerkere interne Verlinkung und klar fokussierte Leistungs- oder Standortseiten mit echter Suchintention.',
  },
  {
    question: 'Warum sind wenige starke Seiten besser als viele Keywordseiten?',
    answer: 'Viele aehnliche Seiten teilen Relevanz auf und wirken schnell duenn. Wenige starke Seiten mit klarer Leistung, lokalem Bezug und hilfreichen Inhalten erzielen meist stabilere Rankings.',
  },
  {
    question: 'Braucht jedes lokale Unternehmen eigene Standortseiten?',
    answer: 'Nur wenn fuer den Standort ein echter Mehrwert vorhanden ist. Gute Standortseiten enthalten regionale Relevanz, passende Leistungen, Kontaktmoeglichkeiten und echte Inhalte statt reiner Keyword-Varianten.',
  },
  {
    question: 'Welche Rolle spielen Webdesign und SEO zusammen?',
    answer: 'SEO bringt Sichtbarkeit, gutes Webdesign macht aus Besuchern Anfragen. Erst die Kombination aus Technik, Inhalt, Nutzerfuehrung und Vertrauen fuehrt zu messbaren Ergebnissen.',
  },
]

const regionalLinks = [
  { label: 'Webdesign Dortmund', to: '/webdesign-dortmund' },
  { label: 'Webdesign Bochum', to: '/webdesign-bochum' },
  { label: 'Webdesign Essen', to: '/webdesign-essen' },
  { label: 'Webdesign Bottrop', to: '/webdesign-bottrop' },
  { label: 'Webdesign Unna', to: '/webdesign-unna' },
]

useSeoMeta({
  title: 'SEO Agentur | Prestige Webdesign – Suchmaschinenoptimierung Dortmund',
  description: 'Professionelle SEO-Agentur für bessere Google Rankings. Suchmaschinenoptimierung im Ruhrgebiet mit technischem SEO, Content-Strategie und lokaler SEO. Jetzt beraten lassen!',
  ogTitle: 'SEO Agentur Dortmund | Prestige Webdesign',
  ogDescription: 'SEO-Agentur im Ruhrgebiet: Professionelle Suchmaschinenoptimierung für mehr qualifizierte Besucher und bessere Rankings.',
})

useHead({
  script: [
    {
      key: 'seo-faq-schema',
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

const seoServices = [
  {
    icon: 'technical',
    title: 'Technisches SEO',
    description: 'Optimale Seiten-Architektur, Core Web Vitals, Mobile-Optimierung und technische Fehlerbe hebung für höhere Rankings.',
  },
  {
    icon: 'content',
    title: 'Content-Optimierung',
    description: 'Strategisch planerter und SEO-optimierter Content, der Ihre Zielgruppe anzieht und in Google höher rankt.',
  },
  {
    icon: 'local',
    title: 'Lokale SEO',
    description: 'Optimierung für lokale Suchergebnisse – wichtig für Geschäfte, die an bestimmten Orten tätig sind.',
  },
  {
    icon: 'links',
    title: 'Link Building',
    description: 'Aufbau hochwertiger Backlinks von relevanten und vertrauenswürdigen Domains für mehr Autorität.',
  },
  {
    icon: 'audit',
    title: 'SEO Audit',
    description: 'Umfassende Analyse Ihrer Website, um Optimierungspotentiale zu identifizieren und konkrete Maßnahmen zu empfehlen.',
  },
  {
    icon: 'analytics',
    title: 'Monitoring & Reporting',
    description: 'Regelmäßige Überwachung Ihrer Rankings, Analysen und detaillierte Reports über Fortschritte und Ergebnisse.',
  },
]

const benefits = [
  {
    title: 'Mehr organische Besucher',
    description: 'Bessere Rankings führen zu mehr qualifizierten Besuchern, die aktiv nach Ihren Leistungen suchen.',
  },
  {
    title: 'Langfristige Sichtbarkeit',
    description: 'Suchmaschinen-Traffic ist stabil und nachhaltig – keine Abhängigkeit von Paid Ads.',
  },
  {
    title: 'Höhere Glaubwürdigkeit',
    description: 'Websites in Top-Rankings werden als vertrauenswürdiger wahrgenommen – ein Vorteil vor der Konkurrenz.',
  },
  {
    title: 'Kosteneffiziente Leads',
    description: 'Im Vergleich zu bezahlter Werbung sind organische Leads kostengünstiger und konvertieren oft besser.',
  },
  {
    title: 'Competitive Advantage',
    description: 'Mit professioneller SEO setzen Sie sich gegen Konkurrenten durch, die Ihre Keywordstrategie noch nicht optimiert haben.',
  },
  {
    title: 'Wachstum ohne zusätzliche Kosten',
    description: 'Ihr Traffic und Ihre Sichtbarkeit wachsen, ohne dass Sie für jeden Klick zahlen müssen.',
  },
]

const keywords = [
  'Webdesign Dortmund',
  'SEO Agentur Ruhrgebiet',
  'Google Rankings verbessern',
  'Online Marketing',
  'E-Commerce Lösungen',
  'Website Entwicklung',
  'Suchmaschinenoptimierung',
  'Digital Marketing',
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
          <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">SEO Leistung</span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Suchmaschinenoptimierung für <span class="text-gradient">Top Rankings</span>
          </h1>
          <p class="text-xl text-dark-200 max-w-2xl leading-relaxed mb-8">
            Mit professionellem SEO ranken Sie höher in Google und erreichen die Menschen, die nach Ihren Leistungen suchen. Nachhaltig, messbar und kosteneffizient.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@prestige-webdesign.de" class="btn-primary">
              Kostenlose SEO Analyse
              <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <NuxtLink to="/kontakt" class="btn-secondary">
              SEO Beratung anfragen
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Unsere <span class="text-gradient">SEO-Services</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Wir bieten ein umfassendes Portfolio an Suchmaschinenoptimierungslösungen, um Ihre Website an die Spitze zu bringen.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in seoServices"
            :key="service.title"
            class="glass-card-hover p-8 group"
          >
            <!-- Icon -->
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
              <!-- Technical SEO Icon -->
              <svg v-if="service.icon === 'technical'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <!-- Content Icon -->
              <svg v-if="service.icon === 'content'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <!-- Local SEO Icon -->
              <svg v-if="service.icon === 'local'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <!-- Link Building Icon -->
              <svg v-if="service.icon === 'links'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <!-- Audit Icon -->
              <svg v-if="service.icon === 'audit'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/5 via-dark-900 to-primary-900/5" />
      <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[100px]" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Vorteile von <span class="text-gradient">professionellem SEO</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            SEO ist eine der kostengünstigsten und langfristig wertvollsten Investitionen für Ihr Online-Business.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="glass-card p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-md bg-gradient-to-br from-primary-500 to-primary-600">
                  <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-white mb-2">
                  {{ benefit.title }}
                </h3>
                <p class="text-dark-200 text-sm leading-relaxed">
                  {{ benefit.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/4 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div class="container-narrow mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              So funktioniert <span class="text-gradient">unser SEO-Prozess</span>
            </h2>

            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600/20 border border-primary-600/50">
                  <span class="text-primary-400 font-bold">1</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">Analysephase</h3>
                  <p class="text-dark-200">Detaillierte SEO-Audit, Konkurrenzanalyse und Keyword-Recherche für Ihre Branche.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600/20 border border-primary-600/50">
                  <span class="text-primary-400 font-bold">2</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">Strategieentwicklung</h3>
                  <p class="text-dark-200">Maßgeschneiderte SEO-Strategie basierend auf Ihren Zielen und Ressourcen.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600/20 border border-primary-600/50">
                  <span class="text-primary-400 font-bold">3</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">Umsetzung</h3>
                  <p class="text-dark-200">On-Page und Off-Page Optimierung sowie kontinuierliche technische Verbesserungen.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600/20 border border-primary-600/50">
                  <span class="text-primary-400 font-bold">4</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">Monitoring & Optimierung</h3>
                  <p class="text-dark-200">Regelmäßiges Tracking, Reporting und kontinuierliche Anpassung der Strategie.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="glass-card p-8 border-primary-600/30">
              <h3 class="text-2xl font-display font-bold text-white mb-6">
                SEO in Zahlen
              </h3>

              <div class="space-y-6">
                <div class="pb-6 border-b border-white/10">
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Ranking-Verbesserung</span>
                    <span class="text-primary-400 font-bold">+85%</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-2">
                    <div class="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full" style="width: 85%"></div>
                  </div>
                </div>

                <div class="pb-6 border-b border-white/10">
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Organischer Traffic</span>
                    <span class="text-primary-400 font-bold">+145%</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-2">
                    <div class="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>

                <div class="pb-6 border-b border-white/10">
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Lead-Qualität</span>
                    <span class="text-primary-400 font-bold">+78%</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-2">
                    <div class="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full" style="width: 78%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">ROI-Steigerung</span>
                    <span class="text-primary-400 font-bold">+340%</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-2">
                    <div class="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
              </div>

              <p class="text-sm text-dark-300 mt-6 italic">
                Durchschnittliche Verbesserungen nach 6-12 Monaten professioneller SEO-Betreuung
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Keywords Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-dark-900" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ihre Keywords ranken <span class="text-gradient">auf Google</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Wir optimieren Ihre Website für die Keywords, die für Ihren geschäftlichen Erfolg entscheidend sind.
          </p>
        </div>

        <div class="flex flex-wrap gap-3 justify-center">
          <div
            v-for="keyword in keywords"
            :key="keyword"
            class="glass-card px-6 py-3 hover:bg-white/15 hover:border-primary-500/50 transition-all duration-300 cursor-default"
          >
            <span class="text-white font-medium">{{ keyword }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-narrow mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 items-start">
          <div class="glass-card p-8">
            <h2 class="text-3xl font-display font-bold text-white mb-4">
              SEO fuer Unternehmen im Ruhrgebiet
            </h2>
            <p class="text-dark-200 leading-relaxed mb-4">
              Gute Rankings entstehen nicht durch isolierte Keywords, sondern durch starke Zielseiten. Deshalb verknuepfen wir SEO immer mit klaren Leistungsseiten, regionaler Relevanz und einer nutzerorientierten Seitenstruktur.
            </p>
            <p class="text-dark-200 leading-relaxed">
              Wenn Sie in Dortmund, Bochum, Essen, Bottrop oder im Kreis Unna Kunden gewinnen wollen, sollten Ihre wichtigsten Seiten die Suchintention direkt bedienen und klar zur Kontaktaufnahme fuehren.
            </p>
          </div>

          <div class="glass-card p-8">
            <h3 class="text-2xl font-display font-bold text-white mb-5">
              Regionale SEO-Zielseiten
            </h3>
            <div class="flex flex-wrap gap-3">
              <NuxtLink
                v-for="link in regionalLinks"
                :key="link.to"
                :to="link.to"
                class="px-4 py-2 rounded-full bg-white/5 text-white hover:text-primary-300 transition-colors duration-200"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SeoFaqSection
      title="FAQ zur Suchmaschinenoptimierung"
      intro="Diese Fragen tauchen in SEO-Projekten besonders haeufig auf. Gleichzeitig staerken sie die Seite inhaltlich fuer Suchanfragen mit Informations- und Kaufintention."
      :items="faqItems"
    />

    <!-- CTA Section -->
    <CTASection
      title="Bereit für bessere Google Rankings?"
      subtitle="Lassen Sie uns eine kostenlose SEO-Analyse für Ihre Website durchführen. Wir zeigen Ihnen Ihr Optimierungspotential und konkrete Maßnahmen."
      buttonText="SEO Analyse anfordern"
      buttonLink="/kontakt"
    />
  </div>
</template>
