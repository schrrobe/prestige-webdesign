<script setup lang="ts">
import { SERVICES } from '~/data/services'

const service = SERVICES.find(s => s.slug === 'wartung')!

const faqItems = [
  {
    question: 'Warum brauche ich regelmäßige Website-Wartung?',
    answer: 'Websites ohne Wartung werden zur Sicherheitslücke: Veraltete Plugins und fehlende Updates laden Angreifer ein. Außerdem werden ungepflegte Websites mit der Zeit langsamer – und verlieren damit auch bei Google.',
  },
  {
    question: 'Was passiert, wenn ich keine Wartung buche?',
    answer: 'Ohne Wartung riskieren Sie Hackerangriffe, Datenverlust, Ausfälle und schlechtere Google-Rankings. Im schlimmsten Fall muss Ihre Website komplett neu aufgesetzt werden – das kostet deutlich mehr als regelmäßige Pflege.',
  },
  {
    question: 'Wie schnell reagieren Sie bei Problemen?',
    answer: 'In allen Paketen antworte ich innerhalb von 24 Stunden. In den Paketen Professional und Premium haben Ihre Anliegen Vorrang vor allgemeinen Anfragen.',
  },
]

useSeoMeta({
  title: 'Website-Wartung ab 79 €/Monat – Updates, Backups & Support | Prestige Webdesign',
  description: 'Website Wartung und Support für Ihre Website: Sicherheitsupdates, Backups, Performance-Optimierung und Monitoring. Pakete ab 79 € im Monat – Prestige Webdesign Ruhrgebiet.',
  ogTitle: 'Website Wartung & Support | Prestige Webdesign',
  ogDescription: 'Website-Wartung aus Dortmund: Updates, Backups, Sicherheit und Performance-Optimierung für Ihre Website – ab 79 € im Monat.',
})

