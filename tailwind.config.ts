import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#7357FF',
        gray: '#E2E2E4',
        scndgray: '#F7F7F8',
        thrdgray: '#ECECED',
        ivory: '#F8F8F8',
        dark: '#110C22',
        lightdark: '#4F4B5C',
      },
    },
  },
  plugins: [],
} satisfies Config

