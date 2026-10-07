<script setup lang="ts">
useSeoMeta({
  title: 'Webdesign Essen | Prestige Webdesign – Webagentur für Essen',
  ogTitle: 'Webdesign Essen | Prestige Webdesign – Webagentur für Essen',
  description: 'Webdesign Essen: Professionelle Websites für Essen & Umgebung ab 800 € Festpreis. SEO, E-Commerce-Lösungen und Wartung aus einer Hand.',
  ogDescription: 'Webdesign Essen: Professionelle Websites für Essen & Umgebung ab 800 € Festpreis. SEO, E-Commerce-Lösungen und Wartung aus einer Hand.',
  keywords: 'Webdesign Essen, Webagentur Essen, Website Essen, SEO Essen, Webentwicklung Essen, Online Marketing Essen',
  ogImage: 'https://prestige-webdesign.de/images/og-default.png',
  robots: 'index, follow',
})

const localPoints = [
  'Websites, die zu Ihrem Betrieb in Essen passen',
  'Lokale SEO für bessere Sichtbarkeit in Essen & Umgebung',
  'Schnelle Ladezeiten und sichere Technik',
  'Klare Nutzerführung bis zur Anfrage',
  'Mobile-First entwickelt',
  'Auf Wunsch Wartung und Weiterentwicklung nach dem Launch',
]

const benefits = [
  { title: 'Mehr Online-Sichtbarkeit', text: 'Essener Kunden finden Sie leichter, wenn sie nach Ihren Produkten oder Leistungen suchen. Eine gut gebaute Website ist dafür die Grundlage.' },
  { title: 'Glaubwürdigkeit & Vertrauen', text: 'Eine professionelle Website zeigt Kompetenz und Seriosität. Interessenten fassen schneller Vertrauen, wenn Ihr Betrieb online gut dasteht.' },
  { title: 'Mehr Anfragen', text: 'Klare Inhalte und kurze Wege zum Kontakt machen aus Besuchern eher Anfragen – darauf richte ich jede Seite aus.' },
  { title: 'Abstand zur Konkurrenz', text: 'Viele Websites in Essen sind in die Jahre gekommen. Mit einem schnellen, modernen Auftritt heben Sie sich ab.' },
  { title: 'Rund um die Uhr erreichbar', text: 'Ihre Website beantwortet Fragen und nimmt Anfragen an, auch wenn Ihr Betrieb geschlossen hat.' },
  { title: 'Entscheidungen mit Daten', text: 'Mit der Google Search Console sehen Sie, wonach Ihre Kunden suchen und wie sie Sie finden.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Webdesign Essen"
      lead="Websites für Essener Unternehmen – von der Rüttenscheider Straße bis zum Handwerksbetrieb im Essener Norden. Ein Ansprechpartner aus dem Ruhrgebiet, der gestaltet und entwickelt, zum Festpreis ab 800 €."
    >
      <a href="#anfrage-abschluss" class="btn btn-primary">Erstgespräch anfragen</a>
      <NuxtLink to="/referenzen" class="btn btn-outline">Referenzen ansehen</NuxtLink>
    </PageCover>

    <!-- warum Essen -->
    <section class="section" aria-labelledby="local-title">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="local-title" class="t-headline">Webdesign Essen: Digital erfolgreich in der Metropole Ruhr</h2>
        </div>
        <div class="max-w-text lg:col-span-7">
          <p class="t-lead">
            Essen ist mehr als Geschichte. Die Grüne Hauptstadt Europas 2015 ist Heimat moderner Industrie, junger Unternehmen und eines starken Mittelstands –
            von der Zeche Zollverein bis zum ThyssenKrupp Quartier. Wer hier bestehen will, braucht eine Website, die genauso zeitgemäß ist wie die Stadt.
          </p>
          <p class="mt-5 text-ink-soft">
            Die Essener Wirtschaft ist vielseitig: Einzelhandel in der Innenstadt, spezialisierte Handwerksbetriebe, Kanzleien, Praxen und große Unternehmen.
            Sie alle brauchen Websites, die nicht nur professionell aussehen, sondern Anfragen bringen. Ich baue Ihre Seite passend zu Ihrem Betrieb –
            mit WordPress zum Selbstpflegen oder individuell entwickelt.
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
          title="Webdesign & digitale Lösungen für Essen"
          intro="Websites, lokale Suche, Online-Shops und Wartung für Essener Betriebe – mit Preisanker vorab und einem Festpreis nach dem kostenlosen Erstgespräch."
        >
          <NuxtLink to="/preise" class="btn btn-outline">Preise im Detail</NuxtLink>
        </SectionHead>
        <ServiceTable class="mt-10" />
      </div>
    </section>

    <!-- was Sie erreichen -->
    <section class="section" aria-labelledby="benefits-title">
      <div class="wrap">
        <SectionHead
          id="benefits-title"
          title="Was Sie mit professionellem Webdesign in Essen erreichen"
          intro="Eine Website ist kein Selbstzweck. Sie soll Ihrem Betrieb in Essen Arbeit abnehmen und neue Kunden bringen."
        />
        <div class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in benefits" :key="item.title" class="border-t border-ink pt-5">
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

    <CityKeywordLinks city-slug="essen" city-name="Essen" />

    <InquirySection
      source="Webdesign Essen – Abschluss"
      title="Ihre Website für Essen."
      text="Erzählen Sie mir kurz, worum es geht. Das Erstgespräch ist kostenlos und unverbindlich – danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
