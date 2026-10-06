<script setup lang="ts">
import { CITIES, CONTACT } from '~/data/site'
import { REFERENCES } from '~/data/references'

const faqItems = [
  {
    question: 'Was kostet eine Website bei Ihnen?',
    answer: 'Eine Unternehmenswebsite beginnt bei 800 €, Online-Shops liegen zwischen 2.500 und 15.000 €. Nach dem kostenlosen Erstgespräch bekommen Sie ein schriftliches Angebot zum Festpreis – ohne spätere Nachforderungen.',
  },
  {
    question: 'Was bringt professionelles Webdesign für Google Rankings?',
    answer: 'Professionelles Webdesign verbessert Struktur, Ladezeit, mobile Nutzbarkeit und interne Verlinkung. Damit wird Ihre Website für Nutzer hilfreicher und für Suchmaschinen leichter verständlich.',
  },
  {
    question: 'Kann ich meine Website später selbst bearbeiten?',
    answer: 'Ja, wenn Sie das möchten. Mit WordPress pflegen Sie Texte, Bilder und Angebote selbst – ich richte alles so ein, dass es ohne Technikkenntnisse funktioniert, und zeige es Ihnen bei der Übergabe.',
  },
  {
    question: 'Wie lange dauert SEO, bis Ergebnisse sichtbar werden?',
    answer: 'Erste Verbesserungen bei Technik, Indexierung und lokalen Suchanfragen sind oft früher sichtbar. Nachhaltige Rankings für umkämpfte Begriffe entwickeln sich in der Regel über mehrere Monate.',
  },
  {
    question: 'Warum sind lokale Standortseiten wichtig?',
    answer: 'Standortseiten helfen Google, Ihren regionalen Bezug klar zu erkennen. Gleichzeitig beantworten sie Fragen von Interessenten aus Dortmund, Bochum, Essen, Bottrop und dem Kreis Unna gezielter.',
  },
  {
    question: 'Ist meine neue Website barrierefrei?',
    answer: 'Ja. Ich baue nach WCAG 2.2 AA: ausreichende Kontraste, vollständige Tastaturbedienung, saubere Überschriften und Formulare, die Screenreader verstehen. Seit Juni 2025 verlangt das Barrierefreiheitsstärkungsgesetz das für viele Online-Angebote.',
  },
]

useSeoMeta({
  title: 'Webdesign Dortmund & Ruhrgebiet – Websites zum Festpreis ab 800 € | Prestige Webdesign',
  description: 'Websites, Online-Shops und SEO für Betriebe in Dortmund, Bochum, Essen & Umgebung. Schnell, mobil, barrierefrei – zum Festpreis ab 800 €. Antwort in 24 h, Erstgespräch kostenlos.',
  ogTitle: 'Prestige Webdesign – Webdesign aus Dortmund fürs Ruhrgebiet',
  ogDescription: 'Ein Ansprechpartner für Ihre Website: Design und Entwicklung aus einer Hand, zum Festpreis ab 800 €.',
})

