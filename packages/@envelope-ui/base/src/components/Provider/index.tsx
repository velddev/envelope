import { ColorModeProvider } from "../../hooks";
import React, { PropsWithChildren } from "react";

export const EnvelopeProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ColorModeProvider>
      {children}
    </ColorModeProvider>
  );
};
