import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@envelope/styled/jsx";

export const Modal = styled(Dialog.Root, {
  base: {
    bg: "bg.100",
  },
});
export const ModalBase = styled(Dialog.Portal);
export const ModalTrigger = styled(Dialog.Trigger);
export const ModalContent = styled(Dialog.Content);
export const ModalOverlay = styled(Dialog.Overlay, {
  base: {
    bg: "uiLight.60",
    inset: 0,
    position: "fixed",
    animation: "fadeIn 0.2s ease-in-out",
  },
});
