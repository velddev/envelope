import { Box, SimpleGrid, VStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { AnimateSharedLayout } from "framer-motion";
import React, { useRef, useState } from "react";
import { MotionBox } from "../MotionBox";
import { Stepper } from "../Stepper";

type Props = {
  columns: number | number[];
  children: React.ReactNode[];
};

export const Carousel = ({ columns, children }: Props) => {
  const refs = useRef([]);
  const [index, setIndex] = useState(0);

  const colCount = Array.isArray(columns)
    ? useBreakpointValue(columns)
    : columns;

  return (
    <VStack spacing="8">
      <Box position="relative">
        <Box
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          w="20px"
          bgGradient="linear(to-r, transparent, bg)"
          zIndex="1"
        />
        <Box overflowX="hidden" w="full">
          <AnimateSharedLayout>
            <MotionBox
              animate={{
                x: 1 + -1 * refs.current?.[index]?.offsetLeft ?? 0,
              }}
              w="100%"
              position="relative"
            >
              <SimpleGrid
                templateColumns={`repeat(${children.length}, ${
                  90 / colCount
                }%)`}
                spacing="8"
                maxW="95vw"
              >
                {children.map((x, i) => (
                  <Box ref={(el) => (refs.current[i] = el)} key={i} w="full">
                    {x}
                  </Box>
                ))}
              </SimpleGrid>
            </MotionBox>
          </AnimateSharedLayout>
        </Box>
      </Box>
      <Stepper
        index={index}
        onIndexChange={setIndex}
        pageCount={1 + Math.max(0, children.length - colCount)}
      />
    </VStack>
  );
};
