<script setup lang="ts">
useSeoMeta({
  title: 'Webanwendungen | Prestige Webdesign – Komplexe individuelle Web-Apps',
  description: 'Wir entwickeln komplexe Webanwendungen fuer Unternehmen: Kundenportale, Dashboards, Buchungssysteme, interne Tools und digitale Plattformen.',
  ogTitle: 'Komplexe Webanwendungen | Prestige Webdesign',
  ogDescription: 'Individuelle Web-Apps fuer Prozesse, Plattformen und digitale Geschaeftsmodelle. Skalierbar, performant und exakt auf Ihr Unternehmen zugeschnitten.',
})

const solutionAreas = [
  {
    title: 'Kundenportale & Plattformen',
    description: 'Digitale Bereiche fuer Kunden, Partner oder Mitglieder mit Login, Rollen, Dokumenten, Statusverfolgung und individuellen Workflows.',
  },
  {
    title: 'Dashboards & interne Tools',
    description: 'Massgeschneiderte Oberflaechen fuer Vertrieb, Operations, Support oder Management mit Kennzahlen, Filtern und Prozessautomatisierung.',
  },
  {
    title: 'Buchungs- & Anfrageprozesse',
    description: 'Digitale Strecken fuer Terminbuchung, Konfiguration, Reservierung oder Lead-Qualifizierung inklusive Validierung und Benachrichtigungen.',
  },
  {
    title: 'API-gestuetzte Systeme',
    description: 'Anbindung externer Dienste, CRM-, ERP- oder Zahlungs-Schnittstellen fuer reibungslose Datenfluesse und weniger manuelle Arbeit.',
  },
]

