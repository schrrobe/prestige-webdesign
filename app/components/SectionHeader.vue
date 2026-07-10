<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    title?: string
    highlight?: string
    subtitle?: string
    align?: 'center' | 'left'
    as?: 'h2' | 'h3'
  }>(),
  { align: 'center', as: 'h2' },
)
</script>

<template>
  <div
    class="max-w-2xl"
    :class="align === 'center' ? 'mx-auto text-center' : 'text-left'"
  >
    <span v-if="label" class="eyebrow mb-4">{{ label }}</span>
    <component
      :is="as"
      class="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-semibold text-white leading-tight"
    >
      <slot name="title">
        {{ title }}<template v-if="highlight"> <span class="text-gradient">{{ highlight }}</span></template>
      </slot>
    </component>
    <p v-if="subtitle" class="mt-5 text-dark-200 text-base md:text-lg leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>
