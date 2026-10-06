<script setup lang="ts">
/**
 * Abschnittskopf wie im Heft: kräftige Linie, schmale Überschrift,
 * optionaler Vorspann. Keine Dachzeile – die Überschrift trägt selbst.
 */
withDefaults(
  defineProps<{
    title?: string
    intro?: string
    as?: 'h2' | 'h3'
    id?: string
    rule?: boolean
  }>(),
  { as: 'h2', rule: true },
)
</script>

<template>
  <div :class="rule ? 'rule-heavy pt-6 md:pt-8' : ''">
    <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div class="max-w-3xl">
        <component :is="as" :id="id" class="t-headline">
          <slot name="title">{{ title }}</slot>
        </component>
        <p v-if="intro" class="t-lead mt-5 max-w-2xl text-ink-soft">{{ intro }}</p>
        <slot name="intro" />
      </div>
      <div v-if="$slots.default" class="shrink-0">
        <slot />
      </div>
    </div>
  </div>
</template>
