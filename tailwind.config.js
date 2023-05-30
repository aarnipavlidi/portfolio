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
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    },
    {
      pattern: /text-(left|center|right|justify|start|end)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        ['pier-sans']: ['var(--font-primary)', ...fontFamily.sans],
        ['caveat']: ['var(--font-secondary)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
