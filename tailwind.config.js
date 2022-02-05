module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "3xl":"2500px"
      },
    },
  },
  variants:{
    extend:{},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}