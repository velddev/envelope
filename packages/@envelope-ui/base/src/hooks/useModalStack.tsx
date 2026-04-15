"use client";
import React, { createContext, PropsWithChildren, useRef, useState } from "react";

type Modal = {
  id: string;
  zIndex: number;
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
  const counterRef = useRef(0);

  const addModal = (): AddModalResult => {
    const index = counterRef.current++;
    const key = Math.random().toString(36).substring(7) + "-" + index;
    const zIndex = BASE_Z_INDEX + index;

    setModals((prev) => [...prev, { id: key, zIndex }]);

    return { key, zIndex };
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
