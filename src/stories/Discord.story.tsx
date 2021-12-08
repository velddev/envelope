import React from "react";
import {DiscordBadge} from "../components/DiscordBadge";
import {createMeta, MetaType} from "../utils/storybook";
import {DiscordMessage, DiscordMessageFrame} from "../components";

export default createMeta({
  type: MetaType.Component,
  name: "Discord",
  description: "Discord related components.",
  component: DiscordBadge
});

export const _Badge = () => <DiscordBadge children="SAMPLE" />;
export const _Message = () => <DiscordMessage content="Sample Message" author="Gamer" avatarUrl="" />;
export const _MessageFrame = () => <DiscordMessageFrame children={<_Message/>} />;