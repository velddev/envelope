import { Box, Flex, FlexProps, HStack } from "@chakra-ui/layout";
import { ButtonProps, IconButton } from "@chakra-ui/button";
import React, { PropsWithChildren, useMemo } from "react";
import { CaretLeftIcon, CaretRightIcon } from "../../icons";

type Props = StepperControlsProps & {
  step?: (index: number) => React.ReactNode;
  hideControls?: boolean;
};

type StepperControlsProps = FlexProps & {
  index: number;
  pageCount: number;
  onIndexChange?: (index: number) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  buttonProps?: ButtonProps;
};

export const StepperControls = ({
  index,
  onPrevious,
  onNext,
  onIndexChange,
  pageCount,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const handleIndexChange = (newIndex: number) => {
    onIndexChange?.(newIndex);
  };

  return (
    <Flex gap="8" pointerEvents="none" {...props}>
      <IconButton
        aria-label="Previous"
        icon={<CaretLeftIcon color="ui.100" boxSize="4" />}
        borderRadius="full"
        onClick={() => {
          if (index > 0) {
            handleIndexChange(index - 1);
            onPrevious?.();
          }
        }}
        isDisabled={index === 0}
        pointerEvents="auto"
        transition="all 0.2s"
        {...(props.buttonProps ?? {})}
      />
      {children}
      <IconButton
        aria-label="Next"
        icon={<CaretRightIcon color="ui.100" boxSize="4" />}
        borderRadius="full"
        onClick={() => {
          if (index < pageCount - 1) {
            handleIndexChange(index + 1);
            onNext?.();
          }
        }}
        isDisabled={index >= pageCount - 1}
        pointerEvents="auto"
        transition="all 0.2s"
        {...(props.buttonProps ?? {})}
      />
    </Flex>
  );
};

export const Stepper = ({
  index,
  onPrevious,
  onNext,
  onIndexChange,
  step,
  pageCount,
  hideControls,
}: Props) => {
  const pageArray = useMemo(() => Array.from("0".repeat(pageCount)), [pageCount]);

  const stepper = (
    <HStack spacing="4">
      {pageArray.map((_, i) =>
        step ? (
          step(i)
        ) : (
          <Box
            key={i}
            boxSize="2"
            rounded="full"
            transition="all 0.2s"
            transform={`scale(${i === index ? 1.25 : 1.0})`}
            bg={index == i ? "ui.40" : "ui.10"}
          />
        ),
      )}
    </HStack>
  );

  if (hideControls) {
    return stepper;
  }

  return (
    <StepperControls
      index={index}
      pageCount={pageCount}
      onIndexChange={onIndexChange}
      onPrevious={onPrevious}
      onNext={onNext}
    >
      {stepper}
    </StepperControls>
  );
};
