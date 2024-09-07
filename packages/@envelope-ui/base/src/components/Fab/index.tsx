import React, { ForwardedRef, forwardRef } from "react";
import { HTMLStyledProps } from "@envelope-ui/styled/jsx";
import { Button, ButtonProps } from "../Button/button";

type FabProps = ButtonProps;

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
