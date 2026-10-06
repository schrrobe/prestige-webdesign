---
name: Prestige Webdesign
description: Revier-Stadionheft – Zeitungspapier, Druckschwarz, Rasengrün, Signal-Orange nur für Handlungen.
colors:
  paper: "#f4f4ef"
  sheet: "#fcfcf9"
  ink: "#151614"
  ink-soft: "#4a4d47"
  rule: "#848880"
  field: "#0d4a32"
  field-ink: "#f4f4ef"
  field-soft: "#b9d3c3"
  signal: "#ff5a1f"
  signal-ink: "#b33a0a"
  board: "#151614"
  board-dot: "#f4f4ef"
  danger: "#b42318"
  flutlicht-paper: "#0f1411"
  flutlicht-sheet: "#171e1a"
  flutlicht-ink: "#ecede6"
  flutlicht-ink-soft: "#a9ada4"
  flutlicht-rule: "#5f655c"
  flutlicht-field: "#123826"
  flutlicht-signal: "#ff6a30"
  flutlicht-signal-ink: "#ff7a45"
  flutlicht-board: "#080a09"
  flutlicht-danger: "#ff8a80"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "3.25rem / 4.5rem (sm) / 6rem (lg); hero 3.5rem to 6rem (xl)"
    fontWeight: 860
    lineHeight: 0.93
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "2.125rem / 3rem (sm) / 3.5rem (lg)"
    fontWeight: 820
    lineHeight: 0.98
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.25rem / 1.5rem (md)"
    fontWeight: 760
    lineHeight: 1.1
    fontVariation: "'wdth' 82"
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.125rem / 1.25rem (md)"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 88"
  board:
    fontFamily: "Doto Variable, Doto, ui-monospace, monospace"
    fontSize: "0.9375rem (header) / 2.5rem to 3rem (ScoreBoard)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  none: "0px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  section: "64px"
  section-md: "96px"
  section-tight: "48px"
  section-tight-md: "64px"
  page-max: "78rem"
  text-max: "68ch"
  header-h: "4.25rem"
components:
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
    height: "48px"
    typography: "{typography.label}"
  button-signal-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.signal}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  input:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: "48px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
    height: "44px"
  chip-checked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  scoreboard:
    backgroundColor: "{colors.board}"
    textColor: "{colors.board-dot}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  ticket:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px 24px 24px"
---

# Design System: Prestige Webdesign

## Overview

**Creative North Star: "Das Revier-Stadionheft"**

The site is the printed programme for a home match: a green cover page, a league table of prices, a fixture list for the process, the home games as references, a personal foreword, and the kick-off ticket. Everything is printed matter. Newsprint paper (with a faint offset grain at 5 % opacity, 3.5 % in Flutlicht), press black, one solid field of turf green, and one signal orange reserved for doing something. Type is Archivo squeezed to its narrowest width for poster capitals; the only other face is the Doto dot matrix, and it lives exclusively on the scoreboard.

Density is that of a programme, not a brochure: heavy 6px rules open sections, tables carry real numbers in tabular figures, and depth comes from pasted-on layers overlapping each other, never from light. The world rejects the agency template it replaced: dark hero, glass cards, gradient washes and rows of icon tiles.

**Key Characteristics:**
- Three inks: paper/ink, field green, signal orange. Nothing else carries colour.
- Square corners everywhere; 2px print frames; 6px section rules.
- Ultra-condensed uppercase display (wdth 62 %, weight 860–880).
- Header scoreboard announces the current rubric as you scroll.
- Light theme by default; "Flutlicht" dark theme swaps only the RGB-channel tokens.

## Colors

Three inks on newsprint; every value is an RGB-channel custom property in `app/assets/css/tailwind.css` consumed as `rgb(var(--x) / <alpha>)`, so the themes swap channels and nothing else.

