<script setup lang="ts">
/**
 * Desktop- und Handy-Ansicht, übereinandergelegt wie zwei eingeklebte
 * Bilder im Heft: Tiefe durch Überlappung, nicht durch Schatten.
 */
import type { Reference } from '~/data/references'

withDefaults(defineProps<{ reference: Reference; eager?: boolean }>(), { eager: false })
</script>

<template>
  <div class="relative pb-[12%] pr-[9%]">
    <img
      :src="reference.images.desktop"
      :alt="`Startseite von ${reference.name} auf dem Desktop`"
      width="1440"
      height="900"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
      class="block aspect-[16/10] w-full border-2 border-ink bg-sheet object-cover object-top"
    />
    <img
      :src="reference.images.mobile"
      :alt="`Startseite von ${reference.name} auf dem Smartphone`"
      width="390"
      height="844"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
      class="absolute bottom-0 right-0 block aspect-[390/700] w-[27%] border-2 border-ink bg-sheet object-cover object-top"
    />
  </div>
</template>
