import React, { createContext, PropsWithChildren, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, HTMLStyledProps, Box } from "@/_generated/styled/jsx";
import { AddModalResult, useModalStack } from "@/hooks/useModalStack";
import { ModalProvider, useModal, useModalContext } from "./hooks";

type PrimitiveContentProps = Dialog.DialogContentProps & HTMLStyledProps<"div">;

const PrimitiveContent = styled(Dialog.Content, {
  base: {
    rounded: "md",
    bg: "bg.100",
    animation: "slideUp 0.2s ease-in-out",
  },
});

export const ModalPortal = styled(Dialog.Portal);
export const ModalTrigger = styled(Dialog.Trigger);
export const ModalOverlay = styled(Dialog.Overlay, {
  base: {
    bg: "uiLight.60",
    inset: 0,
    position: "fixed",
    animation: "fadeIn 0.2s ease-in-out",
    backdropFilter: "blur(4px)",
  },
});

export type ModalProps = Omit<Dialog.DialogProps, "open" | "onOpenChange"> & {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose, ...props }: ModalProps) => {
  const modal = useModal({ isOpen });

  return (
    <ModalProvider value={modal}>
      <Dialog.Root
        open={modal.isOpen}
        onOpenChange={(v) => {
          if (v === false) {
            onClose();
          }
        }}
        {...props}
      >
        {props.children}
      </Dialog.Root>
    </ModalProvider>
  );
};

export const ModalContent = ({ children, ...props }: PrimitiveContentProps) => {
  const modal = useModalContext();
  return (
    <Dialog.Portal>
      <ModalOverlay
        style={{
          zIndex: modal.isOpen ? modal.zIndex : undefined,
        }}
      />
      <Box
        position="fixed"
        inset="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          zIndex: modal.isOpen ? modal.zIndex : undefined,
        }}
      >
        <PrimitiveContent {...props}>{children}</PrimitiveContent>
      </Box>
    </Dialog.Portal>
  );
};
