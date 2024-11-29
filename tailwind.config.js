/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        honeydew: "#F1FFF3",
        lightGreen: "#dff7e2",
        caribbeanGreen: "#00d09e",
        cyprus: "#0E3E3E",
        fenceGreen: "#052224",
        void: "#031314",
        lightBlue: "#6DB6FE",
        vividBlue: "#3299FF",
        oceanBlue: "#0068FF",
      },
      // fontFamily: {
      //   Jakarta: ["Jakarta", "sans-serif"],
      //   JakartaBold: ["Jakarta-Bold", "sans-serif"],
      //   JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
      //   JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
      //   JakartaLight: ["Jakarta-Light", "sans-serif"],
      //   JakartaMedium: ["Jakarta-Medium", "sans-serif"],
      //   JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
