import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, HTMLStyledProps, Box } from "@envelope/styled/jsx";

const PrimitiveContent = styled(Dialog.Content, {
  base: {
    rounded: "md",
    bg: "bg.100",
    maxW: "xl",
    transition: "0.33s all",
    position: "fixed",
    overflowY: "auto",
  },
  variants: {
    side: {
      left: {
        w: "70vw",
        h: "100vh",
        top: "0",
        left: "0",
        _before: {
          transform: "translateX(-100%)",
        },
        "&[data-state='open']": {
          animation: "slideLeftFull 0.2s ease-in-out",
        },
      },
      right: {
        w: "70vw",
        h: "100vh",
        top: "0",
        right: "0",
        "&[data-state='open']": {
          animation: "slideLeftFull 0.2s ease-in-out",
        },
      },
      top: {
        w: "100vw",
        h: "70vh",
        top: "0",
        left: "0",
        right: "0",
        transform: "translateY(-100%)",
      },
      bottom: {
        w: "100vw",
        h: "70vh",
        bottom: "0",
        right: "0",
        left: "0",
        transform: "translateY(100%)",
      },
    },
  },
  defaultVariants: {
    side: "right",
  },
});

type PrimitiveContentProps = Dialog.DialogContentProps &
  HTMLStyledProps<"div"> & {
    side?: "left" | "right" | "top" | "bottom";
  };

const PrimitiveRoot = styled(Dialog.Root);

type DrawerPrimitiveProps = Omit<Dialog.DialogProps, "open"> &
  Omit<HTMLStyledProps<"div">, "ref"> & {
    isOpen: boolean;
    onClose: () => void;
  };

const DrawerContext = React.createContext({
  onClose: () => {},
  isOpen: false,
});

export const Drawer = ({ children, ...props }: DrawerPrimitiveProps) => {
  return (
    <DrawerContext.Provider
      value={{
        onClose: props.onClose,
        isOpen: props.isOpen,
      }}
    >
      <PrimitiveRoot {...props} open={props.isOpen}>
        {children}
      </PrimitiveRoot>
    </DrawerContext.Provider>
  );
};
export const DrawerPortal = styled(Dialog.Portal);
export const DrawerTrigger = styled(Dialog.Trigger);
export const DrawerOverlay = styled(Dialog.Overlay, {
  base: {
    bg: "uiLight.60",
    inset: 0,
    position: "fixed",
    animation: "fadeIn 0.2s ease-in-out",
    zIndex: "10",
  },
});
export const DrawerContent = ({ children, style, ...props }: PrimitiveContentProps) => {
  const ctx = React.useContext(DrawerContext);

  return (
    <DrawerPortal>
      <DrawerOverlay onClick={() => ctx?.onClose()} />
      <PrimitiveContent zIndex="20" {...props}>
        {children}
      </PrimitiveContent>
    </DrawerPortal>
  );
};
