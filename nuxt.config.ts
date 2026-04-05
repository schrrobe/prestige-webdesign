// https://nuxt.com/docs/api/configuration/nuxt-config

const dynamicCities = ['dortmund', 'essen', 'bochum', 'bottrop']

// Alle Keyword-Slugs – werden pregerendert (aber nur die Top-5 sind indexiert)
const allKeywords = [
  'webdesign-fuer-unternehmen', 'websites-fuer-unternehmen', 'professionelle-website-fuer-firma',
  'homepage-fuer-firma-erstellen-lassen', 'internetseite-fuer-unternehmen', 'firmenwebsite-erstellen-lassen',
  'business-website-erstellen-lassen', 'webseite-fuer-firma',
  'website-erstellen-lassen', 'webseite-erstellen-lassen', 'homepage-erstellen-lassen',
  'professionelle-website-erstellen-lassen', 'webdesign-agentur', 'webdesign-agentur-fuer-unternehmen',
  'webdesigner-beauftragen', 'website-erstellen-lassen-kosten', 'webdesign-angebot',
  'website-fuer-unternehmen-erstellen-lassen', 'homepage-fuer-unternehmen-erstellen-lassen',
  'webdesign-fuer-kleine-unternehmen', 'website-fuer-kleine-unternehmen', 'homepage-fuer-kleine-firmen',
  'webdesign-fuer-kmu', 'website-erstellen-lassen-fuer-kmu', 'guenstige-website-fuer-unternehmen',
  'professionelle-homepage-fuer-kleine-unternehmen',
  'webdesign-stadt', 'webdesigner-stadt', 'website-erstellen-lassen-stadt',
  'homepage-erstellen-lassen-stadt', 'webdesign-agentur-stadt', 'wordpress-agentur-stadt',
  'internetagentur-stadt', 'webseite-fuer-unternehmen-stadt',
  'wordpress-webdesign', 'wordpress-agentur', 'wordpress-website-erstellen-lassen',
  'wordpress-webdesigner', 'elementor-webdesign', 'cms-website-erstellen-lassen',
  'responsive-webdesign-agentur', 'seo-webdesign', 'wordpress-webdesign-fuer-unternehmen',
  'webdesign-fuer-handwerker', 'webdesign-fuer-aerzte', 'webdesign-fuer-kanzleien',
  'webdesign-fuer-steuerberater', 'webdesign-fuer-immobilienmakler', 'webdesign-fuer-restaurants',
  'webdesign-fuer-coaches', 'webdesign-fuer-agenturen', 'webdesign-fuer-lokale-unternehmen',
  'webdesign-fuer-dienstleister', 'website-erstellen-lassen-fuer-handwerksbetriebe',
  'veraltete-website-neu-erstellen', 'firmenwebsite-modernisieren', 'website-redesign-unternehmen',
  'website-relaunch-firma', 'professionelle-unternehmenswebsite', 'mehr-kunden-durch-website',
  'website-fuer-leadgenerierung', 'bessere-firmenwebsite',
  'seo-optimierte-website-erstellen-lassen', 'webdesign-und-seo', 'seo-webdesign-fuer-unternehmen',
  'website-fuer-google-optimieren', 'lokale-seo-und-webdesign', 'google-freundliche-website',
  'moderne-firmenwebsite', 'hochwertige-website-erstellen-lassen', 'professionelle-webseite',
  'individuelle-website-erstellen-lassen', 'massgeschneiderte-website-fuer-unternehmen',
  'conversion-starke-website', 'responsive-firmenwebsite',
  'webdesign-fuer-kleine-unternehmen-in-stadt', 'website-erstellen-lassen-fuer-handwerker',
  'professionelle-firmenwebsite-in-stadt',
]

// Nur diese 5 Keywords kommen in die Sitemap (werden indexiert)
const topKeywords = [
  'webdesign-agentur',
  'website-erstellen-lassen',
  'webdesign-fuer-unternehmen',
  'webdesign-fuer-kleine-unternehmen',
  'webdesigner-beauftragen',
]

const allDynamicRoutes = dynamicCities.flatMap(city =>
  allKeywords.map(keyword => `/${city}/${keyword}`),
)

const sitemapDynamicRoutes = dynamicCities.flatMap(city =>
  topKeywords.map(keyword => `/${city}/${keyword}`),
)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Prestige Webdesign | Webagentur Dortmund – Webdesign, SEO & E-Commerce',
      meta: [
        { name: 'description', content: 'Prestige Webdesign: Professionelle Webagentur für modernes Webdesign, SEO & E-Commerce im Ruhrgebiet. Jetzt Kontakt aufnehmen!' },
        { name: 'author', content: 'Prestige Webdesign - Robert Schreiner' },
        { name: 'theme-color', content: '#0f172a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Prestige Webdesign' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:image', content: 'https://prestige-webdesign.de/images/og-default.svg' },
        { property: 'og:image:alt', content: 'Prestige Webdesign - Webdesign, SEO und E-Commerce im Ruhrgebiet' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://prestige-webdesign.de/images/og-default.svg' },
        { name: 'robots', content: 'index, follow' },
        { name: 'geo.region', content: 'DE-NW' },
        { name: 'geo.placename', content: 'Dortmund' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap' },
      ],
    },
  },

  site: {
    url: 'https://prestige-webdesign.de',
    name: 'Prestige Webdesign',
  },

  sitemap: {
    urls: sitemapDynamicRoutes,
  },

  robots: {
    rules: [
      { UserAgent: '*', Allow: '/' },
    ],
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },

  routeRules: {
    '/**': { prerender: true },
  },

  nitro: {
    prerender: {
      routes: allDynamicRoutes,
    },
  },
})
