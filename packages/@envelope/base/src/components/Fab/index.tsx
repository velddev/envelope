import React, { ForwardedRef, forwardRef } from "react";
import { HTMLStyledProps } from "@envelope/styled/jsx";
import { Button } from "../Button";

type FabProps = HTMLStyledProps<"button"> & {};

export const Fab = forwardRef(function Fab(props: FabProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <Button
      {...props}
      variant="primary"
      boxShadow="lg"
      width="16"
      height="16"
      borderRadius="full"
      ref={ref}
      position="fixed"
      right="4"
      bottom="4"
    >
      {props.children}
    </Button>
  );
});
