<script setup lang="ts">
import { CONTACT, TOP_KEYWORDS } from '~/data/site'

const route = useRoute()

// Nur diese 5 Keywords werden indexiert (4 Städte × 5 = 20 Seiten)
const topKeywords = new Set([
  'webdesign-agentur',
  'website-erstellen-lassen',
  'webdesign-fuer-unternehmen',
  'webdesign-fuer-kleine-unternehmen',
  'webdesigner-beauftragen',
])

type KeywordSeed = {
  h1: string
  keyword: string
  focus: string
}

type RichContent = {
  mainText: string
  benefits: Array<{ title: string; text: string }>
  faqItems: Array<{ question: string; answer: string }>
}

const cityMap: Record<string, { name: string; adjective: string }> = {
  dortmund: { name: 'Dortmund', adjective: 'Dortmunder' },
  essen: { name: 'Essen', adjective: 'Essener' },
  bochum: { name: 'Bochum', adjective: 'Bochumer' },
  bottrop: { name: 'Bottrop', adjective: 'Bottroper' },
}

// Einzigartiger Content pro Keyword (gilt für alle 4 Städte, kombiniert mit stadtspezifischem Text)
const richContentMap: Record<string, RichContent> = {
  'webdesign-agentur': {
    mainText: 'Ein Webdesigner vor Ort kennt nicht nur aktuelle Gestaltung, sondern auch die Betriebe und Kunden in Ihrer Region. Bei mir bekommen Sie keine Standardlösung vom Band, sondern eine Website, die auf Ihre Zielgruppe, Ihre Branche und Ihre Ziele zugeschnitten ist. Ich arbeite allein – ohne Agentur-Apparat, dafür mit einem festen Ansprechpartner: Von der ersten Beratung bis zum Launch betreue ich Sie persönlich und bin auch danach für Sie da.',
    benefits: [
      { title: 'Das passende Werkzeug', text: 'WordPress, wenn Sie selbst pflegen wollen – individuell entwickelt, wenn Tempo und eigene Ideen zählen.' },
      { title: 'Aus dem Revier', text: 'Ich sitze in Dortmund und arbeite für Betriebe im ganzen Ruhrgebiet. Kurze Wege, gleiche Sprache.' },
      { title: 'Alles aus einer Hand', text: 'Design, Entwicklung, SEO-Grundlage und auf Wunsch Wartung – ohne Übergaben zwischen verschiedenen Leuten.' },
      { title: 'Auf Anfragen ausgerichtet', text: 'Jede Seite hat ein Ziel: dass Interessenten Sie kontaktieren. Schönheit um ihrer selbst willen gibt es bei mir nicht.' },
    ],
    faqItems: [
      { question: 'Was unterscheidet eine lokale Webdesign-Agentur von einer überregionalen?', answer: 'Ein Anbieter aus der Region kennt Ihre Gegend, Ihre Wettbewerber und die Erwartungen Ihrer Kunden vor Ort. Bei mir sprechen Sie direkt mit der Person, die Ihre Website gestaltet und entwickelt – statt mit wechselnden Projektmanagern.' },
      { question: 'Was kostet eine Webdesign-Agentur im Vergleich zu einem Freelancer?', answer: 'Agenturen rechnen meist Projektmanagement und mehrere Beteiligte mit ein. Ich arbeite allein und direkt mit Ihnen, ohne diesen Überbau. Eine Unternehmenswebsite beginnt bei 800 €. Nach dem kostenlosen Erstgespräch bekommen Sie einen Festpreis.' },
      { question: 'Wie läuft die Zusammenarbeit mit Prestige Webdesign ab?', answer: 'Nach einem kostenlosen Erstgespräch bekommen Sie ein schriftliches Angebot zum Festpreis. Danach gestalte und entwickle ich Ihre Seite, Sie sehen Zwischenstände und geben Feedback. Vor dem Launch teste ich alles auf Smartphone, Tablet und Desktop.' },
    ],
  },
  'website-erstellen-lassen': {
    mainText: 'Wer eine professionelle Website erstellen lassen möchte, steht vor einer wichtigen Entscheidung: Baukasten oder Profi? Baukastenseiten sparen kurzfristig – kosten aber oft Sichtbarkeit, Anfragen und Vertrauen. Ich baue Websites, die technisch sauber, für Suchmaschinen gut lesbar und auf Ihre Zielgruppe ausgerichtet sind. So entsteht eine Website, die aktiv für Ihr Unternehmen arbeitet.',
    benefits: [
      { title: 'Festpreis und Transparenz', text: 'Kein böses Erwachen: Sie wissen vorher genau, was Ihre Website kostet – ab 800 €.' },
      { title: 'SEO von Anfang an', text: 'Die technische SEO-Basis ist von Tag 1 eingebaut – keine nachträglichen Korrekturen nötig.' },
      { title: 'Mobil zuerst', text: 'Viele Ihrer Besucher kommen vom Smartphone. Ihre Website funktioniert auf jedem Gerät.' },
      { title: 'Schnelle Umsetzung', text: 'Eine typische Unternehmenswebsite ist in 2 bis 6 Wochen fertig – strukturiert und ohne unnötige Verzögerungen.' },
    ],
    faqItems: [
      { question: 'Was kostet es, eine Website erstellen zu lassen?', answer: 'Eine Unternehmenswebsite beginnt bei 800 €. Entscheidend sind Seitenanzahl, Funktionen und Gestaltungsaufwand. Online-Shops liegen zwischen 2.500 und 15.000 €. Nach dem kostenlosen Erstgespräch bekommen Sie ein unverbindliches Angebot zum Festpreis.' },
      { question: 'Wie lange dauert die Erstellung einer Website?', answer: 'Eine typische Unternehmenswebsite ist in 2 bis 6 Wochen fertig – abhängig von Umfang und Feedbackzeiten. Ich arbeite mit klaren Schritten, damit Sie immer wissen, wo Ihr Projekt steht.' },
      { question: 'Was brauche ich, bevor ich eine Website erstellen lasse?', answer: 'Im Idealfall liegen Texte, Bilder und Logo schon bereit. Wenn noch etwas fehlt, ist das kein Hindernis – wie wir das lösen, besprechen wir im Erstgespräch.' },
    ],
  },
  'webdesign-fuer-unternehmen': {
    mainText: 'Die Website Ihres Unternehmens ist oft der erste Kontakt mit neuen Kunden – und entscheidet in Sekunden über Vertrauen oder Absprung. Gutes Webdesign für Unternehmen verbindet Gestaltung mit Funktion: eine klare Struktur, die Besucher führt, Inhalte, die überzeugen, und eine technische Basis, die Google versteht. Ich baue Unternehmenswebsites, die nicht nur gut aussehen, sondern Anfragen bringen sollen.',
    benefits: [
      { title: 'Professionelle Außenwirkung', text: 'Ihre Website repräsentiert Ihr Unternehmen – ich sorge dafür, dass der erste Eindruck stimmt.' },
      { title: 'Auf Anfragen ausgerichtet', text: 'Jede Seite ist darauf ausgelegt, Besucher zu einer Anfrage oder einem Kauf zu führen.' },
      { title: 'Erweiterbar und pflegbar', text: 'Ihre Website wächst mit Ihrem Unternehmen – erweiterbar, pflegbar und technisch sauber gebaut.' },
      { title: 'Für Google lesbar', text: 'Eine technische SEO-Grundlage und strukturierte Inhalte helfen Suchmaschinen, Ihre Seite zu verstehen.' },
    ],
    faqItems: [
      { question: 'Was macht eine gute Unternehmenswebsite aus?', answer: 'Eine gute Unternehmenswebsite ist klar strukturiert, lädt schnell, funktioniert auf dem Smartphone und führt Besucher zielgerichtet zu einer Anfrage. Gestaltung und Funktion müssen zusammenpassen.' },
      { question: 'Muss ich meine bestehende Website komplett ersetzen?', answer: 'Nicht zwingend. Manchmal reichen gezielte Verbesserungen an Struktur, Gestaltung oder Inhalten. Im kostenlosen Erstgespräch schaue ich mir Ihre aktuelle Website an und sage Ihnen ehrlich, welche Lösung sich wirtschaftlich lohnt.' },
      { question: 'Wie wichtig ist Mobile-Optimierung für Unternehmen?', answer: 'Sehr wichtig: Ein großer Teil der Besuche kommt vom Smartphone, und Google bewertet die mobile Version einer Seite als Hauptversion. Eine Seite, die am Handy schlecht funktioniert, kostet Sichtbarkeit und Kunden.' },
    ],
  },
  'webdesign-fuer-kleine-unternehmen': {
    mainText: 'Kleine Unternehmen haben selten eine eigene IT-Abteilung oder ein großes Budget – und brauchen trotzdem einen professionellen Auftritt im Netz. Genau solche überschaubaren Projekte baue ich gern: klare Gestaltung, schnelle Ladezeiten, gute Bedienung am Smartphone und eine SEO-Grundlage, die lokal wirkt. Ohne unnötigen Aufwand und ohne Technik, die niemand braucht – genau das, was Ihr Betrieb wirklich braucht.',
    benefits: [
      { title: 'Faire Preise, klarer Umfang', text: 'Kein überteuertes Agenturpaket, sondern genau das, was Ihr Betrieb braucht – ab 800 € zum Festpreis.' },
      { title: 'Einfache Pflege', text: 'Auf Wunsch mit WordPress, damit Sie Texte und Bilder selbst ändern können – ohne Technikkenntnisse.' },
      { title: 'Lokale Sichtbarkeit', text: 'Für kleine Unternehmen ist lokale Suche entscheidend – damit Kunden aus der Region Sie finden.' },
      { title: 'Persönliche Betreuung', text: 'Kein Ticketsystem, kein Callcenter: Sie haben immer einen direkten Ansprechpartner.' },
    ],
    faqItems: [
      { question: 'Ab welchem Budget lohnt sich eine professionelle Website für kleine Unternehmen?', answer: 'Eine professionelle, mobile und suchmaschinenfreundliche Website ist bei mir ab 800 € möglich. Im Erstgespräch finden wir gemeinsam den richtigen Umfang für Ihr Budget und Ihre Ziele.' },
      { question: 'Kann ich meine Website später selbst pflegen?', answer: 'Ja. Mit WordPress pflegen Sie Texte, Bilder und Angebote selbst – ich richte alles so ein, dass es ohne Technikkenntnisse funktioniert, und zeige es Ihnen bei der Übergabe.' },
      { question: 'Braucht ein kleines Unternehmen wirklich SEO?', answer: 'Ja, gerade kleine Unternehmen profitieren von lokaler Suchmaschinenoptimierung. Wenn jemand in Ihrer Stadt nach Ihrer Leistung sucht, sollten Sie gefunden werden – und die Grundlagen dafür sind oft mit überschaubarem Aufwand gelegt.' },
    ],
  },
  'webdesigner-beauftragen': {
    mainText: `Einen Webdesigner zu beauftragen ist eine Investition – und wie bei jeder Investition kommt es auf die richtige Wahl an. Freelancer oder Agentur? Günstig oder hochwertig? Die Antwort hängt von Ihrem Projekt ab. Bei mir bekommen Sie einen persönlichen Ansprechpartner, der gestaltet und entwickelt, und einen Festpreis, bevor es losgeht. Seit ${CONTACT.since} habe ich über 10 Projekte abgeschlossen – drei davon können Sie sich unter Referenzen ansehen.`,
    benefits: [
      { title: 'Persönlicher Ansprechpartner', text: 'Sie arbeiten direkt mit mir – keine Vermittler, keine stille Post.' },
      { title: 'Transparente Kalkulation', text: 'Festpreisangebote statt Stundensätze – Sie wissen von Anfang an, was es kostet.' },
      { title: 'Referenzen und Erfahrung', text: `Seit ${CONTACT.since} im Webdesign, über 10 abgeschlossene Projekte – ich weiß, was funktioniert und was nicht.` },
      { title: 'Auch nach dem Launch da', text: 'Updates, Erweiterungen und Support – auf Wunsch als Wartungspaket ab 79 € im Monat.' },
    ],
    faqItems: [
      { question: 'Freelancer oder Agentur – was ist besser?', answer: 'Das hängt vom Projekt ab. Eine Agentur bringt mehr Köpfe mit, aber auch mehr Abstimmung und meist höhere Preise. Ein Freelancer wie ich arbeitet direkter: Sie sprechen immer mit der Person, die Ihre Website baut. Für die meisten Firmenwebsites ist das der kürzere Weg.' },
      { question: 'Worauf sollte ich beim Beauftragen eines Webdesigners achten?', answer: 'Wichtig sind: Referenzen, die Sie sich live ansehen können, ein klares Angebot mit Festpreis, die Rechte am fertigen Design, Erfahrung mit SEO und mobiler Darstellung sowie Unterstützung nach dem Launch.' },
      { question: 'Was passiert, wenn mir das Design nicht gefällt?', answer: 'Sie sehen schon während der Umsetzung Zwischenstände und geben Feedback, bevor es weitergeht. So fallen Änderungswünsche früh auf. Wie viele Korrekturrunden enthalten sind, steht vorher im Angebot.' },
    ],
  },
}

