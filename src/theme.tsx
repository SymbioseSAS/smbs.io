import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const theme = extendTheme({
    config: {
        colors: {
            black: '#16161D',
            
        },
        fonts,
        breakpoints,
        useSystemColorMode: true,
        initialColorMode: "dark"
    },
    colors: {
        //'#fb4c5f',
        smbs: {
            50: '#ffe3e8',
            100: '#ffb2bb',
            200: '#fd8190',
            300: '#fb5063',
            400: '#f92237',
            500: '#df0a1e',
            600: '#af0416',
            700: '#7e010f',
            800: '#4d0008',
            900: '#1f0000',
        }
    }
});

export default theme
