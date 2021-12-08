import React from "react";
import {ColorSwitch} from "./index";
import {createMeta, MetaType} from "../../utils/storybook";

export default createMeta({
  type: MetaType.Component,
  name: "Color Switch",
  description: "A simple switch for updating the color mode.",
  component: ColorSwitch
});

export const _ColorSwitch = () => <ColorSwitch />;
