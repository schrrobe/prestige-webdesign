<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'paper' | 'field' }>(), { tone: 'paper' })
</script>

<template>
  <NuxtLink to="/" class="group inline-flex items-center gap-3">
    <DotMark class="h-8 w-auto shrink-0" />
    <span class="flex flex-col leading-none">
      <span class="text-[1.375rem] uppercase tracking-[0.01em]" style="font-stretch: 62%; font-weight: 880;">Prestige</span>
      <span
        class="mt-0.5 text-[0.6875rem] uppercase tracking-[0.12em]"
        :class="tone === 'field' ? 'text-field-soft' : 'text-ink-soft'"
        style="font-stretch: 88%; font-weight: 650;"
      >Webdesign · Dortmund</span>
      <span class="sr-only"> – zur Startseite</span>
    </span>
  </NuxtLink>
</template>
