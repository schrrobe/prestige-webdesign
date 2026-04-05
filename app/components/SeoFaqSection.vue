<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

interface Props {
  title: string
  intro: string
  items: FaqItem[]
}

defineProps<Props>()
</script>

<template>
  <section class="section-padding relative overflow-hidden bg-dark-800/30">
    <div class="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-transparent" />

    <div class="container-narrow mx-auto relative">
      <div class="max-w-3xl mb-12">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          {{ title }}
        </h2>
        <p class="text-dark-200 text-lg leading-relaxed">
          {{ intro }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="item in items"
          :key="item.question"
          class="glass-card p-8 h-full"
        >
          <h3 class="text-xl font-semibold text-white mb-4">
            {{ item.question }}
          </h3>
          <p class="text-dark-200 leading-relaxed">
            {{ item.answer }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
