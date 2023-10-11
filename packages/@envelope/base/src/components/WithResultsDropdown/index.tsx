import React, { ReactNode, useRef } from "react";
import { VstackProps, VStack } from "@envelope/styled/jsx";
import { useOnClickOutside } from "src/hooks/useOutsideClick";

type Props<T> = VstackProps & {
  isOpen?: boolean;
  items?: T[];
  renderCard: (item: T, index: number) => ReactNode;
  children?: ReactNode;
  innerRef?: React.Ref<HTMLDivElement>;
  /**
   * Whenever the focus of the results dropdown changes outside of the dropdown scope.
   */
  onFocusOutside?: () => void;
};

export function WithResultsDropdown<T>({
  isOpen,
  innerRef,
  items,
  onFocusOutside,
  renderCard,
  children,
  ...props
}: Props<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(containerRef, onFocusOutside);

  return (
    <VStack alignItems="start" w="full" gap="0" position="relative" ref={containerRef}>
      {children}
      <VStack
        mt="4"
        w="full"
        alignItems="start"
        justify="start"
        bg="bg.100"
        position="absolute"
        borderRadius="md"
        border="1px solid"
        borderColor="ui.10"
        shadow="md"
        gap="0"
        maxH="240px"
        overflowY="auto"
        pointerEvents={isOpen ? "auto" : "none"}
        opacity={isOpen ? 1 : 0}
        transition="0.2s all"
        {...props}
        ref={innerRef}
      >
        {items?.map(renderCard)}
      </VStack>
    </VStack>
  );
}
