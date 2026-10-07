<script setup lang="ts">
/**
 * Desktop- und Handy-Ansicht als Aufmacherbild: das Handy überlappt die
 * Desktop-Ansicht leicht – Tiefe durch Lage, ein weicher realer Schatten.
 */
import type { Reference } from '~/data/references'

withDefaults(defineProps<{ reference: Reference; eager?: boolean; reveal?: boolean }>(), { eager: false, reveal: false })
</script>

<template>
  <div class="relative pb-[10%] pr-[8%]" :class="{ 'animate-lead': reveal }">
    <img
      :src="reference.images.desktop"
      :alt="`Startseite von ${reference.name} auf dem Desktop`"
      width="1440"
      height="900"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : undefined"
      decoding="async"
      class="block aspect-[16/10] w-full rounded-md border border-hair bg-stone object-cover object-top"
    />
    <img
      :src="reference.images.mobile"
      :alt="`Startseite von ${reference.name} auf dem Smartphone`"
      width="390"
      height="844"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
      class="absolute bottom-0 right-0 block aspect-[390/720] w-[26%] rounded-[0.9rem] border-[3px] border-ink bg-stone object-cover object-top shadow-[0_24px_48px_-20px_rgba(0,0,0,0.45)]"
    />
  </div>
</template>
