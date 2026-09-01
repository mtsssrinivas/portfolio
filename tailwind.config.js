/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAFAF8',
          subtle: '#F4F4F0',
          card: '#FFFFFF',
          cardHover: '#FFFFFF',
          border: '#EAEAEA',
          borderHover: '#D4D4D4',
          textPrimary: '#111111',
          textSecondary: '#666666',
          textMuted: '#999999'
        },
        darkCanvas: {
          DEFAULT: '#090A0F',
          subtle: '#0F1218',
          card: '#131720',
          cardHover: '#171D28',
          border: '#1E2533',
          borderHover: '#2E384D',
          textPrimary: '#F8FAFC',
          textSecondary: '#94A3B8',
          textMuted: '#64748B'
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          DEFAULT: '#2563eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      maxWidth: {
        'content': '1240px'
      },
      boxShadow: {
        'card-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.18)'
      }
    },
  },
  plugins: [],
}
