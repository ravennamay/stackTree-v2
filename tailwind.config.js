/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS files in src
    "./index.html" // Scan index.html if present
  ],
  theme: {
    extend: {
      colors: {
        // Neutral base colors for the new design
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        
        // Accent colors - subtle but vibrant highlights
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#ef4444',
          indigo: '#6366f1',
          orange: '#f97316',
        },

        // Keep some original colors for compatibility
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        
        // Semantic colors
        background: '#0a0a0a',
        glow: '#3b82f6',
        
        // Legacy colors for existing components
        ratteBlack: '#000000',
        ratteDarkGray: '#121212',
        ratteGray: '#2a2a2a',
        ratteLightGray: '#3a3a3a',
        ratteBlue: {
          light: '#8a9eff',
          DEFAULT: '#6979D8',
          dark: '#4E5EB9'
        },
        rattePurple: {
          light: '#B088F9',
          DEFAULT: '#7B5CD6',
          dark: '#5E45A1'
        },
        ratteAccent: '#8a9eff'
      },
      fontFamily: {
        // Set Inter as the default sans-serif font
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'neon': '0 0 5px #3b82f6, 0 0 20px #8b5cf6',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 1s infinite',
      },
      backdropBlur: {
        '3xl': '64px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    // V4 plugin format
    {
      handler({ addUtilities }) {
        addUtilities({
          '.text-shadow-neon': {
            textShadow: '0 0 5px #3b82f6, 0 0 10px #8b5cf6',
          },
          '.backdrop-blur-3xl': {
            backdropFilter: 'blur(64px)',
          },
          '.line-clamp-2': {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '2',
          },
        });
      },
    },
  ],
}