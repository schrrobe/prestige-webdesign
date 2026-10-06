<script setup lang="ts">
/**
 * Häufige Fragen als native <details>. Die Frage steht als reiner Text im
 * <summary> (keine Überschrift darin – das bricht Screenreader-Rollen).
 */
defineProps<{ items: { question: string; answer: string }[] }>()
</script>

<template>
  <div class="border-t-2 border-ink">
    <details v-for="(item, i) in items" :key="i" class="group border-b border-ink/25">
      <summary class="flex min-h-14 cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-bold leading-snug marker:hidden [&::-webkit-details-marker]:hidden md:text-xl" style="font-stretch: 90%;">
        <span>{{ item.question }}</span>
        <span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center border-2 border-ink transition-colors duration-150 group-open:bg-ink group-open:text-paper" aria-hidden="true">
          <AppIcon name="plus" class="h-4 w-4 transition-transform duration-200 group-open:rotate-45" />
        </span>
      </summary>
      <p class="max-w-text pb-6 text-ink-soft">{{ item.answer }}</p>
    </details>
  </div>
</template>
