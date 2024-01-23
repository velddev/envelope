"use client";
import React, { PropsWithChildren, useContext } from "react";
import { useEffect, useState } from "react";

type ColorMode = "light" | "dark";

type UseColorModeResult = {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
};

const ColorModeContext = React.createContext<UseColorModeResult>({
  colorMode: "light",
  setColorMode: () => {},
});

const w = typeof window !== "undefined" ? window : null;

export const ColorModeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(
    w
      ? w.localStorage.getItem("color-mode") || w.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : null,
  );

  return (
    <ColorModeContext.Provider
      value={{
        colorMode: (colorMode || "light") as ColorMode,
        setColorMode: (mode: ColorMode) => {
          setColorMode(mode);
          saveColorMode(mode);
          localStorage.setItem("color-mode", mode);
        },
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = (): UseColorModeResult => {
  return useContext(ColorModeContext);
};

export const ColorModeScript = () => {
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              let mode = localStorage.getItem("color-mode");
              if (!mode) {
                mode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              }
              document.documentElement.setAttribute("data-color-mode", mode);
            } catch (e) {}
          })();
        `,
      }}
    />
  );
};

const saveColorMode = (mode: ColorMode) => {
  document.documentElement.setAttribute("data-color-mode", mode);
};
