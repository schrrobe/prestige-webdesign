/**
 * Der Ablauf – einmal definiert, überall gleich.
 * Ersetzt die drei früheren, unterschiedlich formulierten Prozess-Abschnitte.
 */
export interface ProcessStep {
  title: string
  description: string
  when: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    when: 'Zum Start',
    title: 'Kostenloses Erstgespräch',
    description: 'Wir sprechen über Ihren Betrieb, Ihre Ziele und Ihr Budget. Unverbindlich – Sie entscheiden danach in Ruhe.',
  },
  {
    when: 'Nach 1–2 Tagen',
    title: 'Angebot zum Festpreis',
    description: 'Sie bekommen ein schriftliches Angebot mit klaren Positionen. Was dort steht, kostet es auch.',
  },
  {
    when: 'Woche 1–3',
    title: 'Entwurf & Umsetzung',
    description: 'Ich gestalte und entwickle Ihre Seite – mit WordPress zum Selbstpflegen oder individuell. Sie sehen Zwischenstände und geben Feedback.',
  },
  {
    when: 'Vor dem Start',
    title: 'Test auf allen Geräten',
    description: 'Smartphone, Tablet, Desktop, Tastatur und Screenreader: Ich prüfe Ladezeit, Darstellung und Barrierefreiheit.',
  },
  {
    when: 'Zum Schluss',
    title: 'Launch & Übergabe',
    description: 'Domain, SSL, Weiterleitungen und Google Search Console. Auf Wunsch kümmere ich mich danach um Wartung und Updates.',
  },
]

/** Bestätigte Faustregel für die Dauer einer typischen Unternehmenswebsite. */
export const PROCESS_DURATION = 'Eine typische Unternehmenswebsite ist in 2 bis 6 Wochen fertig – abhängig von Umfang und Feedbackzeiten.'
