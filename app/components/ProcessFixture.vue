<script setup lang="ts">
/**
 * Der Ablauf in fünf Schritten – einmal gebaut, auf allen Seiten gleich.
 * Die Ziffern tragen echte Reihenfolge, deshalb stehen sie groß.
 */
import { PROCESS_STEPS, PROCESS_DURATION } from '~/data/process'

withDefaults(defineProps<{ showDuration?: boolean }>(), { showDuration: true })
</script>

<template>
  <div>
    <ol class="border-t border-ink">
      <li
        v-for="(step, i) in PROCESS_STEPS"
        :key="step.title"
        class="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 border-b border-hair py-7 md:grid-cols-12 md:gap-x-8 md:py-9"
      >
        <span class="row-span-3 font-serif text-4xl italic leading-none text-ink-soft md:col-span-1 md:row-span-1 md:text-5xl" style="font-variation-settings: 'opsz' 72;" aria-hidden="true">{{ i + 1 }}</span>
        <h3 class="t-title md:col-span-4 md:col-start-2">
          <span class="sr-only">Schritt {{ i + 1 }}: </span>{{ step.title }}
        </h3>
        <p class="t-label text-ink-soft md:col-span-2 md:col-start-6 md:pt-1.5">{{ step.when }}</p>
        <p class="max-w-xl text-ink-soft md:col-span-5 md:col-start-8">{{ step.description }}</p>
      </li>
    </ol>
    <p v-if="showDuration" class="mt-7 max-w-2xl">{{ PROCESS_DURATION }}</p>
  </div>
</template>
