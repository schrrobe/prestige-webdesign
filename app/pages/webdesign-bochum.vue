<template>
  <div>
    <!-- Hero Section -->
    <PageHero
      badge="Webdesign Bochum"
      title="Webdesign"
      highlight="Bochum"
      :subtitle="'Professionelle Webseiten und digitale Strategien für Bochumer Unternehmen. Prestige Webdesign schafft moderne Online-Lösungen, die Ihr Business in der aufstrebenden Stadt an der Ruhr erfolgreich macht.'"
    >
      <p class="mt-6 text-dark-200 max-w-2xl leading-relaxed">
        Von Hightech-Startups über etablierte Industrie bis zu mittelständischen Dienstleistern: Wir kennen die Chancen und Anforderungen Bochums und entwickeln Websites, die wirklich funktionieren.
      </p>
      <NuxtLink to="/kontakt" class="btn-primary text-base">
        Kostenlose Beratung vereinbaren
        <AppIcon name="arrow-right" class="w-5 h-5" />
      </NuxtLink>
    </PageHero>

    <!-- Why Bochum Web Design Matters -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <h2 class="text-3xl md:text-4xl font-display font-semibold text-white mb-10">
          Webdesign <span class="text-gradient">Bochum</span>: Digital durchstarten in der Wissensstadt
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <p class="text-dark-200 mb-4 leading-relaxed">
              Bochum ist Zentrum von Innovation, Bildung und Kultur – von der renommierten Ruhr-Universität über das Bermudadreieck als Szene-Viertel bis zum weltbekannten Starlight Express. Diese Dynamik erfordert digitale Partner, die verstehen, was Bochum bewegt. Unsere lokale Webdesign-Expertise verbindet kreatives Design mit strategischem Thinking für Ihren nachhaltigen Erfolg.
            </p>
            <ul class="space-y-3 text-dark-200">
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Websites, die Bochums Innovationsgeist widerspiegeln</span>
              </li>
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>SEO für lokale Suchanfragen in Bochum</span>
              </li>
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Performance-optimiert für alle Geräte</span>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-dark-200 mb-4 leading-relaxed">
              Die Bochumer Wirtschaft ist vielfältig und ambitioniert. Ob Einzelhandel in der Innenstadt, Tech-Startups oder spezialisierte Dienstleister – jedes Geschäf braucht eine digitale Präsenz, die seine Einzigartigkeit zeigt und Kunden konvertiert. Wir erstellen Websites, die nicht nur schön anzuschauen sind, sondern auch messbare Geschäftsergebnisse liefern und Ihre lokale Marktposition stärken.
            </p>
            <ul class="space-y-3 text-dark-200">
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Conversion-orientierte Designs</span>
              </li>
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Intuitive Benutzerführung</span>
              </li>
              <li class="flex items-start">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Kontinuierliche Optimierung & Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-narrow mx-auto relative">
        <h2 class="text-3xl md:text-4xl font-display font-semibold text-white mb-10">
          Webdesign & Digital-Services für <span class="text-gradient">Bochum</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Service 1: Website Design -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="code" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              Website Design & Entwicklung
            </h3>
            <p class="text-dark-300">
              Individuelle Websites für Bochumer Unternehmen: modern, responsiv, benutzerfreundlich. Jedes Projekt ist einzigartig – genauso wie Ihr Business.
            </p>
          </div>

          <!-- Service 2: SEO & Digital Marketing -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="seo" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              SEO & Digital Marketing
            </h3>
            <p class="text-dark-300">
              Suchmaschinen-Optimierung mit lokalem Fokus. Ihr Business wird sichtbar, wenn Bochumer Kunden nach Ihnen suchen.
            </p>
          </div>

          <!-- Service 3: Branding & Corporate Identity -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="shield" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              Branding & Corporate Identity
            </h3>
            <p class="text-dark-300">
              Ihre Marke verdient mehr als nur eine Website. Wir entwickeln ein kohärentes digitales Erscheinungsbild.
            </p>
          </div>

          <!-- Service 4: E-Commerce Solutions -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="cart" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              E-Commerce & Online-Shops
            </h3>
            <p class="text-dark-300">
              Sichere, benutzerfreundliche Shop-Systeme für Bochumer Einzelhandel und Produzenten. Online-Verkauf leicht gemacht.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <h2 class="text-3xl md:text-4xl font-display font-semibold text-white mb-10">
          Warum <span class="text-gradient">Bochumer</span> Unternehmen auf uns vertrauen
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">01</div>
            <h3 class="text-xl font-semibold text-white mb-3">Lokale Expertise</h3>
            <p class="text-dark-300">
              Wir verstehen den Bochumer Markt – von der akademischen Szene bis zur Industrie. Diese Kenntnisse fließen in jedes Projekt ein.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">02</div>
            <h3 class="text-xl font-semibold text-white mb-3">Maßgeschneiderte Lösungen</h3>
            <p class="text-dark-300">
              Kein Templating, keine Standard-Websites. Jede Lösung wird speziell für Ihre Anforderungen entwickelt.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">03</div>
            <h3 class="text-xl font-semibold text-white mb-3">Ergebnisorientierung</h3>
            <p class="text-dark-300">
              Nicht Schönheit um ihrer selbst willen: Wir bauen Websites, die Conversions bringen und ROI generieren.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">04</div>
            <h3 class="text-xl font-semibold text-white mb-3">Langfristige Partnerschaften</h3>
            <p class="text-dark-300">
              Nach dem Launch beginnt die echte Zusammenarbeit. Wir unterstützen Sie mit Wartung, Optimierung und strategischem Rat.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">05</div>
            <h3 class="text-xl font-semibold text-white mb-3">Transparente Kommunikation</h3>
            <p class="text-dark-300">
              Regelmäßige Updates, klare Timelines, verständliche Reports: Sie wissen immer, wo Sie stehen.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">06</div>
            <h3 class="text-xl font-semibold text-white mb-3">Modernes Tech-Stack</h3>
            <p class="text-dark-300">
              Wir nutzen die neuesten Technologien (Nuxt, Vue, Headless CMS) für Speed, Sicherheit und Skalierbarkeit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CityKeywordLinks city-slug="bochum" city-name="Bochum" />

    <CTASection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Webdesign Bochum | Prestige Webdesign – Webagentur für Bochum',
  ogTitle: 'Webdesign Bochum | Prestige Webdesign – Webagentur für Bochum',
  description: 'Webdesign Bochum: Professionelle Websites für Bochumer Unternehmen. SEO & Digital Marketing. Jetzt Beratung buchen!',
  ogDescription: 'Webdesign Bochum: Professionelle Websites für Bochumer Unternehmen. SEO & Digital Marketing. Jetzt Beratung buchen!',
  keywords: 'Webdesign Bochum, Webagentur Bochum, Website Bochum, SEO Bochum, Webentwicklung Bochum, Digital Marketing Bochum',
  ogImage: 'https://prestige-webdesign.de/images/og-default.svg',
  robots: 'index, follow',
})
</script>
