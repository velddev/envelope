import React from "react";
import { MotionBox } from "../MotionBox";
import { Stepper, StepperControls } from "../Stepper";
import { Transition } from "../MotionBox/transitions";
import { useCarousel } from "./hooks/useCarousel";
import { useBreakpointValue } from "../../hooks/useBreakpointValue";
import { cn } from "../../utils/cn";

export type CarouselProps = {
  columns: number | (number | null)[];
  children: React.ReactNode[];
};

export const Carousel = ({ columns, children }: CarouselProps) => {
  const { refs, index, setIndex, offset } = useCarousel();
  const colCount = useBreakpointValue(Array.isArray(columns) ? columns : [columns]) ?? 1;

  return (
    <>
      <div className="flex flex-col gap-0 w-full overflow-hidden">
        <div className="relative w-full">
          <div className="overflow-x-hidden pb-12 w-full">
            <MotionBox
              animate={{ x: -offset }}
              transition={Transition.Default}
              className="w-full"
            >
              <div
                className="grid gap-8 max-w-[95vw]"
                style={{
                  gridTemplateColumns: `repeat(${children.length}, ${90 / (colCount ?? 1)}%)`,
                }}
              >
                {children.map((x, i) => (
                  <div ref={(el) => { if (el) refs.current[i] = el; }} key={i} className="w-full">
                    {x}
                  </div>
                ))}
              </div>
            </MotionBox>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Stepper
          index={index}
          onIndexChange={setIndex}
          pageCount={1 + Math.max(0, children.length - (colCount ?? 1))}
        />
      </div>
    </>
  );
};

export const CarouselInsideControls = ({ columns, children }: CarouselProps) => {
  const { refs, index, setIndex, offset } = useCarousel();
  const colCount = useBreakpointValue(Array.isArray(columns) ? columns : [columns]) ?? 0;

  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      <div className="relative w-full">
        <StepperControls
          className="w-full justify-between absolute inset-0 items-center z-10 px-1 lg:px-4 pointer-events-none"
          pageCount={1 + children.length - (colCount ?? 1)}
          index={index}
          onIndexChange={setIndex}
          buttonClassName="bg-bg-100 pointer-events-auto hover:bg-bg2-100 disabled:opacity-0"
        />
        <div className="overflow-x-hidden w-full">
          <MotionBox
            animate={{ x: -offset }}
            transition={Transition.Default}
            className="w-full"
          >
            <div
              className="grid gap-8 max-w-[95vw]"
              style={{
                gridTemplateColumns: `repeat(${children.length}, ${90 / (colCount ?? 1)}%)`,
              }}
            >
              {children.map((x, i) => (
                <div ref={(el) => { if (el) refs.current[i] = el; }} key={i} className="w-full">
                  {x}
                </div>
              ))}
            </div>
          </MotionBox>
        </div>
      </div>
    </div>
  );
};
