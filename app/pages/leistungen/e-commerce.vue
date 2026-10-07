<script setup lang="ts">
import { SERVICES } from '~/data/services'

const service = SERVICES.find(s => s.slug === 'e-commerce')!

const faqItems = [
  {
    question: 'WooCommerce oder Shopify – was ist die bessere Wahl?',
    answer: 'Das hängt von Ihren Anforderungen ab. WooCommerce bietet viel Flexibilität und eignet sich für Shops mit besonderen Anforderungen. Shopify ist einfacher zu verwalten und eignet sich gut für einen schnellen Start. Im kostenlosen Erstgespräch berate ich Sie bei der Wahl der passenden Plattform.',
  },
  {
    question: 'Was kostet ein professioneller Online-Shop?',
    answer: 'Ein professioneller Online-Shop kostet je nach Umfang zwischen 2.500 und 15.000 €. Entscheidend sind Produktanzahl, individuelle Funktionen, Zahlungsanbieter und Designaufwand. Nach dem Erstgespräch bekommen Sie ein transparentes Angebot zum Festpreis.',
  },
  {
    question: 'Welche Zahlungsanbieter können integriert werden?',
    answer: 'Alle gängigen Zahlungsarten lassen sich einbinden, etwa PayPal, Stripe, Klarna und Kreditkarte. Die Auswahl richtet sich nach Ihrer Zielgruppe und Ihren Wünschen.',
  },
  {
    question: 'Ist der Shop DSGVO-konform?',
    answer: 'Ich baue Ihren Shop von Anfang an datenschutzfreundlich: SSL-Verschlüsselung, Datenschutzhinweise, ein Cookie-Banner mit echter Wahlmöglichkeit und eine Zahlungsabwicklung über zertifizierte Anbieter gehören dazu. Die Rechtstexte selbst sollten Sie von einem Anwalt oder einem spezialisierten Dienst erstellen lassen.',
  },
]

useSeoMeta({
  title: 'Online-Shop erstellen lassen – WooCommerce & Shopify | Prestige Webdesign',
  description: 'E-Commerce Lösungen und Online-Shop Entwicklung mit WooCommerce und Shopify. Shop-Entwicklung im Ruhrgebiet mit Payment-Integration und Produktverwaltung – Festpreis von 2.500 bis 15.000 €.',
  ogTitle: 'E-Commerce Shop Entwicklung | Prestige Webdesign',
  ogDescription: 'Online-Shop Entwicklung mit WooCommerce & Shopify: E-Commerce Lösungen für Ihren Online-Handel, zum Festpreis.',
})

