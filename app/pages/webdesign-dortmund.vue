<script setup lang="ts">
useSeoMeta({
  title: 'Webdesign Dortmund – Websites, SEO & E-Commerce | Prestige Webdesign',
  ogTitle: 'Webdesign Dortmund – Websites, SEO & E-Commerce | Prestige Webdesign',
  description: 'Webdesign Dortmund: Moderne Websites für Dortmunder Unternehmen ab 800 € Festpreis. SEO, E-Commerce, Wartung – vom Webdesigner direkt aus Dortmund.',
  ogDescription: 'Webdesign Dortmund: Moderne Websites für Dortmunder Unternehmen ab 800 € Festpreis. SEO, E-Commerce, Wartung – vom Webdesigner direkt aus Dortmund.',
  keywords: 'Webdesign Dortmund, Webagentur Dortmund, Website Dortmund, SEO Dortmund, Webentwicklung Dortmund, Online Marketing Dortmund',
  ogImage: 'https://prestige-webdesign.de/images/og-default.png',
  robots: 'index, follow',
})

const localPoints = [
  'Websites, die bei Suchen in Dortmund gefunden werden',
  'SEO-Grundlage für lokale Suchanfragen',
  'Mobil zuerst gebaut – für Kunden, die unterwegs suchen',
  'Klare Wege zur Anfrage statt Selbstzweck-Design',
  'Benutzerfreundlich und barrierefrei nach WCAG 2.2 AA',
  'Wartung und Support auf Wunsch – per Paket ab 79 € im Monat',
]

const localSeo = [
  { title: 'Höhere Sichtbarkeit', text: 'Ihre Website wird Dortmunder Kunden angezeigt, die aktiv nach Ihren Leistungen oder Produkten suchen.' },
  { title: 'Passendere Anfragen', text: 'Lokale Optimierung bringt Interessenten aus Ihrer Umgebung, die wirklich etwas brauchen – nicht nur Klicks.' },
  { title: 'Wettbewerbsvorteil', text: 'Viele Betriebe in Dortmund kümmern sich nicht um lokale Suche. Genau dort können Sie sich absetzen.' },
  { title: 'Vertrauen vor Ort', text: 'Adresse, Einzugsgebiet und lokale Bezüge zeigen: Sie sind hier zu Hause und erreichbar.' },
  { title: 'Mobile Nutzer', text: 'Wer „Webdesign Dortmund“ oder Ihre Leistung sucht, tut das oft am Smartphone. Deshalb baue ich mobil zuerst.' },
  { title: 'Nachvollziehbare Ergebnisse', text: 'Mit der Google Search Console sehen Sie, wie Ihre Seite gefunden wird und wo es noch Luft gibt.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Webdesign Dortmund"
      lead="Websites für Dortmunder Betriebe – von der Innenstadt bis zum Technologiepark. Ich sitze selbst in Dortmund, gestalte und entwickle Ihre Seite persönlich und nenne Ihnen vorher den Preis: Festpreis ab 800 €."
    >
      <a href="#anfrage-abschluss" class="btn btn-primary">Erstgespräch anfragen</a>
      <NuxtLink to="/referenzen" class="btn btn-outline">Referenzen ansehen</NuxtLink>
    </PageCover>

    <!-- warum lokal -->
    <section class="section" aria-labelledby="local-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="local-title" class="t-headline">Warum lokale Webgestaltung für Dortmund entscheidend ist</h2>
        </div>
        <div class="max-w-text lg:col-span-7">
          <p class="t-lead">
            Dortmund ist ein Wirtschaftsstandort mit großem Potenzial. Ob im Umfeld des Signal Iduna Parks, im Technologiepark oder in der Innenstadt:
            Eine gute Website ist für Betriebe hier das digitale Fundament. Ich kenne die Stadt und baue Websites, die Ihre Kunden in Dortmund direkt ansprechen.
          </p>
          <p class="mt-5 text-ink-soft">
            Mit einer professionellen Website zeigen Sie, dass Ihr Dortmunder Unternehmen vertrauenswürdig ist. Ob Industrie, Handel, Dienstleistung oder Handwerk –
            eine durchdachte Online-Präsenz gehört heute dazu. Mir geht es nicht nur ums Aussehen, sondern darum, dass aus Besuchern Anfragen werden.
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
          title="Webdesign & Digital-Lösungen für Dortmund"
          intro="Websites, lokale SEO, Online-Shops und Wartung für Ihr Dortmunder Business – mit Preisanker vorab und einem Festpreis nach dem kostenlosen Erstgespräch."
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
          title="Lokale SEO für Dortmund – das bedeutet es für Ihr Business"
          intro="Wer in Dortmund sucht, will meistens jemanden aus Dortmund. Eine lokal optimierte Website sorgt dafür, dass Sie bei diesen Suchen auftauchen."
        />
        <div class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in localSeo" :key="item.title" class="border-t border-ink pt-5">
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
          title="Websites aus Dortmund und NRW."
          intro="Zwei der drei Projekte stehen hier in Dortmund – ein Studio und ein Transportunternehmen. Alle Seiten sind online, klicken Sie ruhig rein."
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
          title="So läuft Ihr Projekt in Dortmund ab."
          intro="Fünf Schritte, keine Überraschungen. Sie wissen jederzeit, wo Ihr Projekt steht."
        />
        <ProcessFixture class="mt-10" />
      </div>
    </section>

    <CityKeywordLinks city-slug="dortmund" city-name="Dortmund" />

    <InquirySection
      source="Webdesign Dortmund – Abschluss"
      title="Ihre Website aus Dortmund."
      text="Erzählen Sie mir kurz, worum es geht. Das Erstgespräch ist kostenlos und unverbindlich – danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
