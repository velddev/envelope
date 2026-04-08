import React, { forwardRef } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";
import { Svg } from "../Svg";

type SelectProps<T extends string> = Omit<
  React.ComponentPropsWithRef<"button">,
  "value"
> & {
  value: T;
  placeholder?: string;
  onValueChange: (value: T) => void;
  children?: React.ReactNode;
} & Record<string, any>;

export function Select<T extends string>({
  placeholder,
  children,
  value,
  onValueChange,
  className,
  ...rest
}: SelectProps<T>) {
  return (
    <RadixSelect.Root value={value as string} onValueChange={(v) => onValueChange(v as T)}>
      <RadixSelect.Trigger
        className={cn(
          "bg-bg-100 flex items-center justify-between border border-solid border-ui-20 rounded-md text-ui-100 appearance-none select-none px-3 py-1 gap-2 shrink-0",
          className
        )}
        {...filterDomProps(rest)}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <AngleDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          className={cn(
            "relative border border-solid border-ui-20 rounded-md bg-bg-100 z-[1000] w-[var(--radix-select-trigger-width)] max-h-[400px]",
            "data-[side=top]:animate-slide-down"
          )}
          position="popper"
          side="bottom"
          avoidCollisions={false}
          sideOffset={6}
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
          <RadixSelect.ScrollUpButton className="absolute top-0 left-0 right-0 bg-bg-100 flex items-center justify-center h-[25px] text-ui-100 cursor-default animate-fade-in">
            <AngleUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.ScrollDownButton className="absolute bottom-0 left-0 right-0 bg-bg-100 flex items-center justify-center h-[25px] text-ui-100 cursor-default animate-fade-in">
            <AngleDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

type OptionProps = React.ComponentPropsWithRef<"div"> &
  RadixSelect.SelectItemProps & Record<string, any>;

export const Option = forwardRef<HTMLDivElement, OptionProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <RadixSelect.Item
        ref={ref}
        className={cn(
          "text-ui-100 shrink-0 px-2 py-1 hover:bg-ui-5 cursor-pointer outline-none",
          className
        )}
        {...filterDomProps(rest) as any}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  }
);
Option.displayName = "Option";

export const OptionGroup = RadixSelect.Group;
export const OptionDivider = RadixSelect.Separator;
export const OptionLabel = RadixSelect.Label;

export const AngleDownIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
    />
  </Svg>
);

export const AngleUpIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
    />
  </Svg>
);
