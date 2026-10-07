<script setup lang="ts">
/**
 * Leistungen mit Preisanker als ruhige Tabelle: Serifen-Name, Beschreibung,
 * Preis in Tabellenziffern. Auf dem Handy wird jede Zeile ein Block.
 */
import { SERVICES } from '~/data/services'

withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Leistungen und Preise – alle Projekte zum Festpreis nach dem Erstgespräch',
})
</script>

<template>
  <table class="w-full border-collapse text-left" role="table">
    <caption class="sr-only">{{ caption }}</caption>
    <thead class="hidden md:table-header-group">
      <tr class="border-b border-ink">
        <th scope="col" class="t-label pb-4 pr-8 text-ink-soft">Leistung</th>
        <th scope="col" class="t-label pb-4 pr-8 text-ink-soft">Worum es geht</th>
        <th scope="col" class="t-label pb-4 text-right text-ink-soft">Preis</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="service in SERVICES"
        :key="service.slug"
        role="row"
        class="group relative grid grid-cols-[1fr_auto] gap-x-4 border-b border-hair py-6 transition-colors duration-200 hover:bg-stone/60 md:table-row md:py-0"
      >
        <th scope="row" role="rowheader" class="md:w-[30%] md:py-8 md:pl-2 md:pr-8 md:align-top">
          <NuxtLink
            :to="service.to"
            class="font-serif text-[1.75rem] leading-none after:absolute after:inset-0 after:content-[''] md:text-[2rem]"
            style="font-weight: 500; font-variation-settings: 'opsz' 48;"
          >{{ service.title }}</NuxtLink>
          <span class="mt-2 block text-sm text-ink-soft">{{ service.short }}</span>
        </th>
        <td role="cell" class="col-span-2 row-start-2 mt-3 max-w-xl text-ink-soft md:mt-0 md:py-8 md:pr-8 md:align-top">
          {{ service.description }}
        </td>
        <td role="cell" class="col-start-2 row-start-1 text-right md:py-8 md:pr-2 md:align-top">
          <span class="tabular block whitespace-nowrap text-lg font-semibold leading-none md:text-xl">{{ service.price }}</span>
          <span class="mt-2 block text-sm text-ink-soft">{{ service.priceNote }}</span>
          <AppIcon name="arrow-right" class="ml-auto mt-4 hidden h-5 w-5 text-accent transition-transform duration-200 ease-out group-hover:translate-x-1 md:block" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
