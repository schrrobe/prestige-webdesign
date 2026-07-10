<script setup lang="ts">
// Entrance-Animation läuft rein über CSS (motion-safe + fade-up), daher kein JS nötig.
</script>

<template>
  <section class="relative flex items-center overflow-hidden min-h-[92vh] md:min-h-screen">
    <!-- CSS-Hintergrund (ersetzt die frühere Three.js-Szene) -->
    <HeroBackdrop />

    <!-- Content -->
    <div class="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <div class="max-w-4xl">
        <!-- Badge -->
        <div class="motion-safe:animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
          <span class="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <span class="text-primary-300 text-sm font-medium">Webagentur in Dortmund</span>
        </div>

        <!-- Headline -->
        <h1 class="motion-safe:animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.08] mb-8 text-balance" style="animation-delay: 80ms">
          <span class="text-white">Professionelles </span>
          <span class="text-gradient">Webdesign</span>
          <span class="text-white"> &amp; SEO im </span>
          <span class="text-gradient">Ruhrgebiet</span>
        </h1>

        <!-- Subtitle -->
        <p class="motion-safe:animate-fade-up text-lg md:text-xl text-dark-200 leading-relaxed max-w-2xl mb-10" style="animation-delay: 160ms">
          Wir entwickeln moderne, responsive Websites, die Ihre Zielgruppe erreichen und Ihre Online-Präsenz stärken. Mit gezielter Suchmaschinenoptimierung bringen wir Ihr Unternehmen an die Top-Positionen bei Google.
        </p>

        <!-- CTAs -->
        <div class="motion-safe:animate-fade-up flex flex-col sm:flex-row gap-4" style="animation-delay: 240ms">
          <NuxtLink to="/kontakt" class="btn-primary text-base">
            Kostenlose Beratung
            <AppIcon name="arrow-right" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="/leistungen" class="btn-secondary text-base">
            Unsere Leistungen
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="motion-safe:animate-fade-up mt-16 pt-8 max-w-xl border-t border-white/10" style="animation-delay: 360ms">
          <StatsRow />
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block motion-safe:animate-bounce">
      <AppIcon name="chevron-down" class="w-6 h-6 text-dark-300" />
    </div>
  </section>
</template>
