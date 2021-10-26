module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans':['noto-sans-sc','Helvetica', 'Arial', 'sans-serif'],
      'serif':['noto-serif-sc','ui-serif', 'Georgia','serif'],
      'mono':['ui-monospace'],
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '6rem',
        lg: '8rem',
        xl: '12rem',
      },
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
