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
import React, { PropsWithChildren, useMemo } from "react";
import { getTheme } from "../..";

type Props = {
  themeFactory?: (colorMode: "light" | "dark") => Partial<Theme>;
};

export const ThemeProvider = ({
  children,
  themeFactory,
}: PropsWithChildren<Props>) => {
  return (
    <IdProvider>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
        }}
      >
        <InnerProvider themeFactory={themeFactory}>{children}</InnerProvider>
      </ColorModeProvider>
    </IdProvider>
  );
};

const InnerProvider = ({
  children,
  themeFactory,
}: PropsWithChildren<Props>) => {
  const { colorMode } = useColorMode();
  const chakraTheme = useMemo(
    () => extendTheme(getTheme(colorMode), themeFactory?.(colorMode)),
    [colorMode]
  );

  return (
    <ChakraThemeProvider theme={chakraTheme}>
      <CSSReset />
      <GlobalStyle />
      {children}
    </ChakraThemeProvider>
  );
};
