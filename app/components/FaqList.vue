<script setup lang="ts">
/**
 * Häufige Fragen als native <details>. Die Frage steht als reiner Text im
 * <summary> (keine Überschrift darin – das bricht Screenreader-Rollen).
 */
defineProps<{ items: { question: string; answer: string }[] }>()
</script>

<template>
  <div class="border-t border-ink">
    <details v-for="(item, i) in items" :key="i" class="group border-b border-hair">
      <summary class="flex min-h-16 cursor-pointer list-none items-start justify-between gap-6 py-6 font-serif text-xl leading-snug marker:hidden [&::-webkit-details-marker]:hidden md:text-2xl" style="font-weight: 500; font-variation-settings: 'opsz' 36;">
        <span>{{ item.question }}</span>
        <span class="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-colors duration-200 group-open:border-ink group-open:bg-ink group-open:text-paper" aria-hidden="true">
          <AppIcon name="plus" class="h-4 w-4 transition-transform duration-300 ease-out group-open:rotate-45" />
        </span>
      </summary>
      <p class="max-w-text pb-7 text-ink-soft">{{ item.answer }}</p>
    </details>
  </div>
</template>
