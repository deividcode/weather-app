export default {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
          padding: {
            DEFAULT: '1.4rem',
            md: '3.5rem',
            lg: '4rem',
            xl: '5.6rem',
            '2xl': '6rem',
          },
      },
      colors: {                
        'electric-violet': {
          10: '#9333ea1f',
          50: '#faf5ff',
          100: '#f4e8ff',
          200: '#ebd5ff',
          300: '#dbb4fe',
          400: '#c384fc',
          500: '#aa55f7',
          600: '#9333ea',
          700: '#7c22ce',
          800: '#6821a8',
          900: '#541c87',
          950: '#380764',
        },          
      },
      fontFamily: {
        'rubik': ['Rubik' ,'sans-serif']
      }
    },
  }, 
}