useHead({
  script: [
    {
      key: 'homepage-faq-schema',
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

const wordpressRefs = REFERENCES.filter(r => r.tool === 'WordPress')
const customRefs = REFERENCES.filter(r => r.tool !== 'WordPress')
</script>

<template>
  <div>
    <!-- Titelseite -->
    <section class="on-field relative" data-rubric="Titelseite" aria-labelledby="cover-title">
      <div class="wrap grid gap-10 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-7 lg:pb-16">
          <h1 id="cover-title" class="t-display text-[3.5rem] sm:text-[5.5rem] lg:text-[5.25rem] xl:text-[6rem]">
            Webdesign<br>
            aus Dortmund<br>
            fürs <span class="text-signal">Ruhrgebiet.</span>
          </h1>
          <p class="t-lead mt-7 max-w-xl">
            Schnelle, mobile und barrierefreie Websites für Betriebe im Revier.
            Ein Ansprechpartner von der Idee bis zum Launch – <strong>zum Festpreis ab 800 €.</strong>
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row lg:hidden">
            <a href="#anfrage" class="btn btn-signal">Erstgespräch anfragen</a>
            <NuxtLink to="/referenzen" class="btn btn-outline">Referenzen ansehen</NuxtLink>
          </div>
          <ScoreBoard class="mt-10 lg:mt-14" />
        </div>
        <div id="anfrage" class="relative z-10 -mb-20 scroll-mt-24 lg:col-span-5 lg:-mb-28 lg:self-end">
          <TicketForm source="Startseite – Titelseite" />
        </div>
      </div>
    </section>

    <!-- Heimspiele: Referenzen -->
    <section class="pb-16 pt-36 md:pb-24 lg:pt-44" data-rubric="Heimspiele" aria-labelledby="refs-title">
      <div class="wrap">
        <SectionHead
          id="refs-title"
          title="Websites, die schon für ihre Betriebe arbeiten."
          intro="Ein Studio, ein Fotografenpaar, ein Transportunternehmen – drei Beispiele aus den letzten Jahren. Klicken Sie ruhig rein, alle Seiten sind online."
          :rule="false"
        >
          <NuxtLink to="/referenzen" class="btn btn-outline">Alle Referenzen</NuxtLink>
        </SectionHead>
        <ReferenceShowcase class="mt-12" />
      </div>
    </section>

    <!-- Tabelle: Leistungen & Preise -->
    <section class="section bg-sheet" data-rubric="Tabelle" aria-labelledby="prices-title">
      <div class="wrap">
        <SectionHead
          id="prices-title"
          title="Was es kostet – vorher, nicht hinterher."
          intro="Jedes Projekt beginnt mit einem kostenlosen Erstgespräch. Danach bekommen Sie ein Angebot zum Festpreis. Was dort steht, zahlen Sie – nicht mehr."
        >
          <NuxtLink to="/preise" class="btn btn-outline">Preise im Detail</NuxtLink>
        </SectionHead>
        <ServiceTable class="mt-10" />
      </div>
    </section>

    <!-- Taktik: das passende Werkzeug -->
    <section class="section" data-rubric="Taktik" aria-labelledby="tools-title">
      <div class="wrap">
        <SectionHead
          id="tools-title"
          title="Das passende Werkzeug für Ihren Betrieb."
          intro="Nicht jede Website braucht dasselbe. Im Erstgespräch finden wir heraus, was zu Ihnen passt – und ich sage Ihnen ehrlich, wenn die einfachere Lösung reicht."
        />
        <div class="mt-12 grid border-y-2 border-ink md:grid-cols-2">
          <div class="py-8 md:py-10 md:pr-10">
            <h3 class="text-4xl uppercase leading-none md:text-5xl" style="font-stretch: 62%; font-weight: 880;">WordPress</h3>
            <p class="t-title mt-3 text-ink-soft">Für alle, die selbst pflegen wollen.</p>
            <CheckList
              class="mt-6"
              :items="[
                'Texte, Bilder und Angebote ohne Technikkenntnisse ändern',
                'Bewährt, verbreitet, viele Erweiterungen',
                'Ideal für Firmenwebsites, Blogs und Shops mit WooCommerce',
              ]"
            />
            <p class="mt-8 border-t border-ink/25 pt-4 text-sm font-semibold text-ink-soft">
              So gebaut:
              <template v-for="(r, i) in wordpressRefs" :key="r.slug">
                <NuxtLink :to="`/referenzen/${r.slug}`" class="link text-ink">{{ r.name }}</NuxtLink><template v-if="i < wordpressRefs.length - 1">, </template>
              </template>
            </p>
          </div>
          <div class="on-ink p-6 md:p-10">
            <h3 class="text-4xl uppercase leading-none md:text-5xl" style="font-stretch: 62%; font-weight: 880;">Individuell</h3>
            <p class="t-title mt-3 opacity-80">Für maximale Geschwindigkeit und eigene Ideen.</p>
            <CheckList
              class="mt-6"
              :items="[
                'Von Grund auf entwickelt mit Nuxt und Vue – kein Baukasten',
                'Lädt sehr schnell – auch bei schwachem Netz unterwegs',
                'Ideal für besondere Abläufe, Portale und Webanwendungen',
              ]"
            />
            <p class="mt-8 border-t border-current/25 pt-4 text-sm font-semibold opacity-90">
              So gebaut:
              <template v-for="r in customRefs" :key="r.slug">
                <NuxtLink :to="`/referenzen/${r.slug}`" class="link">{{ r.name }}</NuxtLink>
              </template>
              und diese Website hier.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Spielplan: Ablauf -->
    <section class="section bg-sheet" data-rubric="Spielplan" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="So läuft’s ab."
          intro="Fünf Schritte, keine Überraschungen. Sie wissen jederzeit, wo Ihr Projekt steht."
        />
        <ProcessFixture class="mt-10" />
      </div>
    </section>

    <!-- Vorwort: in eigener Sache -->
    <section class="section" data-rubric="Vorwort" aria-labelledby="intro-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="intro-title" class="t-headline">Ein Ansprechpartner. Von Anfang bis Ende.</h2>
        </div>
        <div class="max-w-text lg:col-span-7">
          <p class="t-lead">
            Ich bin {{ CONTACT.owner }} und baue seit {{ CONTACT.since }} Websites für Betriebe aus dem Ruhrgebiet.
            Bei mir landen Sie nicht in einer Agentur-Warteschleife: Ich berate Sie, gestalte, entwickle und bin auch nach dem Launch für Sie da.
          </p>
          <p class="mt-5 text-ink-soft">
            Mir ist wichtig, dass Ihre Website für alle funktioniert – auf dem alten Smartphone genauso wie mit Screenreader oder Tastatur.
            Deshalb baue ich barrierefrei nach WCAG 2.2 AA. Das ist seit dem Barrierefreiheitsstärkungsgesetz für viele Betriebe ohnehin Pflicht – und es macht Ihre Seite für alle Besucher besser.
          </p>
          <NuxtLink to="/ueber-mich" class="link mt-6 inline-flex min-h-11 items-center gap-2 text-lg font-bold">
            Mehr über mich und meine Arbeitsweise
            <AppIcon name="arrow-right" class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Auswärts: Standorte -->
    <section class="section-tight border-y-2 border-ink" data-rubric="Auswärts" aria-labelledby="cities-title">
      <div class="wrap grid gap-8 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-4">
          <h2 id="cities-title" class="t-title">Im ganzen Revier für Sie da.</h2>
          <p class="mt-2 text-ink-soft">Für Betriebe in Dortmund und dem ganzen Ruhrgebiet.</p>
        </div>
        <ul class="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
          <li v-for="city in CITIES" :key="city.to" class="border-t border-ink/25">
            <NuxtLink :to="city.to" class="group flex min-h-14 items-center justify-between gap-2 py-3">
              <span>
                <span class="sr-only">Webdesign </span>
                <span class="block text-2xl uppercase leading-none" style="font-stretch: 62%; font-weight: 860;">{{ city.name }}</span>
              </span>
              <AppIcon name="arrow-right" class="h-5 w-5 text-signal-ink transition-transform duration-200 group-hover:translate-x-1" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Fragen -->
    <section class="section" data-rubric="Fragen" aria-labelledby="faq-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="faq-title" class="t-headline">Häufige Fragen</h2>
          <p class="mt-4 text-ink-soft">
            Ihre Frage ist nicht dabei? Schreiben Sie mir an
            <a :href="`mailto:${CONTACT.email}`" class="link font-semibold text-ink">{{ CONTACT.email }}</a>.
          </p>
        </div>
        <FaqList class="lg:col-span-8" :items="faqItems" />
      </div>
    </section>

    <KickoffSection source="Startseite – Anpfiff" />
  </div>
</template>
