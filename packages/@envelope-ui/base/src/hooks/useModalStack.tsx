"use client";
import React, { createContext, PropsWithChildren, useState } from "react";

type Modal = {
  id: string;
};

export type AddModalResult = {
  key: string;
  zIndex: number;
};

type ModalStackContextType = {
  modals: Modal[];
  closeModal: (id: string) => void;
  addModal: () => AddModalResult;
};

const ModalStackContext = createContext<ModalStackContextType>({
  modals: [],
  closeModal: () => {},
  addModal: () => ({ key: "", zIndex: 0 }),
});

const BASE_Z_INDEX = 10000;

export const ModalStackProvider = ({ children }: PropsWithChildren<{}>) => {
  const [modals, setModals] = useState<Modal[]>([]);

  const addModal = (): AddModalResult => {
    let key = Math.random().toString(36).substring(7);
    setModals((prev) => {
      key = key + "-" + prev.length;
      const modal = {
        id: key,
      };

      return [...prev, modal];
    });

    return {
      key,
      zIndex: BASE_Z_INDEX + modals.length,
    };
  };

  const closeModal = (id: string) => {
    setModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  return (
    <ModalStackContext.Provider value={{ modals, closeModal, addModal }}>
      {children}
    </ModalStackContext.Provider>
  );
};

export const useModalStack = () => {
  return React.useContext(ModalStackContext);
};
