import { useBreakpoint } from "use-breakpoint";
import { BreakpointToken } from "@/_generated/styled/tokens";

type BreakpointTokenType = BreakpointToken | "base";

const breakpointsRaw = {
  base: "0px",
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as Record<BreakpointToken, string>;

const breakpointKeys: BreakpointToken[] = Object.keys(breakpointsRaw) as BreakpointToken[];

const breakpoints: Record<BreakpointToken, number> = breakpointKeys.reduce((acc, key) => {
  acc[key] = parseInt(breakpointsRaw[key].replace("px", ""));
  return acc;
}, {} as Record<BreakpointToken, number>);

type Breakpoints<T> = Record<BreakpointTokenType, T>;
type Values<T> = Breakpoints<T> | T[];

function toObject<T>(values: T[]): Breakpoints<T> {
  return values.reduce(
    (acc, value, index) => {
      const v = breakpointKeys[index];
      if (!v) {
        return acc;
      }

      acc[v] = value;
      return acc;
    },
    {
      base: values[0],
    } as Breakpoints<T>,
  );
}

export function useBreakpointValue<T>(values: Partial<Values<T>>): T | undefined {
  const valueObj: Partial<Breakpoints<T>> = Array.isArray(values) ? toObject(values) : values;
  const result = useBreakpoint<typeof breakpoints, BreakpointToken>(breakpoints, "sm", true);

  // get the value for the current breakpoint, if the value is not defined, find the lower defined value.

  const valueObjKeys = Object.keys(valueObj) as BreakpointToken[];

  const breakpointsInOrder = valueObjKeys.sort((a, b) => breakpoints[b] - breakpoints[a]);
  for (let v of breakpointsInOrder) {
    if (breakpoints[v] > breakpoints[result.breakpoint]) {
      // ignore larger values
      continue;
    }

    if (valueObj[v]) {
      return valueObj[v];
    }
  }

  return valueObj.base;
}
