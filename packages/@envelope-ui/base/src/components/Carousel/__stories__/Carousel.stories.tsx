import React from "react";
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
      <img key={i} src={"https://picsum.photos/600/300?random=" + i} />
    ))}
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {
  columns: 2,
};
