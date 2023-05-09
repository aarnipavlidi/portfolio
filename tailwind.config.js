const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /text-(neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['md'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        ['pier-sans']: ['var(--font-primary)', ...fontFamily.sans],
        ['caveat']: ['var(--font-secondary)'],
      },
    },
  },
  plugins: [],
};
