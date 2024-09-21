import { AddModalResult, useModalStack } from "@/hooks/useModalStack";
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

const ModalContext = createContext<UseModalResult>({
  isOpen: false,
  open: () => {},
});

export const ModalProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: UseModalResult }>) => {
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export type UseModalResult =
  | {
      isOpen: true;
      close: () => void;
      zIndex: number;
    }
  | {
      isOpen: false;
      open: () => void;
    };

export type UseModalInput = {
  isOpen: boolean;
};

export const useModal = (input: UseModalInput): UseModalResult => {
  const modalStack = useModalStack();
  const [modal, setModal] = useState<AddModalResult | null>(null);

  const open = () => {
    const res = modalStack.addModal();
    setModal(res);
  };

  const close = () => {
    if (modal == null) {
      return;
    }

    modalStack.closeModal(modal.key);
    setModal(null);
  };

  useEffect(() => {
    const modalIsOnStack = modal != null;
    if (input.isOpen) {
      if (!modalIsOnStack) {
        open();
      }
    } else {
      if (modalIsOnStack) {
        close();
      }
    }
  }, [modal, input.isOpen]);

  return {
    zIndex: modal?.zIndex ?? 0,
    isOpen: modal != null,
    open,
    close,
  };
};
