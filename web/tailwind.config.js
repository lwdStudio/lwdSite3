module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans':['noto-sans-sc','Helvetica', 'Arial', 'sans-serif'],
      'serif':['noto-serif-sc','ui-serif', 'Georgia','serif'],
      'mono':['ui-monospace'],
    },
    extend: {
      zIndex: {
        '-10': '-10',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
