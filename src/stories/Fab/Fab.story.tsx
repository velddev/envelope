import React from "react";
import {createMeta, MetaType} from "../../utils/storybook";
import {HamburgerIcon} from "../../icons";
import {Fab} from "../../components";

export default createMeta({
  type: MetaType.Component,
  name: "Fab",
  description: "A pinned IconButton that sits at the bottom right of the window.",
  component: Fab,
  hideGuidelines: true,
});

export const _Fab = () => <Fab aria-label="Test" icon={<HamburgerIcon color="white" boxSize="24px" />} />;
