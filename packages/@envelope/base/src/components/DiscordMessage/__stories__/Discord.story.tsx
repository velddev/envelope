import React from "react";
import { DiscordBadge } from "../DiscordBadge";
import { DiscordMessage, DiscordMessageFrame } from "../..";

export default {
  name: "Discord",
  description: "Discord related components.",
  component: DiscordBadge,
};

export const _Badge = () => <DiscordBadge>SAMPLE</DiscordBadge>;

export const _Message = () => (
  <DiscordMessage content="Sample Message" author="Gamer" avatarUrl="" />
);
export const _MessageFrame = () => (
  <DiscordMessageFrame>
    <_Message />
  </DiscordMessageFrame>
);
