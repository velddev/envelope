import React from "react";
import {ItemInput} from "./index";
import {createMeta, MetaType} from "../../utils/storybook";

export default createMeta({
  type: MetaType.Component,
  name: "Item Input",
  description: "An input that inserts text as separate extendable tag components.",
  component: ItemInput,
});

export const _ItemInput = () => <ItemInput />;