// Stadtspezifischer Kontext für die 20 Top-Seiten
const cityContextMap: Record<string, string> = {
  dortmund: 'Dortmund ist mit rund 600.000 Einwohnern die größte Stadt des Ruhrgebiets und ein wichtiger Digitalstandort – rund um den Technologiepark sind viele IT-Unternehmen zu Hause. Prestige Webdesign sitzt in Dortmund-Hörde. Für Betriebe in Dortmund ist eine starke Online-Präsenz kein Luxus, sondern Voraussetzung, um im Wettbewerb sichtbar zu bleiben.',
  essen: 'Essen hat sich von der Kohle- und Stahlstadt zur modernen Dienstleistungsmetropole gewandelt. Als Sitz großer Unternehmen und eines starken Mittelstands ist der Wettbewerb um Sichtbarkeit im Netz hoch. Eine Website, die bei Suchanfragen aus Essen gefunden wird, ist für lokale Betriebe ein echter Vorteil.',
  bochum: 'Bochum verbindet Universitätsstadt und Wirtschaftsstandort: Die Ruhr-Universität mit Zehntausenden Studierenden prägt ein junges, digital geübtes Umfeld. Für Unternehmen in Bochum heißt das: Ihre Kunden haben hohe Ansprüche an Websites – und vergleichen mehrere Anbieter.',
  bottrop: 'Bottrop ist eine der kompakteren Städte des Ruhrgebiets, die lokale Wirtschaft ist eng vernetzt. Persönliche Empfehlungen zählen hier viel – aber auch die Auffindbarkeit im Netz: Wer bei Google lokal gefunden wird, hat einen klaren Vorteil gegenüber Betrieben, die nur auf Mundpropaganda setzen.',
}

