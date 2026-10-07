<script setup lang="ts">
import { SERVICES } from '~/data/services'

const service = SERVICES.find(s => s.slug === 'webdesign')!

const faqItems = [
  {
    question: 'Was kostet eine professionelle Website?',
    answer: 'Das hängt von Umfang, Design und Funktionen ab. Eine Unternehmenswebsite beginnt bei 800 €, umfangreichere Projekte mit individuellen Funktionen kosten entsprechend mehr. Nach dem kostenlosen Erstgespräch bekommen Sie ein unverbindliches Angebot zum Festpreis.',
  },
  {
    question: 'Wie lange dauert die Entwicklung einer Website?',
    answer: 'Eine typische Unternehmenswebsite ist in 2 bis 6 Wochen fertig, abhängig von Umfang und Feedbackzeiten. Ich arbeite in einem klar strukturierten Ablauf und halte Sie bei jedem Schritt auf dem Laufenden.',
  },
  {
    question: 'Was ist responsives Webdesign?',
    answer: 'Responsives Webdesign bedeutet, dass Ihre Website auf allen Geräten – Desktop, Tablet und Smartphone – gut aussieht und funktioniert. Weil heute ein Großteil der Besucher mit dem Handy kommt, ist responsives Design keine Kür, sondern Pflicht.',
  },
  {
    question: 'Kümmern Sie sich auch um Texte und Inhalte?',
    answer: 'Ja, auf Wunsch schreibe ich suchmaschinenfreundliche Texte, die Ihre Kunden ansprechen und für Google klar verständlich sind. Alternativ liefern Sie eigene Inhalte, und ich pflege sie ein.',
  },
]

useSeoMeta({
  title: 'Webdesign zum Festpreis – responsive Websites für Unternehmen | Prestige Webdesign',
  description: 'Professionelles Webdesign: responsive, SEO-optimiert und auf Anfragen ausgelegt. Websites ab 800 € zum Festpreis – jetzt kostenloses Erstgespräch sichern.',
  ogTitle: 'Webdesign Agentur | Prestige Webdesign',
  ogDescription: 'Professionelles Webdesign aus Dortmund: responsive Websites mit klarem Design und hoher Benutzerfreundlichkeit – zum Festpreis ab 800 €.',
})

