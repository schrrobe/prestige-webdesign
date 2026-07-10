<template>
  <div>
    <!-- Hero Section -->
    <PageHero
      badge="Webdesign Dortmund"
      title="Webdesign"
      highlight="Dortmund"
      subtitle="Moderne, responsive Websites für Dortmunder Unternehmen, die online wachsen möchten. Unsere lokale Webagentur verbindet kreative Webdesign-Lösungen mit strategischer SEO-Optimierung – perfekt für Ihren Erfolg in der Metropole Ruhr."
    >
      <p class="mt-6 text-dark-200 max-w-2xl leading-relaxed">
        Von der Innenstadt bis zum Technologiepark: Wir kennen die Anforderungen Dortmunder Wirtschaft und schaffen digitale Lösungen, die Ihr Business nach vorne bringen.
      </p>
      <NuxtLink to="/kontakt" class="btn-primary text-base">
        Kostenlose Beratung vereinbaren
        <AppIcon name="arrow-right" class="w-5 h-5" />
      </NuxtLink>
    </PageHero>

    <!-- Why Local Web Design Matters -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Warum lokale Webgestaltung für"
          highlight="Dortmund entscheidend ist"
          align="left"
          class="mb-10"
        />
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <p class="text-dark-200 mb-4 leading-relaxed">
              Dortmund ist ein Wirtschaftsstandort mit großem Potenzial. Ob im Signal Iduna Park Umfeld, im zukunftsweisenden Technologiepark oder in der revitalisierten Dortmunder Innenstadt – professionelle Websites sind das digitale Fundament erfolgreicher Unternehmen. Wir verstehen die lokale Geschäftskultur und erstellen Websites, die Ihre Zielgruppe direkt anspricht.
            </p>
            <ul class="space-y-3 text-dark-200">
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span class="ml-3">Lokaloptimierte Websites für bessere Sichtbarkeit in Dortmund</span>
              </li>
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span class="ml-3">SEO-Strategie für lokale Suchanfragen</span>
              </li>
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span class="ml-3">Mobile-First Design für On-the-Go Kunden</span>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-dark-200 mb-4 leading-relaxed">
              Mit einer professionellen Website positionieren Sie Ihr Dortmunder Unternehmen als vertrauenswürdig und innovativ. Ob Industrie, Handel, Dienstleistung oder Handwerk – eine durchdachte Online-Präsenz ist nicht optional, sondern essentiell. Unser Team kreiert Websites, die nicht nur schön aussehen, sondern auch messbare Ergebnisse liefern.
            </p>
            <ul class="space-y-3 text-dark-200">
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span class="ml-3">Konvertierungsoptimierte Designs</span>
              </li>
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span class="ml-3">Benutzerfreundliche Interfaces</span>
              </li>
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span class="ml-3">Wartung und Support vor Ort</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Webdesign & Digital-Lösungen für"
          highlight="Dortmund"
          align="left"
          class="mb-10"
        />
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Service 1: Web Design -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="code" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              Modernes Webdesign
            </h3>
            <p class="text-dark-300">
              Zeitgemäße, ansprechende Designs, die Ihre Marke in Dortmund authentisch repräsentieren und Ihre Kunden begeistern.
            </p>
          </div>

          <!-- Service 2: SEO Optimization -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="seo" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              Lokale SEO-Optimierung
            </h3>
            <p class="text-dark-300">
              Ihre Website rankt lokal – in Dortmund und Umgebung. Wir optimieren für relevante Keywords und Ihre Zielgruppe vor Ort.
            </p>
          </div>

          <!-- Service 3: E-Commerce -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="cart" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              E-Commerce & Shop-Systeme
            </h3>
            <p class="text-dark-300">
              Online verkaufen leicht gemacht: Sichere, benutzerfreundliche E-Commerce-Lösungen für Ihr Dortmunder Business.
            </p>
          </div>

          <!-- Service 4: Maintenance -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="shield" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              Wartung & Support
            </h3>
            <p class="text-dark-300">
              Regelmäßige Updates, Sicherheit und technischer Support – damit Ihre Website immer optimal läuft.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Local SEO Benefits -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <SectionHeader
          title="Lokale SEO für Dortmund –"
          highlight="Das bedeutet es für Ihr Business"
          align="left"
          class="mb-10"
        />
        <div class="grid md:grid-cols-3 gap-8">
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">01</div>
            <h3 class="text-xl font-semibold text-white mb-3">Höhere Sichtbarkeit</h3>
            <p class="text-dark-300">
              Ihre Website wird gezielt Dortmunder Kunden angezeigt, die aktiv nach Ihren Dienstleistungen oder Produkten suchen.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">02</div>
            <h3 class="text-xl font-semibold text-white mb-3">Qualifizierte Leads</h3>
            <p class="text-dark-300">
              Lokale Optimierung bringt Interessenten mit echter Kaufabsicht – nicht nur Clicks, sondern echte Geschäftschancen.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">03</div>
            <h3 class="text-xl font-semibold text-white mb-3">Wettbewerbsvorteil</h3>
            <p class="text-dark-300">
              Viele Dortmunder Konkurrenten optimieren nicht lokal. Sie können diesen Vorteil für sich nutzen.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">04</div>
            <h3 class="text-xl font-semibold text-white mb-3">Vertrauensaufbau</h3>
            <p class="text-dark-300">
              Eine lokal optimierte Website zeigt, dass Sie Teil der Dortmunder Community sind – das schafft Vertrauen.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">05</div>
            <h3 class="text-xl font-semibold text-white mb-3">Mobile Nutzer</h3>
            <p class="text-dark-300">
              "Webdesign Dortmund" Suchen kommen oft von unterwegs. Unsere Websites sind perfekt für Mobile-First optimiert.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">06</div>
            <h3 class="text-xl font-semibold text-white mb-3">Messbarer ROI</h3>
            <p class="text-dark-300">
              Transparente Analytics zeigen Ihnen genau, welche Besucher konvertieren und wie Ihre Website performt.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CityKeywordLinks city-slug="dortmund" city-name="Dortmund" />

    <CTASection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Webdesign Dortmund – Websites, SEO & E-Commerce | Prestige Webdesign',
  ogTitle: 'Webdesign Dortmund – Websites, SEO & E-Commerce | Prestige Webdesign',
  description: 'Webdesign Dortmund: Moderne Websites für Dortmunder Unternehmen. SEO, E-Commerce, Wartung. Lokale Webagentur mit Expertise.',
  ogDescription: 'Webdesign Dortmund: Moderne Websites für Dortmunder Unternehmen. SEO, E-Commerce, Wartung. Lokale Webagentur mit Expertise.',
  keywords: 'Webdesign Dortmund, Webagentur Dortmund, Website Dortmund, SEO Dortmund, Webentwicklung Dortmund, Online Marketing Dortmund',
  ogImage: 'https://prestige-webdesign.de/images/og-default.svg',
  robots: 'index, follow',
})
</script>
