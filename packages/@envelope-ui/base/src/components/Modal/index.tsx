import React, { forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

export const Modal = Dialog.Root;
export const ModalPortal = Dialog.Portal;
export const ModalTrigger = Dialog.Trigger;

export const ModalOverlay = forwardRef<
  HTMLDivElement,
  Dialog.DialogOverlayProps & React.ComponentPropsWithRef<"div"> & Record<string, any>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn(
      "bg-ui-light-60 inset-0 fixed animate-fade-in",
      className
    )}
    {...filterDomProps(props)}
  />
));
ModalOverlay.displayName = "ModalOverlay";

type ModalContentProps = Dialog.DialogContentProps &
  React.ComponentPropsWithRef<"div"> & {
    zIndex?: number | string;
  } & Record<string, any>;

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, zIndex, ...props }, ref) => {
    return (
      <ModalPortal>
        <ModalOverlay style={{ zIndex }} />
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex }}
        >
          <Dialog.Content
            ref={ref}
            className={cn(
              "rounded-md bg-bg-100 max-w-xl animate-slide-up",
              className
            )}
            {...filterDomProps(props)}
          >
            {children}
          </Dialog.Content>
        </div>
      </ModalPortal>
    );
  }
);
ModalContent.displayName = "ModalContent";
