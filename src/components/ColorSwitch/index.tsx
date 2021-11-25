import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ColorSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={(e) => setColorMode(e.target.checked ? "dark" : "light")}
    />
  );
};
