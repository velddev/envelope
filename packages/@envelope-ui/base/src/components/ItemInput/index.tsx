import uniqueId from "lodash/uniqueId";
import React, { ChangeEvent, useRef } from "react";
import { Input, InputProps } from "../Input";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

export type Item<T = unknown> = T & BaseItem;

export type BaseItem = {
  key: string;
  value: string;
};

export type ItemInputProps<T> = Omit<InputProps, "onChange"> & {
  onItemCreate: (value: string) => Omit<Item<T>, "key">;
  renderItem?: (item: Item<T>, index: number) => React.ReactNode;
  onChangeItems?: (items: Item<T>[]) => void;
  items?: Item<T>[];
  onChangeText: (value: string) => void;
  textValue: string;
};

function defaultTag<T>(item: Item<T>) {
  return <div key={item.key}>{item.value}</div>;
}

export function ItemInput<T>({
  renderItem = defaultTag,
  onItemCreate,
  onChangeItems,
  onChangeText,
  items,
  textValue,
  className,
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

    if (e.key === "Backspace" && !textValue && items != null) {
      onChangeItems?.(items.slice(0, items.length - 1));
    }
  };

  return (
    <div
      className={cn(
        "flex flex-wrap h-auto transition-all duration-200 w-full rounded-md border border-ui-20 p-2 gap-1 focus-within:border-ui-100",
        className
      )}
    >
      {items?.map(renderItem)}
      <Input
        className="flex-1 p-0"
        onKeyDown={handleInput}
        ref={inputRef}
        value={textValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeText?.(e.target.value)}
        {...filterDomProps(props)}
        variant="unstyled"
      />
    </div>
  );
}
