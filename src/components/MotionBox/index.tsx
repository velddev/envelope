import { Box, BoxProps } from "@chakra-ui/react";
import { isValidMotionProp, motion, MotionProps } from "framer-motion";
import React, { ForwardedRef } from "react";
import { forwardRef } from "react";

export const MotionBox = motion<
  Omit<BoxProps, keyof MotionProps> & MotionProps
>(Box as any);
