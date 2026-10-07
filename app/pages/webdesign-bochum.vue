<script setup lang="ts">
useSeoMeta({
  title: 'Webdesign Bochum | Prestige Webdesign – Webagentur für Bochum',
  ogTitle: 'Webdesign Bochum | Prestige Webdesign – Webagentur für Bochum',
  description: 'Webdesign Bochum: Professionelle Websites für Bochumer Unternehmen ab 800 € Festpreis. SEO & Online-Shops. Jetzt kostenloses Erstgespräch anfragen!',
  ogDescription: 'Webdesign Bochum: Professionelle Websites für Bochumer Unternehmen ab 800 € Festpreis. SEO & Online-Shops. Jetzt kostenloses Erstgespräch anfragen!',
  keywords: 'Webdesign Bochum, Webagentur Bochum, Website Bochum, SEO Bochum, Webentwicklung Bochum, Digital Marketing Bochum',
  ogImage: 'https://prestige-webdesign.de/images/og-default.png',
  robots: 'index, follow',
})

const localPoints = [
  'Websites, die zu Ihrem Betrieb in Bochum passen',
  'SEO für lokale Suchanfragen in Bochum',
  'Schnell und sauber auf allen Geräten',
  'Klare Wege zur Anfrage',
  'Einfache, verständliche Benutzerführung',
  'Auf Wunsch Wartung und Weiterentwicklung nach dem Launch',
]

const reasons = [
  { title: 'Aus der Nachbarschaft', text: 'Ich sitze in Dortmund, eine S-Bahn-Fahrt von Bochum entfernt, und arbeite für Betriebe im ganzen Ruhrgebiet.' },
  { title: 'Das passende Werkzeug', text: 'WordPress, wenn Sie selbst pflegen wollen. Individuell entwickelt, wenn Tempo und eigene Ideen zählen. Ich sage Ihnen ehrlich, was reicht.' },
  { title: 'Auf Anfragen ausgerichtet', text: 'Nicht Schönheit um ihrer selbst willen: Jede Seite hat ein Ziel – dass Bochumer Kunden Sie kontaktieren.' },
  { title: 'Auch nach dem Launch da', text: 'Updates, Erweiterungen und Support – auf Wunsch als Wartungspaket ab 79 € im Monat.' },
  { title: 'Klare Kommunikation', text: 'Ein fester Ansprechpartner, ein Festpreis vorab, Zwischenstände zum Anschauen: Sie wissen immer, wo Sie stehen.' },
  { title: 'Barrierefrei gebaut', text: 'Nach WCAG 2.2 AA – gut für alle Besucher und für viele Betriebe seit dem Barrierefreiheitsstärkungsgesetz ohnehin Pflicht.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Webdesign Bochum"
      lead="Websites für Bochumer Unternehmen – vom Startup an der Uni bis zum Dienstleister in der Innenstadt. Ein Ansprechpartner aus dem Revier, der gestaltet und entwickelt, zum Festpreis ab 800 €."
    >
      <a href="#anfrage-abschluss" class="btn btn-primary">Erstgespräch anfragen</a>
      <NuxtLink to="/referenzen" class="btn btn-outline">Referenzen ansehen</NuxtLink>
    </PageCover>

    <!-- warum Bochum -->
    <section class="section" aria-labelledby="local-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="local-title" class="t-headline">Webdesign Bochum: Digital durchstarten in der Wissensstadt</h2>
        </div>
        <div class="max-w-text lg:col-span-7">
          <p class="t-lead">
            Bochum ist ein Zentrum von Bildung und Kultur – von der Ruhr-Universität über das Bermudadreieck bis zum Starlight Express.
            Diese Dynamik braucht Websites, die genauso lebendig wirken wie die Stadt.
          </p>
          <p class="mt-5 text-ink-soft">
            Die Bochumer Wirtschaft ist vielfältig: Einzelhandel in der Innenstadt, junge Tech-Firmen, spezialisierte Dienstleister.
            Jeder dieser Betriebe braucht eine Online-Präsenz, die zeigt, was ihn ausmacht – und aus Besuchern Kunden macht.
            Genau darauf baue ich Ihre Website aus.
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
          title="Webdesign & Digital-Services für Bochum"
          intro="Websites, Online-Shops, Webanwendungen, SEO und Wartung für Bochumer Unternehmen – mit Preisanker vorab und einem Festpreis nach dem kostenlosen Erstgespräch."
        >
          <NuxtLink to="/preise" class="btn btn-outline">Preise im Detail</NuxtLink>
        </SectionHead>
        <ServiceTable class="mt-10" />
      </div>
    </section>

    <!-- was Sie bekommen -->
    <section class="section" aria-labelledby="reasons-title">
      <div class="wrap">
        <SectionHead
          id="reasons-title"
          title="Was Bochumer Unternehmen von mir bekommen"
          intro="Kein Agentur-Apparat, sondern ein Webdesigner, der Ihr Projekt vom ersten Gespräch bis zum Launch selbst betreut."
        />
        <div class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in reasons" :key="item.title" class="border-t border-ink pt-5">
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

    <CityKeywordLinks city-slug="bochum" city-name="Bochum" />

    <InquirySection
      source="Webdesign Bochum – Abschluss"
      title="Ihre Website für Bochum."
      text="Erzählen Sie mir kurz, worum es geht. Das Erstgespräch ist kostenlos und unverbindlich – danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
