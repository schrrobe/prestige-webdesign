<script setup lang="ts">
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 200)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Three.js Background -->
    <ClientOnly>
      <ThreeBackground />
    </ClientOnly>

    <!-- Gradient Overlays -->
    <div class="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/30 to-dark-900 z-[1]" />
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-[1]" />
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 z-[1]" />

    <!-- Content -->
    <div class="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div class="max-w-4xl">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <span class="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <span class="text-primary-300 text-sm font-medium">Webagentur in Dortmund</span>
        </div>

        <!-- Headline -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8 transition-all duration-700 delay-100"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Professionelles
          <span class="text-gradient"> Webdesign</span>
          <br />
          <span class="text-dark-100">&amp; SEO Agentur im</span>
          <br />
          <span class="text-gradient">Ruhrgebiet</span>
        </h1>

        <!-- Subtitle -->
        <p
          class="text-lg md:text-xl text-dark-200 leading-relaxed max-w-2xl mb-12 transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Wir entwickeln moderne, responsive Websites, die Ihre Zielgruppe erreichen und Ihre Online-Präsenz stärken. Mit gezielter Suchmaschinenoptimierung bringen wir Ihr Unternehmen an die Top-Positionen bei Google.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <NuxtLink to="/kontakt" class="btn-primary text-lg">
            Kostenlose Beratung
            <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/leistungen" class="btn-secondary text-lg">
            Unsere Leistungen
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div
          class="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/5 transition-all duration-700 delay-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <div>
            <div class="text-3xl md:text-4xl font-bold text-gradient">50+</div>
            <div class="text-dark-300 text-sm mt-1">Projekte</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-gradient">100%</div>
            <div class="text-dark-300 text-sm mt-1">Zufriedenheit</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-gradient">24h</div>
            <div class="text-dark-300 text-sm mt-1">Antwortzeit</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <svg class="w-6 h-6 text-dark-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
