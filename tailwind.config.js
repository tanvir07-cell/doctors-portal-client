/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/bg.png')",
      },
    },
  },

  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
