<script setup lang="ts">
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
    mainText: 'Eine erfahrene Webdesign-Agentur vor Ort kennt nicht nur aktuelle Design-Trends, sondern auch die regionalen Besonderheiten Ihres Markts. Wir entwickeln keine Standardlösungen vom Band, sondern Websites, die exakt auf Ihre Zielgruppe, Ihre Branche und Ihre Ziele zugeschnitten sind. Von der ersten Beratung bis zum Launch begleiten wir Sie persönlich – und stehen auch danach als langfristiger Partner zur Seite.',
    benefits: [
      { title: 'Individuelle Umsetzung', text: 'Kein Template, kein Baukastensystem – Ihre Website wird von Grund auf für Sie entwickelt.' },
      { title: 'Lokale Marktkenntnis', text: 'Als regionale Agentur kennen wir Ihren Markt, Ihre Wettbewerber und Ihre Zielgruppe.' },
      { title: 'Full-Service aus einer Hand', text: 'Design, Entwicklung, SEO und Wartung – alles ohne Schnittstellenverluste.' },
      { title: 'Messbare Ergebnisse', text: 'Wir entwickeln mit klarem Fokus auf Anfragen, Conversions und Ihre Geschäftsziele.' },
    ],
    faqItems: [
      { question: 'Was unterscheidet eine lokale Webdesign-Agentur von einer überregionalen?', answer: 'Eine lokale Agentur kennt Ihre Region, Ihre Wettbewerber und die Erwartungen Ihrer Zielgruppe vor Ort. Sie erreichen direkt einen Ansprechpartner, der Ihr Unternehmen wirklich versteht – statt anonymer Projektmanager.' },
      { question: 'Was kostet eine Webdesign-Agentur im Vergleich zu einem Freelancer?', answer: 'Eine Agentur bietet eingespieltes Team, breitere Kompetenzen und zuverlässige Verfügbarkeit. Die Kosten sind oft vergleichbar mit einem guten Freelancer, die Qualität und Planungssicherheit jedoch höher. Wir bieten transparente Festpreise.' },
      { question: 'Wie läuft die Zusammenarbeit mit Prestige Webdesign ab?', answer: 'Nach einem kostenlosen Erstgespräch erstellen wir ein Konzept und ein Festpreisangebot. Im Projektverlauf arbeiten wir in enger Abstimmung mit Ihnen – mit klaren Meilensteinen und regelmäßigen Updates bis zum Launch.' },
    ],
  },
  'website-erstellen-lassen': {
    mainText: 'Wer eine professionelle Website erstellen lassen möchte, steht vor einer wichtigen Entscheidung: günstige Baukastenlösung oder individuelle Entwicklung? Billige Lösungen mögen kurzfristig sparen – langfristig kosten sie Rankings, Anfragen und Vertrauen. Wir entwickeln Websites, die technisch sauber, SEO-optimiert und auf Ihre Zielgruppe ausgerichtet sind. Das Ergebnis ist eine Website, die aktiv für Ihr Unternehmen arbeitet.',
    benefits: [
      { title: 'Festpreis und Transparenz', text: 'Kein böses Erwachen: Sie wissen vorher genau, was Ihre Website kostet.' },
      { title: 'SEO von Anfang an', text: 'Die technische SEO-Basis ist von Tag 1 eingebaut – keine nachträglichen Korrekturen nötig.' },
      { title: 'Mobiloptimiert', text: 'Über 60 % Ihrer Besucher kommen vom Smartphone. Ihre Website sieht auf jedem Gerät perfekt aus.' },
      { title: 'Schnelle Umsetzung', text: 'Von der Idee zum Launch in 2 bis 6 Wochen – strukturiert und ohne unnötige Verzögerungen.' },
    ],
    faqItems: [
      { question: 'Was kostet es, eine Website erstellen zu lassen?', answer: 'Eine professionelle Unternehmenswebsite kostet je nach Umfang zwischen 1.500 und 8.000 €. Entscheidend sind Seitenanzahl, Funktionen und Designaufwand. Wir erstellen Ihnen ein unverbindliches Festpreisangebot.' },
      { question: 'Wie lange dauert die Erstellung einer Website?', answer: 'Eine typische Unternehmenswebsite ist in 2 bis 6 Wochen fertig. Wir arbeiten in einem strukturierten Prozess mit festen Meilensteinen, damit Sie immer wissen, wo das Projekt steht.' },
      { question: 'Was brauche ich, bevor ich eine Website erstellen lasse?', answer: 'Im Idealfall haben Sie Ihre Inhalte bereits vorbereitet – Texte, Bilder, Logo. Wir helfen aber auch dabei: von der Textoptimierung bis zur Bildauswahl. Das besprechen wir im Erstgespräch.' },
    ],
  },
  'webdesign-fuer-unternehmen': {
    mainText: 'Die Website Ihres Unternehmens ist oft der erste Kontaktpunkt mit potenziellen Kunden – und entscheidet in Sekunden über Vertrauen oder Absprung. Gutes Webdesign für Unternehmen verbindet Ästhetik mit Funktion: eine klare Struktur, die Besucher führt, Inhalte, die überzeugen, und eine technische Basis, die Google versteht. Wir entwickeln Unternehmenswebsites, die nicht nur gut aussehen, sondern messbar Anfragen generieren.',
    benefits: [
      { title: 'Professionelle Außenwirkung', text: 'Ihre Website repräsentiert Ihr Unternehmen – wir sorgen dafür, dass der erste Eindruck stimmt.' },
      { title: 'Conversion-optimiert', text: 'Jede Seite ist darauf ausgelegt, Besucher in Anfragen oder Kunden zu verwandeln.' },
      { title: 'Skalierbar und wartbar', text: 'Ihre Website wächst mit Ihrem Unternehmen – erweiterbar, pflegbar und zukunftssicher.' },
      { title: 'Google-sichtbar', text: 'Technische SEO-Grundlage und strukturierte Inhalte sorgen für bessere Rankings.' },
    ],
    faqItems: [
      { question: 'Was macht eine gute Unternehmenswebsite aus?', answer: 'Eine gute Unternehmenswebsite ist klar strukturiert, lädt schnell, überzeugt auf mobilen Geräten und führt Besucher zielgerichtet zu einer Anfrage. Design und Funktion müssen im Einklang stehen.' },
      { question: 'Muss ich meine bestehende Website komplett ersetzen?', answer: 'Nicht zwingend. Manchmal reichen gezielte Verbesserungen an Struktur, Design oder Inhalten. Wir analysieren Ihre aktuelle Website kostenlos und empfehlen die wirtschaftlichste Lösung.' },
      { question: 'Wie wichtig ist Mobile-Optimierung für Unternehmen?', answer: 'Sehr wichtig: Über 60 % aller Websitebesuche erfolgen über Smartphones. Google bewertet die mobile Version als Hauptversion. Eine nicht mobiloptimierte Seite kostet Rankings und Kunden.' },
    ],
  },
  'webdesign-fuer-kleine-unternehmen': {
    mainText: 'Kleine Unternehmen haben oft keine eigene IT-Abteilung und kein unbegrenztes Budget – trotzdem brauchen sie eine professionelle Online-Präsenz, um im Wettbewerb zu bestehen. Wir spezialisieren uns auf überschaubare Projekte, die echten Mehrwert liefern: klares Design, schnelle Ladezeiten, mobile Optimierung und eine SEO-Grundlage, die lokal wirkt. Ohne unnötigen Overhead, ohne Overengineering – genau das, was Ihr Unternehmen wirklich braucht.',
    benefits: [
      { title: 'Faire Preise, klarer Umfang', text: 'Kein überteuertes Agenturpaket – sondern genau das, was Ihr Unternehmen wirklich braucht.' },
      { title: 'Einfache Pflege', text: 'Wir entwickeln so, dass Sie Texte und Bilder selbst aktualisieren können – ohne Technik-Kenntnisse.' },
      { title: 'Lokale Sichtbarkeit', text: 'Für kleine Unternehmen ist lokales SEO entscheidend – damit Kunden aus der Region Sie finden.' },
      { title: 'Persönliche Betreuung', text: 'Kein Ticketsystem, kein Call-Center: Sie haben immer einen direkten Ansprechpartner.' },
    ],
    faqItems: [
      { question: 'Ab welchem Budget lohnt sich eine professionelle Website für kleine Unternehmen?', answer: 'Bereits ab 1.500 € ist eine professionelle, mobiloptimierte und SEO-freundliche Website möglich. Wir finden gemeinsam den richtigen Umfang für Ihr Budget und Ihre Ziele.' },
      { question: 'Kann ich meine Website später selbst pflegen?', answer: 'Ja. Wir entwickeln entweder mit einem CMS wie WordPress oder mit einer einfachen Bearbeitungsoberfläche, sodass Sie Texte, Bilder und Inhalte selbst aktualisieren können – ohne Technik-Kenntnisse.' },
      { question: 'Braucht ein kleines Unternehmen wirklich SEO?', answer: 'Ja, gerade kleine Unternehmen profitieren enorm von lokalem SEO. Wenn jemand in Ihrer Stadt nach Ihrem Service sucht, sollten Sie gefunden werden. Das ist oft mit überschaubarem Aufwand erreichbar.' },
    ],
  },
  'webdesigner-beauftragen': {
    mainText: 'Einen Webdesigner zu beauftragen ist eine Investition – und wie bei jeder Investition kommt es auf die richtige Wahl an. Freelancer oder Agentur? Billiganbieter oder Premiumlösung? Die Antwort hängt von Ihrem Projekt ab. Wir bieten das Beste aus beiden Welten: persönliche Betreuung, Agentur-Qualität und faire Preise für den Mittelstand. Über 150 abgeschlossene Projekte sprechen für sich.',
    benefits: [
      { title: 'Persönlicher Ansprechpartner', text: 'Sie arbeiten direkt mit dem Designer – keine Vermittler, kein Stille-Post-Problem.' },
      { title: 'Transparente Kalkulation', text: 'Festpreisangebote statt Stundensätze – Sie wissen von Anfang an, was es kostet.' },
      { title: 'Referenzen und Erfahrung', text: 'Über 150 abgeschlossene Projekte – wir wissen, was funktioniert und was nicht.' },
      { title: 'Langfristige Partnerschaft', text: 'Wir sind auch nach dem Launch für Sie da: Updates, Erweiterungen, Support.' },
    ],
    faqItems: [
      { question: 'Freelancer oder Agentur – was ist besser?', answer: 'Eine Agentur bietet Teambreite, zuverlässige Verfügbarkeit und breitere Kompetenz. Ein Freelancer ist oft günstiger, birgt aber Risiken bei Krankheit oder Urlaub. Wir verbinden die Stärken beider Modelle: persönliche Betreuung mit Agentur-Rückhalt.' },
      { question: 'Worauf sollte ich beim Beauftragen eines Webdesigners achten?', answer: 'Wichtig sind: nachweisbare Referenzen, klare Verträge mit Festpreisen, Rechteübertragung am fertigen Design, Erfahrung mit SEO und Mobiloptimierung sowie Support nach dem Launch.' },
      { question: 'Was passiert, wenn mir das Design nicht gefällt?', answer: 'Wir arbeiten iterativ: Erst Wireframes und Moodboards, dann Design – immer mit Ihrem Feedback. Sie haben mindestens zwei Feedbackrunden vor der finalen Umsetzung, damit das Ergebnis wirklich passt.' },
    ],
  },
}

