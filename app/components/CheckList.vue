<script setup lang="ts">
defineProps<{ items: string[]; columns?: boolean }>()
</script>

<template>
  <ul class="grid gap-x-10 gap-y-3" :class="columns ? 'sm:grid-cols-2' : ''">
    <li v-for="item in items" :key="item" class="flex gap-3">
      <AppIcon name="check" class="mt-1 h-[1.125rem] w-[1.125rem] shrink-0 text-ink" />
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
