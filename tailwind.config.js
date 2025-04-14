/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS files in src
    "./index.html" // Scan index.html if present
  ],
  theme: {
    // Make sure we extend colors rather than replace them, to keep default slate, etc.
    extend: {
      colors: {
        // Base colors
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
        current: 'currentColor',
        
        // New color scheme
        dark: '#0D0D0D',
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
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        glow: '#4AC3F7',
        steel: '#A3A3A3',
        deep: '#1A1E50',
        light: '#F1F1F1',
        
        // Semantic color variants
        background: '#0D0D0D',
        text: '#F1F1F1',
        highlight: '#5F4AB3',
        'accent-pink': '#E33BE3',
        'accent-blue': '#4AC3F7',
        'accent-gray': '#A3A3A3',
        'accent-deep': '#1A1E50',
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
        'neon': '0 0 5px #4AC3F7, 0 0 20px #E33BE3',
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
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    // V4 plugin format is different
    {
      handler({ addUtilities }) {
        addUtilities({
          '.text-shadow-neon': {
            textShadow: '0 0 5px #4AC3F7, 0 0 10px #E33BE3',
          },
        });
      },
    },
  ],
} 