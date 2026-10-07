<script setup lang="ts">
import { REFERENCES } from '~/data/references'

useSeoMeta({
  title: 'Leistungen: Webdesign, SEO, E-Commerce & Wartung | Prestige Webdesign',
  description: 'Alle Leistungen im Überblick: Webdesign, Suchmaschinenoptimierung, Online-Shops, Webanwendungen und Wartung – aus einer Hand im Ruhrgebiet. Jetzt kostenlos beraten lassen.',
})

const wordpressRefs = REFERENCES.filter(r => r.tool === 'WordPress')
const customRefs = REFERENCES.filter(r => r.tool !== 'WordPress')
</script>

<template>
  <div>
    <PageCover
      title="Leistungen aus einer Hand."
      lead="Webdesign, Online-Shops, Webanwendungen, SEO und Wartung für Betriebe im Ruhrgebiet. Ein Ansprechpartner von der ersten Idee bis lange nach dem Launch – und ein Festpreis, bevor es losgeht."
    >
      <a href="#anfrage-abschluss" class="btn btn-primary">Erstgespräch anfragen</a>
      <NuxtLink to="/preise" class="btn btn-outline">Preise im Detail</NuxtLink>
    </PageCover>

    <!-- alle Leistungen mit Preisanker -->
    <section class="section" aria-labelledby="services-title">
      <div class="wrap">
        <SectionHead
          id="services-title"
          title="Fünf Leistungen. Ein Preis vorab."
          intro="Jede Zeile führt zur ausführlichen Leistungsseite. Die Preise sind Anker: Was Ihr Projekt genau kostet, steht nach dem kostenlosen Erstgespräch schwarz auf weiß im Angebot – und dabei bleibt es."
        />
        <ServiceTable class="mt-10" />
      </div>
    </section>

    <!-- WordPress oder individuell -->
    <section class="section bg-stone" aria-labelledby="tools-title">
      <div class="wrap">
        <SectionHead
          id="tools-title"
          title="WordPress oder individuell entwickelt?"
          intro="Nicht jede Website braucht dasselbe. Im Erstgespräch finden wir heraus, was zu Ihrem Betrieb passt – und ich sage Ihnen ehrlich, wenn die einfachere Lösung reicht."
        />
        <div class="mt-12 grid border-2 border-ink md:grid-cols-2">
          <div class="p-6 md:p-10">
            <h3 class="font-serif text-4xl leading-[1.05] md:text-5xl" style="font-weight: 500; font-variation-settings: 'opsz' 48;">WordPress</h3>
            <p class="t-title mt-3 text-ink-soft">Für alle, die selbst pflegen wollen.</p>
            <CheckList
              class="mt-6"
              :items="[
                'Texte, Bilder und Angebote ohne Technikkenntnisse ändern',
                'Bewährt, verbreitet, viele Erweiterungen',
                'Ideal für Firmenwebsites, Blogs und Shops mit WooCommerce',
              ]"
            />
            <p class="mt-8 border-t border-hair pt-4 text-sm font-semibold text-ink-soft">
              So gebaut:
              <template v-for="(r, i) in wordpressRefs" :key="r.slug">
                <NuxtLink :to="`/referenzen/${r.slug}`" class="link text-ink">{{ r.name }}</NuxtLink><template v-if="i < wordpressRefs.length - 1">, </template>
              </template>
            </p>
          </div>
          <div class="on-ink p-6 md:p-10">
            <h3 class="font-serif text-4xl leading-[1.05] md:text-5xl" style="font-weight: 500; font-variation-settings: 'opsz' 48;">Individuell</h3>
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

    <!-- Ablauf -->
    <section class="section" aria-labelledby="process-title">
      <div class="wrap">
        <SectionHead
          id="process-title"
          title="Egal welche Leistung: Der Ablauf ist derselbe."
          intro="Fünf Schritte, keine Überraschungen. Sie wissen jederzeit, wo Ihr Projekt steht."
        />
        <ProcessFixture class="mt-10" />
      </div>
    </section>

    <InquirySection
      source="Leistungen – Abschluss"
      title="Welche Leistung passt zu Ihnen?"
      text="Sie müssen das nicht vorher wissen. Erzählen Sie mir kurz, was Ihr Betrieb braucht – im kostenlosen Erstgespräch sortieren wir das gemeinsam, danach bekommen Sie ein Angebot zum Festpreis."
    />
  </div>
</template>
