import { Wrap } from "@chakra-ui/layout";
import { useStyleConfig } from "@chakra-ui/system";
import { Input, InputProps } from "@chakra-ui/input";
import { Tag } from "@chakra-ui/tag";
import uniqueId from "lodash/uniqueId";
import React, { useEffect, useRef, useState } from "react";

export type Item<T = unknown> = T & BaseItem;

export type BaseItem = {
  key: string;
  value: string;
};

export type ItemInputProps<T> = InputProps & {
  onItemCreate: (value: string) => Omit<Item<T>, "key">;

  renderItem?: (item: Item<T>) => React.ReactNode;
  onChangeItems?: (items: Item<T>[]) => void;
  items?: Item<T>[];
  onChangeText: (value: string) => void;
  textValue: string;
};

function defaultTag<T>(item: Item<T>) {
  return <Tag key={item.key}>{item.value}</Tag>;
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
  const styles = useStyleConfig("Input", undefined, {
    isMultiPart: true,
  });

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
      __css={styles.field}
      height="unset"
      transition="0.2s all"
      w="full"
      borderRadius="md"
      py="2"
      px="4"
    >
      {items?.map(renderItem)}
      <Input
        flex={1}
        variant="unstyled"
        onKeyDown={handleInput}
        {...props}
        ref={inputRef}
        value={textValue}
        onChange={(e) => onChangeText?.(e.target.value)}
      />
    </Wrap>
  );
}
