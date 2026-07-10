<script setup lang="ts">
/**
 * Leichter, rein CSS-basierter Hero-Hintergrund (Ersatz für die frühere
 * Three.js-Partikelanimation). Deterministisch, kein JS, kein ClientOnly nötig
 * und respektiert prefers-reduced-motion (Drift-Animation ist gated).
 */
withDefaults(defineProps<{ dots?: boolean }>(), { dots: true })
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <!-- Gradient-Mesh -->
    <div class="absolute inset-0 bg-mesh" />

    <!-- Feines Punktraster, an den Rändern ausgeblendet -->
    <div v-if="dots" class="absolute inset-0 bg-dot-grid mask-fade-edges opacity-60" />

    <!-- Sanfte Farbwolken -->
    <div class="blur-blob top-[-10%] left-[-5%] w-[520px] h-[520px] max-w-[70vw] bg-primary-600/15 animate-drift" />
    <div class="blur-blob bottom-[-15%] right-[-5%] w-[440px] h-[440px] max-w-[60vw] bg-accent-500/10 animate-drift-slow" />

    <!-- Weicher Übergang nach unten in den Seitenhintergrund -->
    <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-dark-900" />
  </div>
</template>
