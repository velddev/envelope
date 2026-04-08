import { motion, type MotionProps } from "framer-motion";
import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

type MotionBoxProps = MotionProps &
  Omit<React.ComponentPropsWithRef<"div">, keyof MotionProps> & Record<string, any>;

export const MotionBox = forwardRef<HTMLDivElement, MotionBoxProps>(
  ({ className, ...props }, ref) => {
    return <motion.div ref={ref} className={cn(className)} {...props} />;
  }
);
MotionBox.displayName = "MotionBox";
