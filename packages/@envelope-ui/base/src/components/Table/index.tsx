import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

function createTableComponent<T extends keyof JSX.IntrinsicElements>(
  tag: T,
  displayName: string
) {
  const Component = forwardRef<HTMLElement, React.ComponentPropsWithRef<T> & Record<string, any>>(
    ({ className, ...props }, ref) => {
      return React.createElement(tag, {
        ref,
        className: cn(className),
        ...filterDomProps(props),
      });
    }
  );
  Component.displayName = displayName;
  return Component;
}

export const Table = createTableComponent("table", "Table");
export const Thead = createTableComponent("thead", "Thead");
export const Tbody = createTableComponent("tbody", "Tbody");
export const Tr = createTableComponent("tr", "Tr");
export const Td = createTableComponent("td", "Td");
export const Th = createTableComponent("th", "Th");
export const Tfoot = createTableComponent("tfoot", "Tfoot");
