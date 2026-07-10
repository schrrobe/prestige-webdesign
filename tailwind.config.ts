import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#4263eb',
          800: '#3b5bdb',
          900: '#364fc7',
          950: '#1e3a8a',
        },
        accent: {
          50: '#fff9db',
          100: '#fff3bf',
          200: '#ffec99',
          300: '#ffe066',
          400: '#ffd43b',
          500: '#fcc419',
          600: '#fab005',
          700: '#f59f00',
          800: '#f08c00',
          900: '#e67700',
        },
        dark: {
          50: '#c1c2c5',
          100: '#a6a7ab',
          200: '#909296',
          300: '#5c5f66',
          400: '#373a40',
          500: '#2c2e33',
          600: '#25262b',
          700: '#1a1b1e',
          800: '#141517',
          850: '#121316',
          900: '#101113',
          950: '#0a0a0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
