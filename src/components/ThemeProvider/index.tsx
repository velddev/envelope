import {
  ColorModeProvider,
  IdProvider,
  ThemeProvider as ChakraThemeProvider,
  useColorMode,
  CSSReset,
  GlobalStyle,
} from "@chakra-ui/react";
import React, { PropsWithChildren, useMemo } from "react";
import { getTheme } from "../..";

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <IdProvider>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
        }}
      >
        <InnerProvider>{children}</InnerProvider>
      </ColorModeProvider>
    </IdProvider>
  );
};

const InnerProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { colorMode } = useColorMode();
  const chakraTheme = useMemo(() => getTheme(colorMode), [colorMode]);

  return (
    <ChakraThemeProvider theme={chakraTheme}>
      <CSSReset />
      <GlobalStyle />
      {children}
    </ChakraThemeProvider>
  );
};
