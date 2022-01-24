export const twindConfig = {
  theme: {
    fontFamily: {
      sans: 'Raleway, sans-serif'
    }
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap')`,
    '@font-face': [
      {
        fontFamily: 'Raleway',
        fontWeight: '100',
        src: 'url(/fonts/Raleway-Thin.tff) format("tff")'
      },
      {
        fontFamily: 'Raleway',
        fontWeight: '400',
        src: 'url(/fonts/Raleway-Regular.tff) format("tff")'
      }
    ]
  }
}
