<script setup lang="ts">
const siteUrl = 'https://prestige-webdesign.de'
const route = useRoute()

const canonicalUrl = computed(() => new URL(route.path || '/', siteUrl).toString())

const structuredData = computed(() => JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#organization`,
    name: 'Prestige Webdesign',
    url: siteUrl,
    image: `${siteUrl}/images/og-default.svg`,
    email: 'info@prestige-webdesign.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kapitelwiese 14',
      postalCode: '44263',
      addressLocality: 'Dortmund',
      addressCountry: 'DE',
    },
    areaServed: ['Dortmund', 'Bochum', 'Essen', 'Ruhrgebiet'],
    serviceType: ['Webdesign', 'SEO', 'E-Commerce', 'Website-Wartung'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Prestige Webdesign',
    inLanguage: 'de-DE',
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
  },
]))

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value,
    },
  ],
  script: [
    {
      key: 'structured-data',
      type: 'application/ld+json',
      children: structuredData.value,
    },
  ],
}))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
