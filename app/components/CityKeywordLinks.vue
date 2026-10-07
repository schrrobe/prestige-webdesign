<script setup lang="ts">
/**
 * „Auswärts“: interne Links einer Stadtseite – Leistungen, die indexierten
 * Keyword-Seiten der Stadt (TOP_KEYWORDS, gegen Orphan Pages) und die
 * übrigen Standorte. Alle Links bleiben erhalten, nur die Darstellung ist neu.
 */
import { CITIES, TOP_KEYWORDS, KEYWORD_CITIES } from '~/data/site'

const props = defineProps<{
  citySlug: 'dortmund' | 'essen' | 'bochum' | 'bottrop' | 'unna'
  cityName: string
}>()

const headingId = `auswaerts-${props.citySlug}-title`

// Nur Städte mit dynamischen Keyword-Landingpages erhalten die Direktlinks.
const hasKeywordPages = computed(() =>
  (KEYWORD_CITIES as readonly string[]).includes(props.citySlug),
)

const keywordLinks = computed(() =>
  TOP_KEYWORDS.map(kw => ({
    to: `/${props.citySlug}/${kw.slug}`,
    label: `${kw.label} ${props.cityName}`,
  })),
)

const serviceLinks = [
  {
    title: 'Webdesign für Unternehmen',
    description: 'Firmenwebsite, Homepage oder Relaunch – schnell, mobil und mit klaren Wegen zur Anfrage.',
    to: '/leistungen/webdesign',
  },
  {
    title: 'SEO für lokale Sichtbarkeit',
    description: `Saubere Technik, klare Inhalte und lokale Signale, damit Kunden aus ${props.cityName} Sie bei Google finden.`,
    to: '/leistungen/seo',
  },
  {
    title: 'Webanwendungen und Portale',
    description: 'Kundenbereiche, Portale und Tools für Abläufe, die kein Baukasten abbildet.',
    to: '/leistungen/webanwendungen',
  },
  {
    title: 'Kontakt und Erstgespräch',
    description: 'Kostenlos und unverbindlich – für eine neue Website, einen Relaunch oder SEO.',
    to: '/kontakt',
  },
]

const otherCities = CITIES.filter(city => city.slug !== props.citySlug)
</script>

<template>
  <section class="section bg-stone" data-rubric="Auswärts" :aria-labelledby="headingId">
    <div class="wrap">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 :id="headingId" class="t-headline">Leistungen für Unternehmen in {{ cityName }}</h2>
          <p class="t-lead mt-5 max-w-text text-ink-soft">
            Sie wissen schon, was Ihr Betrieb braucht? Dann geht es hier direkt zur passenden Leistung.
            Wenn nicht, ist das kein Problem – das klären wir im kostenlosen Erstgespräch.
          </p>
        </div>

        <ul class="border-t-2 border-ink lg:col-span-7">
          <li v-for="link in serviceLinks" :key="link.to" class="border-b border-ink/25">
            <NuxtLink :to="link.to" class="group grid min-h-11 grid-cols-[1fr_auto] items-start gap-x-6 py-5">
              <span>
                <span class="t-title block">{{ link.title }}</span>
                <span class="mt-1.5 block max-w-xl text-ink-soft">{{ link.description }}</span>
              </span>
              <AppIcon name="arrow-right" class="mt-1 h-5 w-5 text-accent transition-transform duration-200 group-hover:translate-x-1" />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div v-if="hasKeywordPages" class="mt-16 grid gap-6 rule-top pt-6 md:pt-8 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h3 class="t-title">Beliebte Themen in {{ cityName }}</h3>
          <p class="mt-2 max-w-md text-ink-soft">
            Die Fragen, mit denen Betriebe aus {{ cityName }} am häufigsten kommen – jeweils mit Preisen, Ablauf und Antworten.
          </p>
        </div>
        <ul class="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
          <li v-for="link in keywordLinks" :key="link.to" class="border-t border-ink/25">
            <NuxtLink :to="link.to" class="link flex min-h-11 items-center py-2.5 font-semibold">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="mt-16 grid gap-6 border-t-2 border-ink pt-6 md:pt-8 lg:grid-cols-12 lg:items-center">
        <h3 class="t-title lg:col-span-4">Weitere Standorte im Ruhrgebiet</h3>
        <ul class="grid grid-cols-2 gap-x-6 sm:grid-cols-4 lg:col-span-8">
          <li v-for="city in otherCities" :key="city.to" class="border-t border-ink/25">
            <NuxtLink :to="city.to" class="group flex min-h-14 items-center justify-between gap-2 py-3">
              <span>
                <span class="sr-only">Webdesign </span>
                <span class="block text-2xl uppercase leading-none" style="font-stretch: 62%; font-weight: 860;">{{ city.name }}</span>
              </span>
              <AppIcon name="arrow-right" class="h-5 w-5 text-accent transition-transform duration-200 group-hover:translate-x-1" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
