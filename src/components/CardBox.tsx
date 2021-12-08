import { Box, BoxProps, forwardRef } from '@chakra-ui/react'
import React from 'react'

export const CardBox = forwardRef((props: BoxProps, ref) => (
  <Box ref={ref} {...props} border="1px solid" borderColor="ui.20" rounded="lg" p="4" />
))
