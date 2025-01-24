/** @type {import('tailwindcss').Config} */

import tailwindcssAnimate from 'tailwindcss-animate'

/**
 * Tailwind configuration.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: [],
  plugins: [tailwindcssAnimate],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--border-radius)',
        md: 'calc(var(--border-radius) - 0.125rem)',
        sm: 'calc(var(--border-radius) - 0.25rem)'
      },
      colors: {
        background: 'var(--background)',
        error: {
          100: 'var(--error-100)',
          200: 'var(--error-200)',
          DEFAULT: 'var(--error-500)'
        },
        neutral: {
          black: 'var(--neutral-black)',
          white: 'var(--neutral-white)'
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          DEFAULT: 'var(--primary-500)'
        },
        secondary: {
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          DEFAULT: 'var(--secondary-500)'
        },
        success: {
          100: 'var(--success-100)',
          200: 'var(--success-200)',
          DEFAULT: 'var(--success-500)'
        },
        tertiary: {
          100: 'var(--tertiary-100)',
          200: 'var(--tertiary-200)',
          DEFAULT: 'var(--tertiary-500)'
        },
        warning: {
          100: 'var(--warning-100)',
          200: 'var(--warning-200)',
          DEFAULT: 'var(--warning-500)'
        }
      },
      fontFamily: {
        sans: 'var(--font-family)'
      },
      fontSize: {
        base: 'var(--font-size)'
      }
    }
  }
}
