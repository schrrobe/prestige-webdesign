<script setup lang="ts">
/**
 * Titelseite einer Unterseite: grüne Fläche, Brotkrumen, H1 in der
 * schmalen Plakatschrift. Rechts optional ein Beiblatt (Slot „aside“).
 */
const props = withDefaults(
  defineProps<{
    title?: string
    lead?: string
    rubric?: string
    size?: 'xl' | 'lg' | 'auto'
    crumbs?: boolean
    align?: 'end' | 'start'
  }>(),
  { rubric: 'Titelseite', size: 'auto', crumbs: true, align: 'end' },
)

const trail = useBreadcrumbs()

const sizeClass = computed(() => {
  const size = props.size === 'auto'
    ? ((props.title?.length ?? 0) > 34 ? 'lg' : 'xl')
    : props.size
  return size === 'xl'
    ? 'text-[3.25rem] sm:text-7xl lg:text-8xl'
    : 'text-[2.5rem] sm:text-6xl lg:text-7xl'
})
</script>

<template>
  <section class="on-field relative" :data-rubric="rubric">
    <div class="wrap pb-14 pt-6 md:pb-20 md:pt-8">
      <nav v-if="crumbs && trail.length > 1" aria-label="Brotkrumen" class="mb-10 md:mb-14">
        <ol class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-field-soft">
          <li v-for="(crumb, i) in trail" :key="crumb.path" class="flex items-center gap-2">
            <NuxtLink
              v-if="i < trail.length - 1"
              :to="crumb.path"
              class="inline-flex min-h-11 items-center underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-signal"
            >{{ crumb.name }}</NuxtLink>
            <span v-else aria-current="page" class="text-field-ink">{{ crumb.name }}</span>
            <span v-if="i < trail.length - 1" aria-hidden="true">/</span>
          </li>
        </ol>
      </nav>

      <div class="grid gap-10 lg:grid-cols-12" :class="align === 'start' ? 'lg:items-start' : 'lg:items-end'">
        <div :class="$slots.aside ? 'lg:col-span-7' : 'lg:col-span-10'">
          <h1 class="t-display" :class="sizeClass">
            <slot name="title">{{ title }}</slot>
          </h1>
          <p v-if="lead" class="t-lead mt-6 max-w-2xl md:mt-8">{{ lead }}</p>
          <slot name="lead" />
          <div v-if="$slots.default" class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <slot />
          </div>
        </div>
        <div v-if="$slots.aside" class="lg:col-span-5">
          <slot name="aside" />
        </div>
      </div>
    </div>
  </section>
</template>
