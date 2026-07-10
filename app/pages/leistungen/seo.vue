<script setup lang="ts">
const faqItems = [
  {
    question: 'Welche SEO-Massnahmen bringen zuerst Wirkung?',
    answer: 'Am schnellsten wirken meist technische Bereinigungen, bessere Seitentitel, stärkere interne Verlinkung und klar fokussierte Leistungs- oder Standortseiten mit echter Suchintention.',
  },
  {
    question: 'Warum sind wenige starke Seiten besser als viele Keywordseiten?',
    answer: 'Viele ähnliche Seiten teilen Relevanz auf und wirken schnell dünn. Wenige starke Seiten mit klarer Leistung, lokalem Bezug und hilfreichen Inhalten erzielen meist stabilere Rankings.',
  },
  {
    question: 'Braucht jedes lokale Unternehmen eigene Standortseiten?',
    answer: 'Nur wenn für den Standort ein echter Mehrwert vorhanden ist. Gute Standortseiten enthalten regionale Relevanz, passende Leistungen, Kontaktmöglichkeiten und echte Inhalte statt reiner Keyword-Varianten.',
  },
  {
    question: 'Welche Rolle spielen Webdesign und SEO zusammen?',
    answer: 'SEO bringt Sichtbarkeit, gutes Webdesign macht aus Besuchern Anfragen. Erst die Kombination aus Technik, Inhalt, Nutzerführung und Vertrauen führt zu messbaren Ergebnissen.',
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
  title: 'SEO Agentur Dortmund – Suchmaschinenoptimierung fürs Ruhrgebiet | Prestige Webdesign',
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
    description: 'Optimale Seiten-Architektur, Core Web Vitals, Mobile-Optimierung und technische Fehlerbehebung für höhere Rankings.',
  },
  {
    icon: 'content',
    title: 'Content-Optimierung',
    description: 'Strategisch geplanter und SEO-optimierter Content, der Ihre Zielgruppe anzieht und in Google höher rankt.',
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
    title: 'Wettbewerbsvorteil',
    description: 'Mit professioneller SEO setzen Sie sich gegen Konkurrenten durch, die ihre Keyword-Strategie noch nicht optimiert haben.',
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
  <div>
    <PageHero
      badge="SEO Leistung"
      title="Suchmaschinenoptimierung für"
      highlight="Top Rankings"
      subtitle="Mit professionellem SEO ranken Sie höher in Google und erreichen die Menschen, die nach Ihren Leistungen suchen. Nachhaltig, messbar und kosteneffizient."
    >
      <NuxtLink to="/kontakt" class="btn-primary text-base">Kostenlose Beratung <AppIcon name="arrow-right" class="w-5 h-5" /></NuxtLink>
      <NuxtLink to="/leistungen" class="btn-secondary text-base">Alle Leistungen</NuxtLink>
    </PageHero>

    <!-- Services Grid Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Unsere"
          highlight="SEO-Services"
          subtitle="Wir bieten ein umfassendes Portfolio an Suchmaschinenoptimierungslösungen, um Ihre Website an die Spitze zu bringen."
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in seoServices"
            :key="service.title"
            class="glass-card-hover p-8 group"
          >
            <IconBadge :icon="service.icon" tone="primary" size="lg" class="mb-6 group-hover:scale-105" />
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
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Vorteile von"
          highlight="professionellem SEO"
          subtitle="SEO ist eine der kostengünstigsten und langfristig wertvollsten Investitionen für Ihr Online-Business."
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="glass-card-hover p-8 group"
          >
            <div class="flex gap-4">
              <IconBadge icon="check" tone="primary" size="sm" class="flex-shrink-0" />
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
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="So funktioniert unser"
          highlight="SEO-Prozess"
          subtitle="Von der Analyse bis zur laufenden Optimierung – ein klarer, messbarer Ablauf für nachhaltige Rankings."
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">1</div>
            <h3 class="text-lg font-semibold text-white mb-3">Analysephase</h3>
            <p class="text-dark-300 text-sm leading-relaxed">Detaillierte SEO-Audit, Konkurrenzanalyse und Keyword-Recherche für Ihre Branche.</p>
          </div>

          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">2</div>
            <h3 class="text-lg font-semibold text-white mb-3">Strategieentwicklung</h3>
            <p class="text-dark-300 text-sm leading-relaxed">Maßgeschneiderte SEO-Strategie basierend auf Ihren Zielen und Ressourcen.</p>
          </div>

          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">3</div>
            <h3 class="text-lg font-semibold text-white mb-3">Umsetzung</h3>
            <p class="text-dark-300 text-sm leading-relaxed">On-Page und Off-Page Optimierung sowie kontinuierliche technische Verbesserungen.</p>
          </div>

          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">4</div>
            <h3 class="text-lg font-semibold text-white mb-3">Monitoring & Optimierung</h3>
            <p class="text-dark-300 text-sm leading-relaxed">Regelmäßiges Tracking, Reporting und kontinuierliche Anpassung der Strategie.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us / Stats Section -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="SEO, das"
          highlight="Wirkung zeigt"
          subtitle="Nachhaltige Suchmaschinenoptimierung ist eine Investition in stabile Sichtbarkeit und qualifizierte Anfragen."
          class="mb-16"
        />
        <div class="glass-card p-8 md:p-12">
          <StatsRow bordered />
        </div>
      </div>
    </section>

    <!-- Keywords Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Ihre Keywords ranken"
          highlight="auf Google"
          subtitle="Wir optimieren Ihre Website für die Keywords, die für Ihren geschäftlichen Erfolg entscheidend sind."
          class="mb-12"
        />

        <div class="flex flex-wrap gap-3 justify-center">
          <div
            v-for="keyword in keywords"
            :key="keyword"
            class="glass-card px-4 py-2 rounded-full text-sm text-dark-100"
          >
            {{ keyword }}
          </div>
        </div>
      </div>
    </section>

    <!-- Regional SEO Section -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 items-start">
          <div class="glass-card p-8">
            <h2 class="text-3xl font-display font-bold text-white mb-4">
              SEO für Unternehmen im Ruhrgebiet
            </h2>
            <p class="text-dark-200 leading-relaxed mb-4">
              Gute Rankings entstehen nicht durch isolierte Keywords, sondern durch starke Zielseiten. Deshalb verknuepfen wir SEO immer mit klaren Leistungsseiten, regionaler Relevanz und einer nutzerorientierten Seitenstruktur.
            </p>
            <p class="text-dark-200 leading-relaxed">
              Wenn Sie in Dortmund, Bochum, Essen, Bottrop oder im Kreis Unna Kunden gewinnen wollen, sollten Ihre wichtigsten Seiten die Suchintention direkt bedienen und klar zur Kontaktaufnahme führen.
            </p>
          </div>

          <div class="glass-card p-8">
            <h3 class="text-xl font-semibold text-white mb-5">
              Regionale SEO-Zielseiten
            </h3>
            <div class="flex flex-wrap gap-3">
              <NuxtLink
                v-for="link in regionalLinks"
                :key="link.to"
                :to="link.to"
                class="glass-card px-4 py-2 rounded-full text-sm text-dark-200 hover:text-primary-300 transition-colors duration-200"
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
      intro="Diese Fragen tauchen in SEO-Projekten besonders häufig auf. Gleichzeitig stärken sie die Seite inhaltlich für Suchanfragen mit Informations- und Kaufintention."
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