const keywordSeeds: Record<string, KeywordSeed> = {
  // Allgemein B2B / Unternehmen
  'webdesign-fuer-unternehmen': { h1: 'Webdesign für Unternehmen', keyword: 'webdesign für unternehmen', focus: 'Unternehmen' },
  'websites-fuer-unternehmen': { h1: 'Websites für Unternehmen', keyword: 'websites für unternehmen', focus: 'Unternehmen' },
  'professionelle-website-fuer-firma': { h1: 'Professionelle Website für Firma', keyword: 'professionelle website für firma', focus: 'Firmen' },
  'homepage-fuer-firma-erstellen-lassen': { h1: 'Homepage für Firma erstellen lassen', keyword: 'homepage für firma erstellen lassen', focus: 'Firmen' },
  'internetseite-fuer-unternehmen': { h1: 'Internetseite für Unternehmen', keyword: 'internetseite für unternehmen', focus: 'Unternehmen' },
  'firmenwebsite-erstellen-lassen': { h1: 'Firmenwebsite erstellen lassen', keyword: 'firmenwebsite erstellen lassen', focus: 'Firmen' },
  'business-website-erstellen-lassen': { h1: 'Business Website erstellen lassen', keyword: 'business website erstellen lassen', focus: 'Unternehmen' },
  'webseite-fuer-firma': { h1: 'Webseite für Firma', keyword: 'webseite für firma', focus: 'Firmen' },

  // Kaufabsicht
  'website-erstellen-lassen': { h1: 'Website erstellen lassen', keyword: 'website erstellen lassen', focus: 'Unternehmen' },
  'webseite-erstellen-lassen': { h1: 'Webseite erstellen lassen', keyword: 'webseite erstellen lassen', focus: 'Unternehmen' },
  'homepage-erstellen-lassen': { h1: 'Homepage erstellen lassen', keyword: 'homepage erstellen lassen', focus: 'Unternehmen' },
  'professionelle-website-erstellen-lassen': { h1: 'Professionelle Website erstellen lassen', keyword: 'professionelle website erstellen lassen', focus: 'Unternehmen' },
  'webdesign-agentur': { h1: 'Webdesign Agentur', keyword: 'webdesign agentur', focus: 'Unternehmen' },
  'webdesign-agentur-fuer-unternehmen': { h1: 'Webdesign Agentur für Unternehmen', keyword: 'webdesign agentur für unternehmen', focus: 'Unternehmen' },
  'webdesigner-beauftragen': { h1: 'Webdesigner beauftragen', keyword: 'webdesigner beauftragen', focus: 'Unternehmen' },
  'website-erstellen-lassen-kosten': { h1: 'Website erstellen lassen Kosten', keyword: 'website erstellen lassen kosten', focus: 'Unternehmen' },
  'webdesign-angebot': { h1: 'Webdesign Angebot', keyword: 'webdesign angebot', focus: 'Unternehmen' },
  'website-fuer-unternehmen-erstellen-lassen': { h1: 'Website für Unternehmen erstellen lassen', keyword: 'website für unternehmen erstellen lassen', focus: 'Unternehmen' },
  'homepage-fuer-unternehmen-erstellen-lassen': { h1: 'Homepage für Unternehmen erstellen lassen', keyword: 'homepage für unternehmen erstellen lassen', focus: 'Unternehmen' },

  // Kleine Unternehmen / KMU
  'webdesign-fuer-kleine-unternehmen': { h1: 'Webdesign für kleine Unternehmen', keyword: 'webdesign für kleine unternehmen', focus: 'kleine Unternehmen' },
  'website-fuer-kleine-unternehmen': { h1: 'Website für kleine Unternehmen', keyword: 'website für kleine unternehmen', focus: 'kleine Unternehmen' },
  'homepage-fuer-kleine-firmen': { h1: 'Homepage für kleine Firmen', keyword: 'homepage für kleine firmen', focus: 'kleine Firmen' },
  'webdesign-fuer-kmu': { h1: 'Webdesign für KMU', keyword: 'webdesign für kmu', focus: 'KMU' },
  'website-erstellen-lassen-fuer-kmu': { h1: 'Website erstellen lassen für KMU', keyword: 'website erstellen lassen für kmu', focus: 'KMU' },
  'guenstige-website-fuer-unternehmen': { h1: 'Günstige Website für Unternehmen', keyword: 'günstige website für unternehmen', focus: 'Unternehmen' },
  'professionelle-homepage-fuer-kleine-unternehmen': { h1: 'Professionelle Homepage für kleine Unternehmen', keyword: 'professionelle homepage für kleine unternehmen', focus: 'kleine Unternehmen' },

  // Lokal
  'webdesign-stadt': { h1: 'Webdesign {city}', keyword: 'webdesign {city}', focus: 'lokale Unternehmen' },
  'webdesigner-stadt': { h1: 'Webdesigner {city}', keyword: 'webdesigner {city}', focus: 'lokale Unternehmen' },
  'website-erstellen-lassen-stadt': { h1: 'Website erstellen lassen {city}', keyword: 'website erstellen lassen {city}', focus: 'lokale Unternehmen' },
  'homepage-erstellen-lassen-stadt': { h1: 'Homepage erstellen lassen {city}', keyword: 'homepage erstellen lassen {city}', focus: 'lokale Unternehmen' },
  'webdesign-agentur-stadt': { h1: 'Webdesign Agentur {city}', keyword: 'webdesign agentur {city}', focus: 'lokale Unternehmen' },
  'wordpress-agentur-stadt': { h1: 'WordPress Agentur {city}', keyword: 'wordpress agentur {city}', focus: 'lokale Unternehmen' },
  'internetagentur-stadt': { h1: 'Internetagentur {city}', keyword: 'internetagentur {city}', focus: 'lokale Unternehmen' },
  'webseite-fuer-unternehmen-stadt': { h1: 'Webseite für Unternehmen {city}', keyword: 'webseite für unternehmen {city}', focus: 'lokale Unternehmen' },

  // Technik / CMS
  'wordpress-webdesign': { h1: 'WordPress Webdesign', keyword: 'wordpress webdesign', focus: 'Unternehmen' },
  'wordpress-agentur': { h1: 'WordPress Agentur', keyword: 'wordpress agentur', focus: 'Unternehmen' },
  'wordpress-website-erstellen-lassen': { h1: 'WordPress Website erstellen lassen', keyword: 'wordpress website erstellen lassen', focus: 'Unternehmen' },
  'wordpress-webdesigner': { h1: 'WordPress Webdesigner', keyword: 'wordpress webdesigner', focus: 'Unternehmen' },
  'elementor-webdesign': { h1: 'Elementor Webdesign', keyword: 'elementor webdesign', focus: 'Unternehmen' },
  'cms-website-erstellen-lassen': { h1: 'CMS Website erstellen lassen', keyword: 'cms website erstellen lassen', focus: 'Unternehmen' },
  'responsive-webdesign-agentur': { h1: 'Responsive Webdesign Agentur', keyword: 'responsive webdesign agentur', focus: 'Unternehmen' },
  'seo-webdesign': { h1: 'SEO Webdesign', keyword: 'seo webdesign', focus: 'Unternehmen' },
  'wordpress-webdesign-fuer-unternehmen': { h1: 'WordPress Webdesign für Unternehmen', keyword: 'wordpress webdesign für unternehmen', focus: 'Unternehmen' },

  // Branchen
  'webdesign-fuer-handwerker': { h1: 'Webdesign für Handwerker', keyword: 'webdesign für handwerker', focus: 'Handwerker' },
  'webdesign-fuer-aerzte': { h1: 'Webdesign für Ärzte', keyword: 'webdesign für ärzte', focus: 'Ärzte' },
  'webdesign-fuer-kanzleien': { h1: 'Webdesign für Kanzleien', keyword: 'webdesign für kanzleien', focus: 'Kanzleien' },
  'webdesign-fuer-steuerberater': { h1: 'Webdesign für Steuerberater', keyword: 'webdesign für steuerberater', focus: 'Steuerberater' },
  'webdesign-fuer-immobilienmakler': { h1: 'Webdesign für Immobilienmakler', keyword: 'webdesign für immobilienmakler', focus: 'Immobilienmakler' },
  'webdesign-fuer-restaurants': { h1: 'Webdesign für Restaurants', keyword: 'webdesign für restaurants', focus: 'Restaurants' },
  'webdesign-fuer-coaches': { h1: 'Webdesign für Coaches', keyword: 'webdesign für coaches', focus: 'Coaches' },
  'webdesign-fuer-agenturen': { h1: 'Webdesign für Agenturen', keyword: 'webdesign für agenturen', focus: 'Agenturen' },
  'webdesign-fuer-lokale-unternehmen': { h1: 'Webdesign für lokale Unternehmen', keyword: 'webdesign für lokale unternehmen', focus: 'lokale Unternehmen' },
  'webdesign-fuer-dienstleister': { h1: 'Webdesign für Dienstleister', keyword: 'webdesign für dienstleister', focus: 'Dienstleister' },
  'website-erstellen-lassen-fuer-handwerksbetriebe': { h1: 'Website erstellen lassen für Handwerksbetriebe', keyword: 'website erstellen lassen für handwerksbetriebe', focus: 'Handwerksbetriebe' },

  // Problemlösungen
  'veraltete-website-neu-erstellen': { h1: 'Veraltete Website neu erstellen', keyword: 'veraltete website neu erstellen', focus: 'Unternehmen' },
  'firmenwebsite-modernisieren': { h1: 'Firmenwebsite modernisieren', keyword: 'firmenwebsite modernisieren', focus: 'Firmen' },
  'website-redesign-unternehmen': { h1: 'Website Redesign Unternehmen', keyword: 'website redesign unternehmen', focus: 'Unternehmen' },
  'website-relaunch-firma': { h1: 'Website Relaunch Firma', keyword: 'website relaunch firma', focus: 'Firmen' },
  'professionelle-unternehmenswebsite': { h1: 'Professionelle Unternehmenswebsite', keyword: 'professionelle unternehmenswebsite', focus: 'Unternehmen' },
  'mehr-kunden-durch-website': { h1: 'Mehr Kunden durch Website', keyword: 'mehr kunden durch website', focus: 'Unternehmen' },
  'website-fuer-leadgenerierung': { h1: 'Website für Leadgenerierung', keyword: 'website für leadgenerierung', focus: 'Unternehmen' },
  'bessere-firmenwebsite': { h1: 'Bessere Firmenwebsite', keyword: 'bessere firmenwebsite', focus: 'Firmen' },

  // SEO-nah
  'seo-optimierte-website-erstellen-lassen': { h1: 'SEO optimierte Website erstellen lassen', keyword: 'seo optimierte website erstellen lassen', focus: 'Unternehmen' },
  'webdesign-und-seo': { h1: 'Webdesign und SEO', keyword: 'webdesign und seo', focus: 'Unternehmen' },
  'seo-webdesign-fuer-unternehmen': { h1: 'SEO Webdesign für Unternehmen', keyword: 'seo webdesign für unternehmen', focus: 'Unternehmen' },
  'website-fuer-google-optimieren': { h1: 'Website für Google optimieren', keyword: 'website für google optimieren', focus: 'Unternehmen' },
  'lokale-seo-und-webdesign': { h1: 'Lokale SEO und Webdesign', keyword: 'lokale seo und webdesign', focus: 'lokale Unternehmen' },
  'google-freundliche-website': { h1: 'Google freundliche Website', keyword: 'google freundliche website', focus: 'Unternehmen' },

  // Vertrauen / Qualität
  'moderne-firmenwebsite': { h1: 'Moderne Firmenwebsite', keyword: 'moderne firmenwebsite', focus: 'Firmen' },
  'hochwertige-website-erstellen-lassen': { h1: 'Hochwertige Website erstellen lassen', keyword: 'hochwertige website erstellen lassen', focus: 'Unternehmen' },
  'professionelle-webseite': { h1: 'Professionelle Webseite', keyword: 'professionelle webseite', focus: 'Unternehmen' },
  'individuelle-website-erstellen-lassen': { h1: 'Individuelle Website erstellen lassen', keyword: 'individuelle website erstellen lassen', focus: 'Unternehmen' },
  'massgeschneiderte-website-fuer-unternehmen': { h1: 'Maßgeschneiderte Website für Unternehmen', keyword: 'maßgeschneiderte website für unternehmen', focus: 'Unternehmen' },
  'conversion-starke-website': { h1: 'Conversion starke Website', keyword: 'conversion starke website', focus: 'Unternehmen' },
  'responsive-firmenwebsite': { h1: 'Responsive Firmenwebsite', keyword: 'responsive firmenwebsite', focus: 'Firmen' },

  // Kombinations-Keywords
  'webdesign-fuer-kleine-unternehmen-in-stadt': { h1: 'Webdesign für kleine Unternehmen in {city}', keyword: 'webdesign für kleine unternehmen in {city}', focus: 'kleine Unternehmen' },
  'website-erstellen-lassen-fuer-handwerker': { h1: 'Website erstellen lassen für Handwerker', keyword: 'website erstellen lassen für handwerker', focus: 'Handwerker' },
  'professionelle-firmenwebsite-in-stadt': { h1: 'Professionelle Firmenwebsite in {city}', keyword: 'professionelle firmenwebsite in {city}', focus: 'Firmen' },
}

