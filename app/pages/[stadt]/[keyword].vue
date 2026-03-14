<script setup lang="ts">
const route = useRoute()

type KeywordConfig = {
  h1: string
  keyword: string
  focus: string
  intro: string
  offerText: string
  targetText: string
  locationText: string
  detailTitle: string
  detailText: string
  benefits: string[]
}

type KeywordSeed = {
  h1: string
  keyword: string
  focus: string
}

const cityMap: Record<string, { name: string; adjective: string }> = {
  dortmund: { name: 'Dortmund', adjective: 'Dortmunder' },
  essen: { name: 'Essen', adjective: 'Essener' },
  bochum: { name: 'Bochum', adjective: 'Bochumer' },
  bottrop: { name: 'Bottrop', adjective: 'Bottroper' },
}

function toConfig(seed: KeywordSeed): KeywordConfig {
  return {
    h1: seed.h1,
    keyword: seed.keyword,
    focus: seed.focus,
    intro: `Mit ${seed.keyword} in {city} positionieren wir Ihr Unternehmen professionell und conversionstark.`,
    offerText: `Wir setzen ${seed.keyword} mit klarem Seitenaufbau, starker Nutzerführung, responsivem Design und technischer SEO-Basis um.`,
    targetText: `Die Seite ist auf ${seed.focus} ausgerichtet und unterstützt Sie dabei, mehr qualifizierte Anfragen zu erhalten.`,
    locationText: `Durch lokale Ausrichtung auf {city} wird Ihre Website in regionalen Suchanfragen sichtbarer und relevanter.`,
    detailTitle: `${seed.h1} in {city} mit Fokus auf Anfragen und Wachstum`,
    detailText: `Unsere Umsetzung verbindet Design, Inhalt und Technik, damit Besucher schnell Vertrauen aufbauen und direkt Kontakt aufnehmen.`,
    benefits: [
      `Klarer digitaler Auftritt für ${seed.focus}`,
      'Mehr qualifizierte Anfragen über die Website',
      'Stärkere lokale Sichtbarkeit in {city}',
    ],
  }
}

