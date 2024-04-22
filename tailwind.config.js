/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // From Small to big
      sm: '560px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#70C010',
          1: '#768E00',
          2: '#A5C700',
          3: '#5CB404',
        },
        dark: {
          1: '#141414',
          2: '#252525',
          3: '#191A1E',
          4: '#222327',
          5: '#1B1C22',
          6: '#2D2E2E',
          7: '#111214',
          8: '#202126',
        },
        'gray-shade': {
          1: '#2A2D3C',
          2: '#F0F2ED',
        },
      },
    },
  },
  plugins: [],
}
