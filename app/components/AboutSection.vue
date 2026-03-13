<script setup lang="ts">
const features = [
  { label: 'Individuelle Lösungen', icon: 'star' },
  { label: 'Transparente Kommunikation', icon: 'chat' },
  { label: 'Moderne Technologien', icon: 'chip' },
  { label: 'Langfristige Partnerschaft', icon: 'heart' },
]
</script>

<template>
  <section class="section-padding relative overflow-hidden bg-dark-800/30">
    <div class="container-narrow mx-auto relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div>
          <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Über uns</span>
          <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            Ihre Webagentur im <span class="text-gradient">Ruhrgebiet</span>
          </h2>
          <p class="text-dark-200 leading-relaxed mb-6">
            Seit Jahren vertrauen Unternehmen aus dem Ruhrgebiet auf Prestige Webdesign für ihre digitalen Projekte. Als spezialisierte Webagentur verstehen wir die besonderen Anforderungen des Mittelstands und schaffen Lösungen, die tatsächlich funktionieren.
          </p>
          <p class="text-dark-200 leading-relaxed mb-8">
            Bei Prestige Webdesign steht der Erfolg Ihres Unternehmens im Mittelpunkt. Wir kombinieren kreatives Design mit moderner Technologie und bewährten SEO-Strategien.
          </p>

          <!-- Features -->
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="feature in features"
              :key="feature.label"
              class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
            >
              <div class="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-sm text-white font-medium">{{ feature.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="relative">
          <div class="glass-card p-8 relative overflow-hidden">
            <!-- Abstract design element -->
            <div class="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
            <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />

            <div class="relative space-y-6">
              <!-- Process steps -->
              <div v-for="(step, i) in ['Analyse & Strategie', 'Design & Entwicklung', 'Testing & Launch', 'Optimierung & Support']" :key="step" class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center text-primary-400 font-bold shrink-0 border border-primary-500/20">
                  {{ String(i + 1).padStart(2, '0') }}
                </div>
                <div>
                  <h4 class="text-white font-semibold">{{ step }}</h4>
                  <div class="h-0.5 w-full mt-2 bg-gradient-to-r from-primary-500/30 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
