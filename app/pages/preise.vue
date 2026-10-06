<script setup lang="ts">
const faqItems = [
  {
    question: 'Was kostet eine Website bei Ihnen?',
    answer: 'Eine Unternehmenswebsite gibt es bei mir ab 800 €. Wo genau Ihr Projekt liegt, hängt vom Umfang ab – etwa von der Zahl der Seiten und den Funktionen. Nach dem kostenlosen Erstgespräch bekommen Sie ein schriftliches Angebot zum Festpreis.',
  },
  {
    question: 'Was kostet ein Online-Shop?',
    answer: 'Ein Online-Shop mit WooCommerce oder Shopify liegt zwischen 2.500 und 15.000 €. Den Ausschlag geben unter anderem die Zahl der Produkte, Zahlungsarten, Versandregeln und Schnittstellen. Auch hier gilt: Sie bekommen vorher einen Festpreis.',
  },
  {
    question: 'Warum stehen bei Webanwendungen und SEO keine Preise?',
    answer: 'Weil die Vorhaben zu unterschiedlich sind, um einen ehrlichen Pauschalpreis zu nennen. Ein Kundenportal ist etwas anderes als ein kleines internes Werkzeug. Deshalb gibt es diese Leistungen auf Anfrage – nach dem Erstgespräch bekommen Sie ein Angebot zum Festpreis.',
  },
  {
    question: 'Was kostet die Wartung nach dem Launch?',
    answer: 'Wartung ist freiwillig. Wenn Sie möchten, dass ich mich um Updates, Backups und Sicherheit kümmere, gibt es drei Pakete: Basis für 79 €, Professional für 199 € und Premium für 399 € im Monat.',
  },
  {
    question: 'Ist das Erstgespräch wirklich kostenlos?',
    answer: 'Ja. Das Erstgespräch ist kostenlos und unverbindlich. Sie erzählen mir, was Sie vorhaben, ich stelle Fragen – und Sie entscheiden danach in Ruhe, ob Sie mein Angebot annehmen.',
  },
  {
    question: 'Kann der Preis später noch steigen?',
    answer: 'Nicht für das, was im Angebot steht – das ist der Sinn eines Festpreises. Wenn Sie während des Projekts zusätzliche Wünsche haben, nenne ich Ihnen vorher den Preis dafür. Ob wir das umsetzen, entscheiden Sie.',
  },
]

useSeoMeta({
  title: 'Preise Webdesign Dortmund – Website ab 800 € zum Festpreis | Prestige Webdesign',
  description: 'Was kostet eine Website? Webdesign ab 800 €, Online-Shops 2.500–15.000 €, Wartung ab 79 €/Monat. Festpreis nach dem kostenlosen Erstgespräch – Prestige Webdesign aus Dortmund.',
  ogTitle: 'Preise | Prestige Webdesign Dortmund',
  ogDescription: 'Websites ab 800 €, Online-Shops 2.500–15.000 €, Wartung ab 79 € im Monat – alles zum Festpreis.',
})

useHead({
  script: [
    {
      key: 'prices-faq-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }),
    },
  ],
})

const fixedPrice = [
  {
    title: 'Erst reden, dann rechnen.',
    text: 'Im kostenlosen Erstgespräch klären wir, was Ihre Website leisten soll, wie groß sie wird und welches Budget Sie im Kopf haben.',
  },
  {
    title: 'Ein Angebot mit klaren Positionen.',
    text: 'Danach bekommen Sie ein schriftliches Angebot. Darin steht, was ich umsetze und was es kostet – Position für Position.',
  },
  {
    title: 'Was dort steht, gilt.',
    text: 'Der Preis im Angebot ist der Preis, den Sie zahlen. Kommen unterwegs neue Wünsche dazu, nenne ich Ihnen vorher den Preis, und Sie entscheiden.',
  },
]

const priceFactors = [
  { term: 'Umfang', text: 'Wie viele Seiten und Inhalte braucht Ihre Website?' },
  { term: 'Funktionen', text: 'Reicht ein Kontaktformular, oder braucht es Shop, Buchungsanfragen oder Schnittstellen?' },
  { term: 'Werkzeug', text: 'WordPress zum Selbstpflegen oder eine individuell entwickelte Lösung?' },
  { term: 'Inhalte', text: 'Sind Texte und Bilder schon da, oder entstehen sie im Projekt?' },
]

