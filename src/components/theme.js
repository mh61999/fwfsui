import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  styles:{
    colors: {
      brand: {
        100: "#910A67",
        900: "#720455",
      },
    },
    global: () =>({
      body:{
        bg: '#222831'
      }
    })
  },
  fonts: {
    heading: `'Heading Font Name',monospace`,
    body: `'Body Font Name', sans-serif`,
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
})

export default theme