useHead({
  script: [
    {
      key: 'webdesign-faq-schema',
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

const features = [
  {
    title: 'Responsive Design',
    description: 'Ihre Website funktioniert auf Desktop, Tablet und Smartphone gleich gut – ein stimmiges Erlebnis auf jedem Gerät.',
  },
  {
    title: 'Schnelle Ladezeiten',
    description: 'Schlanker Code, komprimierte Bilder und saubere Technik sorgen für kurze Ladezeiten – gut für Besucher und für Google.',
  },
  {
    title: 'Nutzerfreundliche Bedienung',
    description: 'Eine klare Navigation führt Ihre Besucher ohne Umwege zu Ihren Leistungen, Preisen und zum Kontakt.',
  },
  {
    title: 'Auf Anfragen ausgelegt',
    description: 'Jede Seite hat ein Ziel: aus Besuchern Kunden machen – mit klaren Handlungsaufforderungen und überzeugenden Inhalten.',
  },
  {
    title: 'SEO-freundlich',
    description: 'Technisch sauber für Suchmaschinen aufgebaut: klare Struktur, sprechende Überschriften, schnelle und mobile Seiten.',
  },
  {
    title: 'Barrierefrei nach WCAG 2.2 AA',
    description: 'Gute Kontraste, Tastaturbedienung und Formulare, die Screenreader verstehen – seit dem Barrierefreiheitsstärkungsgesetz für viele Betriebe Pflicht.',
  },
]

const reasons = [
  { title: 'Individuelle Lösungen', description: 'Jede Website entsteht für Ihren Betrieb – mit WordPress zum Selbstpflegen oder individuell entwickelt, wenn Tempo und Eigenständigkeit zählen.' },
  { title: 'Ein Ansprechpartner', description: 'Beratung, Design und Entwicklung liegen bei mir. Nichts geht in der Weitergabe verloren, und Sie wissen immer, wen Sie fragen.' },
  { title: 'Betreuung nach dem Launch', description: 'Auf Wunsch kümmere ich mich auch danach um Updates, Backups und Verbesserungen – mit einem Wartungspaket ab 79 € im Monat.' },
  { title: 'Lokal im Ruhrgebiet', description: 'Als Webdesigner aus Dortmund kenne ich die Betriebe und Märkte im Revier – von Bochum bis Unna.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Professionelles Webdesign zum Festpreis."
      lead="Responsive Websites für Unternehmen im Ruhrgebiet, die erklären, was Sie tun, und Anfragen bringen. Klares Design, saubere Technik – mit WordPress zum Selbstpflegen oder individuell entwickelt."
    >
      <a href="#anfrage-abschluss" class="btn btn-primary">Erstgespräch anfragen</a>
      <NuxtLink to="/leistungen" class="btn btn-outline">Alle Leistungen</NuxtLink>

      <template #aside>
        <div class="rounded-2xl border border-hair bg-paper p-6 text-ink md:p-8 lg:ml-auto lg:max-w-sm">
          <p class="text-6xl uppercase leading-none md:text-7xl" style="font-stretch: 62%; font-weight: 880;">{{ service.price }}</p>
          <p class="mt-1 font-semibold">{{ service.priceNote }}</p>
          <p class="mt-4 border-t border-ink/25 pt-4 text-ink-soft">
            Für eine Unternehmenswebsite. Den genauen Preis bekommen Sie nach dem kostenlosen Erstgespräch schriftlich – was dort steht, zahlen Sie.
          </p>
        </div>
      </template>
    </PageCover>

    <!-- Aufstellung: was drinsteckt -->
    <section class="section" data-rubric="Aufstellung" aria-labelledby="features-title">
      <div class="wrap">
        <SectionHead
          id="features-title"
          title="Das steckt in Ihrem Webdesign."
          intro="Jede Website wird für Ihren Betrieb gebaut – mit klarem Design, hoher Benutzerfreundlichkeit und sauberer Technik, die Google versteht."
          :rule="false"
        />
        <ul class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <li v-for="feature in features" :key="feature.title" class="border-t-2 border-ink pt-5">
            <h3 class="t-title">{{ feature.title }}</h3>
            <p class="mt-3 max-w-text text-ink-soft">{{ feature.description }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Taktik: warum Prestige Webdesign -->
    <section class="section bg-stone" data-rubric="Taktik" aria-labelledby="why-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="why-title" class="t-headline">Warum Prestige Webdesign?</h2>
          <p class="t-lead mt-5 max-w-text text-ink-soft">
            Ich unterstütze Betriebe im Ruhrgebiet bei ihrem Auftritt im Netz – persönlich betreut, mit Design und Entwicklung aus einer Hand.
          </p>
          <FactLine class="mt-10" />
        </div>
        <dl class="border-t-2 border-ink lg:col-span-6 lg:col-start-7">
          <div v-for="reason in reasons" :key="reason.title" class="grid gap-2 border-b border-ink/25 py-6 sm:grid-cols-[13rem_1fr] sm:gap-6">
            <dt class="t-title">{{ reason.title }}</dt>
            <dd class="max-w-text text-ink-soft">{{ reason.description }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Heimspiele: Referenzen -->
    <section class="section" data-rubric="Heimspiele" aria-labelledby="refs-title">
      <div class="wrap">
        <SectionHead
          id="refs-title"
          title="Webdesign, das schon online ist."
          intro="Ein Studio, ein Fotografenpaar, ein Transportunternehmen – drei Websites, die ich gestaltet und umgesetzt habe. Klicken Sie ruhig rein."
          :rule="false"
        >
          <NuxtLink to="/referenzen" class="btn btn-outline">Alle Referenzen</NuxtLink>
        </SectionHead>
        <ReferenceShowcase class="mt-12" />
      </div>
    </section>

    <!-- Spielplan: Ablauf -->
    <section class="section bg-stone" data-rubric="Spielplan" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="So läuft Ihr Webdesign-Projekt ab."
          intro="Von der ersten Idee bis zum Launch – strukturiert, transparent und in enger Abstimmung mit Ihnen."
        />
        <ProcessFixture class="mt-10" />
      </div>
    </section>

    <!-- Fragen -->
    <section class="section" data-rubric="Fragen" aria-labelledby="faq-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="faq-title" class="t-headline">Häufige Fragen zum Webdesign</h2>
        </div>
        <FaqList class="lg:col-span-8" :items="faqItems" />
      </div>
    </section>

    <InquirySection
      source="Leistungen Webdesign – Anpfiff"
      title="Bereit für Ihre neue Website?"
      text="Lassen Sie uns unverbindlich sprechen. Ich zeige Ihnen, wie eine durchdachte Website Ihrem Betrieb Anfragen bringt – und Sie bekommen danach ein Angebot zum Festpreis."
    />
  </div>
</template>
