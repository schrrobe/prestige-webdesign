<script setup lang="ts">
import { REFERENCES } from '~/data/references'

const siteUrl = 'https://prestige-webdesign.de'

useSeoMeta({
  title: 'Referenzen Webdesign Dortmund – Websites aus dem Ruhrgebiet | Prestige Webdesign',
  description: 'Referenzen von Prestige Webdesign aus Dortmund: Websites für ein Lymphdrainage-Studio, ein Fotografenpaar und ein Transportunternehmen – mit WordPress oder individuell entwickelt. Alle Seiten sind live.',
  ogTitle: 'Referenzen | Prestige Webdesign Dortmund',
  ogDescription: 'Drei Websites, die schon für ihre Betriebe arbeiten – mit WordPress oder individuell entwickelt.',
})

useHead({
  script: [
    {
      key: 'references-structured-data',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Referenzen',
        url: `${siteUrl}/referenzen`,
        publisher: { '@id': `${siteUrl}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: REFERENCES.length,
          itemListElement: REFERENCES.map((ref, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: ref.name,
            url: `${siteUrl}/referenzen/${ref.slug}`,
          })),
        },
      }),
    },
  ],
})

const wordpressRefs = REFERENCES.filter(r => r.tool === 'WordPress')
const customRefs = REFERENCES.filter(r => r.tool !== 'WordPress')

const tools = [
  {
    name: 'WordPress',
    when: 'Wenn Sie Ihre Seite selbst pflegen wollen.',
    text: 'Texte, Bilder und Angebote ändern Sie ohne Technikkenntnisse. Bewährt, weit verbreitet und mit vielen Erweiterungen – gut für Firmenwebsites, Blogs und Galerien.',
    refs: wordpressRefs,
  },
  {
    name: 'Individuell',
    when: 'Wenn es schnell und besonders sein soll.',
    text: 'Von Grund auf mit Nuxt und Vue entwickelt, ohne Baukasten. Das lohnt sich, wenn Ladezeit, eigene Abläufe oder starke Sichtbarkeit in Google und KI-Suchen im Vordergrund stehen.',
    refs: customRefs,
  },
]
</script>

<template>
  <div>
    <PageCover
      title="Heimspiele."
      lead="Hier sehen Sie Websites, die ich gestaltet und umgesetzt habe – für ein Studio, ein Fotografenpaar und ein Transportunternehmen. Alle drei sind online. Klicken Sie ruhig rein."
    >
      <NuxtLink to="/kontakt" class="btn btn-signal">Erstgespräch anfragen</NuxtLink>
      <a href="#heimspiele" class="btn btn-outline">Zu den Projekten</a>
    </PageCover>

    <!-- Heimspiele -->
    <section id="heimspiele" class="section scroll-mt-24" data-rubric="Heimspiele" aria-labelledby="refs-title">
      <div class="wrap">
        <SectionHead
          id="refs-title"
          title="Websites, die schon für ihre Betriebe arbeiten."
          intro="Bei allen drei Projekten lagen Design und Umsetzung bei mir. Zu jeder Seite gibt es einen kurzen Spielbericht: Ausgangslage, was umgesetzt wurde und mit welcher Technik."
          :rule="false"
        />
        <ReferenceShowcase class="mt-12" />
      </div>
    </section>

    <!-- Taktik: das passende Werkzeug -->
    <section class="section bg-sheet" data-rubric="Taktik" aria-labelledby="tools-title">
      <div class="wrap">
        <SectionHead
          id="tools-title"
          title="Das passende Werkzeug – nicht das Lieblingswerkzeug."
          intro="Sie sehen es an den Projekten: Nicht jede Website ist gleich gebaut. Ich entscheide mit Ihnen gemeinsam, was zu Ihrem Betrieb passt – und sage ehrlich, wenn die einfachere Lösung reicht."
        />
        <div class="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          <div v-for="tool in tools" :key="tool.name" class="border-t-2 border-ink pt-6">
            <h3 class="text-4xl uppercase leading-none md:text-5xl" style="font-stretch: 62%; font-weight: 880;">{{ tool.name }}</h3>
            <p class="t-title mt-3">{{ tool.when }}</p>
            <p class="mt-4 max-w-text text-ink-soft">{{ tool.text }}</p>
            <p class="mt-6 border-t border-ink/25 pt-4 font-semibold text-ink-soft">
              So gebaut:
              <template v-for="(r, i) in tool.refs" :key="r.slug">
                <NuxtLink :to="`/referenzen/${r.slug}`" class="link text-ink">{{ r.name }}</NuxtLink><template v-if="i < tool.refs.length - 1">, </template>
              </template>
              <template v-if="tool.name === 'Individuell'"> – und diese Website hier.</template>
            </p>
          </div>
        </div>
      </div>
    </section>

    <InquirySection
      title="Ihr Betrieb als nächstes Heimspiel?"
      text="Erzählen Sie mir, was Ihre Website leisten soll. Im kostenlosen Erstgespräch klären wir, welches Werkzeug passt – danach bekommen Sie ein Angebot zum Festpreis."
      source="Referenzen"
    />
  </div>
</template>
