<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

defineProps<{
  title: string
  intro: string
  items: FaqItem[]
}>()
</script>

<template>
  <section class="section-padding relative overflow-hidden bg-dark-800/30">
    <div class="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-transparent" />

    <div class="container-narrow mx-auto relative">
      <SectionHeader
        as="h2"
        align="center"
        :title="title"
        :subtitle="intro"
        class="mb-12"
      />
      <FaqAccordion :items="items" />
    </div>
  </section>
</template>