const stadt = computed(() => String(route.params.stadt || '').toLowerCase())
const keyword = computed(() => String(route.params.keyword || '').toLowerCase())

const city = computed(() => cityMap[stadt.value])
const seed = computed(() => keywordSeeds[keyword.value])

if (!city.value || !seed.value) {
  throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden' })
}

const withCity = (text: string) => text.replaceAll('{city}', city.value!.name)

const isTopPage = computed(() => topKeywords.has(keyword.value))
const richContent = computed(() => richContentMap[keyword.value] ?? null)
const cityContext = computed(() => cityContextMap[stadt.value] ?? null)

const cityPageSlug = computed(() => `/webdesign-${stadt.value}`)

// Querverlinkung der anderen Top-Keyword-Seiten derselben Stadt (gegen Orphan Pages)
const siblingKeywordLinks = computed(() =>
  TOP_KEYWORDS
    .filter(kw => kw.slug !== keyword.value)
    .map(kw => ({
      to: `/${stadt.value}/${kw.slug}`,
      label: `${kw.label} ${city.value!.name}`,
    })),
)

const serviceLinks = [
  { label: 'Webdesign', to: '/leistungen/webdesign' },
  { label: 'SEO', to: '/leistungen/seo' },
  { label: 'E-Commerce', to: '/leistungen/e-commerce' },
  { label: 'Website-Wartung', to: '/leistungen/wartung' },
]

