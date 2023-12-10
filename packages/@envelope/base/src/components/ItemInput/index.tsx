import { Box, Wrap, HTMLStyledProps } from "@envelope-ui/styled/jsx";
import uniqueId from "lodash/uniqueId";
import React, { useRef } from "react";
import { Input } from "../Input";

export type Item<T = unknown> = T & BaseItem;

export type BaseItem = {
  key: string;
  value: string;
};

export type ItemInputProps<T> = HTMLStyledProps<"input"> & {
  onItemCreate: (value: string) => Omit<Item<T>, "key">;

  renderItem?: (item: Item<T>, index: number) => React.ReactNode;
  onChangeItems?: (items: Item<T>[]) => void;
  items?: Item<T>[];
  onChangeText: (value: string) => void;
  textValue: string;
};

function defaultTag<T>(item: Item<T>) {
  return <Box key={item.key}>{item.value}</Box>;
}

export function ItemInput<T>({
  renderItem = defaultTag,
  onItemCreate,
  onChangeItems,
  onChangeText,
  items,
  textValue,
  ...props
}: ItemInputProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newItem = { key: uniqueId(), ...onItemCreate(textValue) } as Item<T>;
      onChangeItems?.([...(items ?? []), newItem]);
      onChangeText("");
      return;
    }

    if (e.key === "Backspace" && !textValue) {
      onChangeItems(items.slice(0, items.length - 1));
    }
  };

  return (
    <Wrap
      height="unset"
      transition="0.2s all"
      w="full"
      borderRadius="md"
      borderColor="ui.20"
      borderWidth="1px"
      p="2"
      gap="1"
      _focusWithin={{
        borderColor: "ui.100",
      }}
    >
      {items?.map(renderItem)}
      <Input
        variant="unstyled"
        flex={1}
        p="0"
        onKeyDown={handleInput}
        ref={inputRef}
        value={textValue}
        onChange={(e) => onChangeText?.(e.target.value)}
        {...props}
      />
    </Wrap>
  );
}
