import React from "react";
import { Box, Center, Grid, VStack } from "@envelope-ui/styled/jsx";
import { MotionBox } from "../MotionBox";
import { Stepper, StepperControls } from "../Stepper";
import { Transition } from "../MotionBox/transitions";
import { useCarousel } from "./hooks/useCarousel";
import { useBreakpointValue } from "../../hooks/useBreakpointValue";

export type CarouselProps = {
  columns: number | (number | null)[];
  children: React.ReactNode[];
};

export const Carousel = ({ columns, children }: CarouselProps) => {
  const { refs, index, setIndex, offset } = useCarousel();
  const colCount = useBreakpointValue(Array.isArray(columns) ? columns : [columns]);

  return (
    <>
      <VStack gap="0" w="full" overflow="hidden">
        <Box position="relative" w="full">
          <Box overflowX="hidden" pb="12" w="full">
            <MotionBox
              animate={{
                x: -offset,
              }}
              transition={Transition.Default}
              w="100%"
            >
              <Grid
                gap="8"
                maxW="95vw"
                style={{
                  gridTemplateColumns: `repeat(${children.length}, ${90 / colCount}%)`,
                }}
              >
                {children.map((x, i) => (
                  <Box ref={(el) => (refs.current[i] = el)} key={i} w="full">
                    {x}
                  </Box>
                ))}
              </Grid>
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
    <VStack gap="0" w="full" overflow="hidden">
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
            <Grid
              style={{
                gridTemplateColumns: `repeat(${children.length}, ${90 / colCount}%)`,
              }}
              gap="8"
              maxW="95vw"
            >
              {children.map((x, i) => (
                <Box ref={(el) => (refs.current[i] = el)} key={i} w="full">
                  {x}
                </Box>
              ))}
            </Grid>
          </MotionBox>
        </Box>
      </Box>
    </VStack>
  );
};
