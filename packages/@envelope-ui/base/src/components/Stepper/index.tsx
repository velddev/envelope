import React, { PropsWithChildren, useMemo } from "react";
import { Button } from "../Button";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

type StepperControlsProps = React.ComponentPropsWithRef<"div"> & {
  index: number;
  pageCount: number;
  onIndexChange?: (index: number) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  buttonClassName?: string;
};

export const StepperControls = ({
  index,
  onPrevious,
  onNext,
  onIndexChange,
  pageCount,
  children,
  className,
  buttonClassName,
  ...props
}: PropsWithChildren<StepperProps>) => {
  const handleIndexChange = (newIndex: number) => {
    onIndexChange?.(newIndex);
  };

  return (
    <div className={cn("flex gap-8", className)} {...filterDomProps(props)}>
      <Button
        aria-label="Previous"
        className={cn("rounded-full transition-all duration-200 pointer-events-auto", buttonClassName)}
        onClick={() => {
          if (index > 0) {
            handleIndexChange(index - 1);
            onPrevious?.();
          }
        }}
      >
        {"<"}
      </Button>
      {children}
      <Button
        aria-label="Next"
        className={cn("rounded-full transition-all duration-200 pointer-events-auto", buttonClassName)}
        onClick={() => {
          if (index < pageCount - 1) {
            handleIndexChange(index + 1);
            onNext?.();
          }
        }}
      >
        {">"}
      </Button>
    </div>
  );
};

type StepContext = {
  onClick: () => void;
  isActive: boolean;
};

export type StepperProps = StepperControlsProps & {
  step?: (index: number, ctx: StepContext) => React.ReactNode;
  hideControls?: boolean;
  stepDotClassName?: string;
};

export const Stepper = ({
  index,
  onPrevious,
  onNext,
  onIndexChange,
  step,
  pageCount,
  hideControls,
  stepDotClassName,
  ...rest
}: StepperProps) => {
  const pageArray = useMemo(() => Array.from("0".repeat(pageCount)), [pageCount]);

  const stepper = (
    <div className="flex items-center gap-4">
      {pageArray.map((_, i) =>
        step ? (
          step(i, {
            onClick: () => onIndexChange?.(i),
            isActive: i === index,
          })
        ) : (
          <div
            key={i}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              i === index ? "bg-ui-40 scale-125" : "bg-ui-10",
              stepDotClassName
            )}
          />
        ),
      )}
    </div>
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
