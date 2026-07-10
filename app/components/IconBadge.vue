<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string
    tone?: 'primary' | 'accent' | 'blue' | 'purple' | 'orange' | 'green' | 'indigo' | 'cyan'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { tone: 'primary', size: 'md' },
)

// Vollständige Literal-Klassen (purge-sicher – keine dynamische Konkatenation)
const tones: Record<string, string> = {
  primary: 'bg-primary-500/10 text-primary-300 ring-1 ring-inset ring-primary-500/25',
  accent: 'bg-accent-500/10 text-accent-400 ring-1 ring-inset ring-accent-500/25',
  blue: 'bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-500/25',
  purple: 'bg-purple-500/10 text-purple-300 ring-1 ring-inset ring-purple-500/25',
  orange: 'bg-orange-500/10 text-orange-300 ring-1 ring-inset ring-orange-500/25',
  green: 'bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/25',
  indigo: 'bg-indigo-500/10 text-indigo-300 ring-1 ring-inset ring-indigo-500/25',
  cyan: 'bg-cyan-500/10 text-cyan-300 ring-1 ring-inset ring-cyan-500/25',
}

const sizes: Record<string, string> = {
  sm: 'w-9 h-9 rounded-lg',
  md: 'w-12 h-12 rounded-xl',
  lg: 'w-14 h-14 rounded-2xl',
}

const iconSizes: Record<string, string> = {
  sm: 'w-[18px] h-[18px]',
  md: 'w-6 h-6',
  lg: 'w-7 h-7',
}
</script>

<template>
  <span
    class="inline-flex items-center justify-center shrink-0 transition-transform duration-300"
    :class="[tones[tone], sizes[size]]"
  >
    <AppIcon :name="icon" :class="iconSizes[size]" />
  </span>
</template>
