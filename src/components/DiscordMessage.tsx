import React from 'react'
import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'
import { DiscordBadge } from './DiscordBadge'

type Props = {
  author: string
  avatarUrl: string
  content: string
  isBot?: boolean
}

export const DiscordMessage = ({ avatarUrl, author, content, isBot }: Props) => {
  return (
    <HStack spacing="4" align="start">
      <Avatar w="40px" h="40px" src={avatarUrl} />
      <VStack align="start" spacing="0">
        <HStack>
          <Text fontWeight="500">{author}</Text>
          {isBot && <DiscordBadge>BOT</DiscordBadge>}
        </HStack>
        <Text>{content}</Text>
      </VStack>
    </HStack>
  )
}
