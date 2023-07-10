import { Box, BoxProps } from "../../../styled-system/jsx";
import React from "react";

export const CardBox = (props: BoxProps) => (
  <Box {...props} border="1px solid" borderColor="ui.20" borderRadius="lg" p="4" />
);
