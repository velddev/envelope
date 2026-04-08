import { ColorModeProvider } from "@/hooks";
import { ModalStackProvider } from "@/hooks/useModalStack";
import React, { PropsWithChildren } from "react";

export const EnvelopeProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ColorModeProvider>
      <ModalStackProvider>{children}</ModalStackProvider>
    </ColorModeProvider>
  );
};
