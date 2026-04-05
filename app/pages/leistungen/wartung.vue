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
    <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-dark-900" />
      <div class="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[120px]" />

      <div class="container-narrow mx-auto relative">
        <div class="max-w-3xl">
          <span class="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Wartung & Support</span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Website Wartung & <span class="text-gradient">Proaktiver Support</span>
          </h1>
          <p class="text-xl text-dark-200 max-w-2xl leading-relaxed mb-8">
            Ihre Website sollte nicht nur heute gut funktionieren, sondern auch morgen und übermorgen. Mit unseren Wartungspaketen ist das garantiert – sicher, schnell und zuverlässig.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@prestige-webdesign.de" class="btn-primary">
              Jetzt starten
              <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <NuxtLink to="/#kontakt" class="btn-secondary">
              Mehr erfahren
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Was ist in der <span class="text-gradient">Website-Wartung enthalten</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Unser umfassender Support deckt alle wichtigen Bereiche ab, damit Ihre Website optimal läuft.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in maintenanceServices"
            :key="service.title"
            class="glass-card-hover p-8 group"
          >
            <!-- Icon -->
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform duration-300">
              <!-- Security Icon -->
              <svg v-if="service.icon === 'security'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <!-- Backup Icon -->
              <svg v-if="service.icon === 'backup'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <!-- Performance Icon -->
              <svg v-if="service.icon === 'performance'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <!-- Monitoring Icon -->
              <svg v-if="service.icon === 'monitoring'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <!-- Support Icon -->
              <svg v-if="service.icon === 'support'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <!-- Updates Icon -->
              <svg v-if="service.icon === 'updates'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
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
    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-dark-900" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/3 rounded-full blur-[150px]" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Wartung Pakete für jeden <span class="text-gradient">Bedarf</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Wählen Sie das Paket, das am besten zu Ihren Anforderungen passt – alle Pakete können jederzeit erweitert werden.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="relative"
          >
            <!-- Highlight badge for professional package -->
            <div v-if="pkg.highlight" class="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span class="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Beliebteste Wahl
              </span>
            </div>

            <div
              :class="[
                'glass-card p-8 h-full flex flex-col',
                pkg.highlight ? 'border-primary-600/50 border-2 scale-105' : '',
              ]"
            >
              <h3 class="text-2xl font-display font-bold text-white mb-2">
                {{ pkg.name }}
              </h3>
              <p class="text-dark-200 text-sm mb-6">
                {{ pkg.description }}
              </p>

              <div class="mb-8">
                <span class="text-5xl font-display font-bold text-primary-400">
                  {{ pkg.price }}€
                </span>
                <span class="text-dark-200 ml-2">{{ pkg.period }}</span>
              </div>

              <div class="space-y-4">
                <p class="text-white font-semibold text-sm uppercase tracking-wider mb-6">Enthalten:</p>
                <ul class="space-y-3">
                  <li
                    v-for="feature in pkg.features"
                    :key="feature"
                    class="flex items-start gap-3"
                  >
                    <svg class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-dark-200 text-sm">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">
          <p class="text-dark-200 text-lg mb-4">
            Alle Pakete beinhalten die erste Woche kostenlos zum Testen!
          </p>
          <a href="mailto:info@prestige-webdesign.de" class="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
            Lassen Sie uns über Ihre Website sprechen
            <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[100px]" />

      <div class="container-narrow mx-auto relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Vorteile professioneller <span class="text-gradient">Website-Wartung</span>
          </h2>
          <p class="text-lg text-dark-200 max-w-2xl mx-auto">
            Regelmäßige Wartung ist eine Investition in die Zukunft Ihrer Website und Ihres Business.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="glass-card p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600/20 border border-primary-600/50">
                  <svg class="h-6 w-6 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-white mb-2">
                  {{ benefit.title }}
                </h3>
                <p class="text-dark-200 text-sm leading-relaxed">
                  {{ benefit.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/5 via-dark-900 to-primary-900/5" />

      <div class="container-narrow mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Warum <span class="text-gradient">Prestige Webdesign</span> für Ihre Wartung?
            </h2>

            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Spezialisiertes Team</h3>
                  <p class="text-dark-200">Unser Team kennt Ihre Website in und aus – wir haben sie oft selbst entwickelt.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Proaktiv, nicht reaktiv</h3>
                  <p class="text-dark-200">Wir kümmern uns darum, dass es gar nicht erst zu Problemen kommt.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Detaillierte Reports</h3>
                  <p class="text-dark-200">Transparente Kommunikation mit monatlichen oder wöchentlichen Reports über Ihre Website.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Flexible Pakete</h3>
                  <p class="text-dark-200">Wählen Sie das Paket, das zu Ihnen passt – und wechseln Sie jederzeit problemlos.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="glass-card p-8 border-primary-600/30">
              <h3 class="text-2xl font-display font-bold text-white mb-8">
                Ihre Website ist in guten Händen
              </h3>

              <div class="space-y-6">
                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Sicherheit</span>
                    <span class="text-primary-400 font-bold">A+</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-3">
                    <div class="bg-gradient-to-r from-primary-500 to-emerald-500 h-3 rounded-full" style="width: 100%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Verfügbarkeit</span>
                    <span class="text-primary-400 font-bold">99,9%</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-3">
                    <div class="bg-gradient-to-r from-primary-500 to-emerald-500 h-3 rounded-full" style="width: 99%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Performance</span>
                    <span class="text-primary-400 font-bold">Optimiert</span>
                  </div>
                  <div class="w-full bg-dark-800 rounded-full h-3">
                    <div class="bg-gradient-to-r from-primary-500 to-emerald-500 h-3 rounded-full" style="width: 95%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-white font-semibold">Support</span>
                    <span class="text-primary-400 font-bold">24/7</span>
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

    <!-- CTA Section -->
    <CTASection
      title="Sichern Sie Ihre Website jetzt ab"
      subtitle="Wechseln Sie jetzt zu professioneller Website-Wartung mit Prestige Webdesign. Die erste Woche ist kostenlos zum Testen!"
      buttonText="Wartungspaket wählen"
      buttonLink="/kontakt"
    />
  </div>
</template>
