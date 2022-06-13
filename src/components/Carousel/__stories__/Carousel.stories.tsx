import React from "react";
import { Img } from "@chakra-ui/image";
import { Carousel, CarouselProps } from "..";

export default {
  name: "Carousel",
  description: "placeholder-description",
  component: Carousel,
  argTypes: {
    columns: { control: "number" },
  },
  args: {
    columns: 1,
  } as CarouselProps,
};

const Template = (args: CarouselProps) => (
  <Carousel {...args}>
    {[...Array(10)].map((_, i) => (
      <Img
        key={i}
        _loading={{
          bg: "ui.5",
        }}
        src={"https://picsum.photos/600/300?random=" + i}
      />
    ))}
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {
  columns: 2,
};
