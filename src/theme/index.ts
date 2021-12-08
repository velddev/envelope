import { ColorMode, extendTheme } from '@chakra-ui/react'

import { Dict } from '@chakra-ui/utils'
import breakpoints from './breakpoints'
import components from './components'
import { colors } from './colors'

export const getTheme = (colorMode: ColorMode): Dict =>
  extendTheme({
    breakpoints,
    colors: colors(colorMode),
    components,
    config: {
      cssVarPrefix: 'miki',
    },
    styles: {
      global: {
        body: {
          bg: colorMode === 'light' ? 'white' : '#141520',
        },
        '&::-webkit-calendar-picker-indicator': {
          filter: colorMode == 'light' ? undefined : 'invert(1)',
        },
      },
    },
    fonts: {
      heading: 'Poppins',
    },
    textStyles: {
      paragraph: {
        sm: {
          fontSize: '14px',
        },
        md: {
          fontSize: '16px',
        },
        lg: {
          fontSize: '18px',
        },
      },
      label: {
        sm: {
          fontSize: '16px',
          fontWeight: 'semibold',
        },
        md: {
          fontSize: '20px',
          fontWeight: 'semibold',
        },
        lg: {
          fontSize: '24px',
          fontWeight: 'semibold',
        },
      },
      heading: {
        sm: {
          fontFamily: 'heading',
          fontSize: '24px',
          fontWeight: 'semibold',
        },
        md: {
          fontFamily: 'heading',
          fontSize: '36px',
          fontWeight: 'semibold',
        },
        lg: {
          fontFamily: 'heading',
          fontSize: '48px',
          fontWeight: 'semibold',
        },
      },
    },
  })
