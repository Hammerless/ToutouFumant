module.exports = {
  purge: [

    './resources/**/*.blade.php',

    './resources/**/*.js',

    './resources/**/*.vue',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'rose': '#c381b5',
        'orange': '#ff914d'
      },
      textColor: {
        'rose': '#c381b5',
        'orange': '#ff914d'
      },
      borderColor: {
        'rose': '#c381b5',
        'orange': '#ff914d'
      },
      gradientColorStops: {
        'rose': '#c381b5',
        'orange': '#ff914d'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
