import { Box, BoxProps, Flex, FlexProps, HStack } from "@/_generated/styled/jsx";
import React, { PropsWithChildren, useMemo } from "react";
import { Button, ButtonProps } from "../Button/button";

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
  buttonProps,
  ...props
}: PropsWithChildren<StepperProps>) => {
  const handleIndexChange = (newIndex: number) => {
    onIndexChange?.(newIndex);
  };

  return (
    <Flex gap="8" {...props}>
      <Button
        aria-label="Previous"
        borderRadius="full"
        onClick={() => {
          if (index > 0) {
            handleIndexChange(index - 1);
            onPrevious?.();
          }
        }}
        pointerEvents="auto"
        transition="all 0.2s"
        {...(buttonProps ?? {})}
      >
        {"<"}
      </Button>
      {children}
      <Button
        aria-label="Next"
        borderRadius="full"
        onClick={() => {
          if (index < pageCount - 1) {
            handleIndexChange(index + 1);
            onNext?.();
          }
        }}
        pointerEvents="auto"
        transition="all 0.2s"
        {...(buttonProps ?? {})}
      >
        {">"}
      </Button>
    </Flex>
  );
};

type StepContext = {
  onClick: () => void;
  isActive: boolean;
};

export type StepperProps = StepperControlsProps & {
  step?: (index: number, ctx: StepContext) => React.ReactNode;
  hideControls?: boolean;
  stepperOverrides?: BoxProps;
};

export const Stepper = ({
  index,
  onPrevious,
  onNext,
  onIndexChange,
  step,
  pageCount,
  hideControls,
  stepperOverrides,
}: StepperProps) => {
  const pageArray = useMemo(() => Array.from("0".repeat(pageCount)), [pageCount]);

  const stepper = (
    <HStack gap="4">
      {pageArray.map((_, i) =>
        step ? (
          step(i, {
            onClick: () => onIndexChange?.(i),
            isActive: i === index,
          })
        ) : (
          <Box
            key={i}
            width="2"
            height="2"
            borderRadius="full"
            transition="all 0.2s"
            transform={`scale(${i === index ? 1.25 : 1.0})`}
            bg={index == i ? "ui.40" : "ui.10"}
            {...stepperOverrides}
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
