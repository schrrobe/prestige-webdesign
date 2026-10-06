<script setup lang="ts">
/**
 * „Die Tabelle“: Leistungen mit Preisanker, gesetzt wie eine Ligatabelle.
 * Auf dem Handy wird jede Zeile ein Block – Preis bleibt neben dem Namen.
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
      <tr class="border-b-2 border-ink">
        <th scope="col" class="t-label w-14 pb-3 pr-4 text-ink-soft">Pos.</th>
        <th scope="col" class="t-label pb-3 pr-6 text-ink-soft">Leistung</th>
        <th scope="col" class="t-label pb-3 pr-6 text-ink-soft">Worum es geht</th>
        <th scope="col" class="t-label pb-3 text-right text-ink-soft">Preis</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(service, i) in SERVICES"
        :key="service.slug"
        role="row"
        class="group relative grid grid-cols-[2.5rem_1fr_auto] gap-x-3 border-b border-ink/25 py-5 md:table-row md:py-0"
      >
        <td role="cell" class="row-span-2 pt-1 text-2xl leading-none text-ink-soft md:py-6 md:pr-4 md:align-top" style="font-stretch: 62%; font-weight: 800;">
          {{ i + 1 }}
        </td>
        <th scope="row" role="rowheader" class="md:py-6 md:pr-6 md:align-top">
          <NuxtLink
            :to="service.to"
            class="text-2xl uppercase leading-none after:absolute after:inset-0 after:content-[''] md:text-[2rem]"
            style="font-stretch: 65%; font-weight: 860;"
          >{{ service.title }}</NuxtLink>
          <span class="mt-1.5 block text-sm font-semibold text-ink-soft">{{ service.short }}</span>
        </th>
        <td role="cell" class="col-start-2 col-end-4 row-start-2 mt-3 max-w-xl text-ink-soft md:mt-0 md:py-6 md:pr-6 md:align-top">
          {{ service.description }}
        </td>
        <td role="cell" class="col-start-3 row-start-1 text-right md:py-6 md:align-top">
          <span class="block whitespace-nowrap text-xl leading-none md:text-2xl" style="font-stretch: 75%; font-weight: 820;">{{ service.price }}</span>
          <span class="mt-1.5 block text-sm text-ink-soft">{{ service.priceNote }}</span>
          <AppIcon name="arrow-right" class="ml-auto mt-3 hidden h-6 w-6 text-signal-ink transition-transform duration-200 ease-out group-hover:translate-x-1 md:block" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