const h1 = computed(() => withCity(seed.value.h1))
// Seeds mit {city} enthalten die Stadt schon – sonst „… in Dortmund in Dortmund“
const h1InCity = computed(() => seed.value.h1.includes('{city}') ? h1.value : `${h1.value} in ${city.value!.name}`)
const pageTitle = computed(() => `${h1InCity.value} | Prestige Webdesign`)
const pageDescription = computed(() =>
  `${h1InCity.value} – zum Festpreis ab 800 €, persönlich betreut von einem Ansprechpartner. Webdesign für ${city.value!.name} und das Ruhrgebiet. Jetzt Erstgespräch anfragen.`,
)

useSeoMeta({
  title: () => pageTitle.value,
  ogTitle: () => pageTitle.value,
  description: () => pageDescription.value,
  ogDescription: () => pageDescription.value,
  robots: () => isTopPage.value ? 'index, follow' : 'noindex, follow',
})

useHead(() => {
  if (!isTopPage.value || !richContent.value) return {}
  return {
    script: [
      {
        key: 'keyword-faq-schema',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: richContent.value!.faqItems.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }),
      },
    ],
  }
})

// Darstellung: Vorspann und eigener Brotkrumenpfad (die Stadtebene /<stadt> existiert nicht als Seite)
const coverLead = computed(() =>
  `Für ${seed.value.focus} in ${city.value!.name} und im ganzen Ruhrgebiet: schnelle, mobile Websites von einem Ansprechpartner aus Dortmund – zum Festpreis ab 800 €.`,
)
</script>

