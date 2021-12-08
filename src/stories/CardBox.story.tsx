import React from 'react'
import { DiscordBadge } from '../components/DiscordBadge'
import { createMeta, MetaType } from '../utils/storybook'
import { CardBox } from '../components'

export default createMeta({
  type: MetaType.Component,
  name: 'Card Box',
  description: "A simple styled card that extends Chakra UI's Box.",
  component: DiscordBadge,
})

export const _CardBox = () => <CardBox children="Hello world!" />
