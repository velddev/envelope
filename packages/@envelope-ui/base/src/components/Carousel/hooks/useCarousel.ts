import { useMemo, useRef, useState } from "react";

export const useCarousel = () => {
  const refs = useRef<HTMLDivElement[]>([]);
  const [index, setIndex] = useState(0);

  const leftOffset = useMemo(() => {
    return -1 + (refs.current?.[index]?.offsetLeft ?? 0);
  }, [refs.current, index]);

  return {
    refs,
    index,
    setIndex,
    offset: leftOffset,
  };
};
