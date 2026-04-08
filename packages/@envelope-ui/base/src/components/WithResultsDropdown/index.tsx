import React, { ReactNode, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOutsideClick";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

type Props<T> = React.ComponentPropsWithRef<"div"> & {
  isOpen?: boolean;
  items?: T[];
  renderCard: (item: T, index: number) => ReactNode;
  children?: ReactNode;
  innerRef?: React.Ref<HTMLDivElement>;
  onFocusOutside?: () => void;
} & Record<string, any>;

export function WithResultsDropdown<T>({
  isOpen,
  innerRef,
  items,
  onFocusOutside,
  renderCard,
  children,
  className,
  ...props
}: Props<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(containerRef, onFocusOutside ?? (() => {}));

  return (
    <div className={cn("flex flex-col items-start w-full gap-0 relative", className)} ref={containerRef}>
      {children}
      <div
        ref={innerRef as React.Ref<HTMLDivElement>}
        className={cn(
          "mt-4 w-full flex flex-col items-start justify-start bg-bg-100 absolute rounded-md border border-solid border-ui-10 shadow-md gap-0 max-h-60 overflow-y-auto transition-all duration-200",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        {...filterDomProps(props)}
      >
        {items?.map(renderCard)}
      </div>
    </div>
  );
}
