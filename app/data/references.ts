/**
 * Referenzen – vom Inhaber freigegeben (Name, Screenshot, Link).
 * Nur öffentlich überprüfbare Fakten; keine Kennzahlen, keine Zitate.
 * Rolle bei allen Projekten: Design & Umsetzung.
 */
export interface Reference {
  slug: string
  name: string
  url: string
  host: string
  industry: string
  location: string
  year?: number
  tool: 'Individuell (Nuxt)' | 'WordPress'
  summary: string
  task: string
  built: string[]
  tech: string[]
  images: { desktop: string; mobile: string }
  accent: string
}

export const REFERENCES: Reference[] = [
  {
    slug: 'shape-and-flow',
    name: 'Shape & Flow',
    url: 'https://shapeandflow.de/',
    host: 'shapeandflow.de',
    industry: 'Studio für brasilianische Lymphdrainage',
    location: 'Dortmund',
    tool: 'Individuell (Nuxt)',
    summary: 'Individuell entwickelte Website mit Preisübersicht, Ratgeber und starker Sichtbarkeit für Google und KI-Suchen.',
    task: 'Ein Studio mit erklärungsbedürftiger Methode braucht eine Seite, die Vertrauen aufbaut, Preise offenlegt und Terminanfragen leicht macht.',
    built: [
      'Leistungsseiten für Körper- und Gesichtsbehandlung mit klaren Preisen',
      'Preisübersicht mit 5er- und 10er-Paketen',
      'Seiten zu Methode, Studio und häufigen Fragen',
      'Ratgeber-Bereich für Fachartikel',
      'Terminanfrage über ein Kontaktformular',
      'Strukturierte Daten (JSON-LD), llms.txt und automatisch erzeugte Vorschaubilder',
    ],
    tech: ['Nuxt 3', 'Vue', 'Schema.org', 'llms.txt'],
    images: {
      desktop: '/images/referenzen/shape-and-flow-desktop.webp',
      mobile: '/images/referenzen/shape-and-flow-mobile.webp',
    },
    accent: '#a04607',
  },
  {
    slug: '13th-passion',
    name: '13th Passion',
    url: 'https://13thpassion.de/',
    host: '13thpassion.de',
    industry: 'Hochzeits- und Studiofotografie',
    location: 'Ennepetal · NRW',
    year: 2022,
    tool: 'WordPress',
    summary: 'Bildstarke WordPress-Website für ein Fotografenpaar – mit Galerien, Blog und eigener Seite für Dortmund.',
    task: 'Fotografen verkaufen mit Bildern. Die Seite muss Arbeiten groß zeigen, Persönlichkeit vermitteln und Anfragen für Hochzeiten einsammeln.',
    built: [
      'Galerien für Hochzeits- und Studioarbeiten',
      'Seiten über das Paar und das Studio',
      'Blog für Hochzeitsreportagen',
      'Landingpage „Hochzeitsfotos Dortmund“',
      'Kundenstimmen, Instagram-Einbindung und WhatsApp-Kontakt',
      'Anfrageformular',
    ],
    tech: ['WordPress', 'Elementor', 'Astra'],
    images: {
      desktop: '/images/referenzen/13th-passion-desktop.webp',
      mobile: '/images/referenzen/13th-passion-mobile.webp',
    },
    accent: '#cfaa8d',
  },
  {
    slug: 'holtstraeter-transporte',
    name: 'Holtsträter Transporte',
    url: 'https://holtstraeter-transporte.de/',
    host: 'holtstraeter-transporte.de',
    industry: 'Baustofftransporte',
    location: 'Dortmund',
    year: 2023,
    tool: 'WordPress',
    summary: 'WordPress-Website für ein Dortmunder Transportunternehmen – mit Fuhrpark, Zertifikaten und Stellenangeboten.',
    task: 'Ein Familienbetrieb im Bau-Umfeld braucht eine Seite, die Leistungen und Fuhrpark zeigt und gleichzeitig Fahrer für das Team gewinnt.',
    built: [
      'Leistungsübersicht für Baustoff- und Erdtransporte',
      'Fuhrpark-Seite',
      'Stellenangebote für neue Mitarbeiter',
      'Zertifikate und Firmengeschichte',
      'Kontaktseite',
    ],
    tech: ['WordPress', 'Avada'],
    images: {
      desktop: '/images/referenzen/holtstraeter-transporte-desktop.webp',
      mobile: '/images/referenzen/holtstraeter-transporte-mobile.webp',
    },
    accent: '#fcb900',
  },
]