useHead({
  script: [
    {
      key: 'ecommerce-faq-schema',
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

const platforms = [
  {
    title: 'WooCommerce',
    claim: 'Für Flexibilität und volle Kontrolle.',
    description: 'Die Open-Source-Shoplösung für WordPress: Ihr Shop liegt auf Ihrem eigenen Server, und fast alles lässt sich anpassen.',
    features: ['Unbegrenzt viele Produkte', 'Volle Anpassbarkeit', 'Niedrige laufende Kosten', 'Große Community'],
  },
  {
    title: 'Shopify',
    claim: 'Für einen schnellen, pflegeleichten Start.',
    description: 'Die Cloud-Plattform mit eingebauten Werkzeugen und automatischen Updates – Sie kümmern sich ums Verkaufen, nicht um den Server.',
    features: ['Einfache Verwaltung', 'Integrierte Werkzeuge', 'Hohe Sicherheit', 'Verkauf über mehrere Kanäle'],
  },
]

const services = [
  {
    title: 'Shop-Design & Setup',
    description: 'Ein Shop-Design mit übersichtlicher Navigation und einem Checkout, der Käufer ohne Umwege zum Abschluss führt.',
  },
  {
    title: 'Produktverwaltung',
    description: 'Kategorien, Varianten und Lagerbestände – sauber angelegt, damit Sie Ihr Sortiment später selbst pflegen können.',
  },
  {
    title: 'Payment-Integration',
    description: 'Einbindung von PayPal, Stripe, Klarna und weiteren Zahlungsanbietern für sichere Zahlungen.',
  },
  {
    title: 'Versand & Logistik',
    description: 'Versandkosten, Versandarten und Benachrichtigungen für Ihre Kunden – passend zu Ihren Versanddienstleistern.',
  },
  {
    title: 'Sicherheit & DSGVO',
    description: 'SSL-Verschlüsselung, Datenschutzhinweise, Cookie-Banner und Zahlungsabwicklung über zertifizierte Anbieter.',
  },
  {
    title: 'Auswertungen',
    description: 'Übersichten zu Bestellungen, Umsätzen und beliebten Produkten – direkt im Shop-System.',
  },
]

const benefits = [
  {
    title: 'Mehr abgeschlossene Käufe',
    description: 'Ein klarer Checkout und eine verständliche Navigation führen zu mehr Käufen und weniger abgebrochenen Warenkörben.',
  },
  {
    title: 'Verkaufen rund um die Uhr',
    description: 'Ihr Online-Shop nimmt Bestellungen auch dann an, wenn Ihr Laden geschlossen ist.',
  },
  {
    title: 'Kundenbeziehungen stärken',
    description: 'E-Mails, Newsletter und Treueaktionen bringen Kunden zurück und sorgen für wiederholte Käufe.',
  },
  {
    title: 'Wächst mit Ihnen',
    description: 'Von wenigen bis zu tausenden Produkten – Ihr Shop wächst mit Ihrem Geschäft.',
  },
  {
    title: 'Entscheidungen mit Zahlen',
    description: 'Auswertungen zeigen, wie Ihre Kunden kaufen und wo es noch hakt.',
  },
  {
    title: 'Weniger Verwaltungsaufwand',
    description: 'Automatische Abläufe für Bestellungen, Rechnungen und Bestände sparen Zeit im Alltag.',
  },
]

const successFactors = [
  { title: 'Reibungsloser Checkout', text: 'Jeder zusätzliche Schritt kostet Käufe. Ich reduziere den Kaufprozess auf das Nötigste – mit klaren Zahlungswegen und Vertrauenssignalen.' },
  { title: 'Schnelle Ladezeiten', text: 'Jede zusätzliche Sekunde Ladezeit erhöht die Zahl der Kaufabbrüche. Geschwindigkeit ist bei mir kein Nachgedanke, sondern Teil des Fundaments.' },
  { title: 'Mobile zuerst', text: 'Ein Großteil der Shop-Besuche kommt vom Smartphone. Ihr Shop muss dort genauso überzeugen wie am Desktop.' },
  { title: 'Auffindbarkeit', text: 'Produkte und Kategorien werden von Anfang an suchmaschinenfreundlich aufgebaut, damit Sie auch über Google gefunden werden.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Online-Shop erstellen lassen."
      lead="E-Commerce Lösungen mit WooCommerce oder Shopify für Händler und Betriebe im Ruhrgebiet: ein Shop, der auf dem Smartphone verkauft – mit Produkten, Zahlung, Versand und sauberen Abläufen."
    >
      <a href="#anfrage-abschluss" class="btn btn-primary">Shop-Erstgespräch anfragen</a>
      <NuxtLink to="/leistungen" class="btn btn-outline">Alle Leistungen</NuxtLink>

      <template #aside>
        <div class="rounded-2xl border border-hair bg-paper p-6 text-ink md:p-8 lg:ml-auto lg:max-w-sm">
          <p class="font-serif mt-2 text-[2.5rem] leading-[1.05] sm:text-5xl" style="font-weight: 500; font-variation-settings: 'opsz' 48;">{{ service.price }}</p>
          <p class="mt-4 border-t border-hair pt-4 text-ink-soft">
            Produktanzahl, Funktionen und Zahlungsanbieter bestimmen den Preis. Nach dem kostenlosen Erstgespräch steht er fest.
          </p>
        </div>
      </template>
    </PageCover>

    <!-- Plattformwahl -->
    <section class="section" aria-labelledby="platforms-title">
      <div class="wrap">
        <SectionHead
          id="platforms-title"
          title="WooCommerce oder Shopify?"
          intro="Beide Plattformen haben ihre Stärken. Ich helfe Ihnen, die passende für Ihre Anforderungen zu wählen – und setze sie sauber um."
          :rule="false"
        />
        <div class="mt-12 grid border-2 border-ink md:grid-cols-2">
          <div
            v-for="(platform, i) in platforms"
            :key="platform.title"
            class="p-6 md:p-10"
            :class="i > 0 ? 'border-t border-ink md:border-l-2 md:border-t-0' : ''"
          >
            <h3 class="font-serif text-4xl leading-[1.05] md:text-5xl" style="font-weight: 500; font-variation-settings: 'opsz' 48;">{{ platform.title }}</h3>
            <p class="t-title mt-3 text-ink-soft">{{ platform.claim }}</p>
            <p class="mt-5 max-w-text">{{ platform.description }}</p>
            <CheckList class="mt-6 border-t border-hair pt-6" :items="platform.features" />
          </div>
        </div>
      </div>
    </section>

    <!-- Leistungsumfang -->
    <section class="section bg-stone" aria-labelledby="portfolio-title">
      <div class="wrap">
        <SectionHead
          id="portfolio-title"
          title="Mein E-Commerce-Leistungsumfang"
          intro="Von der Shop-Entwicklung bis zum ersten Verkauf: Ich kümmere mich um die Technik, damit Sie sich um Ihre Kunden kümmern können."
        />
        <ul class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <li v-for="item in services" :key="item.title" class="border-t border-ink pt-5">
            <h3 class="t-title">{{ item.title }}</h3>
            <p class="mt-3 text-ink-soft">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Vorteile -->
    <section class="section" aria-labelledby="benefits-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="benefits-title" class="t-headline">Warum ein professioneller Online-Shop?</h2>
          <p class="t-lead mt-5 max-w-text text-ink-soft">
            Ein gut gebauter Online-Shop ist eine der lohnendsten Investitionen, wenn Sie über Ihren Laden oder Ihre Region hinaus verkaufen wollen.
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

    <!-- Erfolgsfaktoren -->
    <section class="section on-ink" aria-labelledby="factors-title">
      <div class="wrap">
        <h2 id="factors-title" class="t-headline max-w-3xl">Was einen erfolgreichen Online-Shop ausmacht</h2>
        <p class="t-lead mt-5 max-w-2xl text-paper/75">
          Ein Shop verkauft nicht durch Zufall. Diese vier Dinge entscheiden, ob aus Besuchern Käufer werden.
        </p>
        <ul class="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          <li v-for="factor in successFactors" :key="factor.title" class="border-t-2 border-paper pt-5">
            <h3 class="t-title">{{ factor.title }}</h3>
            <p class="mt-3 max-w-text text-paper/75">{{ factor.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Verweis auf Referenzen -->
    <section class="section-tight border-b border-ink" aria-labelledby="refs-title">
      <div class="wrap grid gap-6 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-8">
          <h2 id="refs-title" class="t-title">Sehen Sie sich an, wie ich arbeite.</h2>
          <p class="mt-2 max-w-text text-ink-soft">
            Websites, die ich gestaltet und umgesetzt habe – mit WordPress und individuell entwickelt – finden Sie bei den Referenzen.
          </p>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <NuxtLink to="/referenzen" class="link inline-flex min-h-11 items-center gap-2 font-bold">
            Referenzen ansehen
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
          title="So entsteht Ihr Online-Shop."
          intro="Vom Erstgespräch bis zur ersten Bestellung – mit festem Preis und Zwischenständen, die Sie selbst ausprobieren können."
        />
        <ProcessFixture class="mt-10" :show-duration="false" />
      </div>
    </section>

    <!-- Häufige Fragen -->
    <section class="section" aria-labelledby="faq-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="faq-title" class="t-headline">Häufige Fragen zu E-Commerce</h2>
        </div>
        <FaqList class="lg:col-span-8" :items="faqItems" />
      </div>
    </section>

    <InquirySection
      source="Leistungen E-Commerce – Abschluss"
      title="Lassen Sie uns über Ihren Shop sprechen."
      text="Erzählen Sie mir, was Sie verkaufen und an wen. Im kostenlosen Erstgespräch klären wir Plattform und Umfang – danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
