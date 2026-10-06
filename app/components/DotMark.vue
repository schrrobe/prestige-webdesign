<script setup lang="ts">
/**
 * „PW“ als Anzeigetafel-Punktmatrix (5×7 je Buchstabe).
 * Grüne Tafel, Papierpunkte, ein Signalpunkt als „Live“-Lampe.
 */
const P = ['11110', '10001', '10001', '11110', '10000', '10000', '10000']
const W = ['10001', '10001', '10001', '10101', '10101', '10101', '01010']

const dots = computed(() => {
  const out: { x: number; y: number }[] = []
  P.forEach((row, y) => [...row].forEach((c, x) => c === '1' && out.push({ x, y })))
  W.forEach((row, y) => [...row].forEach((c, x) => c === '1' && out.push({ x: x + 6, y })))
  return out
})
</script>

<template>
  <svg viewBox="0 0 13 9" aria-hidden="true" focusable="false">
    <rect width="13" height="9" class="fill-field" />
    <circle
      v-for="(d, i) in dots"
      :key="i"
      :cx="d.x + 1"
      :cy="d.y + 1"
      r="0.4"
      class="fill-field-ink"
    />
    <circle cx="12" cy="1" r="0.4" class="fill-signal" />
  </svg>
</template>
