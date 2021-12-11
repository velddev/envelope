import React from "react";
import {createMeta, MetaType} from "../../utils/storybook";
import {ItemInput} from "../../components";

export default createMeta({
  type: MetaType.Component,
  name: "Item Input",
  description: "An input that inserts text as separate extendable tag components.",
  component: ItemInput,
});

export const _ItemInput = () => <ItemInput />;
