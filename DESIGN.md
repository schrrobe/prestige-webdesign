---
name: Prestige Webdesign
description: Editorial web design from Dortmund. Cool paper, ink, one oxblood.
colors:
  paper: "#fbfbfa"
  stone: "#efece7"
  ink: "#161616"
  ink-soft: "#5a5652"
  hair: "#dcd8d2"
  line: "#8a857f"
  accent: "#7a1f2b"
  accent-deep: "#5c1520"
  accent-ink: "#ffffff"
  danger: "#a81d1d"
  paper-dark: "#121212"
  stone-dark: "#1b1a19"
  ink-dark: "#ecebe8"
  ink-soft-dark: "#a9a5a0"
  hair-dark: "#343230"
  line-dark: "#6f6a65"
  accent-dark: "#e58b95"
  accent-ink-dark: "#121212"
  danger-dark: "#ff8a80"
  on-ink-paper: "#161616"
  on-ink-ink-soft: "#b3aea8"
  on-ink-hair: "#3a3836"
  on-accent-ink: "#f6f3f0"
  on-accent-ink-soft: "#ecd3d6"
  on-accent-hair: "#7a343e"
  on-accent-line: "#d6b2b7"
typography:
  display:
    fontFamily: "Bodoni Moda Variable, Bodoni Moda, Didot, Georgia, serif"
    fontSize: "2.375rem to 6rem, set per use"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.022em"
    fontVariation: "'opsz' 96"
  headline:
    fontFamily: "Bodoni Moda Variable, Bodoni Moda, Didot, Georgia, serif"
    fontSize: "2.25rem / 3rem (sm) / 3.5rem (lg)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.018em"
    fontVariation: "'opsz' 72"
  title:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem / 1.375rem (md)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem / 1.25rem (md)"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.09em"
rounded:
  pill: "9999px"
  panel: "1rem"
  menu: "0.5rem"
  phone: "0.9rem"
  shot: "0.375rem"
  field: "0.25rem"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "48px"
  section-tight: "56px"
  section: "80px"
  section-tight-md: "80px"
  section-md: "112px"
  header: "72px"
  page-max: "1280px"
  text-max: "66ch"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.accent-ink}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    height: "48px"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    height: "48px"
  input:
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    padding: "12px 0"
    height: "48px"
  chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "32px"
---

# Design System: Prestige Webdesign

## Overview

**Creative North Star: "The Well-Made Magazine"**

A quiet editorial page: tall serif headlines with optical sizing, plenty of white, strong screenshots with captions under them, and plain grotesk text. Hierarchy comes from type size, 1px rules and air. There are no boxes, icons or effects doing the work. One colour, oxblood, marks what you can do and, at most, one italic word per view. The site is light by default and has a full dark mode. The footer sits on ink and the closing inquiry on deep oxblood.

The world has no theme and no metaphor. It is not a stadium, a building plan or a Revier costume. It reads as high-end because it holds back: real work, open prices, one contact person.

