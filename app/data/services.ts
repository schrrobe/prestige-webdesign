/**
 * Leistungen mit bestätigten Preisen. „price“ ist der Anker, den Besucher
 * auf Startseite, Preisseite und Leistungsseiten sehen – nur hier pflegen.
 */
export interface Service {
  slug: 'webdesign' | 'e-commerce' | 'webanwendungen' | 'seo' | 'wartung'
  title: string
  short: string
  description: string
  price: string
  priceNote: string
  to: string
  inquiry: string
}

export const SERVICES: Service[] = [
  {
    slug: 'webdesign',
    title: 'Website',
    short: 'Firmenwebsite, Homepage, Relaunch',
    description: 'Eine schnelle, mobile Website, die erklärt, was Sie tun, und Anfragen bringt – mit WordPress zum Selbstpflegen oder individuell entwickelt.',
    price: 'ab 800 €',
    priceNote: 'Festpreis',
    to: '/leistungen/webdesign',
    inquiry: 'Website',
  },
  {
    slug: 'e-commerce',
    title: 'Online-Shop',
    short: 'WooCommerce oder Shopify',
    description: 'Ein Shop, der auf dem Smartphone verkauft: Produkte, Zahlung, Versand und rechtssichere Abläufe.',
    price: '2.500 – 15.000 €',
    priceNote: 'Festpreis je nach Umfang',
    to: '/leistungen/e-commerce',
    inquiry: 'Online-Shop',
  },
  {
    slug: 'webanwendungen',
    title: 'Webanwendung',
    short: 'Portale, Kundenbereiche, Tools',
    description: 'Individuelle Software im Browser für Abläufe, die kein Baukasten abbildet – entwickelt mit Nuxt und Vue.',
    price: 'auf Anfrage',
    priceNote: 'Festpreis nach Erstgespräch',
    to: '/leistungen/webanwendungen',
    inquiry: 'Webanwendung',
  },
  {
    slug: 'seo',
    title: 'SEO',
    short: 'Technik, Inhalte, lokale Suche',
    description: 'Damit Kunden aus Ihrer Stadt Sie bei Google finden: saubere Technik, klare Inhalte, lokale Signale.',
    price: 'auf Anfrage',
    priceNote: 'Festpreis nach Erstgespräch',
    to: '/leistungen/seo',
    inquiry: 'SEO',
  },
  {
    slug: 'wartung',
    title: 'Wartung & Support',
    short: 'Updates, Backups, Sicherheit',
    description: 'Ich halte Ihre Website aktuell, sicher und schnell – und bin da, wenn etwas hakt.',
    price: 'ab 79 € / Monat',
    priceNote: 'Pakete: 79 · 199 · 399 €',
    to: '/leistungen/wartung',
    inquiry: 'Wartung',
  },
]

/** Themen für das Anfrageformular (Reihenfolge = Anzeige). */
export const INQUIRY_TOPICS = [
  'Website',
  'Online-Shop',
  'Webanwendung',
  'SEO',
  'Wartung',
  'Weiß ich noch nicht',
] as const
