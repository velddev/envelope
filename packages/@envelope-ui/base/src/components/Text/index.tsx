import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

type TextProps<T extends keyof JSX.IntrinsicElements> = React.ComponentPropsWithRef<T> & Record<string, any>;

function createTextComponent<T extends keyof JSX.IntrinsicElements>(
  tag: T,
  displayName: string
) {
  const Component = forwardRef<HTMLElement, TextProps<T>>(
    ({ className, ...props }, ref) => {
      return React.createElement(tag, {
        ref,
        className: cn("text-ui-100", className),
        ...filterDomProps(props),
      });
    }
  );
  Component.displayName = displayName;
  return Component;
}

export const Anchor = createTextComponent("a", "Anchor");
export const P = createTextComponent("p", "P");
export const B = createTextComponent("b", "B");
export const I = createTextComponent("i", "I");
export const U = createTextComponent("u", "U");
export const Span = createTextComponent("span", "Span");
export const H1 = createTextComponent("h1", "H1");
export const H2 = createTextComponent("h2", "H2");
export const H3 = createTextComponent("h3", "H3");
export const H4 = createTextComponent("h4", "H4");
export const H5 = createTextComponent("h5", "H5");
export const H6 = createTextComponent("h6", "H6");
export const Code = createTextComponent("code", "Code");
export const Pre = createTextComponent("pre", "Pre");
export const Blockquote = createTextComponent("blockquote", "Blockquote");
export const Legend = createTextComponent("legend", "Legend");
