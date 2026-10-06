<script setup lang="ts">
/**
 * „Anpfiff“: der Abschluss jeder Seite – Text links, Eintrittskarte rechts.
 * Ersetzt die frühere CTASection; Besucher fragen direkt hier an.
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
    source: 'Anpfiff',
  },
)
</script>

<template>
  <section id="anpfiff" class="on-field scroll-mt-16" data-rubric="Anpfiff" aria-labelledby="kickoff-title">
    <div class="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-center">
      <div class="lg:col-span-6">
        <h2 id="kickoff-title" class="t-display text-[3.25rem] sm:text-7xl lg:text-[5.5rem]">{{ title }}</h2>
        <p class="t-lead mt-6 max-w-xl text-field-soft">{{ text }}</p>
        <ul class="mt-8 space-y-2 font-semibold">
          <li class="flex gap-3"><AppIcon name="check" class="mt-1 h-5 w-5 shrink-0" />Antwort innerhalb von 24 Stunden</li>
          <li class="flex gap-3"><AppIcon name="check" class="mt-1 h-5 w-5 shrink-0" />Ein Ansprechpartner – keine Weitergabe</li>
          <li class="flex gap-3"><AppIcon name="check" class="mt-1 h-5 w-5 shrink-0" />Festpreis, bevor es losgeht</li>
        </ul>
      </div>
      <div class="lg:col-span-5 lg:col-start-8">
        <TicketForm :source="source" heading-level="h3" />
      </div>
    </div>
  </section>
</template>