const keywordSeeds: Record<string, KeywordSeed> = {
  // Allgemein B2B / Unternehmen
  'webdesign-fuer-unternehmen': { h1: 'Webdesign für Unternehmen', keyword: 'webdesign für unternehmen', focus: 'Unternehmen' },
  'websites-fuer-unternehmen': { h1: 'Websites für Unternehmen', keyword: 'websites für unternehmen', focus: 'Unternehmen' },
  'professionelle-website-fuer-firma': { h1: 'Professionelle Website für Firma', keyword: 'professionelle website für firma', focus: 'Firmen' },
  'homepage-fuer-firma-erstellen-lassen': { h1: 'Homepage für Firma erstellen lassen', keyword: 'homepage für firma erstellen lassen', focus: 'Firmen' },
  'internetseite-fuer-unternehmen': { h1: 'Internetseite für Unternehmen', keyword: 'internetseite für unternehmen', focus: 'Unternehmen' },
  'firmenwebsite-erstellen-lassen': { h1: 'Firmenwebsite erstellen lassen', keyword: 'firmenwebsite erstellen lassen', focus: 'Firmen' },
  'business-website-erstellen-lassen': { h1: 'Business Website erstellen lassen', keyword: 'business website erstellen lassen', focus: 'Unternehmen' },
  'webseite-fuer-firma': { h1: 'Webseite für Firma', keyword: 'webseite für firma', focus: 'Firmen' },

  // Kaufabsicht
  'website-erstellen-lassen': { h1: 'Website erstellen lassen', keyword: 'website erstellen lassen', focus: 'Unternehmen' },
  'webseite-erstellen-lassen': { h1: 'Webseite erstellen lassen', keyword: 'webseite erstellen lassen', focus: 'Unternehmen' },
  'homepage-erstellen-lassen': { h1: 'Homepage erstellen lassen', keyword: 'homepage erstellen lassen', focus: 'Unternehmen' },
  'professionelle-website-erstellen-lassen': { h1: 'Professionelle Website erstellen lassen', keyword: 'professionelle website erstellen lassen', focus: 'Unternehmen' },
  'webdesign-agentur': { h1: 'Webdesign Agentur', keyword: 'webdesign agentur', focus: 'Unternehmen' },
  'webdesign-agentur-fuer-unternehmen': { h1: 'Webdesign Agentur für Unternehmen', keyword: 'webdesign agentur für unternehmen', focus: 'Unternehmen' },
  'webdesigner-beauftragen': { h1: 'Webdesigner beauftragen', keyword: 'webdesigner beauftragen', focus: 'Unternehmen' },
  'website-erstellen-lassen-kosten': { h1: 'Website erstellen lassen Kosten', keyword: 'website erstellen lassen kosten', focus: 'Unternehmen' },
  'webdesign-angebot': { h1: 'Webdesign Angebot', keyword: 'webdesign angebot', focus: 'Unternehmen' },
  'website-fuer-unternehmen-erstellen-lassen': { h1: 'Website für Unternehmen erstellen lassen', keyword: 'website für unternehmen erstellen lassen', focus: 'Unternehmen' },
  'homepage-fuer-unternehmen-erstellen-lassen': { h1: 'Homepage für Unternehmen erstellen lassen', keyword: 'homepage für unternehmen erstellen lassen', focus: 'Unternehmen' },

  // Kleine Unternehmen / KMU
  'webdesign-fuer-kleine-unternehmen': { h1: 'Webdesign für kleine Unternehmen', keyword: 'webdesign für kleine unternehmen', focus: 'kleine Unternehmen' },
  'website-fuer-kleine-unternehmen': { h1: 'Website für kleine Unternehmen', keyword: 'website für kleine unternehmen', focus: 'kleine Unternehmen' },
  'homepage-fuer-kleine-firmen': { h1: 'Homepage für kleine Firmen', keyword: 'homepage für kleine firmen', focus: 'kleine Firmen' },
  'webdesign-fuer-kmu': { h1: 'Webdesign für KMU', keyword: 'webdesign für kmu', focus: 'KMU' },
  'website-erstellen-lassen-fuer-kmu': { h1: 'Website erstellen lassen für KMU', keyword: 'website erstellen lassen für kmu', focus: 'KMU' },
  'guenstige-website-fuer-unternehmen': { h1: 'Günstige Website für Unternehmen', keyword: 'günstige website für unternehmen', focus: 'Unternehmen' },
  'professionelle-homepage-fuer-kleine-unternehmen': { h1: 'Professionelle Homepage für kleine Unternehmen', keyword: 'professionelle homepage für kleine unternehmen', focus: 'kleine Unternehmen' },

  // Lokal
  'webdesign-stadt': { h1: 'Webdesign {city}', keyword: 'webdesign {city}', focus: 'lokale Unternehmen' },
  'webdesigner-stadt': { h1: 'Webdesigner {city}', keyword: 'webdesigner {city}', focus: 'lokale Unternehmen' },
  'website-erstellen-lassen-stadt': { h1: 'Website erstellen lassen {city}', keyword: 'website erstellen lassen {city}', focus: 'lokale Unternehmen' },
  'homepage-erstellen-lassen-stadt': { h1: 'Homepage erstellen lassen {city}', keyword: 'homepage erstellen lassen {city}', focus: 'lokale Unternehmen' },
  'webdesign-agentur-stadt': { h1: 'Webdesign Agentur {city}', keyword: 'webdesign agentur {city}', focus: 'lokale Unternehmen' },
  'wordpress-agentur-stadt': { h1: 'WordPress Agentur {city}', keyword: 'wordpress agentur {city}', focus: 'lokale Unternehmen' },
  'internetagentur-stadt': { h1: 'Internetagentur {city}', keyword: 'internetagentur {city}', focus: 'lokale Unternehmen' },
  'webseite-fuer-unternehmen-stadt': { h1: 'Webseite für Unternehmen {city}', keyword: 'webseite für unternehmen {city}', focus: 'lokale Unternehmen' },

  // Technik / CMS
  'wordpress-webdesign': { h1: 'WordPress Webdesign', keyword: 'wordpress webdesign', focus: 'Unternehmen' },
  'wordpress-agentur': { h1: 'WordPress Agentur', keyword: 'wordpress agentur', focus: 'Unternehmen' },
  'wordpress-website-erstellen-lassen': { h1: 'WordPress Website erstellen lassen', keyword: 'wordpress website erstellen lassen', focus: 'Unternehmen' },
  'wordpress-webdesigner': { h1: 'WordPress Webdesigner', keyword: 'wordpress webdesigner', focus: 'Unternehmen' },
  'elementor-webdesign': { h1: 'Elementor Webdesign', keyword: 'elementor webdesign', focus: 'Unternehmen' },
  'cms-website-erstellen-lassen': { h1: 'CMS Website erstellen lassen', keyword: 'cms website erstellen lassen', focus: 'Unternehmen' },
  'responsive-webdesign-agentur': { h1: 'Responsive Webdesign Agentur', keyword: 'responsive webdesign agentur', focus: 'Unternehmen' },
  'seo-webdesign': { h1: 'SEO Webdesign', keyword: 'seo webdesign', focus: 'Unternehmen' },
  'wordpress-webdesign-fuer-unternehmen': { h1: 'WordPress Webdesign für Unternehmen', keyword: 'wordpress webdesign für unternehmen', focus: 'Unternehmen' },

  // Branchen
  'webdesign-fuer-handwerker': { h1: 'Webdesign für Handwerker', keyword: 'webdesign für handwerker', focus: 'Handwerker' },
  'webdesign-fuer-aerzte': { h1: 'Webdesign für Ärzte', keyword: 'webdesign für ärzte', focus: 'Ärzte' },
  'webdesign-fuer-kanzleien': { h1: 'Webdesign für Kanzleien', keyword: 'webdesign für kanzleien', focus: 'Kanzleien' },
  'webdesign-fuer-steuerberater': { h1: 'Webdesign für Steuerberater', keyword: 'webdesign für steuerberater', focus: 'Steuerberater' },
  'webdesign-fuer-immobilienmakler': { h1: 'Webdesign für Immobilienmakler', keyword: 'webdesign für immobilienmakler', focus: 'Immobilienmakler' },
  'webdesign-fuer-restaurants': { h1: 'Webdesign für Restaurants', keyword: 'webdesign für restaurants', focus: 'Restaurants' },
  'webdesign-fuer-coaches': { h1: 'Webdesign für Coaches', keyword: 'webdesign für coaches', focus: 'Coaches' },
  'webdesign-fuer-agenturen': { h1: 'Webdesign für Agenturen', keyword: 'webdesign für agenturen', focus: 'Agenturen' },
  'webdesign-fuer-lokale-unternehmen': { h1: 'Webdesign für lokale Unternehmen', keyword: 'webdesign für lokale unternehmen', focus: 'lokale Unternehmen' },
  'webdesign-fuer-dienstleister': { h1: 'Webdesign für Dienstleister', keyword: 'webdesign für dienstleister', focus: 'Dienstleister' },
  'website-erstellen-lassen-fuer-handwerksbetriebe': { h1: 'Website erstellen lassen für Handwerksbetriebe', keyword: 'website erstellen lassen für handwerksbetriebe', focus: 'Handwerksbetriebe' },

  // Problemlösungen
  'veraltete-website-neu-erstellen': { h1: 'Veraltete Website neu erstellen', keyword: 'veraltete website neu erstellen', focus: 'Unternehmen' },
  'firmenwebsite-modernisieren': { h1: 'Firmenwebsite modernisieren', keyword: 'firmenwebsite modernisieren', focus: 'Firmen' },
  'website-redesign-unternehmen': { h1: 'Website Redesign Unternehmen', keyword: 'website redesign unternehmen', focus: 'Unternehmen' },
  'website-relaunch-firma': { h1: 'Website Relaunch Firma', keyword: 'website relaunch firma', focus: 'Firmen' },
  'professionelle-unternehmenswebsite': { h1: 'Professionelle Unternehmenswebsite', keyword: 'professionelle unternehmenswebsite', focus: 'Unternehmen' },
  'mehr-kunden-durch-website': { h1: 'Mehr Kunden durch Website', keyword: 'mehr kunden durch website', focus: 'Unternehmen' },
  'website-fuer-leadgenerierung': { h1: 'Website für Leadgenerierung', keyword: 'website für leadgenerierung', focus: 'Unternehmen' },
  'bessere-firmenwebsite': { h1: 'Bessere Firmenwebsite', keyword: 'bessere firmenwebsite', focus: 'Firmen' },

  // SEO-nah
  'seo-optimierte-website-erstellen-lassen': { h1: 'SEO optimierte Website erstellen lassen', keyword: 'seo optimierte website erstellen lassen', focus: 'Unternehmen' },
  'webdesign-und-seo': { h1: 'Webdesign und SEO', keyword: 'webdesign und seo', focus: 'Unternehmen' },
  'seo-webdesign-fuer-unternehmen': { h1: 'SEO Webdesign für Unternehmen', keyword: 'seo webdesign für unternehmen', focus: 'Unternehmen' },
  'website-fuer-google-optimieren': { h1: 'Website für Google optimieren', keyword: 'website für google optimieren', focus: 'Unternehmen' },
  'lokale-seo-und-webdesign': { h1: 'Lokale SEO und Webdesign', keyword: 'lokale seo und webdesign', focus: 'lokale Unternehmen' },
  'google-freundliche-website': { h1: 'Google freundliche Website', keyword: 'google freundliche website', focus: 'Unternehmen' },

  // Vertrauen / Qualität
  'moderne-firmenwebsite': { h1: 'Moderne Firmenwebsite', keyword: 'moderne firmenwebsite', focus: 'Firmen' },
  'hochwertige-website-erstellen-lassen': { h1: 'Hochwertige Website erstellen lassen', keyword: 'hochwertige website erstellen lassen', focus: 'Unternehmen' },
  'professionelle-webseite': { h1: 'Professionelle Webseite', keyword: 'professionelle webseite', focus: 'Unternehmen' },
  'individuelle-website-erstellen-lassen': { h1: 'Individuelle Website erstellen lassen', keyword: 'individuelle website erstellen lassen', focus: 'Unternehmen' },
  'massgeschneiderte-website-fuer-unternehmen': { h1: 'Maßgeschneiderte Website für Unternehmen', keyword: 'maßgeschneiderte website für unternehmen', focus: 'Unternehmen' },
  'conversion-starke-website': { h1: 'Conversion starke Website', keyword: 'conversion starke website', focus: 'Unternehmen' },
  'responsive-firmenwebsite': { h1: 'Responsive Firmenwebsite', keyword: 'responsive firmenwebsite', focus: 'Firmen' },

  // Kombinations-Keywords (starke Gruppen)
  'webdesign-fuer-kleine-unternehmen-in-stadt': { h1: 'Webdesign für kleine Unternehmen in {city}', keyword: 'webdesign für kleine unternehmen in {city}', focus: 'kleine Unternehmen' },
  'website-erstellen-lassen-fuer-handwerker': { h1: 'Website erstellen lassen für Handwerker', keyword: 'website erstellen lassen für handwerker', focus: 'Handwerker' },
  'professionelle-firmenwebsite-in-stadt': { h1: 'Professionelle Firmenwebsite in {city}', keyword: 'professionelle firmenwebsite in {city}', focus: 'Firmen' },
}

