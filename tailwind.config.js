/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        whitegray: "#F5F7F8",
        grayblack: "#545454",
        lightgray: "#D8D9DA",
        primaryblack: "#131616",
        primarywhite: "#FCFDFD",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        neue: ["Neue Haas Grotesk Display Pro", "sans-serif"],
        gothic: ["Gothic A1", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      backgroundImage: {
        newsbg: "url('/newsletter/news.png')",
        herobg: "url('/hero/douglas.png')",
      },
    },
  },
  plugins: [],
};
