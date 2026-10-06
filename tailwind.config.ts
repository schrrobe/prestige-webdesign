import type { Config } from 'tailwindcss'

/** Farbe aus einer CSS-Variable (RGB-Kanäle), damit Hell/Dunkel nur die Tokens tauscht. */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

export default <Config>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/data/**/*.ts',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Papier & Druckfarbe
        paper: token('paper'),
        sheet: token('sheet'),
        ink: token('ink'),
        'ink-soft': token('ink-soft'),
        rule: token('rule'),
        // Rasen – die tragende Farbfläche
        field: token('field'),
        'field-deep': token('field-deep'),
        'field-ink': token('field-ink'),
        'field-soft': token('field-soft'),
        // Signal – nur für Handlungen
        signal: token('signal'),
        'signal-ink': token('signal-ink'),
        // Anzeigetafel
        board: token('board'),
        'board-dot': token('board-dot'),
        // Status
        danger: token('danger'),
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'Archivo', 'system-ui', 'sans-serif'],
        display: ['"Archivo Variable"', 'Archivo', 'system-ui', 'sans-serif'],
        board: ['"Doto Variable"', 'Doto', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '78rem',
        text: '68ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}
