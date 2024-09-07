import { styled, HTMLStyledProps } from "@/_generated/styled/jsx";
import { cva } from "@/_generated/styled/css";
import React, { forwardRef } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { Svg } from "../Svg";

const content = cva({
  base: {
    position: "relative",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "ui.20",
    rounded: "md",
    maxH: "var(--radix-select-content-available-height)",
    w: "var(--radix-select-trigger-width)",
    bg: "bg.100",
    "&[data-side=top]": {
      animation: "slideDown .2s ease-out",
    },
    zIndex: "1000",
  },
});

const ViewportPrimitive = styled(RadixSelect.Viewport, {
  base: {},
});

const TriggerPrimitive = styled(RadixSelect.Trigger, {
  base: {
    bg: "bg.100",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: "1px",
    borderColor: "ui.20",
    borderStyle: "solid",
    borderRadius: "md",
    color: "ui.100",
    WebkitAppearance: "none",
    userSelect: "none",
    px: "3",
    py: "1",
    gap: "2",
    flexShrink: 0,
  },
});

const ScrollUpButtonPrimitive = styled(RadixSelect.ScrollUpButton, {
  base: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bg: "bg.100",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25px",
    color: "ui.100",
    cursor: "default",
    animation: "fadeIn .2s ease-out",
  },
});

const ScrollDownButtonPrimitive = styled(RadixSelect.ScrollDownButton, {
  base: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    bg: "bg.100",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25px",
    color: "ui.100",
    cursor: "default",
    animation: "fadeIn .2s ease-out",
  },
});

type SelectProps<T extends string> = Omit<
  HTMLStyledProps<"button"> & RadixSelect.SelectTriggerProps,
  "value"
> & {
  value: T;
  placeholder?: string;
  onValueChange: (value: T) => void;
};

export function Select<T extends string>({
  placeholder,
  children,
  value,
  onValueChange,
  ...rest
}: SelectProps<T>) {
  return (
    <RadixSelect.Root value={value as string} onValueChange={(v) => onValueChange(v as T)}>
      <TriggerPrimitive {...rest}>
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <AngleDownIcon />
        </RadixSelect.Icon>
      </TriggerPrimitive>
      <RadixSelect.Portal>
        <RadixSelect.Content
          className={content({
            w: "var(--radix-select-trigger-width)",
            maxH: "400px",
            ...rest,
          })}
          position="popper"
          side="bottom"
          avoidCollisions={false}
          sideOffset={6}
        >
          <ViewportPrimitive>{children}</ViewportPrimitive>
          <ScrollUpButtonPrimitive>
            <AngleUpIcon />
          </ScrollUpButtonPrimitive>
          <ScrollDownButtonPrimitive>
            <AngleDownIcon />
          </ScrollDownButtonPrimitive>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

const OptionPrimitive = styled(RadixSelect.Item, {
  base: {
    color: "ui.100",
    flexShrink: 0,
    px: "2",
    py: "1",
    _hover: {
      bg: "ui.5",
    },
  },
});

type OptionProps = HTMLStyledProps<"div"> & RadixSelect.SelectItemProps;

export const Option = ({ children, ...rest }: OptionProps) => {
  return (
    <OptionPrimitive {...rest}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </OptionPrimitive>
  );
};

export const OptionGroup = styled(RadixSelect.Group);
export const OptionDivider = styled(RadixSelect.Separator);
export const OptionLabel = styled(RadixSelect.Label);

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
