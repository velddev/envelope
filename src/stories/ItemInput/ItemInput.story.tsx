import React from "react";
import { createMeta, MetaType } from "../../utils/storybook";
import { ItemInput } from "../../components";
import { Item } from "../../components/ItemInput";

export default createMeta({
  type: MetaType.Component,
  name: "Item Input",
  description: "An input that inserts text as separate extendable tag components.",
  component: ItemInput,
});

export const _ItemInput = () => {
  const [items, setItems] = React.useState<Item[]>([]);

  return <ItemInput items={items} onChangeItems={setItems} onItemCreate={(v) => ({ value: v })} />;
};