useHead({
  script: [
    {
      key: 'wartung-faq-schema',
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

interface Package {
  name: string
  price: string
  description: string
}

const packages: Package[] = [
  { name: 'Basis', price: '79', description: 'Für kleinere Websites mit grundlegenden Anforderungen.' },
  { name: 'Professional', price: '199', description: 'Für geschäftskritische Websites mit höheren Anforderungen.' },
  { name: 'Premium', price: '399', description: 'Für Websites, die umfassend betreut werden sollen.' },
]

/** Leistungen je Paket – Reihenfolge der Werte = Basis, Professional, Premium. null = nicht enthalten. */
const comparison: { label: string; values: (string | null)[] }[] = [
  { label: 'Sicherheits-Backups', values: ['Regelmäßig', 'Regelmäßig', 'Regelmäßig'] },
  { label: 'Sicherheitsupdates', values: ['Regelmäßig', 'Automatisch', 'Proaktiv'] },
  { label: 'Performance', values: ['Basis-Monitoring', 'Erweiterte Optimierung', 'Kontinuierliche Optimierung'] },
  { label: 'Support', values: ['Per E-Mail, Antwort in 24 h', 'Vorrangig, Antwort in 24 h', 'Vorrangig, Antwort in 24 h'] },
  { label: 'Reports', values: ['Monatlich', 'Wöchentlich, detailliert', 'Täglich, detailliert'] },
  { label: 'Audit & Empfehlungen', values: [null, 'Monatlich', 'Wöchentlich, mit Optimierungen'] },
  { label: 'SEO', values: [null, 'SEO-Monitoring', 'Erweitertes SEO & Content-Updates'] },
  { label: 'Neue Funktionen', values: [null, null, 'Vorrangig umgesetzt'] },
]

const maintenanceServices = [
  {
    title: 'Sicherheitsupdates',
    description: 'Regelmäßige Updates für System, Plugins und Erweiterungen – damit bekannte Sicherheitslücken geschlossen sind.',
  },
  {
    title: 'Automatische Backups',
    description: 'Regelmäßige Sicherungen sorgen dafür, dass Ihre Website im Notfall wiederhergestellt werden kann.',
  },
  {
    title: 'Performance-Optimierung',
    description: 'Ich behalte die Ladezeiten im Blick und optimiere, damit Ihre Seite schnell bleibt.',
  },
  {
    title: 'Monitoring',
    description: 'Ich behalte Erreichbarkeit und Fehlermeldungen Ihrer Website im Blick und kümmere mich, wenn etwas nicht stimmt.',
  },
  {
    title: 'Persönlicher Support',
    description: 'Bei Fragen, Problemen oder Änderungswünschen schreiben Sie mir – Sie haben immer denselben Ansprechpartner.',
  },
  {
    title: 'Inhalte & Funktionen',
    description: 'Neue Texte, Bilder oder kleine Funktionen: Ich pflege sie ein, damit Ihre Website mit Ihrem Betrieb mitwächst.',
  },
]

const benefits = [
  { title: 'Sicherheit und Vertrauen', description: 'Ihre Website und die Daten Ihrer Kunden sind geschützt – immer aktuell, immer sicher.' },
  { title: 'Kopf frei', description: 'Sie müssen sich nicht um technische Details kümmern – das übernehme ich.' },
  { title: 'Bessere Performance', description: 'Regelmäßige Optimierungen halten Ihre Website schnell.' },
  { title: 'Suchmaschinenfreundlich', description: 'Eine gepflegte, schnelle Website hat bei Google bessere Karten als eine vernachlässigte.' },
  { title: 'Schnelle Hilfe', description: 'Wenn etwas hakt, wird es zügig gelöst – ohne Warteschleife.' },
  { title: 'Längere Lebensdauer', description: 'Gut gepflegte Websites halten länger – teure Neuentwicklungen rücken in die Ferne.' },
]

const reasons = [
  { title: 'Ich kenne Ihre Website', description: 'Oft habe ich sie selbst gebaut. Ich muss mich nicht erst einarbeiten, wenn etwas zu tun ist.' },
  { title: 'Vorbeugen statt reparieren', description: 'Ich kümmere mich darum, dass es gar nicht erst zu Problemen kommt.' },
  { title: 'Nachvollziehbare Reports', description: 'Sie sehen regelmäßig, was an Ihrer Website gemacht wurde.' },
  { title: 'Flexible Pakete', description: 'Wählen Sie das Paket, das zu Ihnen passt – und wechseln Sie, wenn sich Ihr Bedarf ändert.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Website-Wartung & Support."
      lead="Ihre Website soll nicht nur heute funktionieren, sondern auch morgen und übermorgen. Ich halte sie aktuell, sicher und schnell – und bin da, wenn etwas hakt."
    >
      <a href="#packages-title" class="btn btn-primary">Pakete vergleichen</a>
      <NuxtLink to="/leistungen" class="btn btn-outline">Alle Leistungen</NuxtLink>

      <template #aside>
        <div class="rounded-2xl border border-hair bg-paper p-6 text-ink md:p-8 lg:ml-auto lg:max-w-sm">
          <p class="font-serif text-6xl leading-[1.05] md:text-7xl" style="font-weight: 500; font-variation-settings: 'opsz' 48;">ab 79 €</p>
          <p class="mt-1 font-semibold">pro Monat</p>
          <p class="mt-4 border-t border-hair pt-4 text-ink-soft">
            {{ service.priceNote }} im Monat.
          </p>
        </div>
      </template>
    </PageCover>

    <!-- Leistungsumfang -->
    <section class="section" aria-labelledby="scope-title">
      <div class="wrap">
        <SectionHead
          id="scope-title"
          title="Was in der Website-Wartung enthalten ist"
          intro="Die Wartung deckt alles ab, was eine Website im Alltag braucht, damit sie zuverlässig läuft."
          :rule="false"
        />
        <ul class="mt-10 border-t border-ink">
          <li v-for="item in maintenanceServices" :key="item.title" class="grid gap-x-8 gap-y-2 border-b border-hair py-6 md:grid-cols-12 md:py-7">
            <h3 class="t-title md:col-span-5">{{ item.title }}</h3>
            <p class="max-w-xl text-ink-soft md:col-span-7">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Pakete im Vergleich -->
    <section class="section bg-stone" aria-labelledby="packages-title">
      <div class="wrap">
        <SectionHead
          id="packages-title"
          title="Wartungspakete für jeden Bedarf"
          intro="Drei Pakete, feste Monatspreise. Sie können jederzeit in ein größeres oder kleineres Paket wechseln."
        />

        <!-- Ab md: Vergleichstabelle -->
        <table class="mt-10 hidden w-full border-collapse text-left md:table">
          <caption class="sr-only">Wartungspakete im Vergleich: Basis, Professional und Premium</caption>
          <thead>
            <tr class="border-b border-ink align-bottom">
              <th scope="col" class="t-label w-1/4 pb-5 pr-6 text-ink-soft">Leistung</th>
              <th
                v-for="pkg in packages"
                :key="pkg.name"
                scope="col"
                class="border-l border-hair px-6 pb-5"
              >
                <span class="font-serif block text-3xl leading-[1.05] lg:text-4xl" style="font-weight: 500; font-variation-settings: 'opsz' 48;">{{ pkg.name }}</span>
                <span class="mt-4 flex items-baseline gap-1.5">
                  <span class="font-serif text-5xl leading-[1.05] lg:text-6xl" style="font-weight: 500; font-variation-settings: 'opsz' 48;">{{ pkg.price }} €</span>
                  <span class="font-semibold text-ink-soft">/ Monat</span>
                </span>
                <span class="mt-3 block max-w-xs text-sm font-normal text-ink-soft">{{ pkg.description }}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in comparison" :key="row.label" class="border-b border-hair">
              <th scope="row" class="py-4 pr-6 align-top font-bold">{{ row.label }}</th>
              <td v-for="(value, i) in row.values" :key="i" class="border-l border-hair px-6 py-4 align-top">
                <template v-if="value">{{ value }}</template>
                <template v-else>
                  <span aria-hidden="true" class="text-ink-soft">—</span>
                  <span class="sr-only">nicht enthalten</span>
                </template>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Handy: ein Block je Paket -->
        <div class="mt-10 space-y-12 md:hidden">
          <article v-for="(pkg, p) in packages" :key="pkg.name" class="rule-top pt-5" :aria-labelledby="`pkg-${pkg.name}`">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 :id="`pkg-${pkg.name}`" class="font-serif text-[2rem] leading-[1.05]" style="font-weight: 500; font-variation-settings: 'opsz' 48;">{{ pkg.name }}</h3>
              <p class="whitespace-nowrap">
                <span class="font-serif text-[2rem] leading-[1.05]" style="font-weight: 500; font-variation-settings: 'opsz' 48;">{{ pkg.price }} €</span>
                <span class="text-ink-soft"> / Monat</span>
              </p>
            </div>
            <p class="mt-2 text-ink-soft">{{ pkg.description }}</p>
            <dl class="mt-4">
              <div
                v-for="row in comparison.filter(r => r.values[p])"
                :key="row.label"
                class="grid grid-cols-[8.5rem_1fr] gap-4 border-t border-hair py-3 [overflow-wrap:anywhere]"
              >
                <dt class="font-semibold">{{ row.label }}</dt>
                <dd>{{ row.values[p] }}</dd>
              </div>
            </dl>
          </article>
        </div>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="max-w-text font-semibold">
            Bei allen Paketen bin ich Ihr Ansprechpartner – Sie sprechen immer mit derselben Person.
          </p>
          <a href="#anfrage-abschluss" class="btn btn-primary shrink-0">Paket anfragen</a>
        </div>
      </div>
    </section>

    <!-- Vorteile -->
    <section class="section" aria-labelledby="benefits-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="benefits-title" class="t-headline">Vorteile professioneller Website-Wartung</h2>
          <p class="t-lead mt-5 max-w-text text-ink-soft">
            Regelmäßige Wartung ist eine Investition in die Zukunft Ihrer Website – und Ihres Betriebs.
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

    <!-- warum ich -->
    <section class="section on-ink" aria-labelledby="why-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="why-title" class="t-headline">Warum Prestige Webdesign für Ihre Wartung?</h2>
          <p class="t-lead mt-5 max-w-text text-paper/75">
            Sie kümmern sich um Ihren Betrieb. Ich kümmere mich um Ihre Website.
          </p>
        </div>
        <ul class="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7">
          <li v-for="reason in reasons" :key="reason.title" class="border-t-2 border-paper pt-5">
            <h3 class="t-title">{{ reason.title }}</h3>
            <p class="mt-3 text-paper/75">{{ reason.description }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Ablauf -->
    <section class="section bg-stone" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="Noch keine Website? So läuft ein neues Projekt ab."
          intro="Die Wartung schließt nahtlos an den Launch an – Sie müssen sich um nichts Neues kümmern."
        />
        <ProcessFixture class="mt-10" />
      </div>
    </section>

    <!-- Häufige Fragen -->
    <section class="section" aria-labelledby="faq-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="faq-title" class="t-headline">Häufige Fragen zur Wartung</h2>
        </div>
        <FaqList class="lg:col-span-8" :items="faqItems" />
      </div>
    </section>

    <InquirySection
      source="Leistungen Wartung – Abschluss"
      title="Sichern Sie Ihre Website ab."
      text="Schreiben Sie mir, um welche Website es geht und welches Paket Sie interessiert. Ich schaue sie mir an und melde mich innerhalb von 24 Stunden."
    />
  </div>
</template>
