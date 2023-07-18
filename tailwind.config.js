/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      HeroBackground: "linear-gradient(180deg, #001212 7.95%, #1A4D54 53.43%, #001212 85.60%);",
      EventBackground: "linear-gradient(180deg, #001212 7.95%, #1A4D54 47.43%, #001212 100%);",
      buttonBackground: "linear-gradient(90deg, #B0693B 0%, #C0896A 48.23%, #AF693B 100%)",
      MobileHeader: "linear-gradient(180deg, #445DB6 0%, #7860C5 100%);",
      textBG: "linear-gradient(180deg, #001212 7.95%, #1A4D54 47.43%, #001212 100%);",
      RegisterationBG: "linear-gradient(180deg, #001212 7.95%, #1A4D54 47.43%, #001212 100%);",
      },
        screens: {
        "3xl": "1440px",
        "4xl": "1990px",
      },
      colors: {
        'carouselBackground':'#D7E1E3',
        'carouselTextLight':'#1A4D54',
        'carouselTextDark':'#001212',
        'carouselHead':'#445DB6',
        'navBg' : '#09231F'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
