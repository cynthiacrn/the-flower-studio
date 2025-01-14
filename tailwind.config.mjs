/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre-baskerville': ['Libre Baskerville', 'sans-serif'],
        'libre-franklin': ['Libre Franklin', 'sans-serif'],
      },
      colors: {
        'lotion': '#FAFAFA',
        'temptress': '#322020',
        'blond': '#F7F2BC',
        'aero-blue': '#BDF6E1',
        'soap': '#D0BCF9',
        'cotton-candy': '#F8BCDC',
      },
    },
  },
  plugins: [],
};
