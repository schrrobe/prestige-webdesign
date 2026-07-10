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