const features = [
  {
    title: 'Individuelle Logik',
    description: 'Ihre Anwendung wird an reale Prozesse angepasst statt umgekehrt. Rollen, Freigaben, Stati und Sonderfaelle werden von Anfang an mitgedacht.',
  },
  {
    title: 'Skalierbare Architektur',
    description: 'Wir planen fuer Wachstum, damit Nutzerzahlen, Datenvolumen und neue Funktionen spaeter nicht zum technischen Problem werden.',
  },
  {
    title: 'Starke UX fuer komplexe Prozesse',
    description: 'Auch anspruchsvolle Anwendungen muessen klar bedienbar sein. Wir strukturieren Informationsdichte so, dass Nutzer schnell ans Ziel kommen.',
  },
  {
    title: 'Sicherheit & Stabilitaet',
    description: 'Berechtigungen, Eingabevalidierung, robuste Datenfluesse und saubere technische Trennung sorgen fuer einen zuverlaessigen Betrieb.',
  },
  {
    title: 'Wartbarkeit im Alltag',
    description: 'Sauberer Code, nachvollziehbare Komponenten und klare Systemlogik erleichtern spaetere Erweiterungen und laufende Betreuung.',
  },
  {
    title: 'Business-Fokus',
    description: 'Nicht nur Technik: Wir entwickeln Anwendungen, die Zeit sparen, Fehler reduzieren und neue digitale Angebote moeglich machen.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Prozessaufnahme',
    description: 'Wir analysieren Ziele, Nutzergruppen, Sonderfaelle und Schnittstellen, damit die Anwendung fachlich von Anfang an belastbar ist.',
  },
  {
    number: '02',
    title: 'Konzept & UX',
    description: 'Wir definieren Informationsarchitektur, Rollenlogik, Screens und User Flows fuer eine Anwendung, die im Alltag effizient nutzbar ist.',
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
  'Verwaltungsoberflaechen fuer Teams und interne Ablaeufe',
  'Buchungs-, Reservierungs- oder Konfigurationssysteme',
  'Digitale Plattformen fuer Services, Daten und Prozesse',
]
</script>

<template>
  <div class="bg-dark-900 text-white">
    <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-dark-900" />
      <div class="absolute top-1/4 right-0 w-[620px] h-[620px] bg-primary-600/5 rounded-full blur-[120px]" />

      <div class="container-narrow mx-auto relative">
        <div class="max-w-4xl">
          <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Digitale Loesungen</span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Komplexe <span class="text-gradient">Webanwendungen</span> fuer Ihr Unternehmen
          </h1>
          <p class="text-xl text-dark-200 max-w-3xl leading-relaxed mb-8">
            Wir entwickeln individuelle Web-Apps fuer Prozesse, Plattformen und digitale Produkte. Von Kundenportalen ueber Dashboards bis zu
            massgeschneiderten Business-Tools entsteht Software, die exakt zu Ihrem Geschaeftsmodell passt.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@prestige-webdesign.de?subject=Anfrage%20Webanwendung" class="btn-primary">
              Projekt besprechen
              <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <NuxtLink to="/kontakt" class="btn-secondary">
              Kontaktseite ansehen
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/2 left-0 w-[320px] h-[320px] bg-primary-600/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Welche Webanwendungen wir umsetzen
          </h2>
          <p class="text-lg text-dark-200 max-w-3xl mx-auto">
            Wenn Standardsoftware Ihre Anforderungen nicht sauber abbildet, entwickeln wir eine Loesung, die Prozesse digitalisiert und Teams entlastet.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="item in solutionAreas"
            :key="item.title"
            class="glass-card-hover p-8"
          >
            <h3 class="text-2xl font-display font-bold text-white mb-4">{{ item.title }}</h3>
            <p class="text-dark-200 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/5 via-dark-900 to-primary-900/5" />
      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Wichtige Anforderungen von Anfang an mitgedacht
          </h2>
          <p class="text-lg text-dark-200 max-w-3xl mx-auto">
            Komplexe Anwendungen brauchen mehr als ein schoenes Interface. Architektur, Nutzerfuehrung und Erweiterbarkeit muessen zusammenpassen.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="glass-card-hover p-8"
          >
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-primary-500 to-primary-600">
              <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
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
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Typische <span class="text-gradient">Einsatzbereiche</span>
            </h2>
            <p class="text-lg text-dark-200 mb-8 leading-relaxed">
              Viele Unternehmen stossen mit klassischen Websites oder Standardtools an Grenzen. Genau dort entstehen individuelle Anwendungen mit echtem Mehrwert.
            </p>

            <div class="space-y-4">
              <div
                v-for="useCase in useCases"
                :key="useCase"
                class="flex gap-4"
              >
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-dark-200">{{ useCase }}</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 border-primary-600/20">
            <h3 class="text-2xl font-display font-bold text-white mb-4">Fuer wen sich eine individuelle Web-App lohnt</h3>
            <p class="text-dark-200 leading-relaxed mb-6">
              Besonders sinnvoll ist eine individuelle Anwendung, wenn Prozesse zu speziell fuer Standardsoftware sind oder wenn ein digitales Angebot einen klaren Wettbewerbsvorteil schaffen soll.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-6 glass-card text-center">
                <div class="text-4xl font-display font-bold text-primary-400 mb-2">B2B</div>
                <p class="text-dark-200 text-sm">Portale & Workflows</p>
              </div>
              <div class="p-6 glass-card text-center">
                <div class="text-4xl font-display font-bold text-primary-400 mb-2">Ops</div>
                <p class="text-dark-200 text-sm">Interne Tools</p>
              </div>
              <div class="p-6 glass-card text-center">
                <div class="text-4xl font-display font-bold text-primary-400 mb-2">Data</div>
                <p class="text-dark-200 text-sm">Dashboards & Reports</p>
              </div>
              <div class="p-6 glass-card text-center">
                <div class="text-4xl font-display font-bold text-primary-400 mb-2">UX</div>
                <p class="text-dark-200 text-sm">Nutzerzentrierte Prozesse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-dark-900 to-primary-900/10" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Unser Vorgehen bei komplexen Projekten
          </h2>
          <p class="text-lg text-dark-200 max-w-3xl mx-auto">
            Gute Webanwendungen entstehen nicht durch Schnellschuesse, sondern durch ein belastbares Zusammenspiel aus Konzept, Entwicklung und Weiterentwicklung.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in processSteps"
            :key="step.number"
            class="relative"
          >
            <div class="glass-card p-8 h-full hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
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

    <CTASection
      title="Sie planen eine individuelle Webanwendung?"
      subtitle="Schildern Sie uns Ihr Vorhaben per E-Mail. Wir bewerten gemeinsam, welche Architektur und welcher Projektumfang fuer Ihr Vorhaben sinnvoll sind."
      buttonText="Projekt anfragen"
      buttonLink="/kontakt"
    />
  </div>
</template>
