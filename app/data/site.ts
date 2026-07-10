/**
 * Zentrale, konsistente Kennzahlen der Agentur.
 * Einzige Quelle der Wahrheit – frühere Widersprüche (50+ vs. 150+ Projekte)
 * werden hierüber vereinheitlicht.
 */
export interface Stat {
  value: string
  label: string
}

export const TRUST_STATS: Stat[] = [
  { value: '50+', label: 'Projekte' },
  { value: '100%', label: 'Zufriedenheit' },
  { value: '24h', label: 'Antwortzeit' },
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
