import { Box, BoxProps } from "@envelope/styled-system";
import React from "react";

export const CardBox = (props: BoxProps) => (
  <Box {...props} border="1px solid" borderColor="ui.20" rounded="lg" p="4" />
);
