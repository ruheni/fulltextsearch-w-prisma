module.exports = {
  content: [
    './pages/**/*.{js, jsx,ts,tsx}',
    './components/**/*.{js, jsx,ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('@tailwindcss/typography')
  ]
}
