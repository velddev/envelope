import { useBreakpoint } from "use-breakpoint";
import { BreakpointToken } from "../../../styled-system/tokens";
//import config from "../../../panda.config";

type BreakpointTokenType = BreakpointToken | "base";

const breakpointsRaw = {
  "2xl": "1536px",
  xl: "1280px",
  lg: "1024px",
  md: "768px",
  sm: "640px",
  xs: "480px",
} as Record<BreakpointToken, string>;

const breakpoints: Record<BreakpointToken, number> = Object.keys(breakpointsRaw).reduce(
  (acc, key) => {
    acc[key] = parseInt(breakpointsRaw[key].replace("px", ""));
    return acc;
  },
  {} as Record<BreakpointToken, number>,
);

type Breakpoints<T> = Record<BreakpointTokenType, T>;
type Values<T> = Breakpoints<T> | T[];

function toObject<T>(values: T[]): Breakpoints<T> {
  return values.reduce(
    (acc, value, index) => {
      acc[Object.keys(breakpoints)[index]] = value;
      return acc;
    },
    {
      base: values[0],
    } as Breakpoints<T>,
  );
}

function getClosestBreakpoint<T>(
  breakpoint: BreakpointTokenType,
  existingValues: Partial<Breakpoints<T>>,
): BreakpointTokenType {
  const breakpointKeys = Object.keys(breakpoints) as BreakpointTokenType[];
  const breakpointIndex = breakpointKeys.indexOf(breakpoint);
  const existingValuesKeys = Object.keys(existingValues) as BreakpointTokenType[];
  const existingValuesIndex = existingValuesKeys.indexOf(breakpoint);
  if (existingValuesIndex > -1) {
    return existingValuesKeys[existingValuesIndex];
  }
  if (breakpointIndex === 0) {
    return "base";
  }
  return breakpointKeys[breakpointIndex - 1];
}

export function useBreakpointValue<T>(values: Partial<Values<T>>): T | undefined {
  const valueObj: Partial<Breakpoints<T>> = Array.isArray(values) ? toObject(values) : values;
  const result = useBreakpoint<typeof breakpoints, BreakpointToken>(breakpoints, "sm", false);
  const closestMatch = getClosestBreakpoint(result.breakpoint as BreakpointTokenType, valueObj);
  return valueObj[closestMatch];
}
