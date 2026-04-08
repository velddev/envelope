import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

type SvgProps = React.ComponentPropsWithRef<"svg"> & Record<string, any>;

export const Svg = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, ...props }, ref) => {
    return <svg ref={ref} className={cn(className)} {...filterDomProps(props)} />;
  }
);
Svg.displayName = "Svg";
