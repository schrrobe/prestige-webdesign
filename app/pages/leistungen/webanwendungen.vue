<script setup lang="ts">
useSeoMeta({
  title: 'Individuelle Webanwendungen entwickeln lassen – Portale, Tools & Apps | Prestige Webdesign',
  description: 'Wir entwickeln komplexe Webanwendungen für Unternehmen: Kundenportale, Dashboards, Buchungssysteme, interne Tools und digitale Plattformen.',
  ogTitle: 'Komplexe Webanwendungen | Prestige Webdesign',
  ogDescription: 'Individuelle Web-Apps für Prozesse, Plattformen und digitale Geschäftsmodelle. Skalierbar, performant und exakt auf Ihr Unternehmen zugeschnitten.',
})

const solutionAreas = [
  {
    title: 'Kundenportale & Plattformen',
    description: 'Digitale Bereiche für Kunden, Partner oder Mitglieder mit Login, Rollen, Dokumenten, Statusverfolgung und individuellen Workflows.',
  },
  {
    title: 'Dashboards & interne Tools',
    description: 'Maßgeschneiderte Oberflächen für Vertrieb, Operations, Support oder Management mit Kennzahlen, Filtern und Prozessautomatisierung.',
  },
  {
    title: 'Buchungs- & Anfrageprozesse',
    description: 'Digitale Strecken für Terminbuchung, Konfiguration, Reservierung oder Lead-Qualifizierung inklusive Validierung und Benachrichtigungen.',
  },
  {
    title: 'API-gestützte Systeme',
    description: 'Anbindung externer Dienste, CRM-, ERP- oder Zahlungs-Schnittstellen für reibungslose Datenflüsse und weniger manuelle Arbeit.',
  },
]

const features = [
  {
    title: 'Individuelle Logik',
    description: 'Ihre Anwendung wird an reale Prozesse angepasst statt umgekehrt. Rollen, Freigaben, Stati und Sonderfälle werden von Anfang an mitgedacht.',
  },
  {
    title: 'Skalierbare Architektur',
    description: 'Wir planen für Wachstum, damit Nutzerzahlen, Datenvolumen und neue Funktionen später nicht zum technischen Problem werden.',
  },
  {
    title: 'Starke UX für komplexe Prozesse',
    description: 'Auch anspruchsvolle Anwendungen müssen klar bedienbar sein. Wir strukturieren Informationsdichte so, dass Nutzer schnell ans Ziel kommen.',
  },
  {
    title: 'Sicherheit & Stabilität',
    description: 'Berechtigungen, Eingabevalidierung, robuste Datenflüsse und saubere technische Trennung sorgen für einen zuverlässigen Betrieb.',
  },
  {
    title: 'Wartbarkeit im Alltag',
    description: 'Sauberer Code, nachvollziehbare Komponenten und klare Systemlogik erleichtern spätere Erweiterungen und laufende Betreuung.',
  },
  {
    title: 'Business-Fokus',
    description: 'Nicht nur Technik: Wir entwickeln Anwendungen, die Zeit sparen, Fehler reduzieren und neue digitale Angebote möglich machen.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Prozessaufnahme',
    description: 'Wir analysieren Ziele, Nutzergruppen, Sonderfälle und Schnittstellen, damit die Anwendung fachlich von Anfang an belastbar ist.',
  },
  {
    number: '02',
    title: 'Konzept & UX',
    description: 'Wir definieren Informationsarchitektur, Rollenlogik, Screens und User Flows für eine Anwendung, die im Alltag effizient nutzbar ist.',
  },
  {
    number: '03',
    title: 'Entwicklung & Integration',
    description: 'Frontend, Backend-Logik, Datenmodelle und externe Systeme werden abgestimmt umgesetzt und iterativ getestet.',
  },
  {
    number: '04',
    title: 'Rollout & Weiterentwicklung',
    description: 'Nach dem Launch begleiten wir den Betrieb, entwickeln weitere Module und optimieren die Anwendung anhand realer Nutzung.',
  },
]

const useCases = [
  'Kundenportale mit Login und Self-Service-Funktionen',
  'Verwaltungsoberflächen für Teams und interne Abläufe',
  'Buchungs-, Reservierungs- oder Konfigurationssysteme',
  'Digitale Plattformen für Services, Daten und Prozesse',
]
</script>

