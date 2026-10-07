<script setup lang="ts">
import { REFERENCES } from '~/data/references'

const route = useRoute()
const slug = computed(() => String(route.params.slug || '').toLowerCase())
const found = REFERENCES.find(r => r.slug === slug.value)

if (!found) {
  throw createError({ status: 404, statusText: 'Seite nicht gefunden' })
}

const reference = computed(() => REFERENCES.find(r => r.slug === slug.value) ?? found)
const others = computed(() => REFERENCES.filter(r => r.slug !== reference.value.slug))

useSeoMeta({
  title: () => `Referenz ${reference.value.name} – ${reference.value.industry} | Prestige Webdesign`,
  description: () => `${reference.value.summary} ${reference.value.role}: Prestige Webdesign aus Dortmund.`,
  ogTitle: () => `${reference.value.name} – Referenz | Prestige Webdesign`,
  ogDescription: () => reference.value.summary,
})

const facts = computed(() => [
  { term: 'Meine Rolle', value: reference.value.role },
  { term: 'Umsetzung', value: reference.value.tool },
  { term: 'Technik', value: reference.value.tech.join(', ') },
  ...(reference.value.year ? [{ term: 'Jahr', value: String(reference.value.year) }] : []),
])
</script>

<template>
  <div>
    <PageCover :title="reference.name">
      <template #lead>
        <p class="t-title mt-6 text-ink-soft md:mt-8">{{ reference.industry }} · {{ reference.location }}</p>
        <p class="t-lead mt-4 max-w-2xl">{{ reference.summary }}</p>
      </template>
      <a :href="reference.url" target="_blank" rel="noopener" class="btn btn-outline">
        Live ansehen
        <span class="sr-only">: {{ reference.host }} (öffnet neuen Tab)</span>
        <AppIcon name="arrow-up-right" class="h-5 w-5" />
      </a>
    </PageCover>

    <!-- Heimspiele: Ansichten, ragen aus der Titelseite heraus -->
    <section class="relative pb-16 md:pb-24" data-rubric="Heimspiele" aria-label="Ansichten der Website">
      <div class="absolute inset-x-0 top-0 h-24 bg-stone md:h-40" aria-hidden="true" />
      <div class="wrap relative">
        <ReferenceShots :reference="reference" eager class="mx-auto max-w-5xl" />
        <p class="mx-auto mt-4 max-w-5xl text-sm text-ink-soft">
          {{ reference.name }} auf Desktop und Smartphone –
          <a :href="reference.url" target="_blank" rel="noopener" class="link inline-flex min-h-11 items-center gap-1 font-semibold text-ink">
            {{ reference.host }}
            <span class="sr-only">(öffnet neuen Tab)</span>
            <AppIcon name="arrow-up-right" class="h-4 w-4" />
          </a>
        </p>
      </div>
    </section>

    <!-- Spielbericht -->
    <section class="section bg-stone" data-rubric="Spielbericht" aria-labelledby="report-title">
      <div class="wrap">
        <SectionHead
          id="report-title"
          :title="`Spielbericht: ${reference.name}`"
          intro="Was die Aufgabe war, was ich umgesetzt habe und womit. Nur Fakten, keine Schönfärberei – die Seite selbst können Sie jederzeit live ansehen."
        />

        <div class="mt-12 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <h3 class="t-title border-t-2 border-ink pt-4">Ausgangslage</h3>
            <p class="t-lead mt-4 max-w-text">{{ reference.task }}</p>
          </div>
          <div class="lg:col-span-7">
            <h3 class="t-title border-t-2 border-ink pt-4">Umgesetzt</h3>
            <CheckList class="mt-5" :items="reference.built" />
          </div>
        </div>

        <div class="mt-14">
          <h3 class="t-title border-t-2 border-ink pt-4">Technik</h3>
          <dl class="mt-2 grid sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="fact in facts"
              :key="fact.term"
              class="border-b border-ink/25 py-4 sm:pr-6"
            >
              <dt class="t-label text-ink-soft">{{ fact.term }}</dt>
              <dd class="mt-1 text-lg font-bold">{{ fact.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Weitere Heimspiele -->
    <section class="section" data-rubric="Heimspiele" aria-labelledby="more-title">
      <div class="wrap">
        <SectionHead id="more-title" title="Weitere Heimspiele" :rule="false">
          <NuxtLink to="/referenzen" class="btn btn-outline">Alle Referenzen</NuxtLink>
        </SectionHead>
        <div class="mt-10 grid gap-12 md:grid-cols-2 md:gap-10">
          <article v-for="item in others" :key="item.slug" class="border-t-2 border-ink pt-6">
            <ReferenceShots :reference="item" />
            <h3 class="mt-6 text-4xl uppercase leading-[0.9]" style="font-stretch: 62%; font-weight: 880;">
              <NuxtLink :to="`/referenzen/${item.slug}`" class="decoration-accent decoration-[3px] underline-offset-[0.15em] hover:underline">
                {{ item.name }}
              </NuxtLink>
            </h3>
            <p class="t-label mt-3 text-ink-soft">{{ item.industry }} · {{ item.tool }}</p>
            <p class="mt-3 max-w-lg text-ink-soft">{{ item.summary }}</p>
            <NuxtLink :to="`/referenzen/${item.slug}`" class="link mt-3 inline-flex min-h-11 items-center gap-1.5 font-semibold">
              Zum Spielbericht <span class="sr-only">{{ item.name }}</span>
              <AppIcon name="arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <InquirySection
      title="Ihre Website als nächstes Heimspiel?"
      :source="`Referenz – ${reference.name}`"
    />
  </div>
</template>
