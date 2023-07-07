import React from "react";
import { RatingInput, RatingInputProps } from "..";
import { HamburgerIcon } from "../../../icons";

export default {
  title: "RatingInput",
  component: RatingInput,
};

const Template = (args: RatingInputProps) => {
  const [value, setValue] = React.useState(0);
  return <RatingInput onChange={setValue} value={value} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  numberOfItems: 5,
  isReadOnly: false,
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  ...Default.args,
  icon: HamburgerIcon,
};
