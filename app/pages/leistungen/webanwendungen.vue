<script setup lang="ts">
import { SERVICES } from '~/data/services'

const service = SERVICES.find(s => s.slug === 'webanwendungen')!

useSeoMeta({
  title: 'Individuelle Webanwendungen entwickeln lassen – Portale, Tools & Apps | Prestige Webdesign',
  description: 'Ich entwickle Webanwendungen für Unternehmen: Kundenportale, Dashboards, Buchungssysteme, interne Tools und digitale Plattformen – zum Festpreis nach dem Erstgespräch.',
  ogTitle: 'Komplexe Webanwendungen | Prestige Webdesign',
  ogDescription: 'Individuelle Web-Apps für Prozesse, Plattformen und digitale Geschäftsmodelle. Performant, wartbar und genau auf Ihr Unternehmen zugeschnitten.',
})

const faqItems = [
  {
    question: 'Was kostet eine individuelle Webanwendung?',
    answer: 'Das hängt vom Umfang ab: Nutzerrollen, Schnittstellen, Datenmodell und Sonderfälle bestimmen den Aufwand. Deshalb gibt es den Preis auf Anfrage – nach dem kostenlosen Erstgespräch bekommen Sie ein schriftliches Angebot zum Festpreis.',
  },
  {
    question: 'Mit welcher Technik entwickeln Sie Webanwendungen?',
    answer: 'Ich entwickle mit Nuxt und Vue. Die Anwendung läuft im Browser – ohne Installation, auf dem Rechner im Büro genauso wie auf dem Tablet unterwegs.',
  },
  {
    question: 'Wann lohnt sich eine Webanwendung statt Standardsoftware?',
    answer: 'Wenn Ihre Abläufe zu speziell für fertige Software sind, wenn Sie heute mit Excel-Listen und E-Mails jonglieren oder wenn ein digitales Angebot Ihnen einen klaren Vorteil gegenüber dem Wettbewerb verschafft.',
  },
]

