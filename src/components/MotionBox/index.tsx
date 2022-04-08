import { Box, BoxProps } from "@chakra-ui/layout";
import { motion, MotionProps } from "framer-motion";

export const MotionBox = motion<Omit<BoxProps, keyof MotionProps> & MotionProps>(Box as any);
