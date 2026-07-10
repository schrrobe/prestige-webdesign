<script setup lang="ts">
const faqItems = [
  {
    question: 'Warum brauche ich regelmäßige Website-Wartung?',
    answer: 'Websites ohne Wartung werden zur Sicherheitslücke: Veraltete Plugins, fehlende Updates und ungepatchte Sicherheitslücken laden Angreifer ein. Außerdem verlieren nicht gewartete Websites an Ladegeschwindigkeit und damit an Google-Rankings.',
  },
  {
    question: 'Was passiert, wenn ich keine Wartung buche?',
    answer: 'Ohne Wartung riskieren Sie Hackerangriffe, Datenverlust, Website-Ausfälle und schlechtere Google-Rankings. Im schlimmsten Fall müssen Sie Ihre Website komplett neu aufsetzen – das kostet deutlich mehr als regelmäßige Wartung.',
  },
  {
    question: 'Kann ich das Wartungspaket jederzeit kündigen?',
    answer: 'Ja, alle Wartungspakete sind monatlich kündbar. Es gibt keine langen Vertragslaufzeiten. Zusätzlich bieten wir eine kostenlose Testwoche für alle Pakete an.',
  },
  {
    question: 'Wie schnell reagieren Sie bei Problemen?',
    answer: 'Im Basis-Paket antworten wir per E-Mail innerhalb von 24 Stunden. Im Professional-Paket garantieren wir eine Reaktionszeit von 4 Stunden. Im Premium-Paket haben Sie einen dedizierten Ansprechpartner für schnellstmögliche Reaktionszeiten.',
  },
]

useSeoMeta({
  title: 'Website Wartung | Prestige Webdesign – Support & Updates',
  description: 'Website Wartung und Support für Ihre Website. Sicherheitsupdates, Backups, Performance-Optimierung und 24/7 Monitoring. Prestige Webdesign Ruhrgebiet.',
  ogTitle: 'Website Wartung & Support | Prestige Webdesign',
  ogDescription: 'Professionelle Website-Wartung: Updates, Backups, Sicherheit und Performance-Optimierung für Ihre Website.',
})

useHead({
  script: [
    {
      key: 'wartung-faq-schema',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }),
    },
  ],
})

