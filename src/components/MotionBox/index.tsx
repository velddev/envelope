import { Box, BoxProps } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import React, { ForwardedRef } from "react";
import { forwardRef } from "react";

// 1. Create a custom motion component from Box
export const MotionBox = motion(
  forwardRef((props: BoxProps, ref: ForwardedRef<HTMLDivElement>) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
