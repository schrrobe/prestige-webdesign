<script setup lang="ts">
useSeoMeta({
  title: 'Webdesign Unna | Prestige Webdesign – Webagentur für Unna',
  ogTitle: 'Webdesign Unna | Prestige Webdesign – Webagentur für Unna',
  description: 'Webdesign Unna: Moderne Websites, lokale SEO und digitale Lösungen für Unternehmen in Unna und dem Kreis Unna. Klar strukturiert, barrierearm, Festpreis ab 800 €.',
  ogDescription: 'Webdesign Unna für Unternehmen, Dienstleister und regionale Anbieter. Professionelle Websites mit lokaler SEO und klarer Nutzerführung.',
  keywords: 'Webdesign Unna, Webagentur Unna, Website Unna, SEO Unna, Webentwicklung Unna, Kreis Unna Webdesign',
  ogImage: 'https://prestige-webdesign.de/images/og-default.png',
  robots: 'index, follow',
})

const localPoints = [
  'Lokale SEO für Suchanfragen in Unna und dem Kreis Unna',
  'Barrierefreie Struktur mit klaren Inhalten und guter Lesbarkeit',
  'Mobile Nutzerführung für schnelle Kontaktwege',
  'Gestaltung passend zu Ihrem Betrieb statt austauschbarer Vorlagen',
  'Technisch solide Basis für SEO und spätere Erweiterungen',
  'Aufgebaut entlang echter Kundenfragen',
]

const advantages = [
  { title: 'Regionale Auffindbarkeit', text: 'Sie werden dort gefunden, wo Kunden in Unna und Umgebung aktiv nach Leistungen suchen.' },
  { title: 'Klare Positionierung', text: 'Ihre Website erklärt Leistungen, Schwerpunkte und Vorteile so, dass Besucher schnell verstehen, warum sie mit Ihnen arbeiten sollten.' },
  { title: 'Bessere Nutzererfahrung', text: 'Eine saubere, barrierefreie Struktur verbessert Lesbarkeit, Orientierung und die Bedienung am Smartphone.' },
  { title: 'Technische Stabilität', text: 'Schnelle Ladezeiten, sauberer Code und eine SEO-Grundlage sorgen dafür, dass die Website auch langfristig trägt.' },
  { title: 'Mehr passende Kontakte', text: 'Klare Inhalte und eindeutige Kontaktwege machen aus Aufmerksamkeit eher eine konkrete Anfrage.' },
  { title: 'Bereit für später', text: 'Ich baue Websites so, dass sie später erweitert, verbessert oder um neue Funktionen ergänzt werden können.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Webdesign Unna"
      lead="Websites für Betriebe in Unna und im Kreis Unna – von der Innenstadt über Massen bis Kamen und Holzwickede. Ein Ansprechpartner aus der Nachbarstadt Dortmund, zum Festpreis ab 800 €."
    >
      <a href="#anfrage-abschluss" class="btn btn-signal">Erstgespräch anfragen</a>
      <NuxtLink to="/referenzen" class="btn btn-outline">Referenzen ansehen</NuxtLink>
    </PageCover>

    <!-- Taktik: warum Unna -->
    <section class="section" data-rubric="Taktik" aria-labelledby="local-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="local-title" class="t-headline">Webdesign in Unna mit Fokus auf Sichtbarkeit und Vertrauen</h2>
        </div>
        <div class="max-w-text lg:col-span-7">
          <p class="t-lead">
            In Unna suchen viele Kunden gezielt nach Anbietern aus der Region. Eine Website muss deshalb mehr als gut aussehen:
            Sie soll schnell Orientierung geben, Leistungen klar erklären und auf dem Smartphone ohne Hürden funktionieren.
          </p>
          <p class="mt-5 text-ink-soft">
            Besonders für Handwerk, Dienstleister, Beratungen, Praxen und lokale Fachbetriebe ist ein präziser Online-Auftritt entscheidend.
            Ich baue Websites, die Inhalte verständlich ordnen und Ihren Betrieb in Unna professionell zeigen.
          </p>
          <CheckList class="mt-8" :items="localPoints" columns />
        </div>
      </div>
    </section>

    <!-- Tabelle: Leistungen & Preise -->
    <section class="section bg-sheet" data-rubric="Tabelle" aria-labelledby="prices-title">
      <div class="wrap">
        <SectionHead
          id="prices-title"
          title="Digitale Leistungen für Unternehmen in Unna"
          intro="Moderne Unternehmenswebsites, SEO für den Kreis Unna, Webanwendungen und Pflege – mit Preisanker vorab und einem Festpreis nach dem kostenlosen Erstgespräch."
        >
          <NuxtLink to="/preise" class="btn btn-outline">Preise im Detail</NuxtLink>
        </SectionHead>
        <ServiceTable class="mt-10" />
      </div>
    </section>

    <!-- Taktik: Vorteile -->
    <section class="section" data-rubric="Taktik" aria-labelledby="advantages-title">
      <div class="wrap">
        <SectionHead
          id="advantages-title"
          title="Ihre Vorteile mit einer starken Website in Unna"
          intro="Eine Website, die zu Ihrem Betrieb passt, arbeitet jeden Tag mit – für Kunden aus Unna, Kamen, Holzwickede und dem ganzen Kreis."
        />
        <div class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in advantages" :key="item.title" class="border-t-2 border-ink pt-5">
            <h3 class="t-title">{{ item.title }}</h3>
            <p class="mt-3 text-ink-soft">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Heimspiele: Referenzen -->
    <section class="section bg-sheet" data-rubric="Heimspiele" aria-labelledby="refs-title">
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

    <!-- Spielplan: Ablauf -->
    <section class="section" data-rubric="Spielplan" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="So läuft Ihr Projekt ab."
          intro="Fünf Schritte, keine Überraschungen. Sie wissen jederzeit, wo Ihr Projekt steht."
        />
        <ProcessFixture class="mt-10" />
      </div>
    </section>

    <CityKeywordLinks city-slug="unna" city-name="Unna" />

    <InquirySection
      source="Webdesign Unna – Anpfiff"
      title="Ihre Website für Unna."
      text="Erzählen Sie mir kurz, worum es geht. Das Erstgespräch ist kostenlos und unverbindlich – danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
