/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#EAFFF7',
          100: '#D5FFF0',
          200: '#AAFFE1',
          300: '#80FFD1',
          400: '#40FFC2',
          500: '#0BCEAF',
          600: '#00A389',
          700: '#007A67',
          800: '#005144',
          900: '#002922',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};