/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      HeroBackground: "linear-gradient(180deg, #060911 7.95%, #1F3B68 100.38%, #060911 100%)",
      buttonBackground: "linear-gradient(90deg, #445DB6 0%, #7860C5 100%);",
      },
    },
  },
  plugins: [],
}
