import React from "react";
import { styled, HTMLStyledProps } from "@/_generated/styled/jsx";
import { Root, Thumb } from "@radix-ui/react-switch";

const SwitchRoot = styled(Root, {
  base: {
    bg: "ui.10",
    px: "1",
    flexShrink: 0,
    borderRadius: "full",
    "&[data-state='checked']": {
      bg: "pink.100",
    },
  },
  variants: {
    size: {
      sm: {
        width: 8,
        height: 5,
      },
      md: {
        width: 10,
        height: 6,
      },
      lg: {
        width: 12,
        height: 7,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const SwitchThumb = styled(Thumb, {
  base: {
    display: "block",
    borderRadius: "full",
    bg: "uiDark.100",
    transition: "transform 0.2s ease",
  },
  variants: {
    size: {
      sm: {
        width: 4,
        height: 4,
        "&[data-state='checked']": {
          transform: `translateX(8px)`,
        },
      },
      md: {
        width: 5,
        height: 5,
        "&[data-state='checked']": {
          transform: `translateX(12px)`,
        },
      },
      lg: {
        width: 6,
        height: 6,
        "&[data-state='checked']": {
          transform: `translateX(16px)`,
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Props = {
  isChecked?: boolean;
  onChange: (checked: boolean) => void;
} & HTMLStyledProps<"button">;

export const Switch = ({ isChecked, value, onChange, ...props }: Props) => {
  const checkValue = isChecked || Boolean(value);

  return (
    <SwitchRoot checked={checkValue} onClick={() => onChange(!checkValue)} {...props}>
      <SwitchThumb />
    </SwitchRoot>
  );
};
