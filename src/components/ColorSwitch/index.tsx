import { Switch } from "@chakra-ui/switch";
import { useColorMode } from "@chakra-ui/color-mode";
import React from "react";

export const ColorSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();

  console.log(colorMode);
  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={(e) => setColorMode(e.target.checked ? "dark" : "light")}
    />
  );
};