### Primary
- **Rasengrün / Field** (#0d4a32; Flutlicht #123826): the load-bearing solid surface. Cover pages (PageCover, home hero), the Anpfiff closer and the footer are full-bleed green. Text on it is **Field Ink** (#f4f4ef, 9.3:1; Flutlicht #ecede6, 11.0:1); secondary text and breadcrumbs use **Field Soft** (#b9d3c3, 6.5:1). `field-deep` is defined but unused; do not reach for it without a new decision.

### Secondary
- **Signal-Orange** (#ff5a1f; Flutlicht #ff6a30): the action ink. Fills the one primary button (press black text on it, 5.8:1), the nav underline, link underlines, the board's live dot and text selection. **Signal Ink** (#b33a0a; Flutlicht #ff7a45) is the text-safe variant for arrows, hover glyphs and the stamp on paper/sheet (5.4:1 on paper, 5.8:1 on sheet).

### Neutral
- **Zeitungspapier / Paper** (#f4f4ef; Flutlicht #0f1411): page ground.
- **Bogen / Sheet** (#fcfcf9; Flutlicht #171e1a): the alternate band (`bg-sheet` sections), input fill, ticket, dropdowns, consent bar.
- **Druckschwarz / Ink** (#151614; Flutlicht #ecede6): text, frames, rules, the `on-ink` slab. 16.4:1 on paper (Flutlicht 15.8:1).
- **Ink Soft** (#4a4d47; Flutlicht #a9ada4): secondary copy, table headings, metadata. 7.8:1 on paper.
- **Rule** (#848880; Flutlicht #5f655c): resting input border only. Hairlines elsewhere are ink at 25 % alpha.
- **Board** (#151614; Flutlicht #080a09) with **Board Dot** (#f4f4ef): the scoreboard surface and its matrix digits; labels on it use Field Soft (11.4:1).
- **Danger** (#b42318; Flutlicht #ff8a80): field errors and invalid borders only.

### Named Rules
**The Three-Ink Rule.** Paper/ink, field green, signal orange. No fourth hue, no tints beyond alpha on ink, no gradients.

**The Signal-Means-Act Rule.** Orange marks something you can do: the primary button, link and nav underlines, action arrows, the stamp confirming an action. The single sanctioned exception is the closing word of the home cover headline ("Ruhrgebiet."), set at display size where signal on field (3.3:1) clears large-text contrast. Never use signal for body text, backgrounds of non-actions, or decoration.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui, sans-serif), self-hosted, wdth 62–125, wght 100–900
**Body Font:** Archivo Variable, normal width
**Label/Mono Font:** Doto Variable (with ui-monospace, monospace), scoreboard only

**Character:** One family stretched across its width axis does all the work: narrow and heavy for posters, normal for reading. Doto is a measuring instrument, not a typeface for prose.

### Hierarchy
- **Display** (`t-display`: wdth 62 %, 860, line-height 0.93, -0.01em, uppercase): one per cover and on the Anpfiff/footer sign-offs. Size set per use: PageCover 3.25rem → 4.5rem → 6rem (xl) or 2.5rem → 3.75rem → 4.5rem for titles over 34 characters; home hero 3.5rem → 5.25–6rem.
- **Headline** (`t-headline`: wdth 72 %, 820, 2.125rem / 3rem / 3.5rem, line-height 0.98, -0.012em, sentence case): every section H2 via SectionHead.
- **Poster names** (wdth 62 %, 880, uppercase, leading 0.9–1): reference names, tool names (WordPress / Individuell), ticket heading, logo, stamp. Inline style, not a class; keep weight 880.
- **Title** (`t-title`: wdth 82 %, 760, 1.25rem / 1.5rem, line-height 1.1): H3s, process step names, success headings.
- **Lead** (`t-lead`: 1.125rem / 1.25rem, relaxed): intro paragraph under display and headline, max ~42rem.
- **Body** (1.0625rem, line-height 1.65): reading measure capped at 68ch (`max-w-text`). `text-wrap: balance` on headings, `pretty` on paragraphs.
- **Label** (`t-label`: wdth 88 %, 700, 0.8125rem, 0.06em, uppercase): table column heads, `dt` terms, process timing, footer column headings. Never above a heading.
- **Board** (`t-board`: Doto 800, 0.04em): scoreboard values and the header rubric, nowhere else.
- **Buttons/Nav**: wdth 85 %, 780 (nav 720), uppercase, 0.03–0.04em, 0.875–0.9375rem.

### Named Rules
**The Doto Stays on the Board Rule.** The dot-matrix face appears only inside `bg-board` (ScoreBoard, header rubric). Anywhere else it is costume.

**The Tabular Rule.** Tables and `.tabular` use `font-variant-numeric: tabular-nums`; prices and figures line up like a league table.

## Layout

- **Container** `.wrap`: centred, max 78rem, gutters 16px / 24px (sm) / 40px (lg).
- **Rhythm** `.section`: 64px / 96px (md) vertical; `.section-tight` 48px / 64px. Sections alternate paper and `bg-sheet`; green (`on-field`) opens the page (cover) and closes it (Anpfiff + footer); `on-ink` is a single slab inside a section (e.g. the "Individuell" half of the tool comparison).
- **Section opening** `.rule-heavy`: 6px ink top border, then 24–32px to the headline. Lists and tables open on a 2px ink line and separate rows with 1px ink/25 % hairlines (FaqList, ProcessFixture, ServiceTable, reference articles).
- **Grid**: 12 columns at lg; typical splits 7/5 (cover text/ticket, reference text/shots), 5/7 (headline/foreword), 6/5 offset (Anpfiff). Mobile stacks in reading order: headline, lead, buttons, board, ticket.
- **Context classes** `on-field` and `on-ink` flip text and `--focus` to the paper side so focus rings stay visible.
- **Sticky header** 4.25rem (`--header-h`); `scroll-padding-top` = header + 1rem.

## Elevation & Depth

No shadows anywhere. Depth exists only as overlap of flat, framed layers, like cuttings pasted into a programme: the home ticket hangs over the green edge into the paper (`-mb-20` / `-mb-28`, `z-10`); in ReferenceShots the phone screenshot overlaps the desktop screenshot's corner, both in 2px ink frames. The only `box-shadow` in the system is the input focus ring (0 0 0 2px ink), which is a stroke, not elevation.

### Named Rules
**The Scherenschnitt Rule.** To lift something, overlap it and frame it. Never shadow, blur or glow it.

## Shapes

Square corners throughout (0px); the only rounded forms are the 8px signal dot beside the board and the ticket notches. Frames are 2px ink (`border-2`), section rules 6px, hairlines 1px ink at 25 %. The stamp uses a 3px signal-ink frame rotated -9°. The ticket is the one silhouette: a sheet card masked with two 14px half-circle notches 4.75rem from the top, joined by a 2px dashed ink/40 % perforation.

## Components

### Buttons
- **Shape:** square (0px), 2px border, min height 48px, padding 10px 24px, uppercase wdth 85 % weight 780 at 0.9375rem; `:active` nudges 1px down. Disabled at 60 % opacity.
- **Signal** (`btn-signal`): signal fill, press-black text and border; hover inverts to black fill with signal text. On field/ink the border becomes signal. One per view: the "Erstgespräch anfragen" action.
- **Ink** (`btn-ink`): ink fill, paper text; hover empties to transparent. Secondary decisive action ("Zur Fallstudie", "Zustimmen").
- **Outline** (`btn-outline`): current-colour border, transparent; hover fills ink (paper on field). Tertiary and equal-weight alternatives ("Ablehnen" sits beside "Zustimmen" at the same size).

### Chips
- **Style:** radio/checkbox labels as printed boxes: 2px ink border, min 44px, wdth 88 % weight 700; hover ink 6 %; checked fills ink with paper text; focus ring on the label via `:has(input:focus-visible)`. ThemeSwitch is the same idea as a joined segmented control in field-ink.

### Inputs / Fields
- **Style:** sheet fill, 2px rule border, square, min 48px, padding 12px 16px; placeholder in ink-soft at full opacity; hover border ink-soft.
- **Focus:** border ink plus 2px ink ring. Invalid: danger border and a `field-error` line with alert icon. Labels sit above (`field-label`, bold wdth 90 %); hints below in ink-soft.

### Navigation
- **Header:** sticky, paper with 2px ink bottom border. Nav links uppercase wdth 85 % weight 720, 0.875rem, min 44px; a 3px signal underline scales in from the left on hover and stays on the active route. Leistungen opens a square sheet dropdown with 2px ink frame. Mobile menu traps focus, closes on Escape and returns focus to the trigger.
- **Rubric board:** a square black box (36px high) with the signal dot and the current rubric in Doto, driven by the nearest `[data-rubric]` section via IntersectionObserver (root margin -40 % / -55 %). Decorative (`aria-hidden`). Every top-level section must carry `data-rubric` with a programme term (Titelseite, Heimspiele, Tabelle, Taktik, Spielplan, Vorwort, Fragen, Anpfiff, Abpfiff; also Aufstellung, Auswärts, Spielbericht, Kontakt, Kleingedrucktes).

### Signature components (when to use)
- **PageCover**: green cover with breadcrumbs, display H1, lead, button slot and optional aside. Every page except home opens with it.
- **ScoreBoard**: black `dl` of confirmed figures in Doto; field-soft labels. Only verified numbers (`TRUST_STATS`).
- **SectionHead**: 6px rule, headline, optional lead, optional right-aligned action. The default opener for every section; it replaces eyebrow labels.
- **ServiceTable**: the price table ("Tabelle"): position number, poster-name service link (whole row clickable), description, price; collapses to a grid on mobile.
- **ProcessFixture**: the single process component ("Spielplan"): timing / step / description rows. Never rebuild a process section ad hoc.
- **ReferenceShowcase / ReferenceShots**: first reference face-out (7/5 with overlapping shots and facts), the rest spine-style in two columns.
- **TicketForm**: the short inquiry form inside the ticket (topic chips, e-mail, optional message). Used on the home cover and in KickoffSection.
- **KickoffSection**: green closer of every page: display headline, three check promises, TicketForm.
- **FaqList**: native `details` rows with a square plus box that fills ink and rotates 45° when open.
- **CheckList**: check icon + text, one or two columns. **ContactForm**: full form on /kontakt with the same stamp. **CookieConsent**: non-modal bottom bar, reject and accept equal. **SiteLogo / DotMark**: 5×7 dot-matrix "PW" on a field rectangle with a signal dot, plus condensed wordmark.

### Motion
- **Board switch** (`animate-board`): 360ms `steps(4, end)` opacity 0.35 → 1 when the rubric changes; never on first paint.
- **Stamp** (`animate-stamp`): "Angefragt" / "Fast fertig" lands at -9° from scale 1.5 to 1 over 520ms `cubic-bezier(0.16, 1, 0.3, 1)` after submitting.
- **Micro**: colour transitions 150ms; nav underline and arrow nudges (translate-x 4px) 200ms ease-out; consent bar slides 300/200ms.
- **Reduced motion:** all animation and transition durations collapse to 0.01ms; smooth scrolling only with `no-preference`.

## Do's and Don'ts

### Do:
- **Do** open every section with SectionHead (6px ink rule + headline) and tag it with `data-rubric`.
- **Do** keep targets at least 44px (links, chips, nav) and 48px for buttons and inputs.
- **Do** use `on-field` / `on-ink` wrappers so text and `--focus` flip together; focus is always a 3px solid outline offset 3px.
- **Do** keep one `btn-signal` per view and pair alternatives at equal size (consent: Ablehnen = Zustimmen).
- **Do** give icons `aria-hidden` and real text alongside; external links announce "(öffnet neuen Tab)" via `sr-only`.
- **Do** write in Ich-Form addressing the reader as "Sie"; state only confirmed facts (prices from PRODUCT.md, `TRUST_STATS`, real references).
- **Do** alternate paper and sheet bands; start and end the page on field green.

### Don't:
- **Don't** put an eyebrow or kicker label above a headline; the headline carries itself (`t-label` is for table heads and terms only).
- **Don't** build card grids of icon tiles; services are a table, process is a fixture list, references are pasted shots.
- **Don't** use gradients, glass, blur, or any box-shadow for depth.
- **Don't** round corners.
- **Don't** set Doto outside the scoreboard and header rubric.
- **Don't** use signal orange for anything that is not an action (except the one cover word above).
- **Don't** invent testimonials, client counts, awards or team members; no portrait photo.
