<script setup lang="ts">
import type { ThemeChoice } from '~/composables/useTheme'

const { choice, setTheme } = useTheme()

const options: { value: ThemeChoice; label: string }[] = [
  { value: 'system', label: 'Automatisch' },
  { value: 'light', label: 'Hell' },
  { value: 'dark', label: 'Flutlicht' },
]
</script>

<template>
  <fieldset>
    <legend class="t-label mb-2 text-field-soft">Darstellung</legend>
    <div class="inline-flex border-2 border-field-ink">
      <label
        v-for="opt in options"
        :key="opt.value"
        class="relative flex min-h-11 cursor-pointer items-center px-3.5 text-sm font-bold transition-colors duration-150 has-[:checked]:bg-field-ink has-[:checked]:text-field has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-field-ink"
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
