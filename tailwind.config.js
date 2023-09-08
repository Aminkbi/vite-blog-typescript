/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ['retro'],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
