import React from "react";
import { useEffect, useState } from "react";

type ColorMode = "light" | "dark";
type UseColorModeResult = {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
};

export const useColorMode = (): UseColorModeResult => {
  const [colorMode, setColorMode] = useState<ColorMode>("light");

  useEffect(() => {
    setColorMode((localStorage.getItem("color-mode") || colorMode) as ColorMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("color-mode", colorMode);
  }, [colorMode]);

  return { colorMode, setColorMode };
};

export const ColorModeScript = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", colorMode);
  }, [colorMode]);

  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var mode = localStorage.getItem("color-mode") || "light";
              document.documentElement.setAttribute("data-color-mode", mode);
            } catch (e) {}
          })();
        `,
      }}
    />
  );
};
