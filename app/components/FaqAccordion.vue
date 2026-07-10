<script setup lang="ts">
defineProps<{
  items: { question: string; answer: string }[]
}>()
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-3">
    <details
      v-for="(item, index) in items"
      :key="index"
      class="group glass-card overflow-hidden [&_summary::-webkit-details-marker]:hidden"
    >
      <summary
        class="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left list-none"
      >
        <h3 class="text-base md:text-lg font-semibold text-white">{{ item.question }}</h3>
        <AppIcon
          name="chevron-down"
          class="w-5 h-5 shrink-0 text-primary-300 transition-transform duration-300 group-open:rotate-180"
        />
      </summary>
      <div class="px-6 pb-6 -mt-1">
        <p class="text-dark-200 leading-relaxed">{{ item.answer }}</p>
      </div>
    </details>
  </div>
</template>
