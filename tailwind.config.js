module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",    
    "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#1A6BE3',
        'blue-dark':'#073A85',
        'gray': {
          'light' : '#B1B1B1',
          'dark' : '#4C4141',
          40: '#F8F8F8',
        },
        'custom-black': '#252525', 
        'carousel': {
          0: '#F7E64E',
          1: '#4EF75F',
          2: '#F74E4E',
        },
        'black-opacity':'#000000CC'
      },
      lineHeight: {
        'tight':'1.175',
        'very-tight':'.75rem'
      },
      maxWidth: {
        'screen':'100vw'
      },
      fontSize: {
        '2.5xl':'1.7rem'
      },
      width: {
        'unset':'unset'
      }
    },
  },
  plugins: [],
}
