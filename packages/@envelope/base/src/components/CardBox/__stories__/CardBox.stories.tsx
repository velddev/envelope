import { Button, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CardBox } from "..";

export default {
  name: "envelope/CardBox",
  description: "A simple styled card that extends Chakra UI's Box.",
  component: CardBox,
};

export const Minimal = () => <CardBox maxW="300px">Hello world!</CardBox>;

export const Default = () => (
  <CardBox maxW="300px">
    <VStack w="full" alignItems="start" spacing="4">
      <Img w="full" src="https://picsum.photos/300/150?random=4" borderRadius="md" />
      <Text textStyle="label.md">A Card Box</Text>
      <Text>This is a default card design for your designs</Text>
      <Button w="full">View more</Button>
    </VStack>
  </CardBox>
);
