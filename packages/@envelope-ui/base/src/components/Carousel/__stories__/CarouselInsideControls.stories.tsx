import React from "react";
import { Img } from "@chakra-ui/image";
import { CarouselInsideControls, CarouselProps } from "..";

export default {
  name: "With Inside Controls",
  description: "placeholder-description",
  component: CarouselInsideControls,
  argTypes: {
    columns: { control: "number" },
  },
  args: {
    columns: 1,
  } as CarouselProps,
};

const Template = (args: CarouselProps) => (
  <CarouselInsideControls {...args}>
    {[...Array(10)].map((_, i) => (
      <Img
        key={i}
        _loading={{
          bg: "ui.5",
        }}
        src={"https://picsum.photos/600/300?random=" + i}
      />
    ))}
  </CarouselInsideControls>
);

export const Default = Template.bind({});
Default.args = {
  columns: 2,
};
