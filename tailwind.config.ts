import { light } from '@mui/material/styles/createPalette'
import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#7357FF',
        lightpurple: '#E2DCFF',
        gray: '#E2E2E4',
        scndgray: '#F7F7F8',
        thrdgray: '#ECECED',
        ivory: '#F8F8F8',
        dark: '#110C22',
        lightdark: '#4F4B5C',
      },
    },
    fontFamily: {
      sans: ['General Sans', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config

