<script setup lang="ts">
import { CONTACT } from '~/data/site'
import { REFERENCES } from '~/data/references'

const siteUrl = 'https://prestige-webdesign.de'

useSeoMeta({
  title: 'Über mich – Robert Schreiner, Webdesigner aus Dortmund | Prestige Webdesign',
  description: 'Ich bin Robert Schreiner, Webdesigner und Entwickler aus Dortmund. Seit 2020 baue ich Websites für Betriebe im Ruhrgebiet – mit WordPress oder individuell, schnell und barrierefrei. Ein Ansprechpartner, Antwort in 24 h.',
  ogTitle: 'Über mich | Prestige Webdesign Dortmund',
  ogDescription: 'Robert Schreiner – Webdesigner aus Dortmund. Ein Ansprechpartner von der Idee bis nach dem Launch.',
})

useHead({
  script: [
    {
      key: 'about-structured-data',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Über mich',
        url: `${siteUrl}/ueber-mich`,
        mainEntity: {
          '@type': 'Person',
          '@id': `${siteUrl}/ueber-mich#person`,
          name: CONTACT.owner,
          jobTitle: 'Webdesigner',
          worksFor: { '@id': `${siteUrl}/#organization` },
          address: {
            '@type': 'PostalAddress',
            addressLocality: CONTACT.city,
            addressCountry: 'DE',
          },
        },
      }),
    },
  ],
})

const profile = [
  { term: 'Name', value: CONTACT.owner },
  { term: 'Position', value: 'Webdesigner & Entwickler' },
  { term: 'Heimat', value: `${CONTACT.street}, ${CONTACT.zip} ${CONTACT.city}` },
  { term: 'Im Einsatz', value: `seit ${CONTACT.since}` },
  { term: 'Erreichbar', value: CONTACT.hours },
]

const principles = [
  {
    title: 'Das passende Werkzeug',
    text: 'Wenn Sie Ihre Seite selbst pflegen wollen, baue ich mit WordPress. Wenn es besonders schnell und individuell sein soll, entwickle ich mit Nuxt und Vue. Und wenn die einfachere Lösung reicht, sage ich Ihnen das.',
  },
  {
    title: 'Schnell auf jedem Gerät',
    text: 'Viele Ihrer Kunden suchen am Smartphone, oft unterwegs und mit schwachem Netz. Deshalb prüfe ich Ladezeit und Darstellung auf allen Geräten, bevor eine Seite online geht.',
  },
  {
    title: 'Barrierefrei nach WCAG 2.2 AA',
    text: 'Gute Kontraste, Bedienung per Tastatur, Formulare, die Screenreader verstehen. Seit Juni 2025 verlangt das Barrierefreiheitsstärkungsgesetz das für viele Online-Angebote – und es macht Ihre Seite für alle besser.',
  },
  {
    title: 'Festpreis, bevor es losgeht',
    text: 'Nach dem kostenlosen Erstgespräch bekommen Sie ein schriftliches Angebot mit klaren Positionen. Was dort steht, kostet es auch.',
  },
  {
    title: 'Antwort innerhalb von 24 Stunden',
    text: `Wenn Sie mir schreiben, melde ich mich innerhalb von 24 Stunden – persönlich. Erreichbar bin ich ${CONTACT.hours}.`,
  },
]
</script>