<template>
  <div>
    <PageCover :title="h1" :lead="coverLead" align="start">
      <a href="#anpfiff" class="btn btn-signal lg:hidden">Erstgespräch anfragen</a>
      <NuxtLink to="/referenzen" class="btn btn-outline">Referenzen ansehen</NuxtLink>
      <template #aside>
        <TicketForm :source="`Keyword-Seite – ${h1InCity}`" class="hidden lg:block" />
      </template>
    </PageCover>

    <!-- Rich Content für Top-Seiten -->
    <template v-if="isTopPage && richContent">
      <!-- Taktik: Haupttext + Stadtkontext -->
      <section class="section" data-rubric="Taktik" aria-labelledby="kw-main-title">
        <div class="wrap grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <h2 id="kw-main-title" class="t-headline">{{ h1InCity }}</h2>
            <p class="t-lead mt-6 max-w-text">{{ richContent.mainText }}</p>
          </div>
          <aside v-if="cityContext" class="lg:col-span-5 lg:pt-2" aria-labelledby="kw-city-title">
            <div class="rule-heavy pt-6">
              <h3 id="kw-city-title" class="t-title">{{ city.name }} als Standort</h3>
              <p class="mt-3 text-ink-soft">{{ cityContext }}</p>
              <NuxtLink :to="cityPageSlug" class="link mt-4 inline-flex min-h-11 items-center gap-2 font-semibold">
                Webdesign {{ city.name }}
                <AppIcon name="arrow-right" class="h-4 w-4" />
              </NuxtLink>
            </div>
          </aside>
        </div>
      </section>

      <!-- Aufstellung: Vorteile -->
      <section class="section bg-sheet" data-rubric="Aufstellung" aria-labelledby="kw-benefits-title">
        <div class="wrap">
          <SectionHead id="kw-benefits-title" title="Was Sie von mir bekommen" />
          <ul class="mt-10 border-t-2 border-ink">
            <li v-for="benefit in richContent.benefits" :key="benefit.title" class="grid gap-x-8 gap-y-2 border-b border-ink/25 py-6 md:grid-cols-12 md:py-8">
              <h3 class="t-title md:col-span-5">{{ benefit.title }}</h3>
              <p class="max-w-xl text-ink-soft md:col-span-7">{{ benefit.text }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- Tabelle: Leistungen & Preise -->
      <section class="section" data-rubric="Tabelle" aria-labelledby="kw-prices-title">
        <div class="wrap">
          <SectionHead
            id="kw-prices-title"
            title="Was es kostet – vorher, nicht hinterher."
            intro="Jedes Projekt beginnt mit einem kostenlosen Erstgespräch. Danach bekommen Sie ein Angebot zum Festpreis. Was dort steht, zahlen Sie – nicht mehr."
          >
            <NuxtLink to="/preise" class="btn btn-outline">Preise im Detail</NuxtLink>
          </SectionHead>
          <ServiceTable class="mt-10" />
        </div>
      </section>

      <!-- Spielplan: Ablauf -->
      <section class="section bg-sheet" data-rubric="Spielplan" aria-labelledby="kw-process-title">
        <div class="wrap">
          <SectionHead
            id="kw-process-title"
            title="So arbeiten wir zusammen."
            intro="Fünf Schritte, keine Überraschungen. Sie wissen jederzeit, wo Ihr Projekt steht."
          />
          <ProcessFixture class="mt-10" />
        </div>
      </section>

      <!-- Heimspiele: Referenzen -->
      <section class="section" data-rubric="Heimspiele" aria-labelledby="kw-refs-title">
        <div class="wrap">
          <SectionHead
            id="kw-refs-title"
            title="Websites aus dem Revier."
            intro="Ein Studio, ein Fotografenpaar, ein Transportunternehmen – alle aus Dortmund und NRW, alle online. Klicken Sie ruhig rein."
          >
            <NuxtLink to="/referenzen" class="btn btn-outline">Alle Referenzen</NuxtLink>
          </SectionHead>
          <ReferenceShowcase class="mt-12" />
        </div>
      </section>

      <!-- Fragen -->
      <section class="section bg-sheet" data-rubric="Fragen" aria-labelledby="kw-faq-title">
        <div class="wrap grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <h2 id="kw-faq-title" class="t-headline">Häufige Fragen zu {{ h1 }}</h2>
          </div>
          <FaqList class="lg:col-span-8" :items="richContent.faqItems" />
        </div>
      </section>
    </template>

    <!-- Basis-Content für noindex-Seiten -->
    <template v-else>
      <section class="section" data-rubric="Aufstellung" aria-labelledby="kw-basic-title">
        <div class="wrap">
          <SectionHead id="kw-basic-title" :title="h1InCity" />
          <dl class="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
            <div class="border-t-2 border-ink pt-5">
              <dt class="t-title">Leistung</dt>
              <dd class="mt-3 text-ink-soft">Ich setze {{ h1 }} mit klarem Seitenaufbau, einfacher Nutzerführung und technischer SEO-Basis um.</dd>
            </div>
            <div class="border-t-2 border-ink pt-5">
              <dt class="t-title">Zielgruppe</dt>
              <dd class="mt-3 text-ink-soft">Ausgerichtet auf {{ seed.focus }} – damit aus Besuchern Ihrer Website mehr passende Anfragen werden.</dd>
            </div>
            <div class="border-t-2 border-ink pt-5">
              <dt class="t-title">Standort</dt>
              <dd class="mt-3 text-ink-soft">Durch die lokale Ausrichtung auf {{ city.name }} wird Ihre Website bei regionalen Suchanfragen leichter gefunden.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section class="section bg-sheet" data-rubric="Tabelle" aria-labelledby="kw-prices-title">
        <div class="wrap">
          <SectionHead
            id="kw-prices-title"
            title="Was es kostet – vorher, nicht hinterher."
            intro="Nach dem kostenlosen Erstgespräch bekommen Sie ein Angebot zum Festpreis. Was dort steht, zahlen Sie – nicht mehr."
          >
            <NuxtLink to="/preise" class="btn btn-outline">Preise im Detail</NuxtLink>
          </SectionHead>
          <ServiceTable class="mt-10" />
        </div>
      </section>

      <section class="section" data-rubric="Spielplan" aria-labelledby="kw-process-title">
        <div class="wrap">
          <SectionHead
            id="kw-process-title"
            title="So arbeiten wir zusammen."
            intro="Fünf Schritte, keine Überraschungen. Sie wissen jederzeit, wo Ihr Projekt steht."
          />
          <ProcessFixture class="mt-10" />
        </div>
      </section>
    </template>

    <!-- Auswärts: interne Links -->
    <section class="section" :class="isTopPage && richContent ? '' : 'bg-sheet'" data-rubric="Auswärts" aria-labelledby="kw-links-title">
      <div class="wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 id="kw-links-title" class="t-headline">Mehr von Prestige Webdesign in {{ city.name }}</h2>
          <NuxtLink :to="cityPageSlug" class="btn btn-ink mt-8">
            Alle Leistungen in {{ city.name }}
            <AppIcon name="arrow-right" class="h-5 w-5" />
          </NuxtLink>
          <ul class="mt-10 border-t-2 border-ink">
            <li v-for="link in serviceLinks" :key="link.to" class="border-b border-ink/25">
              <NuxtLink :to="link.to" class="group flex min-h-12 items-center justify-between gap-4 py-3 text-lg font-bold" style="font-stretch: 88%;">
                {{ link.label }}
                <AppIcon name="arrow-right" class="h-5 w-5 text-signal-ink transition-transform duration-200 group-hover:translate-x-1" />
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-6 lg:col-start-7">
          <h3 class="t-title">Häufige Anfragen in {{ city.name }}</h3>
          <ul class="mt-6 border-t-2 border-ink">
            <li v-for="link in siblingKeywordLinks" :key="link.to" class="border-b border-ink/25">
              <NuxtLink :to="link.to" class="link flex min-h-12 items-center py-3 font-semibold">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <KickoffSection :source="`${h1InCity} – Anpfiff`" />
  </div>
</template>
