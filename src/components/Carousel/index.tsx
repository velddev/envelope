import { Box, SimpleGrid, VStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React, { useMemo, useRef, useState } from "react";
import { MotionBox } from "../MotionBox";
import { Stepper } from "../Stepper";
import { Transition } from "../MotionBox/transitions";

export type CarouselProps = {
  columns: number | number[];
  children: React.ReactNode[];
};

export const Carousel = ({ columns, children }: CarouselProps) => {
  const refs = useRef<HTMLDivElement[]>([]);
  const [index, setIndex] = useState(0);

  const colCount = useBreakpointValue(Array.isArray(columns) ? columns : [columns]);

  const leftOffset = useMemo(() => {
    return -1 + (refs.current?.[index]?.offsetLeft ?? 0);
  }, [refs.current, index]);

  return (
    <VStack spacing="0" w="full" overflow="hidden">
      <Box position="relative" w="full">
        <Box
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          w="20px"
          bgGradient="linear(to-r, transparent, bg)"
          zIndex="1"
        />
        <Box overflowX="hidden" pb="12" w="full">
          <MotionBox
            animate={{
              x: -leftOffset,
            }}
            transition={Transition.Default}
            w="100%"
          >
            <SimpleGrid
              templateColumns={`repeat(${children.length}, ${90 / colCount}%)`}
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
