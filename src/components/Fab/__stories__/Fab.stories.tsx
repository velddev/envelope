import React from "react";
import { HamburgerIcon } from "../../../icons";
import { Fab } from "../..";

export default {
  name: "Envelope/Fab",
  description:
    'Stands for "Floating Action Button", A pinned IconButton that sits at the bottom right of the window.',
  component: Fab,
  hideGuidelines: true,
};

const Template = (args) => <Fab {...args} />;

export const Default = Template.bind({});
Default.args = {
  "aria-label": "Open menu",
  icon: <HamburgerIcon color="white" boxSize="24px" />,
};