const packages = [
  {
    name: 'Basis',
    price: '79',
    period: '/ Monat',
    description: 'Perfekt für kleinere Websites mit grundlegenden Anforderungen.',
    features: [
      'Tägliche Sicherheits-Backups',
      'Sicherheitsupdates',
      'Basic Performance-Monitoring',
      ' Email-Support',
      'Monatlicher Report',
      'Uptime-Garantie 99,5%',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '199',
    period: '/ Monat',
    description: 'Für geschäftskritische Websites mit höheren Anforderungen.',
    features: [
      'Stündliche Sicherheits-Backups',
      'Automatische Sicherheitsupdates',
      'Erweiterte Performance-Optimierung',
      'Prioritäts-Support (4h Response)',
      'Wöchentliche detaillierte Reports',
      'Uptime-Garantie 99,9%',
      'Monatliches Audit & Empfehlungen',
      'SEO Monitoring',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '399',
    period: '/ Monat',
    description: 'Für Websites mit höchster Verfügbarkeit und umfassender Betreuung.',
    features: [
      'Real-Time Sicherheits-Backups',
      'Proaktive Sicherheitsupdates',
      'Kontinuierliche Performance-Optimierung',
      ' Dedizierter Ansprechpartner',
      'Tägliche detaillierte Reports',
      'Uptime-Garantie 99,95%',
      'Wöchentliche Audits & Optimierungen',
      'Advanced SEO & Content Updates',
      'Priority Feature Updates',
      'Unbegrenzte Supportstunden',
    ],
    highlight: false,
  },
]

const maintenanceServices = [
  {
    icon: 'security',
    title: 'Sicherheitsupdates',
    description: 'Regelmäßige Updates für alle Systeme, Plugins und Frameworks – vor Sicherheitslücken und Angriffen geschützt.',
  },
  {
    icon: 'backup',
    title: 'Automatische Backups',
    description: 'Tägliche oder stündliche Backups sorgen dafür, dass Sie im Notfall schnell wiederhergestellt sind.',
  },
  {
    icon: 'performance',
    title: 'Performance-Optimierung',
    description: 'Kontinuierliche Überwachung und Optimierung für blitzschnelle Ladezeiten und beste User Experience.',
  },
  {
    icon: 'monitoring',
    title: '24/7 Monitoring',
    description: 'Permanente Überwachung Ihrer Website – wir erkennen und beheben Probleme proaktiv.',
  },
  {
    icon: 'support',
    title: 'Fachkundiger Support',
    description: 'Unser Team steht Ihnen für Fragen, Probleme und Optimierungen zur Verfügung – schnell und kompetent.',
  },
  {
    icon: 'updates',
    title: 'Content & Feature Updates',
    description: 'Wir kümmern uns um Ihre Website – von neuen Inhalten bis zu neuen Funktionen und Improvements.',
  },
]

const benefits = [
  {
    title: 'Sicherheit und Vertrauen',
    description: 'Ihre Website und die Daten Ihrer Kunden sind geschützt – immer aktuell, immer sicher.',
  },
  {
    title: 'Seelenfrieden',
    description: 'Sie müssen sich nicht um technische Details kümmern – wir kümmern uns darum.',
  },
  {
    title: 'Bessere Performance',
    description: 'Regelmäßige Optimierungen halten Ihre Website schnell und beeindruckend.',
  },
  {
    title: 'Suchmaschinen-freundlich',
    description: 'Aktuelle Websites ranken besser in Google – das ist Teil unserer Betreuung.',
  },
  {
    title: 'Schneller Support',
    description: 'Probleme werden schnell und zuverlässig gelöst – ohne lange Wartezeiten.',
  },
  {
    title: 'Längere Lebensdauer',
    description: 'Gut gepflegte Websites halten länger – weniger teure Neu-Entwicklungen nötig.',
  },
]
</script>

<template>
  <div class="bg-dark-900 text-white">
    <!-- Hero Section -->
    <PageHero
      badge="Wartung & Support"
      title="Website Wartung &"
      highlight="Proaktiver Support"
      subtitle="Ihre Website sollte nicht nur heute gut funktionieren, sondern auch morgen und übermorgen. Mit unseren Wartungspaketen ist das garantiert – sicher, schnell und zuverlässig."
    >
      <NuxtLink to="/kontakt" class="btn-primary text-base">
        Kostenlose Beratung
        <AppIcon name="arrow-right" class="w-5 h-5" />
      </NuxtLink>
      <NuxtLink to="/leistungen" class="btn-secondary text-base">
        Alle Leistungen
      </NuxtLink>
    </PageHero>

    <!-- Services Grid Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Leistungsumfang"
          title="Was ist in der"
          highlight="Website-Wartung enthalten"
          subtitle="Unser umfassender Support deckt alle wichtigen Bereiche ab, damit Ihre Website optimal läuft."
          align="center"
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in maintenanceServices"
            :key="service.title"
            class="glass-card-hover p-8 group"
          >
            <IconBadge :icon="service.icon" tone="green" size="lg" class="mb-6 group-hover:scale-105" />
            <h3 class="text-xl font-semibold text-white mb-3">
              {{ service.title }}
            </h3>
            <p class="text-dark-200 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Preise"
          title="Wartung Pakete für jeden"
          highlight="Bedarf"
          subtitle="Wählen Sie das Paket, das am besten zu Ihren Anforderungen passt – alle Pakete können jederzeit erweitert werden."
          align="center"
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            :class="[
              'glass-card p-8 flex flex-col',
              pkg.highlight ? 'ring-2 ring-primary-500/40 relative' : '',
            ]"
          >
            <span
              v-if="pkg.highlight"
              class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-dark-900"
            >
              Beliebt
            </span>

            <h3 class="text-lg font-semibold text-white mb-2">
              {{ pkg.name }}
            </h3>
            <p class="text-dark-300 text-sm mb-6">
              {{ pkg.description }}
            </p>

            <div class="mb-8">
              <span class="text-4xl font-display font-semibold text-white">
                {{ pkg.price }}€
              </span>
              <span class="text-dark-300 text-base ml-1">{{ pkg.period }}</span>
            </div>

            <ul class="space-y-3 mb-8 flex-1">
              <li
                v-for="feature in pkg.features"
                :key="feature"
                class="flex items-start gap-3"
              >
                <AppIcon name="check" class="w-5 h-5 text-primary-300 shrink-0" />
                <span class="text-dark-200 text-sm">{{ feature }}</span>
              </li>
            </ul>

            <NuxtLink
              to="/kontakt"
              :class="pkg.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'"
            >
              Auswählen
            </NuxtLink>
          </div>
        </div>

        <div class="mt-16 text-center">
          <p class="text-dark-200 text-lg mb-4">
            Alle Pakete beinhalten die erste Woche kostenlos zum Testen!
          </p>
          <NuxtLink to="/kontakt" class="inline-flex items-center gap-2 text-primary-300 hover:text-white transition-colors">
            Lassen Sie uns über Ihre Website sprechen
            <AppIcon name="arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          label="Vorteile"
          title="Vorteile professioneller"
          highlight="Website-Wartung"
          subtitle="Regelmäßige Wartung ist eine Investition in die Zukunft Ihrer Website und Ihres Business."
          align="center"
          class="mb-16"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="glass-card-hover p-8 group"
          >
            <IconBadge icon="check-circle" tone="primary" size="md" class="mb-6 group-hover:scale-105" />
            <h3 class="text-xl font-semibold text-white mb-3">
              {{ benefit.title }}
            </h3>
            <p class="text-dark-200 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              label="Warum wir"
              title="Warum Prestige Webdesign für Ihre"
              highlight="Wartung?"
              align="left"
              class="mb-8"
            />

            <div class="space-y-6">
              <div class="flex gap-4">
                <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-1" />
                <div>
                  <h3 class="text-lg font-semibold text-white">Spezialisiertes Team</h3>
                  <p class="text-dark-200">Unser Team kennt Ihre Website in und aus – wir haben sie oft selbst entwickelt.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-1" />
                <div>
                  <h3 class="text-lg font-semibold text-white">Proaktiv, nicht reaktiv</h3>
                  <p class="text-dark-200">Wir kümmern uns darum, dass es gar nicht erst zu Problemen kommt.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-1" />
                <div>
                  <h3 class="text-lg font-semibold text-white">Detaillierte Reports</h3>
                  <p class="text-dark-200">Transparente Kommunikation mit monatlichen oder wöchentlichen Reports über Ihre Website.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <AppIcon name="check-circle" class="w-6 h-6 text-primary-300 shrink-0 mt-1" />
                <div>
                  <h3 class="text-lg font-semibold text-white">Flexible Pakete</h3>
                  <p class="text-dark-200">Wählen Sie das Paket, das zu Ihnen passt – und wechseln Sie jederzeit problemlos.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="glass-card p-8">
              <h3 class="text-xl font-semibold text-white mb-8">
                Ihre Website ist in guten Händen
              </h3>

              <div class="space-y-6">
                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Sicherheit</span>
                    <span class="text-primary-300 font-bold">A+</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-3">
                    <div class="bg-gradient-to-r from-primary-500 to-emerald-500 h-3 rounded-full" style="width: 100%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Verfügbarkeit</span>
                    <span class="text-primary-300 font-bold">99,9%</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-3">
                    <div class="bg-gradient-to-r from-primary-500 to-emerald-500 h-3 rounded-full" style="width: 99%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Performance</span>
                    <span class="text-primary-300 font-bold">Optimiert</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-3">
                    <div class="bg-gradient-to-r from-primary-500 to-emerald-500 h-3 rounded-full" style="width: 95%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Support</span>
                    <span class="text-primary-300 font-bold">24/7</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-3">
                    <div class="bg-gradient-to-r from-primary-500 to-emerald-500 h-3 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
              </div>

              <hr class="border-white/10 my-8">

              <p class="text-dark-200 leading-relaxed">
                Mit unserer professionellen Wartung konzentrieren Sie sich auf Ihr Business – wir kümmern uns um Ihre Website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader title="Häufige Fragen zur" highlight="Wartung" class="mb-12" />
        <FaqAccordion :items="faqItems" />
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection
      title="Sichern Sie Ihre Website jetzt ab"
      subtitle="Wechseln Sie jetzt zu professioneller Website-Wartung mit Prestige Webdesign. Die erste Woche ist kostenlos zum Testen!"
      buttonText="Wartungspaket wählen"
      buttonLink="/kontakt"
    />
  </div>
</template>
