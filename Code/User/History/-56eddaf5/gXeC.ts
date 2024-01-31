import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
// const plugin = require('tailwindcss/plugin');

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        'ibc-blue': 'rgb(var(--ibc-blue) / <alpha-value>)',
        'ibc-dark-blue': 'rgb(var(--ibc-dark-blue) / <alpha-value>)',
        'ibc-light-blue': 'rgb(var(--ibc-light-blue) / <alpha-value>)',
        'ibc-yellow': 'rgb(var(--ibc-yellow) / <alpha-value>)',
        'ibc-orange': 'rgb(var(--ibc-orange) / <alpha-value>)',
        'ibc-lime': 'rgb(var(--ibc-lime) / <alpha-value>)',
        'ibc-red': 'rgb(var(--ibc-red) / <alpha-value>)',
        'ibc-pink': 'rgb(var(--ibc-pink) / <alpha-value>)',
        'ibc-purple': 'rgb(var(--ibc-purple) / <alpha-value>)',
        'ibc-green': 'rgb(var(--ibc-green) / <alpha-value>)',
        'ibc-gray': 'rgb(var(--ibc-gray) / <alpha-value>)',
        'ibc-gray-2': 'rgb(var(--ibc-gray-2) / <alpha-value>)',
        'light-neutral-secondary':
          'rgb(var(--light-neutral-secondary) / <alpha-value>)',

        'light-text': 'rgb(var(--light-text) / <alpha-value>)',
        'dark-text': 'rgb(var(--dark-text) / <alpha-value>)',
        'placeholder-text': 'rgb(var(--placeholder-text) / <alpha-value>)'
      },
      boxShadow: {
        'ibc-card-shadow': '0px 4px 68.7px 0px rgba(233, 123, 39, 0.11);'
      },
      fontFamily: {
        'brother-1816': ['var(--font-brother-1816)', 'sans-serif'],
        sans: ['var(--font-brother-1816)', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
        // hero: ''
      }
    }
  },
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    nextui({
      defaultTheme: 'light',
      layout: {
        radius: {
          small: '5px',
          medium: '7px',
          large: '16px'
        }
      },
      themes: {
        light: {
          colors: {
            secondary: 'rgb(2 23 111 / 1)',
            primary: 'rgb(35 121 251 / 1)'
          }
        },
        dark: {
          colors: {
            secondary: 'rgb(2 23 111 / 1)',
            primary: 'rgb(35 121 251 / 1)'
          }
        }
      }
    })
    // require('@tailwindcss/container-queries'),
    // require('@tailwindcss/typography'),
    // plugin(({ matchUtilities, theme }) => {
    //   matchUtilities(
    //     {
    //       'animation-delay': (value) => {
    //         return {
    //           'animation-delay': value
    //         };
    //       }
    //     },
    //     {
    //       values: theme('transitionDelay')
    //     }
    //   );
    // })
  ]
};
export default config;
