import { Box, Text } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

export const DiscordBadge = ({ children }: PropsWithChildren<unknown>) => (
  <Box display="inline-block" bg="accent.100" rounded="4px" color="white" px="2">
    <Text fontSize="12px">{children}</Text>
  </Box>
)
