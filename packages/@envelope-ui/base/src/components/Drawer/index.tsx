import React, { forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";
import { useModal } from "../Modal/hooks";

const drawerContentVariants = cva(
  "rounded-md bg-bg-100 max-w-xl transition-all duration-300 fixed overflow-y-auto",
  {
    variants: {
      side: {
        left: "w-[70vw] h-screen top-0 left-0 data-[state=open]:animate-slide-right-full",
        right: "w-[70vw] h-screen top-0 right-0 data-[state=open]:animate-slide-left-full",
        top: "w-screen h-[70vh] top-0 left-0 right-0 -translate-y-full",
        bottom: "w-screen h-[70vh] bottom-0 right-0 left-0 translate-y-full",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

type DrawerPrimitiveProps = Omit<Dialog.DialogProps, "open"> &
  React.ComponentPropsWithRef<"div"> & {
    isOpen: boolean;
    onClose: () => void;
  };

const DrawerContext = React.createContext({
  onClose: () => {},
  isOpen: false,
  zIndex: 0,
});

export const Drawer = ({ children, isOpen, onClose, ...props }: DrawerPrimitiveProps) => {
  const modal = useModal({ isOpen });
  const zIndex = modal.zIndex;

  return (
    <DrawerContext.Provider value={{ onClose, isOpen, zIndex }}>
      <Dialog.Root
        {...props}
        open={isOpen}
        onOpenChange={(open) => { if (!open) onClose(); }}
      >
        {children}
      </Dialog.Root>
    </DrawerContext.Provider>
  );
};

export const DrawerPortal = Dialog.Portal;
export const DrawerTrigger = Dialog.Trigger;

export const DrawerOverlay = forwardRef<
  HTMLDivElement,
  Dialog.DialogOverlayProps & React.ComponentPropsWithRef<"div"> & { zIndex?: number } & Record<string, any>
>(({ className, zIndex, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn(
      "bg-ui-light-60 inset-0 fixed animate-fade-in",
      className
    )}
    style={{ zIndex }}
    {...filterDomProps(props)}
  />
));
DrawerOverlay.displayName = "DrawerOverlay";

type DrawerContentProps = Dialog.DialogContentProps &
  React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof drawerContentVariants> & Record<string, any>;

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ children, side, className, ...props }, ref) => {
    const ctx = React.useContext(DrawerContext);

    return (
      <DrawerPortal>
        <DrawerOverlay zIndex={ctx.zIndex} onClick={() => ctx?.onClose()} />
        <Dialog.Content
          ref={ref}
          className={cn(drawerContentVariants({ side }), className)}
          style={{ zIndex: ctx.zIndex }}
          {...filterDomProps(props)}
        >
          {children}
        </Dialog.Content>
      </DrawerPortal>
    );
  }
);
DrawerContent.displayName = "DrawerContent";
