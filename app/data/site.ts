/**
 * Zentrale Fakten von Prestige Webdesign – einzige Quelle der Wahrheit.
 * Alles hier ist vom Inhaber bestätigt (siehe PRODUCT.md). Nichts ergänzen,
 * was nicht belegt ist: keine Kundenstimmen, kein Team, keine Telefonnummer.
 */

export const CONTACT = {
  company: 'Prestige Webdesign',
  owner: 'Robert Schreiner',
  email: 'info@prestige-webdesign.de',
  street: 'Kapitelwiese 14',
  zip: '44263',
  city: 'Dortmund',
  mapsUrl: 'https://maps.google.com/?q=Kapitelwiese+14+44263+Dortmund',
  hours: 'Mo–Fr, 9–18 Uhr',
  since: 2020,
} as const

export interface Stat {
  value: string
  label: string
}

export const TRUST_STATS: Stat[] = [
  { value: '10+', label: 'Projekte' },
  { value: '6', label: 'Jahre Praxis' },
  { value: '100%', label: 'Zufriedenheit' },
  { value: '24h', label: 'Antwortzeit' },
]

export interface NavItem {
  label: string
  to: string
  children?: NavItem[]
}

export const SERVICE_NAV: NavItem[] = [
  { label: 'Webdesign', to: '/leistungen/webdesign' },
  { label: 'Online-Shops', to: '/leistungen/e-commerce' },
  { label: 'Webanwendungen', to: '/leistungen/webanwendungen' },
  { label: 'SEO', to: '/leistungen/seo' },
  { label: 'Wartung & Support', to: '/leistungen/wartung' },
]

export const MAIN_NAV: NavItem[] = [
  { label: 'Leistungen', to: '/leistungen', children: SERVICE_NAV },
  { label: 'Referenzen', to: '/referenzen' },
  { label: 'Preise', to: '/preise' },
  { label: 'Über mich', to: '/ueber-mich' },
  { label: 'Kontakt', to: '/kontakt' },
]

export interface City {
  slug: 'dortmund' | 'bochum' | 'essen' | 'bottrop' | 'unna'
  name: string
  to: string
  note: string
}

export const CITIES: City[] = [
  { slug: 'dortmund', name: 'Dortmund', to: '/webdesign-dortmund', note: 'Heimat – hier sitze ich.' },
  { slug: 'bochum', name: 'Bochum', to: '/webdesign-bochum', note: 'Eine S-Bahn-Fahrt entfernt.' },
  { slug: 'essen', name: 'Essen', to: '/webdesign-essen', note: 'Vom Handwerk bis zur Kanzlei.' },
  { slug: 'bottrop', name: 'Bottrop', to: '/webdesign-bottrop', note: 'Lokale Betriebe, lokal gefunden.' },
  { slug: 'unna', name: 'Unna', to: '/webdesign-unna', note: 'Stadt und Kreis Unna.' },
]

/**
 * Die fünf indexierten Keyword-Landingpages (siehe topKeywords in nuxt.config.ts).
 * Werden intern verlinkt, damit die Seiten keine Orphan Pages bleiben.
 */
export interface TopKeyword {
  slug: string
  label: string
}

export const TOP_KEYWORDS: TopKeyword[] = [
  { slug: 'webdesign-agentur', label: 'Webdesign Agentur' },
  { slug: 'website-erstellen-lassen', label: 'Website erstellen lassen' },
  { slug: 'webdesign-fuer-unternehmen', label: 'Webdesign für Unternehmen' },
  { slug: 'webdesign-fuer-kleine-unternehmen', label: 'Webdesign für kleine Unternehmen' },
  { slug: 'webdesigner-beauftragen', label: 'Webdesigner beauftragen' },
]

/** Städte mit dynamischen Keyword-Landingpages (Unna hat bewusst keine). */
export const KEYWORD_CITIES = ['dortmund', 'essen', 'bochum', 'bottrop'] as const
