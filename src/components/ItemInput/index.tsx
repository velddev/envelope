import { Input, Wrap, Tag, InputProps, useStyleConfig  } from "@chakra-ui/react";
import uniqueId from "lodash/uniqueId";
import React, { useEffect, useState } from "react";

interface BaseItem {
  key: string;
  value: string;
  data?: Record<string, string>;
}

export type ItemInputProps = InputProps & {
  onItemCreate?: (value: string) => BaseItem;
  onChange?: (items: BaseItem[]) => void;
};

export function ItemInput({ onItemCreate, onChange, ...props }: ItemInputProps) {
  const [input, setInput] = useState("");
  const styles = useStyleConfig('Input', undefined, {
    isMultiPart: true,
  });

  const [items, setItems] = React.useState<BaseItem[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      setItems([
        ...items, 
        onItemCreate 
          ? onItemCreate(e.currentTarget.value) 
          : { key: uniqueId(), value: e.currentTarget.value }
      ]);

      setInput("");
      return;
    }

    if(e.key === "Backspace" && !input) {
      setItems(items.slice(0, items.length - 1));
    }
  };

  useEffect(() => {
    onChange?.(items);
  }, [items]);

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
      {items.map((item) => (
        <Tag key={item.key}>{item.value}</Tag>
      ))}
      <Input 
        {...props} 
        flex={1} 
        ref={inputRef} 
        value={input} 
        variant="unstyled" 
        onChange={(e) => setInput(e.target.value)} 
        onKeyUp={handleInput} 
      />
    </Wrap>
  )
};