import React, { ForwardedRef, forwardRef } from "react";
import { StackProps, VStack } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const DiscordMessageFrame = forwardRef(
  (props: StackProps, ref: ForwardedRef<HTMLDivElement>) => {
    const backgroundColor = useColorModeValue("white", "#36393f");

    return (
      <VStack
        ref={ref}
        {...props}
        align="start"
        border="1px solid"
        borderColor="ui.10"
        rounded="lg"
        bg={backgroundColor}
        p="4"
        spacing="4"
        shadow="lg"
      />
    );
  },
);

DiscordMessageFrame.displayName = "DiscordMessageFrame";
