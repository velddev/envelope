import React from "react";
import { createMeta, MetaType } from "../../utils/storybook";
import { VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useBoolean } from "@chakra-ui/hooks";
import { MotionBox } from "../../components";

export default createMeta({
  type: MetaType.Component,
  name: "Motion Box",
  description:
    "A Framer Motion Chakra UI franken-Box! All the animation of Framer with all the styling of Chakra UI.",
  component: MotionBox,
});

export const _MotionBox = () => {
  const [swap, setSwap] = useBoolean(false);
  return (
    <VStack spacing={2}>
      <MotionBox
        bg="accent.80"
        boxSize="32px"
        rounded="md"
        initial={{ x: 0 }}
        animate={{ x: swap ? 40 : -40 }}
      />
      <MotionBox
        bg="accent.80"
        boxSize="32px"
        rounded="md"
        initial={{ x: 0 }}
        animate={{ x: swap ? -40 : 40 }}
      />
      <MotionBox
        bg="accent.80"
        boxSize="32px"
        rounded="md"
        initial={{ x: 0 }}
        animate={{ x: swap ? 40 : -40 }}
      />
      <MotionBox
        bg="accent.80"
        boxSize="32px"
        rounded="md"
        initial={{ x: 0 }}
        animate={{ x: swap ? -40 : 40 }}
      />
      <Button onClick={setSwap.toggle}>Click me</Button>
    </VStack>
  );
};
