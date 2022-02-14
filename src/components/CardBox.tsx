import { forwardRef } from "@chakra-ui/system";
import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

export const CardBox = forwardRef((props: BoxProps, ref) => (
  <Box ref={ref} {...props} border="1px solid" borderColor="ui.20" rounded="lg" p="4" />
));
