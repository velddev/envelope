import React, { ReactNode, useRef } from "react";
import { StackProps, VStack } from "@chakra-ui/layout";
import { SlideFade } from "@chakra-ui/transition";
import { useOutsideClick } from "@chakra-ui/hooks";

type Props<T> = StackProps & {
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

  useOutsideClick({
    ref: containerRef,
    handler: onFocusOutside,
  });

  return (
    <VStack align="start" w="full" spacing="0" position="relative" ref={containerRef}>
      {children}
      <SlideFade
        in={isOpen}
        unmountOnExit
        style={{
          width: "100%",
          zIndex: 100,
        }}
      >
        <VStack
          mt="4"
          w="full"
          align="start"
          justify="start"
          bg="bg"
          position="absolute"
          borderRadius="md"
          border="1px solid"
          borderColor="ui.10"
          shadow="md"
          spacing="0"
          maxH="240px"
          overflowY="auto"
          {...props}
          ref={innerRef}
        >
          {items?.map(renderCard)}
        </VStack>
      </SlideFade>
    </VStack>
  );
}
