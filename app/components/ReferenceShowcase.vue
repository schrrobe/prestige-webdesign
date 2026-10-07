<script setup lang="ts">
/**
 * Referenzen wie Magazin-Strecken: das Vorzeigeprojekt groß mit Bildunterschrift,
 * die übrigen zweispaltig. Jede führt zur Fallstudie und zur Live-Seite.
 */
import { REFERENCES } from '~/data/references'

const featured = REFERENCES[0]!
const others = REFERENCES.slice(1)
</script>

<template>
  <div>
    <article class="grid gap-10 border-t border-ink pt-10 lg:grid-cols-12 lg:gap-12">
      <figure class="lg:order-2 lg:col-span-7">
        <ReferenceShots :reference="featured" />
        <figcaption class="mt-4 text-sm text-ink-soft">{{ featured.name }}, {{ featured.location }} – Desktop- und Handy-Ansicht der Startseite.</figcaption>
      </figure>
      <div class="flex flex-col lg:order-1 lg:col-span-5">
        <h3 class="font-serif text-5xl leading-[1.02] md:text-6xl" style="font-weight: 500; font-variation-settings: 'opsz' 96;">
          {{ featured.name }}
        </h3>
        <p class="mt-3 text-ink-soft">{{ featured.industry }} · {{ featured.location }}</p>
        <p class="t-lead mt-6">{{ featured.summary }}</p>
        <dl class="mt-8 grid grid-cols-2 gap-6 border-t border-hair pt-5 text-[0.9375rem]">
          <div>
            <dt class="t-label text-ink-soft">Umsetzung</dt>
            <dd class="mt-1.5 font-semibold">{{ featured.tool }}</dd>
          </div>
          <div>
            <dt class="t-label text-ink-soft">Meine Rolle</dt>
            <dd class="mt-1.5 font-semibold">{{ featured.role }}</dd>
          </div>
        </dl>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-10">
          <NuxtLink :to="`/referenzen/${featured.slug}`" class="btn btn-dark">
            Zur Fallstudie
            <span class="sr-only">{{ featured.name }}</span>
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </NuxtLink>
          <a :href="featured.url" target="_blank" rel="noopener" class="btn btn-outline">
            Live ansehen
            <span class="sr-only">: {{ featured.host }} (öffnet neuen Tab)</span>
            <AppIcon name="arrow-up-right" class="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>

    <div class="mt-20 grid gap-16 md:grid-cols-2 md:gap-12">
      <article v-for="item in others" :key="item.slug" class="border-t border-hair pt-8">
        <ReferenceShots :reference="item" />
        <h3 class="mt-8 font-serif text-[2.25rem] leading-[1.05]" style="font-weight: 500; font-variation-settings: 'opsz' 72;">
          <NuxtLink :to="`/referenzen/${item.slug}`" class="underline decoration-transparent decoration-1 underline-offset-[0.18em] hover:decoration-accent">
            {{ item.name }}
          </NuxtLink>
        </h3>
        <p class="mt-2 text-ink-soft">{{ item.industry }} · {{ item.tool }}</p>
        <p class="mt-4 max-w-lg">{{ item.summary }}</p>
        <a :href="item.url" target="_blank" rel="noopener" class="link mt-4 inline-flex min-h-11 items-center gap-1.5 font-medium">
          {{ item.host }}
          <span class="sr-only">(öffnet neuen Tab)</span>
          <AppIcon name="arrow-up-right" class="h-4 w-4" />
        </a>
      </article>
    </div>
  </div>
</template>
