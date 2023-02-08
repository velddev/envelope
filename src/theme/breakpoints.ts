import { Breakpoints } from "@chakra-ui/theme-tools";

type BreakpointProps = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
};

const breakpoints: Breakpoints<BreakpointProps> = {
  base: "0em",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export default breakpoints;
