<script setup lang="ts">
withDefaults(
  defineProps<{
    badge?: string
    title?: string
    highlight?: string
    subtitle?: string
    align?: 'center' | 'left'
    compact?: boolean
  }>(),
  { align: 'left', compact: false },
)
</script>

<template>
  <section class="relative overflow-hidden">
    <HeroBackdrop />

    <div
      class="relative z-10 container-narrow px-4 sm:px-6 lg:px-8"
      :class="compact ? 'pt-28 pb-14 md:pt-32 md:pb-20' : 'pt-32 pb-20 md:pt-40 md:pb-28'"
    >
      <div :class="[align === 'center' ? 'mx-auto text-center max-w-3xl' : 'max-w-3xl']">
        <span
          v-if="badge"
          class="inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 text-sm font-medium text-primary-300"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-primary-400" />
          {{ badge }}
        </span>

        <h1 class="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white leading-[1.08]">
          <slot name="title">
            {{ title }}<template v-if="highlight"> <span class="text-gradient">{{ highlight }}</span></template>
          </slot>
        </h1>

        <p
          v-if="subtitle"
          class="mt-6 text-lg md:text-xl text-dark-200 leading-relaxed"
          :class="align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'"
        >
          {{ subtitle }}
        </p>

        <div
          v-if="$slots.default"
          class="mt-9 flex flex-col sm:flex-row gap-4"
          :class="align === 'center' ? 'sm:justify-center' : ''"
        >
          <slot />
        </div>

        <div v-if="$slots.after" class="mt-14">
          <slot name="after" />
        </div>
      </div>
    </div>
  </section>
</template>
