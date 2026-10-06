<script setup lang="ts">
/**
 * Anzeigetafel mit den bestätigten Kennzahlen. Punktmatrix-Ziffern sind
 * Messwerte, kein Kostüm; Screenreader lesen die <dl> als Klartext.
 */
import { TRUST_STATS, type Stat } from '~/data/site'

withDefaults(defineProps<{ stats?: Stat[] }>(), { stats: () => TRUST_STATS })
</script>

<template>
  <dl class="grid grid-cols-2 bg-board text-board-dot sm:grid-cols-4">
    <div
      v-for="(stat, i) in stats"
      :key="stat.label"
      class="flex flex-col gap-2 px-4 py-4 sm:px-5"
      :class="[i % 2 === 1 ? 'border-l border-board-dot/20' : '', i > 1 ? 'border-t border-board-dot/20 sm:border-t-0' : '', i === 2 ? 'sm:border-l' : '']"
    >
      <dt class="mt-auto text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-field-soft" style="font-stretch: 88%;">{{ stat.label }}</dt>
      <dd class="order-first t-board text-[2.5rem] leading-none sm:text-5xl">{{ stat.value }}</dd>
    </div>
  </dl>
</template>
