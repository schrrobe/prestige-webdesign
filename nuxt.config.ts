// https://nuxt.com/docs/api/configuration/nuxt-config
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
    strictNuxtContentPaths: true,
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
    '/': { prerender: true },
    '/leistungen/**': { prerender: true },
    '/webdesign-dortmund': { prerender: true },
    '/webdesign-bochum': { prerender: true },
    '/webdesign-essen': { prerender: true },
    '/webdesign-bottrop': { prerender: true },
    '/webdesign-unna': { prerender: true },
    '/impressum': { prerender: true },
    '/datenschutz': { prerender: true },
    '/kontakt': { prerender: true },
  },
})