useHead({
  script: [
    {
      key: 'webanwendungen-faq-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
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

const solutionAreas = [
  {
    title: 'Kundenportale & Plattformen',
    description: 'Digitale Bereiche für Kunden, Partner oder Mitglieder mit Login, Rollen, Dokumenten, Statusverfolgung und individuellen Abläufen.',
  },
  {
    title: 'Dashboards & interne Tools',
    description: 'Oberflächen für Vertrieb, Disposition, Support oder Geschäftsführung – mit Kennzahlen, Filtern und automatisierten Arbeitsschritten.',
  },
  {
    title: 'Buchungs- & Anfrageprozesse',
    description: 'Digitale Strecken für Terminbuchung, Konfiguration, Reservierung oder Anfragen – mit Prüfung der Eingaben und Benachrichtigungen.',
  },
  {
    title: 'API-gestützte Systeme',
    description: 'Anbindung externer Dienste, CRM-, ERP- oder Zahlungs-Schnittstellen – für saubere Datenflüsse und weniger Handarbeit.',
  },
]

const features = [
  {
    title: 'Individuelle Logik',
    description: 'Die Anwendung passt sich Ihren Abläufen an, nicht umgekehrt. Rollen, Freigaben, Status und Sonderfälle denke ich von Anfang an mit.',
  },
  {
    title: 'Skalierbare Architektur',
    description: 'Ich plane für Wachstum, damit mehr Nutzer, mehr Daten und neue Funktionen später nicht zum technischen Problem werden.',
  },
  {
    title: 'Klare Bedienung trotz Komplexität',
    description: 'Auch anspruchsvolle Anwendungen müssen einfach zu bedienen sein. Ich ordne Informationen so, dass Nutzer schnell ans Ziel kommen.',
  },
  {
    title: 'Sicherheit & Stabilität',
    description: 'Berechtigungen, geprüfte Eingaben und saubere Trennung der Daten sorgen für einen zuverlässigen Betrieb.',
  },
  {
    title: 'Wartbarkeit im Alltag',
    description: 'Sauberer Code und nachvollziehbare Bausteine machen spätere Erweiterungen und die laufende Betreuung einfacher.',
  },
  {
    title: 'Fokus auf Ihr Geschäft',
    description: 'Technik ist kein Selbstzweck: Eine gute Anwendung spart Zeit, vermeidet Fehler und macht neue digitale Angebote möglich.',
  },
]

const useCases = [
  'Kundenportale mit Login und Self-Service-Funktionen',
  'Verwaltungsoberflächen für Mitarbeiter und interne Abläufe',
  'Buchungs-, Reservierungs- oder Konfigurationssysteme',
  'Digitale Plattformen für Services, Daten und Prozesse',
]
</script>

<template>
  <div>
    <PageCover
      title="Komplexe Webanwendungen für Ihr Unternehmen."
      lead="Ich entwickle individuelle Web-Apps für Abläufe, die kein Baukasten abbildet: Kundenportale, Dashboards, Buchungssysteme und Werkzeuge, die genau zu Ihrem Geschäftsmodell passen."
    >
      <a href="#anpfiff" class="btn btn-signal">Vorhaben schildern</a>
      <NuxtLink to="/leistungen" class="btn btn-outline">Alle Leistungen</NuxtLink>

      <template #aside>
        <div class="border-2 border-field-ink bg-paper p-6 text-ink md:p-8 lg:ml-auto lg:max-w-sm">
          <p class="text-6xl uppercase leading-none md:text-7xl" style="font-stretch: 62%; font-weight: 880;">{{ service.price }}</p>
          <p class="mt-4 border-t border-ink/25 pt-4 text-ink-soft">
            {{ service.priceNote }}. Jede Anwendung ist anders – deshalb kläre ich erst den Umfang und nenne Ihnen dann einen festen Preis.
          </p>
        </div>
      </template>
    </PageCover>

    <!-- Aufstellung: Lösungsbereiche -->
    <section class="section" data-rubric="Aufstellung" aria-labelledby="areas-title">
      <div class="wrap">
        <SectionHead
          id="areas-title"
          title="Welche Webanwendungen ich umsetze."
          intro="Wenn Standardsoftware Ihre Anforderungen nicht sauber abbildet, entwickle ich eine Lösung, die Abläufe digitalisiert und Ihre Mitarbeiter entlastet."
          :rule="false"
        />
        <ul class="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          <li v-for="item in solutionAreas" :key="item.title" class="border-t-2 border-ink pt-5">
            <h3 class="t-title">{{ item.title }}</h3>
            <p class="mt-3 max-w-text text-ink-soft">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Taktik: Anforderungen -->
    <section class="section bg-sheet" data-rubric="Taktik" aria-labelledby="requirements-title">
      <div class="wrap">
        <SectionHead
          id="requirements-title"
          title="Wichtige Anforderungen von Anfang an mitgedacht."
          intro="Komplexe Anwendungen brauchen mehr als eine schöne Oberfläche. Architektur, Nutzerführung und Erweiterbarkeit müssen zusammenpassen."
        />
        <ul class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <li v-for="feature in features" :key="feature.title" class="border-t-2 border-ink pt-5">
            <h3 class="t-title">{{ feature.title }}</h3>
            <p class="mt-3 text-ink-soft">{{ feature.description }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Aufstellung: Einsatzbereiche -->
    <section class="section" data-rubric="Aufstellung" aria-labelledby="usecases-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="usecases-title" class="t-headline">Typische Einsatzbereiche</h2>
          <p class="t-lead mt-5 max-w-text text-ink-soft">
            Viele Unternehmen stoßen mit klassischen Websites oder Standardtools an Grenzen. Genau dort entstehen individuelle Anwendungen mit echtem Mehrwert.
          </p>
        </div>
        <div class="lg:col-span-6 lg:col-start-7">
          <CheckList class="rule-heavy pt-6 text-lg font-semibold" :items="useCases" />
          <h3 class="t-title mt-12">Für wen sich eine individuelle Web-App lohnt</h3>
          <p class="mt-3 max-w-text text-ink-soft">
            Besonders sinnvoll ist eine eigene Anwendung, wenn Ihre Prozesse zu speziell für Standardsoftware sind – etwa im B2B mit Portalen und Freigaben, im Betrieb mit internen Werkzeugen oder bei Auswertungen und Berichten – oder wenn ein digitales Angebot Ihnen einen klaren Vorteil gegenüber dem Wettbewerb verschafft.
          </p>
        </div>
      </div>
    </section>

    <!-- Heimspiele: Verweis auf Referenzen -->
    <section class="section-tight on-ink" data-rubric="Heimspiele" aria-labelledby="refs-title">
      <div class="wrap grid gap-6 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-8">
          <h2 id="refs-title" class="t-title">Wie ich individuell entwickle, können Sie sich ansehen.</h2>
          <p class="mt-2 max-w-text text-paper/75">
            Die Website von Shape &amp; Flow habe ich von Grund auf mit Nuxt gebaut – dieselbe Technik, mit der ich Webanwendungen entwickle.
          </p>
        </div>
        <div class="flex flex-col gap-1 lg:col-span-4 lg:items-end">
          <NuxtLink to="/referenzen/shape-and-flow" class="link inline-flex min-h-11 items-center gap-2 font-bold">
            Fallstudie Shape &amp; Flow
            <AppIcon name="arrow-right" class="h-5 w-5" />
          </NuxtLink>
          <NuxtLink to="/referenzen" class="link inline-flex min-h-11 items-center gap-2 font-bold">
            Alle Referenzen
            <AppIcon name="arrow-right" class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Spielplan: Ablauf -->
    <section class="section bg-sheet" data-rubric="Spielplan" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="Mein Vorgehen – auch bei komplexen Projekten."
          intro="Gute Webanwendungen entstehen nicht durch Schnellschüsse. Auch hier gilt: erst verstehen, dann ein fester Preis, dann bauen – mit Zwischenständen, die Sie testen können."
        />
        <ProcessFixture class="mt-10" :show-duration="false" />
      </div>
    </section>

    <!-- Fragen -->
    <section class="section" data-rubric="Fragen" aria-labelledby="faq-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="faq-title" class="t-headline">Häufige Fragen zu Webanwendungen</h2>
        </div>
        <FaqList class="lg:col-span-8" :items="faqItems" />
      </div>
    </section>

    <KickoffSection
      source="Leistungen Webanwendungen – Anpfiff"
      title="Sie planen eine Webanwendung?"
      text="Schildern Sie mir Ihr Vorhaben in ein paar Sätzen. Im kostenlosen Erstgespräch klären wir, welcher Umfang und welche Architektur sinnvoll sind – danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
