module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {


        "charcoal": "#264653ff",
        "persiangreen": "#2a9d8fff",
        "orangeyellowcrayola": "#e9c46aff",
        "sandybrown": "#f4a261ff",
        "burntsienna": "#e76f51ff",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
