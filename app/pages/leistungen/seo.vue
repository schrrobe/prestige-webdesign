<script setup lang="ts">
import { SERVICES } from '~/data/services'
import { CITIES } from '~/data/site'

const service = SERVICES.find(s => s.slug === 'seo')!

const faqItems = [
  {
    question: 'Welche SEO-Massnahmen bringen zuerst Wirkung?',
    answer: 'Am schnellsten wirken meist technische Bereinigungen, bessere Seitentitel, eine stärkere interne Verlinkung und klar fokussierte Leistungs- oder Standortseiten, die genau das beantworten, wonach Ihre Kunden suchen.',
  },
  {
    question: 'Warum sind wenige starke Seiten besser als viele Keywordseiten?',
    answer: 'Viele ähnliche Seiten teilen die Relevanz auf und wirken schnell dünn. Wenige starke Seiten mit klarer Leistung, lokalem Bezug und hilfreichen Inhalten erzielen meist stabilere Rankings.',
  },
  {
    question: 'Braucht jedes lokale Unternehmen eigene Standortseiten?',
    answer: 'Nur wenn es für den Standort einen echten Mehrwert gibt. Gute Standortseiten enthalten regionale Relevanz, passende Leistungen, Kontaktmöglichkeiten und echte Inhalte statt reiner Keyword-Varianten.',
  },
  {
    question: 'Welche Rolle spielen Webdesign und SEO zusammen?',
    answer: 'SEO bringt Sichtbarkeit, gutes Webdesign macht aus Besuchern Anfragen. Erst das Zusammenspiel aus Technik, Inhalt, Nutzerführung und Vertrauen führt zu messbaren Ergebnissen.',
  },
]

useSeoMeta({
  title: 'SEO Agentur Dortmund – Suchmaschinenoptimierung fürs Ruhrgebiet | Prestige Webdesign',
  description: 'Suchmaschinenoptimierung aus Dortmund für bessere Google Rankings im Ruhrgebiet: technisches SEO, Content-Strategie und lokale SEO. Festpreis nach dem kostenlosen Erstgespräch.',
  ogTitle: 'SEO Agentur Dortmund | Prestige Webdesign',
  ogDescription: 'SEO im Ruhrgebiet: Suchmaschinenoptimierung für mehr passende Besucher und bessere Sichtbarkeit bei Google.',
})