const maintenance = [
  { name: 'Basis', price: '79 €', text: 'Für kleinere Websites mit grundlegenden Anforderungen.' },
  { name: 'Professional', price: '199 €', text: 'Für Websites, auf die Ihr Geschäft täglich angewiesen ist.' },
  { name: 'Premium', price: '399 €', text: 'Für Websites, die umfassend betreut werden sollen.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Preise. Vorher, nicht hinterher."
      lead="Hier steht, was eine Website bei mir kostet – ab 800 €. Den genauen Betrag bekommen Sie nach dem kostenlosen Erstgespräch schriftlich, als Festpreis."
    >
      <NuxtLink to="/kontakt" class="btn btn-signal">Erstgespräch anfragen</NuxtLink>
      <a href="#festpreis" class="btn btn-outline">Was Festpreis heißt</a>
    </PageCover>

    <!-- Tabelle -->
    <section class="section" data-rubric="Tabelle" aria-labelledby="table-title">
      <div class="wrap">
        <SectionHead
          id="table-title"
          title="Leistungen und Preise im Überblick."
          intro="Ab-Preise für Websites und Shops, monatliche Pakete für die Wartung. Webanwendungen und SEO kalkuliere ich individuell."
          :rule="false"
        />
        <ServiceTable class="mt-10" />
      </div>
    </section>

    <!-- Taktik: Festpreis -->
    <section id="festpreis" class="section scroll-mt-24 bg-sheet" data-rubric="Taktik" aria-labelledby="fixed-title">
      <div class="wrap">
        <SectionHead
          id="fixed-title"
          title="Festpreis heißt: keine Überraschung auf der Rechnung."
          intro="Sie sollen wissen, worauf Sie sich einlassen, bevor die erste Stunde Arbeit anfällt."
        />
        <div class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
          <div v-for="item in fixedPrice" :key="item.title" class="border-t-2 border-ink pt-5">
            <h3 class="t-title">{{ item.title }}</h3>
            <p class="mt-3 text-ink-soft">{{ item.text }}</p>
          </div>
        </div>

        <div class="mt-16 grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <h3 class="t-title">Was den Preis bestimmt</h3>
            <p class="mt-3 max-w-md text-ink-soft">
              Ob Ihre Website bei 800 € liegt oder darüber, hängt vor allem von diesen vier Fragen ab.
              Was enthalten ist und was nicht, steht danach schwarz auf weiß im Angebot.
            </p>
          </div>
          <dl class="border-t-2 border-ink lg:col-span-8">
            <div
              v-for="factor in priceFactors"
              :key="factor.term"
              class="grid gap-x-6 gap-y-1 border-b border-ink/25 py-5 sm:grid-cols-[10rem_1fr]"
            >
              <dt class="text-2xl uppercase leading-none" style="font-stretch: 62%; font-weight: 860;">{{ factor.term }}</dt>
              <dd class="text-ink-soft">{{ factor.text }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Tabelle: Wartung -->
    <section class="section" data-rubric="Tabelle" aria-labelledby="care-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="care-title" class="t-headline">Nach dem Launch: Wartung ab 79 € im Monat.</h2>
          <p class="t-lead mt-5 max-w-xl text-ink-soft">
            Wartung ist freiwillig. Wenn Sie möchten, halte ich Ihre Website aktuell, sicher und schnell – und bin da, wenn etwas hakt.
          </p>
          <NuxtLink to="/leistungen/wartung" class="link mt-6 inline-flex min-h-11 items-center gap-2 text-lg font-bold">
            Alle Paketinhalte ansehen
            <AppIcon name="arrow-right" class="h-5 w-5" />
          </NuxtLink>
        </div>
        <ul class="border-t-2 border-ink lg:col-span-7" aria-label="Wartungspakete">
          <li
            v-for="pkg in maintenance"
            :key="pkg.name"
            class="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-ink/25 py-6"
          >
            <p class="text-3xl uppercase leading-none md:text-4xl" style="font-stretch: 62%; font-weight: 880;">{{ pkg.name }}</p>
            <p class="row-span-2 text-right">
              <span class="block whitespace-nowrap text-2xl leading-none md:text-3xl" style="font-stretch: 75%; font-weight: 820;">{{ pkg.price }}</span>
              <span class="mt-1.5 block text-sm text-ink-soft">pro Monat</span>
            </p>
            <p class="text-ink-soft">{{ pkg.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Spielplan -->
    <section class="section bg-sheet" data-rubric="Spielplan" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="So kommen Sie zu Ihrem Festpreis."
          intro="Fünf Schritte vom ersten Gespräch bis zum Launch. Der Preis steht nach Schritt zwei fest."
        />
        <ProcessFixture class="mt-10" />
      </div>
    </section>

    <!-- Fragen -->
    <section class="section" data-rubric="Fragen" aria-labelledby="faq-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="faq-title" class="t-headline">Fragen zu den Kosten</h2>
          <p class="mt-4 text-ink-soft">
            Ihre Frage ist nicht dabei? Schreiben Sie mir – ich antworte innerhalb von 24 Stunden.
          </p>
        </div>
        <FaqList class="lg:col-span-8" :items="faqItems" />
      </div>
    </section>

    <KickoffSection
      title="Was kostet Ihre Website?"
      text="Finden wir es heraus. Im kostenlosen Erstgespräch klären wir, was Sie brauchen – danach bekommen Sie ein Angebot zum Festpreis, und Sie entscheiden in Ruhe."
      source="Preise"
    />
  </div>
</template>
