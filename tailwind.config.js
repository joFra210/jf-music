module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production' || false,
    content: [
      './templates/**/*.twig',
      './templates/*.twig',
      './assets/**/*.js',
    ],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
