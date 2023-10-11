import { styled, HTMLStyledProps } from "@envelope/styled/jsx";
import React, { forwardRef } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { Svg } from "../Svg";

const ViewportPrimitive = styled(RadixSelect.Viewport, {
  base: {
    w: "full",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "ui.20",
    rounded: "md",
    maxH: "var(--radix-select-content-available-height)",
    bg: "bg.100",
    "&[data-side=top]": {
      animation: "slideDown .2s ease-out",
    },
  },
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
    px: "2",
    py: "1",
    gap: "2",
    flexShrink: 0,
  },
});

type SelectProps<T extends string> = Omit<
  HTMLStyledProps<"button"> & RadixSelect.SelectTriggerProps,
  "value"
> & {
  value: T;
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
        <RadixSelect.Content style={{ minWidth: "100%" }} position="popper" sideOffset={6}>
          <RadixSelect.ScrollUpButton>
            <AngleUpIcon />
          </RadixSelect.ScrollUpButton>
          <ViewportPrimitive>{children}</ViewportPrimitive>
          <RadixSelect.ScrollDownButton>
            <AngleDownIcon />
          </RadixSelect.ScrollDownButton>
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
