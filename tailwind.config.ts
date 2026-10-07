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
        paper: token('paper'),
        stone: token('stone'),
        ink: token('ink'),
        'ink-soft': token('ink-soft'),
        hair: token('hair'),
        line: token('line'),
        accent: token('accent'),
        'accent-deep': token('accent-deep'),
        'accent-ink': token('accent-ink'),
        'accent-soft': token('accent-soft'),
        danger: token('danger'),
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk Variable"', '"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Bodoni Moda Variable"', '"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '80rem',
        text: '66ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}
