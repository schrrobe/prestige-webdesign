<script setup lang="ts">
import type { ThemeChoice } from '~/composables/useTheme'

const { choice, setTheme } = useTheme()

const options: { value: ThemeChoice; label: string }[] = [
  { value: 'system', label: 'Automatisch' },
  { value: 'light', label: 'Hell' },
  { value: 'dark', label: 'Dunkel' },
]
</script>

<template>
  <fieldset>
    <legend class="t-label mb-2 text-ink-soft">Darstellung</legend>
    <div class="inline-flex rounded-full border border-line p-1">
      <label
        v-for="opt in options"
        :key="opt.value"
        class="relative flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-medium transition-colors duration-150 has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink"
      >
        <input
          type="radio"
          name="theme"
          class="sr-only"
          :value="opt.value"
          :checked="choice === opt.value"
          @change="setTheme(opt.value)"
        />
        {{ opt.label }}
      </label>
    </div>
  </fieldset>
</template>
