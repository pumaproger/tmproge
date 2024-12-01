/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular", "sans-serif"],
        poppinsB: ["Poppins-ExtraBold", "sans-serif"],
        poppins_medium: ["Poppins-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
