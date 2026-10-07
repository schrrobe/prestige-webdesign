# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primär:** Inhaber kleiner und mittlerer Betriebe im Ruhrgebiet (Handwerk, Praxen, Studios, Dienstleister, Transport/Logistik). Sie brauchen eine neue oder bessere Website, suchen lokal („Webdesign Dortmund“, „Homepage erstellen lassen Essen“) und das häufig am Smartphone. Sie sind keine Technikprofis. Ihre Kernfragen: Kann der das? Was kostet das? Wie läuft das ab? Wie erreiche ich ihn?

**Sekundär:** Mittelständler mit größeren Vorhaben (Online-Shop, Webanwendung, Schnittstellen).

## Product Purpose

Prestige Webdesign ist das Ein-Personen-Webdesign-Studio von Robert Schreiner in Dortmund. Die Website soll lokale Betriebe davon überzeugen, ein **kostenloses Erstgespräch** anzufragen. Erfolg ist eine abgeschickte Anfrage über das Kontaktformular. Die Website ist gleichzeitig das wichtigste Arbeitsbeispiel: Sie muss selbst schnell, mobil einwandfrei und barrierefrei sein.

## Positioning

Ein direkter Ansprechpartner, der Design und echte Entwicklung verbindet, mit dem passenden Werkzeug für jedes Projekt:
- **WordPress**, wenn der Kunde seine Seite selbst pflegen will.
- **Individuelle Entwicklung (Nuxt/Vue)**, wenn es schnell, individuell und technisch anspruchsvoll sein soll.

Dazu kommen ein Festpreis nach dem Erstgespräch und regionale Nähe im Ruhrgebiet.

## Operating Context

- **Ansprache:** in der Ich-Form. Robert arbeitet allein, ohne Team und ohne feste Partner.
- **Kontaktkanäle:** nur Kontaktformular (Web3Forms, Key über `NUXT_PUBLIC_WEB3FORMS_KEY`) und E-Mail info@prestige-webdesign.de. Bewusst keine Telefonnummer, kein WhatsApp, kein Buchungstool.
- **Ablauf:** kostenloses Erstgespräch → Festpreis-Angebot → Umsetzung → Launch → optional Wartung.
- **Firmendaten:** Kapitelwiese 14, 44263 Dortmund. Geschäftszeiten Mo–Fr 09–18 Uhr.
- **Einzugsgebiet:** Dortmund, Bochum, Essen, Bottrop, Unna / Kreis Unna, Ruhrgebiet.

## Capabilities and Constraints

**Leistungen und Preise:**

| Leistung | Preis |
|---|---|
| Webdesign / Website | ab 800 € |
| E-Commerce (WooCommerce/Shopify) | 2.500–15.000 € |
| Wartung & Support | Basis 79 €, Professional 199 €, Premium 399 € pro Monat |
| Webanwendungen | auf Anfrage |
| SEO | auf Anfrage |

Alle Projekte laufen zum Festpreis nach dem Erstgespräch.

**Von Robert bestätigte Zusatzleistungen:** Linkaufbau und SEO-Reporting (Monitoring mit verständlichen Berichten) sowie Texterstellung (suchmaschinenfreundliche Texte auf Wunsch).

**Wartung:** Keine Uptime-Garantien, keine festen Reaktionszeiten außer der Antwort innerhalb von 24 Stunden, keine Backup-Intervalle, kein „monatlich kündbar“ und keine kostenlose Testwoche. Diese Aussagen wurden am 6. Oktober 2026 gestrichen und dürfen nicht wieder auftauchen.

**Technik:**
- Nuxt 4 SSG (`nuxt generate`) mit Tailwind 3.
- Deploy per GitHub Actions über FTP zu All-inkl. Das Routing hängt an `.htaccess`.

**Was beim Redesign unverändert bleiben muss:**
- Alle URLs: `/leistungen/*`, `/webdesign-<stadt>`, alle 312 Seiten unter `/<stadt>/<keyword>`, `/kontakt`, `/impressum`, `/datenschutz`.
- Die Aufteilung index/noindex: 20 indexierte Keyword-Seiten und 292 mit `noindex, follow`.
- Sitemap, Canonical- und hreflang-Tags, OG-Defaults.
- Die JSON-LD-Daten: LocalBusiness/ProfessionalService, WebSite, BreadcrumbList, FAQPage und ContactPage.
- Die internen `TOP_KEYWORDS`-Links.

**Neue Seiten:**
- `/referenzen` mit einer Übersicht und je einer Fallseite.
- `/preise`.
- `/ueber-mich`.
- Der Ablauf wird ein einziger wiederverwendbarer Abschnitt statt drei doppelter Varianten.

