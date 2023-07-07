import { IconButton, IconButtonProps } from "@chakra-ui/button";
import React from "react";
import { ForwardedRef, forwardRef } from "react";

type FabProps = IconButtonProps & {};

export const Fab = forwardRef(function Fab(props: FabProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <IconButton
      {...props}
      variant="primary"
      boxShadow="lg"
      boxSize="16"
      borderRadius="full"
      ref={ref}
      position="fixed"
      right="4"
      bottom="4"
    />
  );
});
