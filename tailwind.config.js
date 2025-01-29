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
        '2xl': 'calc(var(--border-radius) + 0.25rem)',
        lg: 'var(--border-radius)',
        md: 'calc(var(--border-radius) - 0.125rem)',
        sm: 'calc(var(--border-radius) - 0.25rem)',
        xl: 'calc(var(--border-radius) + 0.125rem)'
      },
      colors: {
        background: 'hsl(var(--primary-100))',
        black: 'hsl(var(--black))',
        border: 'hsl(var(--gray-300))',
        disabled: {
          DEFAULT: 'hsl(var(--gray-100))',
          foreground: 'hsl(var(--gray-500))'
        },
        error: {
          100: 'hsl(var(--error-100))',
          200: 'hsl(var(--error-200))',
          DEFAULT: 'hsl(var(--error-500))'
        },
        link: 'hsl(var(--blue-500))',
        muted: 'hsl(var(--gray-700))',
        popover: {
          DEFAULT: 'hsl(var(--white))',
          foreground: 'hsl(var(--primary-100))'
        },
        primary: {
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          DEFAULT: 'hsl(var(--primary-500))'
        },
        secondary: {
          100: 'hsl(var(--secondary-100))',
          200: 'hsl(var(--secondary-200))',
          DEFAULT: 'hsl(var(--secondary-500))'
        },
        success: {
          100: 'hsl(var(--success-100))',
          200: 'hsl(var(--success-200))',
          DEFAULT: 'hsl(var(--success-500))'
        },
        warning: {
          100: 'hsl(var(--warning-100))',
          200: 'hsl(var(--warning-200))',
          DEFAULT: 'hsl(var(--warning-500))'
        },
        white: 'hsl(var(--white))'
      },
      fontFamily: {
        sans: 'var(--font-family)'
      },
      height: {
        bottombar: 'var(--bottombar-height)',
        topbar: 'var(--topbar-height)'
      },
      minHeight: {
        bottombar: 'var(--bottombar-height)',
        topbar: 'var(--topbar-height)'
      },
      minWidth: {
        sidebar: 'var(--sidebar-width)',
        sidebarIcon: 'var(--sidebar-icon-width)'
      },
      width: {
        sidebar: 'var(--sidebar-width)',
        sidebarIcon: 'var(--sidebar-icon-width)'
      }
    }
  }
}
