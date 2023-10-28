import { inter } from '@/fonts/global'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  colors: {
    gray: {
      '800': '#1F2029',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
})
