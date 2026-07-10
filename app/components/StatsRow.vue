<script setup lang="ts">
import { TRUST_STATS, type Stat } from '~/data/site'

withDefaults(
  defineProps<{
    stats?: Stat[]
    bordered?: boolean
  }>(),
  { stats: () => TRUST_STATS, bordered: false },
)
</script>

<template>
  <dl
    class="grid grid-cols-3 gap-4 sm:gap-8"
    :class="bordered ? 'pt-8 border-t border-white/10' : ''"
  >
    <div v-for="stat in stats" :key="stat.label" class="text-center sm:text-left">
      <dt class="sr-only">{{ stat.label }}</dt>
      <dd>
        <span class="block text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-white">{{ stat.value }}</span>
        <span class="mt-1 block text-xs sm:text-sm text-dark-300">{{ stat.label }}</span>
      </dd>
    </div>
  </dl>
</template>
