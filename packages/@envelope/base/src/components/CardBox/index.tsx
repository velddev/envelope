import { Box, BoxProps } from "@envelope/styled/jsx";
import React from "react";

export const CardBox = (props: BoxProps) => (
  <Box {...props} border="1px solid" borderColor="ui.20" borderRadius="lg" p="4" />
);
