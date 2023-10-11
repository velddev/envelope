import { Box, BoxProps } from "@envelope/styled/jsx";
import { motion, MotionProps } from "framer-motion";

export const MotionBox = motion<Omit<BoxProps, keyof MotionProps> & MotionProps>(Box as any);
