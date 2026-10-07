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

const featured = REFERENCES[0]!
const wordpressRefs = REFERENCES.filter(r => r.tool === 'WordPress')
const customRefs = REFERENCES.filter(r => r.tool !== 'WordPress')
</script>

<template>
  <div>
    <!-- Aufmacher -->
    <section class="border-b border-hair" aria-labelledby="cover-title">
      <div class="wrap pb-20 pt-12 md:pb-28 md:pt-14">
        <h1 id="cover-title" class="t-display max-w-[16ch] text-[2.875rem] sm:text-7xl lg:max-w-none lg:text-[5.5rem] xl:text-[6rem]">
          Webdesign aus Dortmund, <br class="hidden lg:block"><em>mit Sorgfalt</em> gemacht.
        </h1>
        <div class="mt-10 grid gap-14 md:mt-14 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-6">
            <p class="t-lead max-w-xl text-ink-soft">
              Schnelle, mobile und barrierefreie Websites für Betriebe im Ruhrgebiet –
              von einem Ansprechpartner, <span class="text-ink">zum Festpreis ab 800 €</span>.
            </p>
            <div id="anfrage" class="mt-9 max-w-xl scroll-mt-28">
              <QuickInquiry variant="inline" source="Startseite – Aufmacher" />
            </div>
            <FactLine class="mt-12 max-w-xl" />
          </div>
          <figure class="lg:col-span-6 lg:pl-6">
            <ReferenceShots :reference="featured" eager reveal />
            <figcaption class="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-hair pt-4 text-sm">
              <span class="text-ink-soft"><span class="font-semibold text-ink">{{ featured.name }}</span> · {{ featured.industry }}, {{ featured.location }}</span>
              <NuxtLink :to="`/referenzen/${featured.slug}`" class="link inline-flex min-h-11 items-center gap-1 font-medium">
                Zur Fallstudie
                <span class="sr-only">{{ featured.name }}</span>
                <AppIcon name="arrow-right" class="h-4 w-4" />
              </NuxtLink>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Referenzen -->
    <section class="section" aria-labelledby="refs-title">
      <div class="wrap">
        <SectionHead
          id="refs-title"
          title="Websites, die schon für ihre Betriebe arbeiten."
          intro="Ein Studio, ein Fotografenpaar, ein Transportunternehmen – drei Beispiele aus den letzten Jahren. Alle Seiten sind online, klicken Sie ruhig hinein."
        >
          <NuxtLink to="/referenzen" class="btn btn-outline">
            Alle Referenzen
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </SectionHead>
        <ReferenceShowcase class="mt-14" />
      </div>
    </section>

    <!-- Leistungen & Preise -->
    <section class="section bg-stone" aria-labelledby="prices-title">
      <div class="wrap">
        <SectionHead
          id="prices-title"
          intro="Jedes Projekt beginnt mit einem kostenlosen Erstgespräch. Danach bekommen Sie ein Angebot zum Festpreis. Was dort steht, zahlen Sie – nicht mehr."
        >
          <template #title>Was es kostet – <em>vorher</em>, nicht hinterher.</template>
          <NuxtLink to="/preise" class="btn btn-outline">
            Preise im Detail
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </SectionHead>
        <ServiceTable class="mt-12" />
      </div>
    </section>

    <!-- Das passende Werkzeug -->
    <section class="section" aria-labelledby="tools-title">
      <div class="wrap">
        <SectionHead
          id="tools-title"
          title="Das passende Werkzeug für Ihren Betrieb."
          intro="Nicht jede Website braucht dasselbe. Im Erstgespräch finden wir heraus, was zu Ihnen passt – und ich sage Ihnen ehrlich, wenn die einfachere Lösung reicht."
        />
        <div class="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair md:grid-cols-2">
          <div class="bg-paper p-8 md:p-12">
            <h3 class="font-serif text-4xl leading-none md:text-5xl" style="font-weight: 500; font-variation-settings: 'opsz' 72;">WordPress</h3>
            <p class="t-lead mt-4 text-ink-soft">Für alle, die selbst pflegen wollen.</p>
            <CheckList
              class="mt-8"
              :items="[
                'Texte, Bilder und Angebote ohne Technikkenntnisse ändern',
                'Bewährt, verbreitet, viele Erweiterungen',
                'Ideal für Firmenwebsites, Blogs und Shops mit WooCommerce',
              ]"
            />
            <p class="mt-10 border-t border-hair pt-5 text-sm text-ink-soft">
              So gebaut:
              <template v-for="(r, i) in wordpressRefs" :key="r.slug">
                <NuxtLink :to="`/referenzen/${r.slug}`" class="link text-ink">{{ r.name }}</NuxtLink><template v-if="i < wordpressRefs.length - 1">, </template>
              </template>
            </p>
          </div>
          <div class="bg-paper p-8 md:p-12">
            <h3 class="font-serif text-4xl italic leading-none md:text-5xl" style="font-weight: 500; font-variation-settings: 'opsz' 72;">Individuell</h3>
            <p class="t-lead mt-4 text-ink-soft">Für maximale Geschwindigkeit und eigene Ideen.</p>
            <CheckList
              class="mt-8"
              :items="[
                'Von Grund auf entwickelt mit Nuxt und Vue – kein Baukasten',
                'Lädt sehr schnell – auch bei schwachem Netz unterwegs',
                'Ideal für besondere Abläufe, Portale und Webanwendungen',
              ]"
            />
            <p class="mt-10 border-t border-hair pt-5 text-sm text-ink-soft">
              So gebaut:
              <template v-for="r in customRefs" :key="r.slug">
                <NuxtLink :to="`/referenzen/${r.slug}`" class="link text-ink">{{ r.name }}</NuxtLink>
              </template>
              und diese Website hier.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ablauf -->
    <section class="section bg-stone" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="So läuft die Zusammenarbeit."
          intro="Fünf Schritte, keine Überraschungen. Sie wissen jederzeit, wo Ihr Projekt steht."
        />
        <ProcessFixture class="mt-12" />
      </div>
    </section>

    <!-- In eigener Sache -->
    <section class="section" aria-labelledby="intro-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="intro-title" class="t-headline">Ein Ansprechpartner. <em>Von Anfang bis Ende.</em></h2>
        </div>
        <div class="max-w-text lg:col-span-6 lg:col-start-7">
          <p class="font-serif text-2xl leading-snug md:text-[1.75rem]" style="font-weight: 400; font-variation-settings: 'opsz' 36;">
            Ich bin {{ CONTACT.owner }} und baue seit {{ CONTACT.since }} Websites für Betriebe aus dem Ruhrgebiet.
            Bei mir landen Sie nicht in einer Agentur-Warteschleife.
          </p>
          <p class="mt-6 text-ink-soft">
            Ich berate Sie, gestalte, entwickle und bin auch nach dem Launch für Sie da. Mir ist wichtig, dass Ihre Website für alle funktioniert – auf dem alten Smartphone genauso wie mit Screenreader oder Tastatur.
            Deshalb baue ich barrierefrei nach WCAG 2.2 AA. Das ist seit dem Barrierefreiheitsstärkungsgesetz für viele Betriebe ohnehin Pflicht – und es macht Ihre Seite für alle Besucher besser.
          </p>
          <NuxtLink to="/ueber-mich" class="link mt-8 inline-flex min-h-11 items-center gap-2 font-medium">
            Mehr über mich und meine Arbeitsweise
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Standorte -->
    <section class="section-tight border-y border-hair" aria-labelledby="cities-title">
      <div class="wrap grid gap-8 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-4">
          <h2 id="cities-title" class="font-serif text-3xl leading-tight" style="font-weight: 500;">Für Betriebe im ganzen Ruhrgebiet.</h2>
        </div>
        <ul class="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
          <li v-for="city in CITIES" :key="city.to" class="border-t border-hair">
            <NuxtLink :to="city.to" class="group flex min-h-14 items-center justify-between gap-2 py-3">
              <span>
                <span class="sr-only">Webdesign </span>
                <span class="font-serif text-xl" style="font-weight: 500;">{{ city.name }}</span>
              </span>
              <AppIcon name="arrow-right" class="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Häufige Fragen -->
    <section class="section" aria-labelledby="faq-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 id="faq-title" class="t-headline">Häufige Fragen</h2>
          <p class="mt-5 text-ink-soft">
            Ihre Frage ist nicht dabei? Schreiben Sie mir an
            <a :href="`mailto:${CONTACT.email}`" class="link text-ink">{{ CONTACT.email }}</a>.
          </p>
        </div>
        <FaqList class="lg:col-span-8" :items="faqItems" />
      </div>
    </section>

    <InquirySection source="Startseite – Abschluss" />
  </div>
</template>