<template>
  <div class="bg-dark-900 text-white">
    <PageHero
      badge="Digitale Lösungen"
      title="Komplexe Webanwendungen für Ihr"
      highlight="Unternehmen"
      subtitle="Wir entwickeln individuelle Web-Apps für Prozesse, Plattformen und digitale Produkte. Von Kundenportalen über Dashboards bis zu maßgeschneiderten Business-Tools entsteht Software, die exakt zu Ihrem Geschäftsmodell passt."
    >
      <NuxtLink to="/kontakt" class="btn-primary text-base">
        Kostenlose Beratung
        <AppIcon name="arrow-right" class="w-5 h-5" />
      </NuxtLink>
      <NuxtLink to="/leistungen" class="btn-secondary text-base">Alle Leistungen</NuxtLink>
    </PageHero>

    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Lösungsbereiche"
          title="Welche Webanwendungen wir"
          highlight="umsetzen"
          subtitle="Wenn Standardsoftware Ihre Anforderungen nicht sauber abbildet, entwickeln wir eine Lösung, die Prozesse digitalisiert und Teams entlastet."
          align="center"
          as="h2"
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="item in solutionAreas"
            :key="item.title"
            class="glass-card-hover p-8 group"
          >
            <IconBadge icon="app" tone="indigo" size="md" class="mb-6 group-hover:scale-105" />
            <h3 class="text-xl font-semibold text-white mb-3">{{ item.title }}</h3>
            <p class="text-dark-200 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Anforderungen"
          title="Wichtige Anforderungen von Anfang an"
          highlight="mitgedacht"
          subtitle="Komplexe Anwendungen brauchen mehr als ein schönes Interface. Architektur, Nutzerführung und Erweiterbarkeit müssen zusammenpassen."
          align="center"
          as="h2"
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="glass-card-hover p-8 group"
          >
            <IconBadge icon="code" tone="primary" size="md" class="mb-6 group-hover:scale-105" />
            <h3 class="text-xl font-semibold text-white mb-3">{{ feature.title }}</h3>
            <p class="text-dark-200 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              label="Einsatzbereiche"
              title="Typische"
              highlight="Einsatzbereiche"
              subtitle="Viele Unternehmen stoßen mit klassischen Websites oder Standardtools an Grenzen. Genau dort entstehen individuelle Anwendungen mit echtem Mehrwert."
              align="left"
              as="h2"
              class="mb-8"
            />

            <div class="space-y-4">
              <div
                v-for="useCase in useCases"
                :key="useCase"
                class="flex gap-4"
              >
                <div class="flex-shrink-0">
                  <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 mt-1" />
                </div>
                <p class="text-dark-200">{{ useCase }}</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-8">
            <h3 class="text-xl font-semibold text-white mb-4">Für wen sich eine individuelle Web-App lohnt</h3>
            <p class="text-dark-200 leading-relaxed mb-6">
              Besonders sinnvoll ist eine individuelle Anwendung, wenn Prozesse zu speziell für Standardsoftware sind oder wenn ein digitales Angebot einen klaren Wettbewerbsvorteil schaffen soll.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="glass-card p-6 flex items-start gap-4">
                <IconBadge icon="app" tone="indigo" size="sm" />
                <div>
                  <div class="text-white font-semibold mb-1">B2B</div>
                  <p class="text-dark-300 text-sm">Portale & Workflows</p>
                </div>
              </div>
              <div class="glass-card p-6 flex items-start gap-4">
                <IconBadge icon="support" tone="primary" size="sm" />
                <div>
                  <div class="text-white font-semibold mb-1">Operations</div>
                  <p class="text-dark-300 text-sm">Interne Tools</p>
                </div>
              </div>
              <div class="glass-card p-6 flex items-start gap-4">
                <IconBadge icon="analytics" tone="blue" size="sm" />
                <div>
                  <div class="text-white font-semibold mb-1">Data</div>
                  <p class="text-dark-300 text-sm">Dashboards & Reports</p>
                </div>
              </div>
              <div class="glass-card p-6 flex items-start gap-4">
                <IconBadge icon="chat" tone="cyan" size="sm" />
                <div>
                  <div class="text-white font-semibold mb-1">UX</div>
                  <p class="text-dark-300 text-sm">Nutzerzentrierte Prozesse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Vorgehen"
          title="Unser Vorgehen bei komplexen"
          highlight="Projekten"
          subtitle="Gute Webanwendungen entstehen nicht durch Schnellschüsse, sondern durch ein belastbares Zusammenspiel aus Konzept, Entwicklung und Weiterentwicklung."
          align="center"
          as="h2"
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in processSteps"
            :key="step.number"
            class="glass-card p-8"
          >
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">{{ step.number }}</div>
            <h3 class="text-lg font-semibold text-white mb-3">{{ step.title }}</h3>
            <p class="text-dark-300 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <StatsRow bordered />
      </div>
    </section>

    <CTASection
      title="Sie planen eine individuelle Webanwendung?"
      subtitle="Schildern Sie uns Ihr Vorhaben per E-Mail. Wir bewerten gemeinsam, welche Architektur und welcher Projektumfang für Ihr Vorhaben sinnvoll sind."
      buttonText="Projekt anfragen"
      buttonLink="/kontakt"
    />
  </div>
</template>
