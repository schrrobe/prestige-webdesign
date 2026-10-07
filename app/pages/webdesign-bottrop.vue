<script setup lang="ts">
useSeoMeta({
  title: 'Webdesign Bottrop | Prestige Webdesign – Webagentur für Bottrop',
  ogTitle: 'Webdesign Bottrop | Prestige Webdesign – Webagentur für Bottrop',
  description: 'Webdesign Bottrop: Professionelle Websites, lokale SEO und digitale Lösungen für Unternehmen in Bottrop. Barrierearm, mobil und zum Festpreis ab 800 €.',
  ogDescription: 'Webdesign Bottrop für Unternehmen, Dienstleister und Handwerk. Moderne Websites mit lokaler SEO, klarer Nutzerführung und Festpreis ab 800 €.',
  keywords: 'Webdesign Bottrop, Webagentur Bottrop, Website Bottrop, SEO Bottrop, Webentwicklung Bottrop, lokale SEO Bottrop',
  ogImage: 'https://prestige-webdesign.de/images/og-default.png',
  robots: 'index, follow',
})

const localPoints = [
  'Lokale Sichtbarkeit für Suchanfragen in Bottrop und Umgebung',
  'Klare Nutzerführung für mehr Anfragen',
  'Barrierefrei und mobil nutzbar auf allen Geräten',
  'Übersichtliche Struktur statt überladener Seiten',
  'SEO-Basis für relevante lokale Suchbegriffe',
  'Langfristig wartbare technische Umsetzung',
]

const seoEffects = [
  { title: 'Mehr lokale Reichweite', text: 'Ihre Website wird dort sichtbar, wo Kunden aus Bottrop und der Region aktiv nach Leistungen suchen.' },
  { title: 'Mehr Vertrauen', text: 'Eine moderne, gut strukturierte Website wirkt professionell und macht die Kontaktaufnahme leichter.' },
  { title: 'Bessere Anfragen', text: 'Klare Inhalte und eine gezielte Nutzerführung bringen Interessenten, die wirklich zu Ihnen passen.' },
  { title: 'Gemacht fürs Smartphone', text: 'Viele lokale Suchen passieren unterwegs. Deshalb achte ich konsequent auf Lesbarkeit und Bedienbarkeit am Handy.' },
  { title: 'Saubere technische Basis', text: 'Schnelle Ladezeiten, strukturierte Inhalte und barrierefreie Bedienung helfen Besuchern und Suchmaschinen zugleich.' },
  { title: 'Langfristiger Nutzen', text: 'Eine gute Website unterstützt Vertrieb und Auftritt dauerhaft und lässt sich erweitern, wenn Ihr Betrieb wächst.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Webdesign Bottrop"
      lead="Websites für Betriebe in Bottrop – ob Innenstadt, Kirchhellen oder Gewerbegebiet. Ich gestalte und entwickle Auftritte, die Vertrauen schaffen und im Alltag funktionieren, zum Festpreis ab 800 €."
    >
      <a href="#anfrage-abschluss" class="btn btn-primary">Erstgespräch anfragen</a>
      <NuxtLink to="/referenzen" class="btn btn-outline">Referenzen ansehen</NuxtLink>
    </PageCover>

    <!-- warum Bottrop -->
    <section class="section" aria-labelledby="local-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="local-title" class="t-headline">Warum professionelles Webdesign in Bottrop so wichtig ist</h2>
        </div>
        <div class="max-w-text lg:col-span-7">
          <p class="t-lead">
            In Bottrop zählen persönliche Empfehlungen, lokale Sichtbarkeit und ein glaubwürdiger Auftritt besonders viel.
            Ihre Website ist oft der erste Kontakt mit neuen Kunden – sie sollte sofort zeigen, wer Sie sind und wie man Sie erreicht.
          </p>
          <p class="mt-5 text-ink-soft">
            Gerade für Dienstleister, Handwerksbetriebe, Praxen und den Mittelstand macht eine moderne Website den Unterschied zwischen
            einem kurzen Besuch und einer echten Anfrage. Ich baue Websites, die Ihre Inhalte klar vermitteln und technisch solide sind.
          </p>
          <CheckList class="mt-8" :items="localPoints" columns />
        </div>
      </div>
    </section>

    <!-- Leistungen & Preise -->
    <section class="section bg-stone" aria-labelledby="prices-title">
      <div class="wrap">
        <SectionHead
          id="prices-title"
          title="Leistungen für Unternehmen in Bottrop"
          intro="Websites mit klarer Struktur, lokale SEO für Bottrop, Online-Shops und Wartung – mit Preisanker vorab und einem Festpreis nach dem kostenlosen Erstgespräch."
        >
          <NuxtLink to="/preise" class="btn btn-outline">Preise im Detail</NuxtLink>
        </SectionHead>
        <ServiceTable class="mt-10" />
      </div>
    </section>

    <!-- lokale SEO -->
    <section class="section" aria-labelledby="seo-title">
      <div class="wrap">
        <SectionHead
          id="seo-title"
          title="Was SEO in Bottrop für Ihr Unternehmen bewirken kann"
          intro="Wer „Webdesign Bottrop“ oder Ihre Leistung sucht, will einen Anbieter aus der Nähe. Eine lokal optimierte Website sorgt dafür, dass Sie dabei auftauchen."
        />
        <div class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in seoEffects" :key="item.title" class="border-t border-ink pt-5">
            <h3 class="t-title">{{ item.title }}</h3>
            <p class="mt-3 text-ink-soft">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Referenzen -->
    <section class="section bg-stone" aria-labelledby="refs-title">
      <div class="wrap">
        <SectionHead
          id="refs-title"
          title="Websites aus dem Revier."
          intro="Ein Studio, ein Fotografenpaar, ein Transportunternehmen – alle aus Dortmund und NRW, alle online. Klicken Sie ruhig rein."
        >
          <NuxtLink to="/referenzen" class="btn btn-outline">Alle Referenzen</NuxtLink>
        </SectionHead>
        <ReferenceShowcase class="mt-12" />
      </div>
    </section>

    <!-- Ablauf -->
    <section class="section" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="So läuft Ihr Projekt ab."
          intro="Fünf Schritte, keine Überraschungen. Sie wissen jederzeit, wo Ihr Projekt steht."
        />
        <ProcessFixture class="mt-10" />
      </div>
    </section>

    <CityKeywordLinks city-slug="bottrop" city-name="Bottrop" />

    <InquirySection
      source="Webdesign Bottrop – Abschluss"
      title="Ihre Website für Bottrop."
      text="Erzählen Sie mir kurz, worum es geht. Das Erstgespräch ist kostenlos und unverbindlich – danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
