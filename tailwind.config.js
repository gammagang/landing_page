/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated pastel grey, black, maroon palette
        pastel: {
          grey: {
            100: '#F8F9FA',
            200: '#F1F3F4',
            300: '#E8EAED',
            400: '#DADCE0',
            500: '#BDC1C6',
            600: '#9AA0A6',
            700: '#5F6368',
            800: '#3C4043',
            900: '#202124',
          },
          maroon: {
            50: '#FDF2F2',
            100: '#FCE7E7',
            200: '#F8D1D1',
            300: '#F2ABAB',
            400: '#E87878',
            500: '#D14A4A',
            600: '#B83D3D',
            700: '#973232',
            800: '#7D2A2A',
            900: '#6B2626',
          },
          black: {
            50: '#F7F7F7',
            100: '#E3E3E3',
            200: '#C8C8C8',
            300: '#A4A4A4',
            400: '#818181',
            500: '#666666',
            600: '#515151',
            700: '#434343',
            800: '#383838',
            900: '#000000',
          }
        },
        primary: {
          50: '#FDF2F2',
          100: '#FCE7E7',
          200: '#F8D1D1',
          300: '#F2ABAB',
          400: '#E87878',
          500: '#D14A4A',
          600: '#B83D3D',
          700: '#973232',
          800: '#7D2A2A',
          900: '#6B2626',
        },
        secondary: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#5F6368',
          700: '#3C4043',
          800: '#202124',
          900: '#000000',
        }
      }
    },
  },
  plugins: [],
} 