**Analytics:**
- Google Analytics 4 mit Consent Mode v2 und echtem Opt-in: GA wird erst nach Zustimmung geladen, und Ablehnen ist genauso leicht wie Zustimmen.
- Die Messungs-ID liefert Robert später. Bis dahin wird ohne ID nichts geladen.
- Die Datenschutzerklärung formuliert Robert bzw. sein Generator selbst um; in den Code-Texten wird sie nicht umgeschrieben.

**Texte:**
- Alle Texte dürfen neu geschrieben werden, die SEO-Keywords der Seiten bleiben erhalten.
- Neue Behauptungen werden Robert vorher vorgelegt.

## Brand Commitments

- **Gestalterische Grundhaltung (von Robert festgelegt am 6. Oktober 2026, nach drei verworfenen Würfen):**
  - hochwertig und edel
  - kein Thema und keine Metapher (kein Stadion, kein Bauplan, keine Revier-Kostüme)
  - klar und modern
  - hell als Standard
  - Gewählte Richtung: „Editorial“.

- Der Name „Prestige Webdesign“ ist verbindlich. Ein neues Logo bzw. eine neue Wortmarke ist erlaubt.
- Es gibt kein Porträtfoto, und es soll auch keins geben. Vertrauen entsteht über Referenzen, Ablauf, Preise und die Qualität der Seite selbst.

## Evidence on Hand

**Von Robert bestätigte Zahlen und Aussagen:**
- über 10 abgeschlossene Projekte
- seit 6 Jahren im Webdesign tätig (seit 2020)
- „100 % Zufriedenheit“
- Antwort innerhalb von 24 Stunden

**Referenzen** (freigegeben mit Name, Screenshot und Link):

- **Shape & Flow** (shapeandflow.de) – das Vorzeigeprojekt
  - Studio für brasilianische Lymphdrainage in Dortmund.
  - Individuell mit Nuxt 3 entwickelt.
  - Umfangreiche SEO- und KI-Sichtbarkeit: JSON-LD, `llms.txt`, generierte OG-Bilder.
  - Preis- und Ratgeberseiten.
  - Prestige Webdesign ist auf der Seite nicht als Urheber genannt.
- **13th Passion** (13thpassion.de)
  - Hochzeitsfotografie in NRW.
  - WordPress mit Astra und Elementor, stark bildlastig, mit Galerien, Blog und Landingpage für Dortmund.
  - Im Footer als Prestige-Webdesign-Projekt gekennzeichnet.
- **Holtsträter Transporte** (holtstraeter-transporte.de)
  - Baustofftransporte in Dortmund.
  - WordPress mit Avada.
  - Seiten zu Fuhrpark, Jobs, Zertifikaten und Historie.
  - Im Footer als Prestige-Webdesign-Projekt gekennzeichnet.
  - *Offen:* Auf der Live-Seite stehen sichtbare Textfehler (doppelte Absätze, verstümmelte Adresszeile, „umsetzten“). Sie sollten vor dem Einsatz als Referenz korrigiert werden.
- **NepsteR Transportlogistik** (nepster-transporte.de)
  - WordPress mit Avada, Stand etwa 2019, wirkt veraltet.
  - Wird nicht als Referenz gezeigt (Empfehlung zu Q19).

Rollen (bestätigt): Shape & Flow – Design, Umsetzung & SEO (inkl. JSON-LD, llms.txt, OG-Bilder); 13th Passion und Holtsträter – Design & Umsetzung.

**Nicht vorhanden und darf nicht erfunden werden:**
- Kundenzitate oder Testimonials
- Kundenlogos
- ein Team
- eine Telefonnummer
- ein Porträtfoto
- Ranking- oder Umsatzversprechen

## Product Principles

1. **Ehrlich vor beeindruckend.** Nur belegbare Aussagen in der Ich-Form; nichts aufblähen.
2. **Die Seite ist der Beweis.** Geschwindigkeit, Barrierefreiheit und mobile Qualität werden vorgelebt, nicht nur behauptet.
3. **Antworten auf die drei Kernfragen sofort sichtbar:** Kann er das (Referenzen)? Was kostet es (ab-Preise)? Wie geht's weiter (Ablauf und Erstgespräch)?
4. **Ein klarer nächster Schritt.** Das Erstgespräch ist überall ohne Umwege erreichbar, auch einhändig am Handy.
5. **Die SEO-Substanz bleibt.** Das Redesign ändert Darstellung und UX, nicht die URL-Struktur und die strukturierten Daten.

## Accessibility & Inclusion

- WCAG 2.2 Level AA ist die verbindliche Untergrenze.
- Touch-Ziele sind mindestens 44 × 44 px groß.
- `prefers-reduced-motion` wird vollständig respektiert.
- Die Seite ist komplett per Tastatur und mit Screenreader nutzbar.
- Fehler- und Erfolgsmeldungen im Formular werden angesagt, der Fokus wird gesteuert.
- Der Cookie-Banner ist barrierefrei und blockiert die Seite nicht.
- Barrierefreiheit ist zugleich ein Verkaufsargument (BFSG seit Juni 2025).
