import { useCallback, useState } from "react";

export type UseDisclosureResult = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onToggle: () => void;
};

export const useDisclosure = (): UseDisclosureResult => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onToggle = useCallback(() => setIsOpen((open) => !open), []);
  return { isOpen, onClose, onOpen, onToggle };
};
