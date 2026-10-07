<script setup lang="ts">
useSeoMeta({
  title: 'Impressum | Prestige Webdesign',
  description: 'Impressum von Prestige Webdesign, Robert Schreiner, Dortmund. Angaben gemäß § 5 DDG.',
  robots: 'noindex, follow',
})
</script>

<template>
  <div>
    <PageCover
      title="Impressum"
      lead="Angaben gemäß § 5 DDG"
    />

    <section class="section" aria-label="Impressum">
      <div class="wrap">
        <div class="prose-paper">
          <!-- Anbieter -->
          <h2 class="!mt-0">Prestige Webdesign</h2>
          <p class="!mb-1"><strong>Inhaber:</strong> Robert Schreiner</p>
          <p class="!mb-1"><strong>Adresse:</strong> Kapitelwiese 14, 44263 Dortmund, Deutschland</p>
          <p><strong>E-Mail:</strong> <a href="mailto:info@prestige-webdesign.de">info@prestige-webdesign.de</a></p>

          <!-- Geschäftsbereich -->
          <h2>Geschäftsbereich</h2>
          <p>
            Webdesign, Webanwendungen, Suchmaschinenoptimierung (SEO), E-Commerce-Lösungen, Website-Wartung, Texterstellung und digitale Beratung.
          </p>

          <!-- Verantwortlich -->
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>Robert Schreiner, Kapitelwiese 14, 44263 Dortmund</p>

          <!-- Haftungsausschluss -->
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt zusammengestellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme ich jedoch keine Gewähr. Eine Haftung für Schäden, die durch die Nutzung der Informationen entstehen, ist ausgeschlossen.
          </p>
          <p>
            Externe Links werden regelmäßig überprüft. Sollten jedoch fehlerhafte oder illegale Inhalte auf verlinkten Seiten vorhanden sein, wird um sofortige Benachrichtigung gebeten, damit diese Links entfernt werden können.
          </p>

          <!-- Urheberrecht -->
          <h2>Urheberrecht</h2>
          <p>
            Die Inhalte und Werke auf dieser Website sind urheberrechtlich geschützt. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung und Veröffentlichung bedarf schriftlicher Zustimmung des Inhabers.
          </p>

          <!-- Datenschutz -->
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <!-- Datenschutz -->
          <h2>Datenschutz</h2>
          <p>
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt in Übereinstimmung mit unserer
            <NuxtLink to="/datenschutz">Datenschutzerklärung</NuxtLink>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