useHead({
  script: [
    {
      key: 'seo-faq-schema',
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

const seoServices = [
  {
    title: 'Technisches SEO',
    description: 'Saubere Seitenstruktur, Core Web Vitals, mobile Darstellung und das Beheben technischer Fehler, die Google am Verstehen Ihrer Seite hindern.',
  },
  {
    title: 'Content-Optimierung',
    description: 'Geplante Inhalte, die die Fragen Ihrer Kunden beantworten – und dabei die Begriffe verwenden, nach denen sie tatsächlich suchen.',
  },
  {
    title: 'Lokale SEO',
    description: 'Optimierung für lokale Suchergebnisse – wichtig für alle Betriebe, die Kunden in Dortmund, Bochum, Essen oder der Umgebung gewinnen wollen.',
  },
  {
    title: 'Link Building',
    description: 'Verweise von relevanten und vertrauenswürdigen Seiten, zum Beispiel aus Ihrer Branche oder Region, für mehr Autorität bei Google.',
  },
  {
    title: 'SEO Audit',
    description: 'Eine gründliche Analyse Ihrer Website: Wo liegt Potenzial, was bremst – und welche Maßnahmen sich zuerst lohnen.',
  },
  {
    title: 'Monitoring & Reporting',
    description: 'Regelmäßiger Blick auf Rankings und Zugriffe, mit verständlichen Berichten über Fortschritte und nächste Schritte.',
  },
]

const benefits = [
  {
    title: 'Mehr passende Besucher',
    description: 'Bessere Rankings bringen Menschen auf Ihre Seite, die aktiv nach Ihren Leistungen suchen.',
  },
  {
    title: 'Langfristige Sichtbarkeit',
    description: 'Besucher aus der Suche kommen beständig – ohne Abhängigkeit von bezahlter Werbung.',
  },
  {
    title: 'Höhere Glaubwürdigkeit',
    description: 'Wer bei Google weit oben steht, wird von vielen Suchenden als vertrauenswürdiger wahrgenommen.',
  },
  {
    title: 'Günstigere Anfragen',
    description: 'Im Vergleich zu bezahlter Werbung kosten Anfragen über die organische Suche auf Dauer meist weniger.',
  },
  {
    title: 'Wettbewerbsvorteil',
    description: 'Viele Betriebe in der Region haben ihre Website für Google noch nicht sauber aufgestellt – Ihre Chance, sich abzusetzen.',
  },
  {
    title: 'Wachstum ohne Klickkosten',
    description: 'Ihre Sichtbarkeit wächst, ohne dass Sie für jeden einzelnen Besucher bezahlen.',
  },
]
</script>

<template>
  <div>
    <PageCover
      title="Suchmaschinenoptimierung fürs Ruhrgebiet."
      lead="Damit Kunden aus Ihrer Stadt Sie bei Google finden: saubere Technik, klare Inhalte und lokale Signale. Nachhaltige Suchmaschinenoptimierung aus Dortmund – ohne leere Versprechen."
    >
      <a href="#anfrage-abschluss" class="btn btn-primary">Erstgespräch anfragen</a>
      <NuxtLink to="/leistungen" class="btn btn-outline">Alle Leistungen</NuxtLink>

      <template #aside>
        <div class="rounded-2xl border border-hair bg-paper p-6 text-ink md:p-8 lg:ml-auto lg:max-w-sm">
          <p class="font-serif text-6xl leading-[1.05] md:text-7xl" style="font-weight: 500; font-variation-settings: 'opsz' 48;">{{ service.price }}</p>
          <p class="mt-4 border-t border-hair pt-4 text-ink-soft">
            {{ service.priceNote }}. Ich schaue mir Ihre Seite an, sage Ihnen, was sich lohnt – und nenne dann einen festen Preis.
          </p>
        </div>
      </template>
    </PageCover>

    <!-- SEO-Leistungen -->
    <section class="section" aria-labelledby="seo-services-title">
      <div class="wrap">
        <SectionHead
          id="seo-services-title"
          title="Meine SEO-Leistungen"
          intro="Suchmaschinenoptimierung ist kein Zauber, sondern Handwerk: Technik, Inhalte und lokale Signale, die zusammenpassen."
          :rule="false"
        />
        <ul class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <li v-for="item in seoServices" :key="item.title" class="border-t border-ink pt-5">
            <h3 class="t-title">{{ item.title }}</h3>
            <p class="mt-3 text-ink-soft">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Vorteile -->
    <section class="section bg-stone" aria-labelledby="benefits-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="benefits-title" class="t-headline">Vorteile von professionellem SEO</h2>
          <p class="t-lead mt-5 max-w-text text-ink-soft">
            SEO ist eine der langfristig wertvollsten Investitionen in Ihre Website – weil es Menschen bringt, die schon nach Ihnen suchen.
          </p>
        </div>
        <dl class="border-t border-ink lg:col-span-6 lg:col-start-7">
          <div v-for="benefit in benefits" :key="benefit.title" class="grid gap-2 border-b border-hair py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
            <dt class="t-title">{{ benefit.title }}</dt>
            <dd class="max-w-text text-ink-soft">{{ benefit.description }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- regionale SEO -->
    <section class="section" aria-labelledby="regional-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="max-w-text lg:col-span-7">
          <h2 id="regional-title" class="t-headline">SEO für Unternehmen im Ruhrgebiet</h2>
          <p class="t-lead mt-5">
            Gute Rankings entstehen nicht durch einzelne Keywords, sondern durch starke Zielseiten. Deshalb verknüpfe ich SEO immer mit klaren Leistungsseiten, regionaler Relevanz und einer Seitenstruktur, die Besuchern hilft.
          </p>
          <p class="mt-5 text-ink-soft">
            Wenn Sie in Dortmund, Bochum, Essen, Bottrop oder im Kreis Unna Kunden gewinnen wollen, sollten Ihre wichtigsten Seiten genau die Suchanfrage beantworten – und direkt zur Kontaktaufnahme führen.
          </p>
        </div>
        <div class="lg:col-span-4 lg:col-start-9">
          <h3 class="t-title rule-top pt-6">Regionale Zielseiten</h3>
          <ul class="mt-4">
            <li v-for="city in CITIES" :key="city.to" class="border-b border-hair">
              <NuxtLink :to="city.to" class="group flex min-h-14 items-center justify-between gap-2 py-2">
                <span class="font-serif text-2xl leading-[1.05]" style="font-weight: 500; font-variation-settings: 'opsz' 48;">Webdesign {{ city.name }}</span>
                <AppIcon name="arrow-right" class="h-5 w-5 text-accent transition-transform duration-200 group-hover:translate-x-1" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Verweis auf Referenzen -->
    <section class="section-tight on-ink" aria-labelledby="refs-title">
      <div class="wrap grid gap-6 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-8">
          <h2 id="refs-title" class="t-title">Technisches SEO, das Sie nachprüfen können.</h2>
          <p class="mt-2 max-w-text text-paper/75">
            Für Shape &amp; Flow habe ich strukturierte Daten, eine llms.txt und automatisch erzeugte Vorschaubilder umgesetzt – sauber gebaute Grundlagen für Google und KI-Suchen.
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

    <!-- Ablauf -->
    <section class="section bg-stone" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="So läuft die Zusammenarbeit ab."
          intro="Erst schaue ich mir Ihre Seite und Ihren Markt an, dann bekommen Sie ein Angebot zum Festpreis – danach setze ich um und halte Sie auf dem Laufenden."
        />
        <ProcessFixture class="mt-10" :show-duration="false" />
      </div>
    </section>

    <!-- Häufige Fragen -->
    <section class="section" aria-labelledby="faq-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="faq-title" class="t-headline">FAQ zur Suchmaschinenoptimierung</h2>
          <p class="mt-4 text-ink-soft">Diese Fragen höre ich in SEO-Projekten besonders oft.</p>
        </div>
        <FaqList class="lg:col-span-8" :items="faqItems" />
      </div>
    </section>

    <InquirySection
      source="Leistungen SEO – Abschluss"
      title="Besser gefunden werden?"
      text="Erzählen Sie mir, für welche Leistungen und in welcher Stadt Sie gefunden werden wollen. Im kostenlosen Erstgespräch zeige ich Ihnen, wo Potenzial liegt – danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
