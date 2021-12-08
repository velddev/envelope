import React from "react";
import {Meta} from "@storybook/react";
import {Center, Text} from "@chakra-ui/react";
import {createMeta, MetaType} from "../../utils/storybook";
import {Carousel, CarouselProps} from "../../components/Carousel";

export default createMeta({
  name: "Carousel",
  description: "placeholder-description",
  type: MetaType.Component,
  component: Carousel,
  argTypes: {
    columns: { control: 'number' }
  },
  args: {
    columns: 1
  } as CarouselProps,
});

const CarouselChild = ({ index }) => <Center h="120px" w="full" borderWidth="2px" borderStyle="dashed" rounded="lg">
  <Text>Carousel Child {index+1}</Text>
</Center>

export const _Carousel = ({ columns }: CarouselProps) => (
  <Carousel columns={columns}>
    {[...Array(10)].map((_, i) => <CarouselChild key={i} index={i}/>)}
  </Carousel>
);
