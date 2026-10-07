<script setup lang="ts">
/**
 * Abschluss jeder Seite auf Ochsenblut: Text links, Kurzanfrage rechts.
 */
withDefaults(
  defineProps<{
    title?: string
    text?: string
    source?: string
  }>(),
  {
    title: 'Lassen Sie uns über Ihre Website sprechen.',
    text: 'Das Erstgespräch ist kostenlos und unverbindlich. Danach bekommen Sie ein Angebot zum Festpreis – und entscheiden in Ruhe.',
    source: 'Abschluss',
  },
)
</script>

<template>
  <section id="anfrage-abschluss" class="on-accent scroll-mt-16" aria-labelledby="inquiry-title">
    <div class="wrap grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:items-start">
      <div class="lg:col-span-6">
        <h2 id="inquiry-title" class="t-display text-[2.75rem] sm:text-6xl lg:text-[4.25rem]">{{ title }}</h2>
        <p class="t-lead mt-7 max-w-xl text-ink-soft">{{ text }}</p>
        <ul class="mt-9 space-y-2.5">
          <li class="flex gap-3"><AppIcon name="check" class="mt-1 h-[1.125rem] w-[1.125rem] shrink-0" />Antwort innerhalb von 24 Stunden</li>
          <li class="flex gap-3"><AppIcon name="check" class="mt-1 h-[1.125rem] w-[1.125rem] shrink-0" />Ein Ansprechpartner – keine Weitergabe</li>
          <li class="flex gap-3"><AppIcon name="check" class="mt-1 h-[1.125rem] w-[1.125rem] shrink-0" />Festpreis, bevor es losgeht</li>
        </ul>
      </div>
      <div class="lg:col-span-5 lg:col-start-8">
        <QuickInquiry :source="source" heading-level="h3" :framed="false" />
      </div>
    </div>
  </section>
</template>
