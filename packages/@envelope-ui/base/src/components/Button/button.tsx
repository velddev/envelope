import { cva, RecipeVariantProps } from "@envelope-ui/styled/css";
import { styled, Flex, Box } from "@envelope-ui/styled/jsx";
import { HTMLStyledProps } from "@envelope-ui/styled/types";
import React from "react";
import { Button as AriaButton, ButtonProps as AriaButtonProps } from "react-aria-components";
import { Spinner } from "../Spinner";

export const buttonRecipe = cva({
  base: {
    whiteSpace: "nowrap",
    borderRadius: "md",
    transition: "all 0.2s ease-in-out",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    userSelect: "none",
    gap: "2",
    _disabled: {
      cursor: "not-allowed",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    isLoading: false,
  },
  variants: {
    variant: {
      solid: {
        bg: "ui.5",
        color: "ui.100",
        _hover: {
          bg: "ui.10",
        },
      },
      primary: {
        bg: "pink.100",
        color: "uiLight.100",
        _hover: {
          bg: "pink.60",
        },
      },
      secondary: {
        bg: "yellow.100",
        color: "uiLight.100",
        _hover: {
          bg: "yellow.60",
        },
      },
      tertiary: {
        bg: "uiLight.100",
        color: "uiDark.100",
        _hover: {
          bg: "uiLight.60",
        },
      },
      ghost: {
        bg: "transparent",
        color: "ui.100",
        _hover: {
          bg: "ui.5",
        },
      },
      outline: {
        bg: "transparent",
        color: "ui.100",
        borderWidth: "1px",
        borderColor: "ui.20!",
        borderRadius: "md",
        _hover: {
          bg: "ui.5",
        },
      },
    },
    size: {
      sm: {
        h: "8",
        textStyle: "label.sm",
        px: "2",
        py: "1",
      },
      md: {
        h: "10",
        textStyle: "label.md",
        px: "4",
        py: "1",
      },
      lg: {
        h: "12",
        textStyle: "label.lg",
        px: "6",
        py: "2",
      },
      xl: {
        h: "14",
        textStyle: "label.lg",
        px: "8",
        py: "3",
      },
    },
    isLoading: {
      true: {
        opacity: "0.5",
        cursor: "wait",
      },
      false: {
        opacity: "1",
        cursor: "pointer",
      },
    },
  },
});

export const ButtonPrimitive = styled(AriaButton, buttonRecipe);

export type ButtonProps = HTMLStyledProps<"button"> &
  AriaButtonProps &
  RecipeVariantProps<typeof buttonRecipe>;

export const Button = ({ isLoading, children, size, ...rest }: ButtonProps) => {
  return (
    <ButtonPrimitive position="relative" size={size} {...rest}>
      <Flex gap={rest.gap} opacity={isLoading ? "0" : "1"} alignItems="center">
        {children}
      </Flex>
      {isLoading && (
        <Box
          position="absolute"
          inset="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size={size} />
        </Box>
      )}
    </ButtonPrimitive>
  );
};
