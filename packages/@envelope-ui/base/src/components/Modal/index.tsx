import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, HTMLStyledProps, Box } from "@envelope-ui/styled/jsx";

type PrimitiveContentProps = Dialog.DialogContentProps & HTMLStyledProps<"div">;

const PrimitiveContent = styled(Dialog.Content, {
  base: {
    rounded: "md",
    bg: "bg.100",
    maxW: "xl",
    animation: "slideUp 0.2s ease-in-out",
  },
});

export const Modal = styled(Dialog.Root);
export const ModalPortal = styled(Dialog.Portal);
export const ModalTrigger = styled(Dialog.Trigger);
export const ModalOverlay = styled(Dialog.Overlay, {
  base: {
    bg: "uiLight.60",
    inset: 0,
    position: "fixed",
    animation: "fadeIn 0.2s ease-in-out",
  },
});
export const ModalContent = ({ children, ...props }: PrimitiveContentProps) => {
  return (
    <ModalPortal zIndex={props.zIndex}>
      <ModalOverlay zIndex={props.zIndex} />
      <Box
        zIndex={props.zIndex}
        position="fixed"
        inset="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <PrimitiveContent {...props}>{children}</PrimitiveContent>
      </Box>
    </ModalPortal>
  );
};
