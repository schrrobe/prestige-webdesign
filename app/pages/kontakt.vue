<script setup lang="ts">
import { CONTACT } from '~/data/site'

useSeoMeta({
  title: 'Kontakt – kostenloses Erstgespräch | Prestige Webdesign Dortmund',
  description: 'Kontakt zu Prestige Webdesign in Dortmund: kostenloses Erstgespräch für Ihre Website, Ihren Shop oder SEO. Antwort innerhalb von 24 Stunden.',
  ogTitle: 'Kontakt | Prestige Webdesign',
  ogDescription: 'Schreiben Sie mir – ich antworte innerhalb von 24 Stunden persönlich.',
})

useHead({
  script: [
    {
      key: 'contact-structured-data',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Kontakt',
        url: 'https://prestige-webdesign.de/kontakt',
        mainEntity: {
          '@type': 'ProfessionalService',
          name: 'Prestige Webdesign',
          email: CONTACT.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: CONTACT.street,
            postalCode: CONTACT.zip,
            addressLocality: CONTACT.city,
            addressCountry: 'DE',
          },
        },
      }),
    },
  ],
})

const nextSteps = [
  { title: 'Sie schreiben mir', text: 'Über das Formular oder per E-Mail – ein paar Sätze reichen.' },
  { title: 'Ich melde mich', text: 'Innerhalb von 24 Stunden, mit einem Terminvorschlag.' },
  { title: 'Wir sprechen', text: 'Im kostenlosen Erstgespräch klären wir Ziele, Umfang und Budget.' },
]
</script>

<template>
  <div>
    <PageCover
      title="Anpfiff für Ihre neue Website."
      lead="Erzählen Sie mir kurz, worum es geht. Ich antworte innerhalb von 24 Stunden – persönlich, kostenlos und unverbindlich."
      rubric="Anpfiff"
    />

    <section class="section" data-rubric="Kontakt" aria-label="Kontaktformular und Kontaktdaten">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <ContactForm />
        </div>

        <aside class="lg:col-span-5" aria-label="Weitere Kontaktwege">
          <div class="rule-heavy pt-6">
            <h2 class="t-title">Lieber direkt?</h2>
            <dl class="mt-6 space-y-5">
              <div>
                <dt class="t-label text-ink-soft">E-Mail</dt>
                <dd><a :href="`mailto:${CONTACT.email}`" class="link inline-flex min-h-11 items-center text-xl font-bold">{{ CONTACT.email }}</a></dd>
              </div>
              <div>
                <dt class="t-label text-ink-soft">Adresse</dt>
                <dd class="mt-1">
                  {{ CONTACT.owner }}<br>{{ CONTACT.street }}<br>{{ CONTACT.zip }} {{ CONTACT.city }}
                  <a :href="CONTACT.mapsUrl" target="_blank" rel="noopener" class="link mt-1 flex min-h-11 items-center gap-1.5 font-semibold">
                    In Google Maps öffnen <span class="sr-only">(neuer Tab)</span>
                    <AppIcon name="arrow-up-right" class="h-4 w-4" />
                  </a>
                </dd>
              </div>
              <div>
                <dt class="t-label text-ink-soft">Erreichbar</dt>
                <dd class="mt-1">{{ CONTACT.hours }}</dd>
              </div>
            </dl>
          </div>

          <div class="mt-12 rule-heavy pt-6">
            <h2 class="t-title">So geht es weiter</h2>
            <ol class="mt-6 space-y-5">
              <li v-for="(step, i) in nextSteps" :key="step.title" class="grid grid-cols-[2.5rem_1fr] gap-x-3">
                <span class="text-3xl leading-none text-ink-soft" style="font-stretch: 62%; font-weight: 880;" aria-hidden="true">{{ i + 1 }}</span>
                <div>
                  <h3 class="font-bold">{{ step.title }}</h3>
                  <p class="text-ink-soft">{{ step.text }}</p>
                </div>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
