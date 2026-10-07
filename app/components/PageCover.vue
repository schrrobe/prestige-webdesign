<script setup lang="ts">
/**
 * Seitenkopf wie der Aufmacher eines Magazins: Brotkrumen, große Serifen-
 * Überschrift (ein Wort darf mit <em> kursiv in Ochsenblut stehen), Vorspann.
 * Rechts optional ein Beiblatt (Slot „aside“) – Preis, Formular oder Bild.
 */
const props = withDefaults(
  defineProps<{
    title?: string
    lead?: string
    size?: 'xl' | 'lg' | 'auto'
    crumbs?: boolean
    align?: 'end' | 'start'
  }>(),
  { size: 'auto', crumbs: true, align: 'end' },
)

const trail = useBreadcrumbs()

const sizeClass = computed(() => {
  const size = props.size === 'auto'
    ? ((props.title?.length ?? 0) > 34 ? 'lg' : 'xl')
    : props.size
  return size === 'xl'
    ? 'text-[2.875rem] sm:text-6xl lg:text-[5rem]'
    : 'text-[2.375rem] sm:text-5xl lg:text-[4rem]'
})
</script>

<template>
  <section class="border-b border-hair">
    <div class="wrap pb-16 pt-8 md:pb-24 md:pt-10">
      <nav v-if="crumbs && trail.length > 1" aria-label="Brotkrumen" class="mb-12 md:mb-16">
        <ol class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
          <li v-for="(crumb, i) in trail" :key="crumb.path" class="flex items-center gap-2">
            <NuxtLink
              v-if="i < trail.length - 1"
              :to="crumb.path"
              class="inline-flex min-h-11 items-center underline decoration-transparent underline-offset-4 hover:decoration-current"
            >{{ crumb.name }}</NuxtLink>
            <span v-else aria-current="page" class="text-ink">{{ crumb.name }}</span>
            <span v-if="i < trail.length - 1" aria-hidden="true" class="text-line">/</span>
          </li>
        </ol>
      </nav>

      <div class="grid gap-12 lg:grid-cols-12" :class="align === 'start' ? 'lg:items-start' : 'lg:items-end'">
        <div :class="$slots.aside ? 'lg:col-span-7' : 'lg:col-span-10'">
          <h1 class="t-display" :class="sizeClass">
            <slot name="title">{{ title }}</slot>
          </h1>
          <p v-if="lead" class="t-lead mt-7 max-w-2xl text-ink-soft md:mt-9">{{ lead }}</p>
          <slot name="lead" />
          <div v-if="$slots.default" class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <slot />
          </div>
        </div>
        <div v-if="$slots.aside" class="lg:col-span-5 lg:col-start-8">
          <slot name="aside" />
        </div>
      </div>
    </div>
  </section>
</template>
