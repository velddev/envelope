import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

type ImageProps = React.ComponentPropsWithRef<"img"> & Record<string, any>;

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => {
    return <img ref={ref} className={cn(className)} {...filterDomProps(props)} />;
  }
);
Image.displayName = "Image";
