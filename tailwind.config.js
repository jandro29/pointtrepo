module.exports = {
  perfix:'',
  mode:'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]

    },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    '3xl': '1700px',},
    extend: {},
  },
  variants: {
    extend: {},
  },
  import: true,
  plugins: [],
}