**Key Characteristics:**
- Bodoni Moda display at weight 500 with the opsz axis, set against Schibsted Grotesk for text and UI.
- Cool paper (#fbfbfa), ink (#161616) and stone (#efece7) for alternating sections. Oxblood (#7a1f2b) is the only hue.
- Structure comes from a full-ink rule at the top of a block and hairlines between rows.
- Buttons are rounded pills with an arrow that nudges on hover. Fields are underlined.
- One quiet motion moment: the lead image reveals with a clip-path.

## Colors

The palette is warm-grey neutrals with one deep red. Every value is an RGB-channel custom property, so the light theme, dark theme and the two local surfaces (on-ink, on-accent) only swap tokens and the components never change.

### Primary
- **Oxblood** (accent; dark theme accent-dark): used for actions. That means primary buttons, link underlines, the arrow affordance in rows and the active nav item, plus the single italic `<em>` in a display or headline. It is also the text-selection colour and the caret colour. Contrast is 9.9:1 on paper, 8.7:1 on stone and 7.6:1 on dark paper.
- **Deep Oxblood** (accent-deep): the hover state of the primary button and the background of the closing inquiry section. It is the same in both themes. On it, on-accent-ink measures 12.0:1 and on-accent-ink-soft 9.4:1.
- **Accent Ink** (accent-ink; dark accent-ink-dark): the text on oxblood. White on accent measures 10.2:1. In the dark theme the text is #121212 on #e58b95 at 7.5:1.

### Neutral
- **Paper** (paper / paper-dark): the page and panel background. Ink on it measures 17.5:1 light and 15.7:1 dark.
- **Stone** (stone / stone-dark): the background of every other section, row hover at 60% and image placeholders. Ink-soft on stone measures 6.2:1.
- **Ink** (ink / ink-dark): text, the dark button, selected chips, the full-weight top rule of a block and the phone frame.
- **Soft Ink** (ink-soft / ink-soft-dark): leads, captions, metadata, labels and placeholders. It measures 7.0:1 light and 7.6:1 dark. It is a text colour and passes AA everywhere.
- **Hair** (hair / hair-dark): 1px row dividers, section borders and panel outlines. Purely structural.
- **Line** (line / line-dark): the interactive boundary for input underlines, outline buttons and chip borders. It measures 3.5:1 against paper (non-text).
- **Danger** (danger / danger-dark): invalid field underlines and the error alert (7.1:1 light, 8.2:1 dark).

### Local surfaces
- **On Ink** (footer): paper becomes on-ink-paper and soft text on-ink-ink-soft (8.2:1). Hair becomes on-ink-hair and line #827d78. Italic accent words turn to the inherited colour.
- **On Accent** (closing inquiry): paper becomes accent-deep, ink becomes on-accent-ink and soft text on-accent-ink-soft. Hair becomes on-accent-hair and line on-accent-line. The primary button inverts to an ink pill with oxblood text, and `<em>` inherits the text colour.

### Named Rules
**The One Colour Rule.** Oxblood means "act here". Use it only on actions (primary pill, link underline, arrow affordance, active nav) and on at most one italic accent word per view. Never use it as a fill, a border or a decorative tint.

**The Token Flip Rule.** A dark surface is made by re-declaring the tokens locally (`.on-ink`, `.on-accent`), never by hard-coding colours inside components.

## Typography

**Display Font:** Bodoni Moda Variable (with Didot, Georgia, serif)
**Body Font:** Schibsted Grotesk Variable (with system-ui, sans-serif)

**Character:** The Didone serif carries the brand and the grotesk does the work. Headlines are tight and big. Running text is sober and readable at 1.0625rem with a 1.65 line height.

### Hierarchy
- **Display** (500, opsz 96, 1.02, -0.022em): page covers, the homepage H1, the closing inquiry and the footer statement. Each use sets its own size: homepage H1 2.875rem to 6rem, xl cover 2.875rem to 5rem, standard cover 2.375rem to 4rem, closing 2.75rem to 4.25rem.
- **Headline** (500, opsz 72, 2.25rem to 3.5rem, 1.06): section heads (H2).
- **Serif sub-levels** (500, set inline): opsz 72 for card titles, fact-line figures and process numerals; opsz 48 for service names in the price table (1.75rem to 2rem); opsz 36 for FAQ questions and the panel form title; opsz 28 for the wordmark.
- **Title** (grotesk 600, 1.25rem to 1.375rem, 1.25): H3 inside content, such as process steps and list items.
- **Lead** (1.125rem to 1.25rem, 1.625): the intro paragraph under a display or headline, usually in soft ink.
- **Body** (1.0625rem, 1.65): running text. Long-form prose is capped at 66ch.
- **Label** (600, 0.75rem, 0.09em, uppercase): table column heads, `<dt>` terms, footer nav headings and the theme legend. It never sits above a headline.

### Named Rules
**The Optical Size Rule.** Every serif setting declares its opsz, and it scales with the size: 96 display, 72 headline, 48, 36, 28. Never let the serif render at the default optical size.

**The Single Italic Rule.** Italic oxblood is reserved for one `<em>` word or phrase in a display or headline, and only one per viewport. On ink and oxblood surfaces it keeps the italic but drops the colour.

## Layout

The page container is centred with a 1280px maximum and gutters of 20, 32 and 48px across breakpoints (sm 640px, lg 1024px). Content runs on an asymmetric 12-column grid. A cover splits 7 + 5, offset from column 8. Section heads put the title on the left and an optional action at the bottom right.

A standard section has 80px of vertical padding (112px from md). A tight section uses 56px (80px). Section backgrounds alternate between paper and stone, and the homepage moves paper, stone, paper, stone. The sticky header is 72px tall, and scroll padding accounts for it. Mobile stacks in reading order: H1, lead, form, fact line, image.

**The Rule-Not-Box Rule.** A block opens with a 1px full-ink rule (`rule-top`, or `border-t border-ink` on tables, the process list and the FAQ). Its rows divide with 1px hair. Content is not put in cards.

## Elevation & Depth

The system is flat. Depth comes from tonal alternation (paper and stone) and from rules. Shadows exist only where something physically overlaps the page.

### Shadow Vocabulary
- **Phone lift** (`box-shadow: 0 24px 48px -20px rgba(0,0,0,0.45)`): only on the mobile screenshot that overlaps the desktop shot.
- **Menu layer** (`box-shadow: 0 12px 32px -12px rgba(0,0,0,0.18)`): the header's services dropdown.
- **Consent layer** (`box-shadow: 0 18px 48px -16px rgba(0,0,0,0.28)`): the fixed cookie banner.

**The Real Shadow Rule.** A shadow means "this sits above the page". If an element does not overlap anything, it gets no shadow.

## Shapes

There are two shape families. The interactive ones are fully round: pill buttons, chips, the theme switch and the FAQ toggle disc. The containers are softly rounded: panels and the comparison grid use 1rem, the dropdown and error alert 0.5rem, the desktop screenshot 0.375rem, and the phone frame 0.9rem with a 3px ink border. Input fields have square corners and only an underline. The textarea is the exception: a full 1.5px frame with 0.25rem corners.

## Components

### Buttons
- **Shape:** a pill, at least 48px tall, with 10px 24px padding, 0.9375rem semibold text, a 1px border and a trailing arrow icon.
- **Primary:** oxblood fill with accent-ink text, and it hovers to deep oxblood. On the oxblood section it inverts to an ink pill with oxblood text and hovers to transparent.
- **Dark:** an ink pill with paper text that hovers to transparent with ink text. It is the secondary action, as in "Zur Fallstudie" and consent "Zustimmen".
- **Outline:** a line border on transparent that hovers to an ink border. Use it for the alternative choice.
- **Motion:** the arrow translates 3px right in 200ms ease-out. Disabled buttons drop to 60% opacity.

### Chips
- **Style:** pill, at least 44px tall, line border, 0.9375rem medium. The radio input is visually hidden.
- **State:** hover gives an ink border. The checked chip fills ink with paper text. The focus-visible outline is drawn on the chip.

### Inputs / Fields
- **Style:** an underline only (1.5px line) on a transparent background, 48px tall, 1.125rem text, with soft-ink placeholders. The textarea is fully framed with 0.25rem corners.
- **Focus:** the underline turns ink and a 2px ink outline is offset 4px. Hover gives a soft-ink underline. Invalid fields get a danger underline and an error line under the field with an icon.

### Navigation
The sticky header is paper with a hair bottom border. Nav links have an ink underline that scales in from the left on hover (300ms). The active link is oxblood with an oxblood underline. The mobile menu is a full-height paper sheet.

### Component inventory
- **PageCover:** the opening of every sub-page. Breadcrumb, display H1 (7 columns when there is an aside, otherwise 10), lead, actions slot and aside.
- **SectionHead:** the H2 headline with an optional intro and a top rule. Every content section starts with one.
- **QuickInquiry:** the two-field inquiry (topic chips plus email). `inline` puts everything in one row, for the homepage hero. `panel` is a framed 1rem panel, for asides. Success appears in place.
- **InquirySection:** the closing on-accent section with a display title, three check reassurances and an unframed QuickInquiry. Use one per page, at the end.
- **ServiceTable:** services as a ruled table with a serif name, description and tabular price. The whole row is a link, with a stone hover and an arrow nudge.
- **ProcessFixture:** the numbered steps. A ruled list with italic serif numerals, a title and a label-styled timing.
- **ReferenceShowcase / ReferenceShots:** a featured case (screenshot right, text and pills left) plus a two-up of others. Shots always pair desktop with an overlapping phone, and a caption sits under each figure.
- **FactLine:** small serif figures over soft labels in a 2/4-column grid divided by hairlines. `large` adds an ink top rule.
- **FaqList:** `<details>` rows with serif questions. The round toggle fills ink when open and its plus rotates 45°.
- **CheckList:** short benefit lists with a check icon, in one or two columns.
- **Monogram / SiteLogo:** an oxblood disc with an italic serif P, plus the serif wordmark and a small uppercase "Webdesign · Dortmund".
- **AppFooter:** on-ink. Display statement, address, three nav columns, primary pill and theme switch.
- **CookieConsent:** a fixed 1rem-rounded paper banner with the consent shadow and an outline/dark pill pair.
- **ThemeSwitch:** a segmented pill radio group (Hell / System / Dunkel). The selected segment is ink.

### Motion
- **Lead reveal:** clip-path from `inset(100% 0 0 0)` plus a 12px rise, 900ms with a 120ms delay, easing `cubic-bezier(0.16, 1, 0.3, 1)`. Only on the hero's ReferenceShots.
- **Success fade:** opacity plus a 6px rise, 420ms, same easing, on the inquiry success state.
- **Reduced motion:** all animations and transitions collapse to 0.01ms, and smooth scrolling only applies under `no-preference`.

## Do's and Don'ts

### Do:
- **Do** open every block with a full-ink 1px rule and divide its rows with hair.
- **Do** declare opsz on every serif setting, and use 500 for serif headings.
- **Do** keep oxblood to actions plus one italic `<em>` per view.
- **Do** put captions under images in soft ink at 0.875rem.
- **Do** make targets at least 44px (chips, links, breadcrumbs) and 48px for buttons and inputs. Show focus with a 2px ink outline, offset 3px.
- **Do** alternate paper and stone sections, end on the oxblood inquiry, and close with the ink footer.
- **Do** write copy in the first person singular (Ich-Form) and address the reader formally (Sie). Use only facts on hand: real references, real prices, real response times. Never invent testimonials, numbers or logos.

### Don't:
- **Don't** set an eyebrow or kicker (a small uppercase label above a headline). Labels head table columns, terms and nav groups only.
- **Don't** build icon-tile card grids or feature boxes with icons.
- **Don't** use gradients, glassmorphism or backdrop blur.
- **Don't** add decorative shadows. The only shadows are the phone lift, the menu layer and the consent layer.
- **Don't** introduce a second hue, or fill large areas with oxblood other than the closing section.
- **Don't** use themed vocabulary or costume: stadium, building plan, mine shaft, Revier props.
- **Don't** hard-code colours inside a dark surface. Flip the tokens instead.
