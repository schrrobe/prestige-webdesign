<script setup lang="ts">
/**
 * „Heimspiele“: das Vorzeigeprojekt groß (face-out), die übrigen kompakt.
 * Jede Referenz führt zur Fallstudie und zur Live-Seite.
 */
import { REFERENCES } from '~/data/references'

const featured = REFERENCES[0]!
const others = REFERENCES.slice(1)
</script>

<template>
  <div>
    <article class="grid gap-8 border-t-2 border-ink pt-8 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-7 lg:order-2">
        <ReferenceShots :reference="featured" />
      </div>
      <div class="flex flex-col lg:col-span-5 lg:order-1">
        <h3 class="text-5xl uppercase leading-[0.9] md:text-6xl" style="font-stretch: 62%; font-weight: 880;">
          {{ featured.name }}
        </h3>
        <p class="mt-3 font-semibold text-ink-soft">{{ featured.industry }} · {{ featured.location }}</p>
        <p class="t-lead mt-5">{{ featured.summary }}</p>
        <dl class="mt-6 grid grid-cols-2 gap-4 border-y border-ink/25 py-4 text-sm">
          <div>
            <dt class="t-label text-ink-soft">Umsetzung</dt>
            <dd class="mt-1 font-bold">{{ featured.tool }}</dd>
          </div>
          <div>
            <dt class="t-label text-ink-soft">Meine Rolle</dt>
            <dd class="mt-1 font-bold">Design &amp; Umsetzung</dd>
          </div>
        </dl>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-8">
          <NuxtLink :to="`/referenzen/${featured.slug}`" class="btn btn-ink">
            Zur Fallstudie
            <span class="sr-only">{{ featured.name }}</span>
          </NuxtLink>
          <a :href="featured.url" target="_blank" rel="noopener" class="btn btn-outline">
            Live ansehen
            <span class="sr-only">: {{ featured.host }} (öffnet neuen Tab)</span>
            <AppIcon name="arrow-up-right" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </article>

    <div class="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
      <article v-for="item in others" :key="item.slug" class="border-t-2 border-ink pt-6">
        <ReferenceShots :reference="item" />
        <h3 class="mt-6 text-4xl uppercase leading-[0.9]" style="font-stretch: 62%; font-weight: 880;">
          <NuxtLink :to="`/referenzen/${item.slug}`" class="decoration-signal decoration-[3px] underline-offset-[0.15em] hover:underline">
            {{ item.name }}
          </NuxtLink>
        </h3>
        <p class="mt-2 font-semibold text-ink-soft">{{ item.industry }} · {{ item.tool }}</p>
        <p class="mt-3 max-w-lg text-ink-soft">{{ item.summary }}</p>
        <a :href="item.url" target="_blank" rel="noopener" class="link mt-3 inline-flex min-h-11 items-center gap-1.5 font-semibold">
          {{ item.host }}
          <span class="sr-only">(öffnet neuen Tab)</span>
          <AppIcon name="arrow-up-right" class="h-4 w-4" />
        </a>
      </article>
    </div>
  </div>
</template>
