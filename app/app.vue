<script setup lang="ts">
const siteUrl = 'https://prestige-webdesign.de'
const route = useRoute()

const canonicalUrl = computed(() => new URL(route.path || '/', siteUrl).toString())

const segmentNames: Record<string, string> = {
  leistungen: 'Leistungen',
  webdesign: 'Webdesign',
  seo: 'SEO',
  'e-commerce': 'E-Commerce',
  wartung: 'Wartung',
  webanwendungen: 'Webanwendungen',
  kontakt: 'Kontakt',
  'webdesign-dortmund': 'Webdesign Dortmund',
  'webdesign-essen': 'Webdesign Essen',
  'webdesign-bochum': 'Webdesign Bochum',
  'webdesign-bottrop': 'Webdesign Bottrop',
  'webdesign-unna': 'Webdesign Unna',
  dortmund: 'Dortmund',
  essen: 'Essen',
  bochum: 'Bochum',
  bottrop: 'Bottrop',
}

const breadcrumbItems = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  if (segments.length === 0) return []
  const items: Array<{ name: string; url: string }> = [{ name: 'Startseite', url: siteUrl }]
  let current = siteUrl
  for (const seg of segments) {
    current = `${current}/${seg}`
    const name = segmentNames[seg] ?? seg.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    items.push({ name, url: current })
  }
  return items
})

const structuredData = computed(() => {
  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${siteUrl}/#organization`,
      name: 'Prestige Webdesign',
      url: siteUrl,
      image: `${siteUrl}/images/og-default.svg`,
      email: 'info@prestige-webdesign.de',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kapitelwiese 14',
        postalCode: '44263',
        addressLocality: 'Dortmund',
        addressCountry: 'DE',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
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
  ]

  if (breadcrumbItems.value.length > 1) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.value.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    })
  }

  return JSON.stringify(schemas)
})

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value,
    },
    {
      rel: 'alternate',
      hreflang: 'de-DE',
      href: canonicalUrl.value,
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
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

useSeoMeta({
  ogUrl: () => canonicalUrl.value,
  ogImage: `${siteUrl}/images/og-default.svg`,
  ogImageAlt: 'Prestige Webdesign - Webdesign, SEO und E-Commerce im Ruhrgebiet',
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/images/og-default.svg`,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