const keywordMap: Record<string, KeywordConfig> = Object.fromEntries(
  Object.entries(keywordSeeds).map(([slug, seed]) => [slug, toConfig(seed)]),
)

const stadt = computed(() => String(route.params.stadt || '').toLowerCase())
const keyword = computed(() => String(route.params.keyword || '').toLowerCase())

const city = computed(() => cityMap[stadt.value])
const keywordData = computed(() => keywordMap[keyword.value])

if (!city.value || !keywordData.value) {
  throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden' })
}

const withCity = (text: string) => text.replaceAll('{city}', city.value!.name)

const pageTitle = computed(() => `${withCity(keywordData.value.h1)} | Prestige Webdesign`)
const pageDescription = computed(() => `${withCity(keywordData.value.intro)} ${withCity(keywordData.value.offerText)}`)
const seoKeywords = computed(() => `${withCity(keywordData.value.keyword)}, ${withCity(keywordData.value.h1).toLowerCase()}, webdesign ${city.value.name.toLowerCase()}`)

useSeoMeta({
  title: () => pageTitle.value,
  ogTitle: () => pageTitle.value,
  description: () => pageDescription.value,
  ogDescription: () => pageDescription.value,
  keywords: () => seoKeywords.value,
  robots: 'index, follow',
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
    <section class="section-padding pt-32 pb-20 bg-gradient-to-br from-primary-900/10 to-dark-900">
      <div class="container-narrow">
        <p class="text-primary-300 text-sm uppercase tracking-[0.2em] mb-4">
          {{ city.name }} · {{ keywordData.focus }} · {{ withCity(keywordData.keyword) }}
        </p>
        <h1 class="font-display text-4xl md:text-6xl font-bold mb-6 text-gradient">
          {{ withCity(keywordData.h1) }}
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
          {{ withCity(keywordData.intro) }}
        </p>
        <NuxtLink to="/kontakt" class="btn-primary text-lg px-8 py-4">
          Kostenlose Beratung anfragen
        </NuxtLink>
      </div>
    </section>

    <section class="section-padding bg-dark-850">
      <div class="container-narrow">
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-8 text-white">
          Leistung + Zielgruppe + Ort: {{ city.name }}
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <article class="glass-card p-6 rounded-xl">
            <h3 class="font-display text-xl text-white mb-3">Leistung</h3>
            <p class="text-gray-300">
              {{ withCity(keywordData.offerText) }}
            </p>
          </article>
          <article class="glass-card p-6 rounded-xl">
            <h3 class="font-display text-xl text-white mb-3">Zielgruppe</h3>
            <p class="text-gray-300">
              {{ withCity(keywordData.targetText) }}
            </p>
          </article>
          <article class="glass-card p-6 rounded-xl">
            <h3 class="font-display text-xl text-white mb-3">Ort</h3>
            <p class="text-gray-300">
              {{ withCity(keywordData.locationText) }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-narrow">
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-8 text-gradient">
          {{ withCity(keywordData.detailTitle) }}
        </h2>
        <p class="text-lg text-gray-300 max-w-4xl leading-relaxed mb-8">
          {{ withCity(keywordData.detailText) }}
        </p>
        <ul class="grid md:grid-cols-3 gap-4">
          <li
            v-for="benefit in keywordData.benefits"
            :key="benefit"
            class="glass-card p-5 rounded-xl text-gray-200"
          >
            {{ withCity(benefit) }}
          </li>
        </ul>
      </div>
    </section>

    <CTASection />
  </div>
</template>
