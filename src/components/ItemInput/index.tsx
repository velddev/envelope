import { Input, Wrap, Tag, InputProps, useStyleConfig  } from "@chakra-ui/react";
import uniqueId from "lodash/uniqueId";
import React from "react";

interface BaseItem {
  key: string;
  value: string;
  data?: Record<string, string>;
}

export type ItemInputProps = InputProps & {
  onItemCreate?: (value: string) => BaseItem;
  onChange?: (items: BaseItem[]) => void;
};

export function ItemInput({ onItemCreate, ...props }: ItemInputProps) {
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

      e.currentTarget.value = "";
      return;
    }
  };

  return (
    <Wrap __css={styles.field} height="unset" transition="0.2s all" w="full" borderRadius="md" py="2" px="4">
      {items.map((item) => (
        <Tag key={item.key}>{item.value}</Tag>
      ))}
      <Input flex={1}  ref={inputRef} {...props} variant="unstyled" onKeyPress={handleInput} />
    </Wrap>
  )
};