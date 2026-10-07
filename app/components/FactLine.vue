<script setup lang="ts">
/**
 * Die bestätigten Kennzahlen als ruhige Zeile mit Haarlinien –
 * keine Kachel-Statistik, sondern eine Angabe wie im Impressum eines Magazins.
 */
import { TRUST_STATS, type Stat } from '~/data/site'

withDefaults(defineProps<{ stats?: Stat[]; large?: boolean }>(), { stats: () => TRUST_STATS, large: false })
</script>

<template>
  <dl class="grid grid-cols-2 border-t border-hair sm:grid-cols-4" :class="large ? 'border-ink' : ''">
    <div
      v-for="(stat, i) in stats"
      :key="stat.label"
      class="flex flex-col gap-1 py-4 pr-4"
      :class="[i % 2 === 1 ? 'sm:pl-5' : '', i >= 2 ? 'border-t border-hair sm:border-t-0' : '', i > 0 ? 'sm:border-l sm:border-hair sm:pl-5' : '']"
    >
      <dt class="order-2 text-sm text-ink-soft">{{ stat.label }}</dt>
      <dd
        class="order-1 font-serif leading-none"
        :class="large ? 'text-5xl md:text-6xl' : 'text-[1.75rem]'"
        style="font-weight: 500; font-variation-settings: 'opsz' 72;"
      >{{ stat.value }}</dd>
    </div>
  </dl>
</template>
