import { Box, BoxProps } from "@/_generated/styled/jsx";
import { motion, MotionProps } from "framer-motion";

export const MotionBox = motion<Omit<BoxProps, keyof MotionProps> & MotionProps>(Box as any);
