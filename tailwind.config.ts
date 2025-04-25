import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', 'dark'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/bg-dark-theme.png')",
      },
      colors: {
        yellow: {
          '500': '#FF9F00',
        },
        orange: {
          '500': '#FE8159',
          '800': '#DA3701',
        },
        neutral: {
          '0': '#FFFFFF',
          '100': '#F2F2F7',
          '200': '#E4E4EF',
          '600': '#404254',
          '700': '#2A2B37',
          '800': '#21222C',
          '900': '#12131A',
        },
        purple: {
          '400': '#D3A0FA',
          '500': '#C27CF8',
        },
      },

      fontFamily: {
        inter: ['var(--font-inter)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
      borderRadius: {
        '2': '8px',
        '1.5': '6px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
export default config
