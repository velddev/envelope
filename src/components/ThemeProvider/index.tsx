import {
  ColorModeProvider,
  IdProvider,
  ThemeProvider as ChakraThemeProvider,
  useColorMode,
  CSSReset,
  GlobalStyle,
  Theme,
  extendTheme,
} from "@chakra-ui/react";
import type { Dict } from "@chakra-ui/utils";
import React, { PropsWithChildren, useMemo } from "react";
import { getTheme } from "../..";

type Props = {
  themeFactory?: (colorMode: "light" | "dark") => Partial<Dict>;
  initialColorMode?: "light" | "dark";
};

export const ThemeProvider = ({
  initialColorMode,
  children,
  themeFactory,
}: PropsWithChildren<Props>) => {
  return (
    <IdProvider>
      <ColorModeProvider
        options={{
          initialColorMode: initialColorMode || "light",
        }}
      >
        <InnerProvider themeFactory={themeFactory}>{children}</InnerProvider>
      </ColorModeProvider>
    </IdProvider>
  );
};

const InnerProvider = ({ children, themeFactory }: PropsWithChildren<Props>) => {
  const { colorMode } = useColorMode();
  const chakraTheme = useMemo(
    () => extendTheme(getTheme(colorMode), themeFactory?.(colorMode)),
    [colorMode],
  );

  return (
    <ChakraThemeProvider theme={chakraTheme}>
      <CSSReset />
      <GlobalStyle />
      {children}
    </ChakraThemeProvider>
  );
};