<template>
  <div>
    <PageCover>
      <template #title>Robert Schreiner.<br>Webdesigner aus Dortmund.</template>
      <template #lead>
        <p class="t-lead mt-6 max-w-2xl md:mt-8">
          Ich gestalte und entwickle seit {{ CONTACT.since }} Websites für Betriebe im Ruhrgebiet.
          Allein, direkt und ohne Agentur-Umwege: Vom ersten Gespräch bis nach dem Launch sprechen Sie nur mit mir.
        </p>
      </template>
      <template #aside>
        <dl class="border-t-[6px] border-field-ink" aria-label="Steckbrief">
          <div
            v-for="row in profile"
            :key="row.term"
            class="grid grid-cols-[7.5rem_1fr] gap-x-4 border-b border-field-ink/30 py-3"
          >
            <dt class="t-label pt-0.5 text-field-soft">{{ row.term }}</dt>
            <dd class="font-semibold">{{ row.value }}</dd>
          </div>
        </dl>
      </template>
      <NuxtLink to="/kontakt" class="btn btn-signal">Schreiben Sie mir</NuxtLink>
      <NuxtLink to="/referenzen" class="btn btn-outline">Meine Referenzen</NuxtLink>
    </PageCover>

    <!-- Vorwort -->
    <section class="section" data-rubric="Vorwort" aria-labelledby="intro-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="intro-title" class="t-headline">Ein Ansprechpartner. Kein Weiterreichen.</h2>
        </div>
        <div class="max-w-text lg:col-span-7">
          <p class="t-lead">
            Seit {{ CONTACT.since }} habe ich über zehn Projekte abgeschlossen –
            für Studios, Fotografen, Transportunternehmen und andere Betriebe aus der Region.
          </p>
          <p class="mt-5 text-ink-soft">
            Prestige Webdesign bin ich. Es gibt kein Team im Hintergrund und keine Projektleitung, die Ihre Anfrage weiterreicht.
            Ich berate Sie, gestalte, entwickle, teste und bringe Ihre Seite online. Das macht die Wege kurz:
            Wenn Sie eine Frage haben, beantwortet sie der, der Ihre Website gebaut hat.
          </p>
          <p class="mt-5 text-ink-soft">
            Ich sitze in Dortmund und arbeite für Betriebe in Dortmund, Bochum, Essen, Bottrop, im Kreis Unna und im ganzen Ruhrgebiet.
          </p>
        </div>
      </div>
      <div class="wrap mt-16 md:mt-24">
        <p class="t-display max-w-5xl text-[2.5rem] sm:text-6xl lg:text-7xl">
          Wer mir schreibt, bekommt Antwort von mir.
        </p>
      </div>
    </section>

    <!-- Statistik -->
    <section class="section-tight bg-sheet" data-rubric="Statistik" aria-labelledby="stats-title">
      <div class="wrap grid gap-8 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-4">
          <h2 id="stats-title" class="t-title">Die Zahlen hinter Prestige Webdesign</h2>
          <p class="mt-2 text-ink-soft">Ohne Aufrundung, ohne Sternchen.</p>
        </div>
        <FactLine class="lg:col-span-8" />
      </div>
    </section>

    <!-- Taktik: So arbeite ich -->
    <section class="section" data-rubric="Taktik" aria-labelledby="principles-title">
      <div class="wrap">
        <SectionHead
          id="principles-title"
          title="So arbeite ich."
          intro="Fünf Grundsätze, die für jedes Projekt gelten – egal ob kleine Firmenwebsite oder Online-Shop."
        />
        <ul class="mt-12 border-t-2 border-ink">
          <li
            v-for="item in principles"
            :key="item.title"
            class="grid gap-x-10 gap-y-2 border-b border-ink/25 py-7 md:grid-cols-12 md:py-9"
          >
            <h3 class="text-3xl uppercase leading-[0.95] md:col-span-5 md:text-4xl" style="font-stretch: 62%; font-weight: 860;">{{ item.title }}</h3>
            <p class="max-w-text text-ink-soft md:col-span-7 md:pt-1">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Heimspiele -->
    <section class="section bg-sheet" data-rubric="Heimspiele" aria-labelledby="work-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="work-title" class="t-headline">Was ich zuletzt gebaut habe.</h2>
          <p class="mt-4 text-ink-soft">Bei allen drei Projekten lagen Design und Umsetzung bei mir.</p>
        </div>
        <ul class="border-t-2 border-ink lg:col-span-8">
          <li v-for="ref in REFERENCES" :key="ref.slug" class="border-b border-ink/25">
            <NuxtLink :to="`/referenzen/${ref.slug}`" class="group grid min-h-14 grid-cols-[1fr_auto] items-center gap-x-6 py-5">
              <span>
                <span class="block text-3xl uppercase leading-none md:text-4xl" style="font-stretch: 62%; font-weight: 880;">{{ ref.name }}</span>
                <span class="mt-2 block text-ink-soft">{{ ref.industry }} · {{ ref.tool }}</span>
              </span>
              <AppIcon name="arrow-right" class="h-6 w-6 text-signal-ink transition-transform duration-200 group-hover:translate-x-1" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <InquirySection
      title="Lernen wir uns kennen."
      text="Erzählen Sie mir von Ihrem Betrieb und Ihrer Website. Das Erstgespräch ist kostenlos und unverbindlich – danach bekommen Sie ein Angebot zum Festpreis."
      source="Über mich"
    />
  </div>
</template>
