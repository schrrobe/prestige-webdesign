<script setup lang="ts">
const features = [
  { label: 'Individuelle Lösungen', icon: 'star' },
  { label: 'Transparente Kommunikation', icon: 'chat' },
  { label: 'Moderne Technologien', icon: 'chip' },
  { label: 'Langfristige Partnerschaft', icon: 'heart' },
]

const steps = [
  { title: 'Analyse & Strategie', description: 'Wir verstehen Ihr Ziel, Ihre Zielgruppe und Ihren Markt.' },
  { title: 'Design & Entwicklung', description: 'Individuelles Design und saubere technische Umsetzung.' },
  { title: 'Testing & Launch', description: 'Gründliche Tests auf allen Geräten vor dem Go-live.' },
  { title: 'Optimierung & Support', description: 'Laufende Betreuung, Updates und Weiterentwicklung.' },
]

const { el, revealed } = useReveal()
</script>

<template>
  <section class="section-padding relative overflow-hidden bg-dark-800/30">
    <div class="container-narrow mx-auto relative">
      <div
        ref="el"
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <!-- Left Content -->
        <div>
          <SectionHeader
            as="h2"
            align="left"
            label="Über uns"
            title="Ihre Webagentur im"
            highlight="Ruhrgebiet"
          />
          <p class="mt-6 text-dark-200 leading-relaxed">
            Seit Jahren vertrauen Unternehmen aus dem Ruhrgebiet auf Prestige Webdesign für ihre digitalen Projekte. Als spezialisierte Webagentur verstehen wir die besonderen Anforderungen des Mittelstands und schaffen Lösungen, die tatsächlich funktionieren.
          </p>
          <p class="mt-4 text-dark-200 leading-relaxed mb-8">
            Bei Prestige Webdesign steht der Erfolg Ihres Unternehmens im Mittelpunkt. Wir kombinieren kreatives Design mit moderner Technologie und bewährten SEO-Strategien.
          </p>

          <!-- Features -->
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li
              v-for="feature in features"
              :key="feature.label"
              class="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
            >
              <IconBadge :icon="feature.icon" tone="primary" size="sm" />
              <span class="text-sm text-white font-medium">{{ feature.label }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: Process -->
        <div class="glass-card p-8 md:p-10 relative overflow-hidden">
          <div class="blur-blob -top-20 -right-20 w-40 h-40 bg-primary-500/10 !blur-3xl" />
          <ol class="relative space-y-8">
            <li v-for="(step, i) in steps" :key="step.title" class="flex gap-5">
              <div class="relative flex flex-col items-center">
                <span class="w-11 h-11 rounded-xl bg-accent-500/10 ring-1 ring-inset ring-accent-500/25 flex items-center justify-center text-accent-400 font-display font-semibold shrink-0">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <span v-if="i < steps.length - 1" class="mt-2 flex-1 w-px bg-gradient-to-b from-white/15 to-transparent" />
              </div>
              <div class="pb-1">
                <h3 class="text-white font-semibold">{{ step.title }}</h3>
                <p class="mt-1 text-sm text-dark-300 leading-relaxed">{{ step.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
