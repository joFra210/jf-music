module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
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
    colors: {
      mint: '#A7F3D0',
      dark: '#3F3F37',
      brown: '#A35F00',
      capri: '#30C5FF',
      mauve: '#F7B5F8',
      white: '#FFFFFF',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
