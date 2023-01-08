import React from "react";
import { Box, Center, SimpleGrid, VStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { MotionBox } from "../MotionBox";
import { Stepper, StepperControls } from "../Stepper";
import { Transition } from "../MotionBox/transitions";
import { useCarousel } from "./hooks/useCarousel";

export type CarouselProps = {
  columns: number | (number | null)[];
  children: React.ReactNode[];
};

export const Carousel = ({ columns, children }: CarouselProps) => {
  const { refs, index, setIndex, offset } = useCarousel();
  const colCount = useBreakpointValue(Array.isArray(columns) ? columns : [columns]);

  return (
    <>
      <VStack spacing="0" w="full" overflow="hidden">
        <Box position="relative" w="full">
          <Box overflowX="hidden" pb="12" w="full">
            <MotionBox
              animate={{
                x: -offset,
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
      </VStack>
      <Center w="full">
        <Stepper
          index={index}
          onIndexChange={setIndex}
          pageCount={1 + Math.max(0, children.length - colCount)}
        />
      </Center>
    </>
  );
};

export const CarouselInsideControls = ({ columns, children }: CarouselProps) => {
  const { refs, index, setIndex, offset } = useCarousel();
  const colCount = useBreakpointValue(Array.isArray(columns) ? columns : [columns]);

  return (
    <VStack spacing="0" w="full" overflow="hidden">
      <Box position="relative" w="full">
        <StepperControls
          w="full"
          justify="space-between"
          pageCount={1 + children.length - colCount}
          index={index}
          onIndexChange={setIndex}
          bottom="0"
          top="0"
          alignItems="center"
          position="absolute"
          zIndex="10"
          px={["1", null, null, "4"]}
          pointerEvents="none"
          buttonProps={{
            bg: "bg",
            pointerEvents: "all",
            _hover: {
              bg: "bg2.100",
            },
            _disabled: {
              opacity: 0,
            },
          }}
        />
        <Box overflowX="hidden" w="full">
          <MotionBox
            animate={{
              x: -offset,
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
    </VStack>
  );
};
