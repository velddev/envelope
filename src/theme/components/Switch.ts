import { switchAnatomy as parts } from '@chakra-ui/anatomy'
import type { PartsStyleFunction, SystemStyleFunction } from '@chakra-ui/theme-tools'

const baseStyleTrack: SystemStyleFunction = (props) => {
  return {
    bg: 'ui.10',
    _checked: {
      bg: 'accent.100',
    },
  }
}

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  track: baseStyleTrack(props),
})

export default {
  parts: parts.keys,
  baseStyle,
}
