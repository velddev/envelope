import React, { useState } from "react";
import { Item, ItemInput } from "..";

export default {
  name: "Item Input",
  description: "An input that inserts text as separate extendable tag components.",
  component: ItemInput,
};

export const _ItemInput = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = React.useState<Item[]>([]);

  return (
    <ItemInput
      items={items}
      onChangeItems={setItems}
      onItemCreate={(v) => ({ value: v })}
      textValue={query}
      onChangeText={setQuery}
    />
  );
};
