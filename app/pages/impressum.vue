<script setup lang="ts">
useSeoMeta({
  title: 'Impressum | Prestige Webdesign',
  description: 'Impressum von Prestige Webdesign, Robert Schreiner, Dortmund. Angaben gemäß § 5 TMG.',
  robots: 'noindex, follow',
})
</script>

<template>
  <div>
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-dark-900" />
      <div class="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">Impressum</h1>
        <p class="text-dark-300">Angaben gemäß § 5 TMG</p>
      </div>
    </section>

    <section class="section-padding !pt-0">
      <div class="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="glass-card p-8 md:p-12 space-y-10">
            <!-- Anbieter -->
            <div>
              <h2 class="text-xl font-display font-semibold text-white mb-4">Prestige Webdesign</h2>
              <div class="text-dark-200 space-y-1">
                <p><strong class="text-white">Inhaber:</strong> Robert Schreiner</p>
                <p><strong class="text-white">Adresse:</strong> Kapitelwiese 14, 44263 Dortmund, Deutschland</p>
                <p><strong class="text-white">E-Mail:</strong> <a href="mailto:info@prestige-webdesign.de" class="text-primary-400 hover:text-primary-300">info@prestige-webdesign.de</a></p>
              </div>
            </div>

            <!-- Geschäftsbereich -->
            <div>
              <h2 class="text-xl font-display font-semibold text-white mb-4">Geschäftsbereich</h2>
              <p class="text-dark-200">
                Webdesign, Suchmaschinenoptimierung (SEO), E-Commerce-Lösungen, Website-Wartung und digitale Beratung.
              </p>
            </div>

            <!-- Verantwortlich -->
            <div>
              <h2 class="text-xl font-display font-semibold text-white mb-4">Verantwortlich für den Inhalt</h2>
              <p class="text-dark-200">Robert Schreiner, Kapitelwiese 14, 44263 Dortmund</p>
            </div>

            <!-- Haftungsausschluss -->
            <div>
              <h2 class="text-xl font-display font-semibold text-white mb-4">Haftungsausschluss</h2>
              <p class="text-dark-200 leading-relaxed mb-4">
                Die Inhalte dieser Website wurden mit größter Sorgfalt zusammengestellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Eine Haftung für Schäden, die durch die Nutzung der Informationen entstehen, ist ausgeschlossen.
              </p>
              <p class="text-dark-200 leading-relaxed">
                Externe Links werden regelmäßig überprüft. Sollten jedoch fehlerhafte oder illegale Inhalte auf verlinkten Seiten vorhanden sein, wird um sofortige Benachrichtigung gebeten, damit diese Links entfernt werden können.
              </p>
            </div>

            <!-- Urheberrecht -->
            <div>
              <h2 class="text-xl font-display font-semibold text-white mb-4">Urheberrecht</h2>
              <p class="text-dark-200 leading-relaxed">
                Die Inhalte und Werke auf dieser Website sind urheberrechtlich geschützt. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung und Veröffentlichung bedarf schriftlicher Zustimmung des Inhabers.
              </p>
            </div>

            <!-- Datenschutz -->
            <div>
              <h2 class="text-xl font-display font-semibold text-white mb-4">Datenschutz</h2>
              <p class="text-dark-200 leading-relaxed">
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt in Übereinstimmung mit unserer
                <NuxtLink to="/datenschutz" class="text-primary-400 hover:text-primary-300 underline">Datenschutzerklärung</NuxtLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