// Stadtspezifischer Kontext für die 20 Top-Seiten
const cityContextMap: Record<string, string> = {
  dortmund: 'Dortmund ist mit rund 600.000 Einwohnern die größte Stadt des Ruhrgebiets und ein wichtiger Digitalstandort. Der Technologiepark Dortmund hat sich zu einem der führenden IT-Cluster Nordrhein-Westfalens entwickelt. Für Unternehmen hier ist eine starke Online-Präsenz kein Luxus – sie ist Voraussetzung, um im wachsenden Wettbewerb sichtbar zu bleiben.',
  essen: 'Essen hat sich von der Kohle- und Stahlstadt zur modernen Dienstleistungsmetropole gewandelt. Als Sitz zahlreicher Großunternehmen und eines starken Mittelstands ist der Wettbewerb um digitale Sichtbarkeit hoch. Eine professionelle Website, die bei Essener Suchanfragen gefunden wird, ist für lokale Unternehmen ein entscheidender Vorteil.',
  bochum: 'Bochum verbindet Universitätsstadt und Wirtschaftsstandort: Die Ruhr-Universität mit über 43.000 Studierenden sorgt für ein modernes, digital affines Umfeld. Das bedeutet für Unternehmen in Bochum: eine technikaffine Zielgruppe, die hohe Ansprüche an Online-Auftritte stellt – und die zwischen mehreren Anbietern wählt.',
  bottrop: 'Bottrop ist eine der kompakteren Städte des Ruhrgebiets – mit einer engen Vernetzung der lokalen Wirtschaft. Für Unternehmen hier ist die persönliche Empfehlung wichtig, aber auch die Online-Auffindbarkeit: Wer bei Google lokal gefunden wird, hat einen klaren Vorteil gegenüber Wettbewerbern, die noch auf Mund-zu-Mund-Propaganda setzen.',
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

const serviceLinks = [
  { label: 'Webdesign', to: '/leistungen/webdesign' },
  { label: 'SEO', to: '/leistungen/seo' },
  { label: 'E-Commerce', to: '/leistungen/e-commerce' },
  { label: 'Website-Wartung', to: '/leistungen/wartung' },
]

const h1 = computed(() => withCity(seed.value.h1))
const pageTitle = computed(() => `${h1.value} in ${city.value!.name} | Prestige Webdesign`)
const pageDescription = computed(() => {
  if (isTopPage.value && richContent.value) {
    return `${richContent.value.mainText.slice(0, 160)}`
  }
  return `${h1.value} in ${city.value!.name} – Prestige Webdesign: Professionelle Webagentur im Ruhrgebiet. Jetzt kostenlos beraten lassen.`
})

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
        children: JSON.stringify({
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
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
    <!-- Hero -->
    <section class="section-padding pt-32 pb-20 bg-gradient-to-br from-primary-900/10 to-dark-900">
      <div class="container-narrow">
        <p class="text-primary-300 text-sm uppercase tracking-[0.2em] mb-4">
          {{ city.name }} · {{ seed.focus }}
        </p>
        <h1 class="font-display text-4xl md:text-6xl font-bold mb-6 text-gradient">
          {{ h1 }}
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
          <template v-if="isTopPage && richContent">
            {{ richContent.mainText.slice(0, 200) }}
          </template>
          <template v-else>
            Mit {{ withCity(seed.keyword) }} in {{ city.name }} positionieren wir Ihr Unternehmen professionell und conversionstark.
          </template>
        </p>
        <NuxtLink to="/kontakt" class="btn-primary text-lg px-8 py-4">
          Kostenlose Beratung anfragen
        </NuxtLink>
      </div>
    </section>

    <!-- Rich Content für Top-Seiten -->
    <template v-if="isTopPage && richContent">
      <!-- Haupttext + Stadtkontext -->
      <section class="section-padding bg-dark-850">
        <div class="container-narrow">
          <div class="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 class="font-display text-3xl font-bold mb-5 text-white">
                {{ h1 }} in {{ city.name }}
              </h2>
              <p class="text-gray-300 leading-relaxed">
                {{ richContent.mainText }}
              </p>
            </div>
            <div v-if="cityContext" class="glass-card p-6 rounded-xl">
              <h3 class="font-display text-lg font-bold text-primary-300 mb-3">
                {{ city.name }} als Standort
              </h3>
              <p class="text-gray-300 text-sm leading-relaxed">
                {{ cityContext }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Vorteile -->
      <section class="section-padding">
        <div class="container-narrow">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-10 text-gradient">
            Was Sie von uns bekommen
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <article
              v-for="benefit in richContent.benefits"
              :key="benefit.title"
              class="glass-card p-6 rounded-xl"
            >
              <h3 class="font-display text-lg text-white mb-2">{{ benefit.title }}</h3>
              <p class="text-gray-300 text-sm leading-relaxed">{{ benefit.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Prozess -->
      <section class="section-padding bg-dark-850">
        <div class="container-narrow">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-10 text-white">
            So arbeiten wir zusammen
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(step, index) in ['Erstgespräch & Analyse', 'Konzept & Angebot', 'Umsetzung & Review', 'Launch & Support']"
              :key="step"
              class="glass-card p-6 rounded-xl"
            >
              <div class="text-primary-400 text-4xl font-display font-bold mb-3">
                0{{ index + 1 }}
              </div>
              <h3 class="font-display text-lg text-white">{{ step }}</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section-padding">
        <div class="container-narrow">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-10 text-gradient">
            Häufige Fragen zu {{ h1 }}
          </h2>
          <div class="space-y-4 max-w-3xl">
            <details
              v-for="faq in richContent.faqItems"
              :key="faq.question"
              class="glass-card p-6 rounded-xl group"
            >
              <summary class="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {{ faq.question }}
                <span class="text-primary-400 ml-4 flex-shrink-0">+</span>
              </summary>
              <p class="text-gray-300 mt-4 leading-relaxed text-sm">
                {{ faq.answer }}
              </p>
            </details>
          </div>
        </div>
      </section>
    </template>

    <!-- Basis-Content für noindex-Seiten -->
    <template v-else>
      <section class="section-padding bg-dark-850">
        <div class="container-narrow">
          <div class="grid md:grid-cols-3 gap-6">
            <article class="glass-card p-6 rounded-xl">
              <h3 class="font-display text-xl text-white mb-3">Leistung</h3>
              <p class="text-gray-300">Wir setzen {{ withCity(seed.keyword) }} mit klarem Seitenaufbau, starker Nutzerführung und technischer SEO-Basis um.</p>
            </article>
            <article class="glass-card p-6 rounded-xl">
              <h3 class="font-display text-xl text-white mb-3">Zielgruppe</h3>
              <p class="text-gray-300">Unsere Lösung ist auf {{ seed.focus }} ausgerichtet und unterstützt Sie dabei, mehr qualifizierte Anfragen zu erhalten.</p>
            </article>
            <article class="glass-card p-6 rounded-xl">
              <h3 class="font-display text-xl text-white mb-3">Standort</h3>
              <p class="text-gray-300">Durch lokale Ausrichtung auf {{ city.name }} wird Ihre Website in regionalen Suchanfragen sichtbarer.</p>
            </article>
          </div>
        </div>
      </section>
    </template>

    <!-- Interne Links -->
    <section class="section-padding bg-dark-850">
      <div class="container-narrow">
        <h2 class="font-display text-xl font-bold mb-5 text-white">
          Mehr von Prestige Webdesign in {{ city.name }}
        </h2>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            :to="cityPageSlug"
            class="glass-card px-4 py-2 rounded-lg text-primary-300 hover:text-primary-100 transition-colors text-sm"
          >
            Alle Leistungen in {{ city.name }}
          </NuxtLink>
          <NuxtLink
            v-for="link in serviceLinks"
            :key="link.to"
            :to="link.to"
            class="glass-card px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors text-sm"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>
