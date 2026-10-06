<script setup lang="ts">
/**
 * „Spielplan“: der Ablauf als Spielansetzung – Zeitpunkt links,
 * Partie rechts. Einmal gebaut, auf allen Seiten gleich.
 */
import { PROCESS_STEPS, PROCESS_DURATION } from '~/data/process'

withDefaults(defineProps<{ showDuration?: boolean }>(), { showDuration: true })
</script>

<template>
  <div>
    <ol class="border-t-2 border-ink">
      <li
        v-for="(step, i) in PROCESS_STEPS"
        :key="step.title"
        class="grid gap-x-8 gap-y-2 border-b border-ink/25 py-6 md:grid-cols-12 md:py-8"
      >
        <p class="t-label order-2 text-ink-soft md:order-none md:col-span-3 md:pt-1.5">
          <span class="sr-only">Schritt {{ i + 1 }}: </span>{{ step.when }}
        </p>
        <h3 class="t-title order-1 md:order-none md:col-span-4">{{ step.title }}</h3>
        <p class="order-3 max-w-xl text-ink-soft md:order-none md:col-span-5">{{ step.description }}</p>
      </li>
    </ol>
    <p v-if="showDuration" class="mt-6 max-w-2xl font-semibold">{{ PROCESS_DURATION }}</p>
  </div>
</template>
