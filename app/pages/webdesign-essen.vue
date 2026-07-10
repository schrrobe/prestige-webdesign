<template>
  <div>
    <!-- Hero Section -->
    <PageHero
      badge="Webdesign Essen"
      title="Webdesign"
      highlight="Essen"
      subtitle="Moderne Webagentur für Essen und die ganze Metropole Ruhr. Prestige Webdesign schafft professionelle Websites und digitale Lösungen, die Essener Unternehmen zum Wachstum verhelfen."
    >
      <p class="mt-6 text-dark-200 max-w-2xl leading-relaxed">
        Essen – Grüne Hauptstadt Europas 2015 und wirtschaftliches Zentrum der Region. Wir verstehen die Anforderungen dieser dynamischen Stadt und entwickeln Websites, die Ihre Essener Zielgruppe erreichen und begeistern.
      </p>
      <NuxtLink to="/kontakt" class="btn-primary text-base">
        Kostenlose Beratung vereinbaren
        <AppIcon name="arrow-right" class="w-5 h-5" />
      </NuxtLink>
    </PageHero>

    <!-- Why Essen Web Design Matters -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <h2 class="text-3xl md:text-4xl font-display font-semibold text-white mb-10">
          Webdesign Essen: Digital erfolgreich in der <span class="text-gradient">Metropole Ruhr</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <p class="text-dark-200 mb-4 leading-relaxed">
              Essen ist mehr als Geschichte – die Stadt ist Heimat moderner Industrie, innovativer Startups und etablierter Mittelständler. Von den weltbekannten Zechen bis zum zukunftsweisenden ThyssenKrupp Quartier: Essen befindet sich im Wandel. Um in diesem dynamischen Umfeld erfolgreich zu sein, benötigen Sie eine digitale Präsenz, die genauso innovativ und zukunftsorientiert ist wie Essen selbst.
            </p>
            <ul class="space-y-3 text-dark-200">
              <li class="flex items-start gap-3">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Websites, die den innovativen Geist Essens widerspiegeln</span>
              </li>
              <li class="flex items-start gap-3">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Lokale SEO für bessere Sichtbarkeit in Essen & Umgebung</span>
              </li>
              <li class="flex items-start gap-3">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Performance & Sicherheit auf höchstem Niveau</span>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-dark-200 mb-4 leading-relaxed">
              Die Essener Wirtschaft ist vielseitig: Einzelhandel in der attraktiven Innenstadt, spezialisierte Handwerksbetriebe, Tech-Unternehmen und internationale Konzerne. Alle haben eines gemeinsam – sie brauchen Websites, die nicht nur professionell aussehen, sondern auch tatsächliche geschäftliche Ergebnisse liefern. Wir bei Prestige Webdesign verstehen diese Vielfalt und entwickeln maßgeschneiderte Lösungen, die Ihre Essener Position stärken und nachhaltiges Wachstum unterstützen.
            </p>
            <ul class="space-y-3 text-dark-200">
              <li class="flex items-start gap-3">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Benutzer- und konversionsfokussierte Designs</span>
              </li>
              <li class="flex items-start gap-3">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Mobile-First Entwicklung</span>
              </li>
              <li class="flex items-start gap-3">
                <AppIcon name="check-circle" class="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span>Langfristiger technischer Support & Weiterentwicklung</span>
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
          Webdesign & <span class="text-gradient">Digitale Lösungen</span> für Essen
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Service 1: Custom Web Design -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="code" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              Custom Webdesign
            </h3>
            <p class="text-dark-300">
              Individuell gestaltete, responsive Websites für Essener Unternehmen. Jedes Design ist maßgeschneidert für Ihre Branche und Ihre Kunden.
            </p>
          </div>

          <!-- Service 2: SEO & Local Search -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="seo" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              SEO & Lokale Suche
            </h3>
            <p class="text-dark-300">
              Ihre Website wird sichtbar, wenn Essener Kunden nach Ihnen suchen. Wir optimieren für lokale Keywords und Google My Business.
            </p>
          </div>

          <!-- Service 3: E-Commerce & Online Sales -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="cart" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              E-Commerce & Online-Shops
            </h3>
            <p class="text-dark-300">
              Professionelle, sichere Shops für Einzelhandel und Produzenten in Essen. Verkaufen Sie online mit vertrauenswürdigen Systemen.
            </p>
          </div>

          <!-- Service 4: Digital Strategy & Consulting -->
          <div class="glass-card-hover p-8 group">
            <IconBadge icon="shield" tone="primary" size="lg" class="mb-6" />
            <h3 class="text-xl font-semibold text-white mb-3">
              Digitale Strategie & Beratung
            </h3>
            <p class="text-dark-300">
              Nicht sicher, wie Sie digital durchstarten? Wir beraten zu Strategie, Marketing und Technologie für Ihr Essen Business.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits & Advantages -->
    <section class="section-padding relative overflow-hidden bg-dark-800/30">
      <div class="container-narrow mx-auto relative">
        <h2 class="text-3xl md:text-4xl font-display font-semibold text-white mb-10">
          Was Sie mit <span class="text-gradient">professionellem Webdesign</span> in Essen erreichen
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">01</div>
            <h3 class="text-xl font-semibold text-white mb-3">Erhöhte Online-Sichtbarkeit</h3>
            <p class="text-dark-300">
              Essener Kunden finden Sie schneller, wenn sie nach Ihren Produkten oder Dienstleistungen suchen. Eine gut optimierte Website ist Ihr bestes Marketinginstrument.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">02</div>
            <h3 class="text-xl font-semibold text-white mb-3">Glaubwürdigkeit & Vertrauen</h3>
            <p class="text-dark-300">
              Eine professionelle Website signalisiert Kompetenz und Seriösität. Potenzielle Kunden vertrauen Ihrem Unternehmen mehr, wenn es online gut dargestellt ist.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">03</div>
            <h3 class="text-xl font-semibold text-white mb-3">Mehr Anfragen & Umsatz</h3>
            <p class="text-dark-300">
              Eine konversionsorientierte Website bringt mehr Kontaktanfragen und Verkäufe. Wir bauen Websites, die nicht nur schön aussehen, sondern auch verkaufen.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">04</div>
            <h3 class="text-xl font-semibold text-white mb-3">Competitive Advantage</h3>
            <p class="text-dark-300">
              Viele Essener Konkurrenten haben veraltete oder unprofessionelle Websites. Mit Prestige Webdesign nehmen Sie einen klaren Wettbewerbsvorteil ein.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">05</div>
            <h3 class="text-xl font-semibold text-white mb-3">24/7 Kundenakquisition</h3>
            <p class="text-dark-300">
              Während Sie schlafen, arbeitet Ihre Website. Sie gewinnen neue Kunden rund um die Uhr, ohne zusätzlichen Aufwand.
            </p>
          </div>
          <div class="glass-card p-8">
            <div class="text-primary-300 text-4xl font-display font-semibold mb-4">06</div>
            <h3 class="text-xl font-semibold text-white mb-3">Datengestützte Entscheidungen</h3>
            <p class="text-dark-300">
              Mit detaillierter Analytics verstehen Sie Ihre Kunden besser. Datengestützte Entscheidungen führen zu besseren Geschäftsergebnissen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CityKeywordLinks city-slug="essen" city-name="Essen" />

    <CTASection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Webdesign Essen | Prestige Webdesign – Webagentur für Essen',
  ogTitle: 'Webdesign Essen | Prestige Webdesign – Webagentur für Essen',
  description: 'Webdesign Essen: Moderne Webagentur für Essen & Umgebung. Professionelle Websites, SEO, E-Commerce-Lösungen.',
  ogDescription: 'Webdesign Essen: Moderne Webagentur für Essen & Umgebung. Professionelle Websites, SEO, E-Commerce-Lösungen.',
  keywords: 'Webdesign Essen, Webagentur Essen, Website Essen, SEO Essen, Webentwicklung Essen, Online Marketing Essen',
  ogImage: 'https://prestige-webdesign.de/images/og-default.svg',
  robots: 'index, follow',
})
</script>
