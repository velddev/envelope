import React from "react";
import { toast as sonnerToast, Toaster as SonnerToaster } from "sonner";
import { filterDomProps } from "../../utils/filterDomProps";

type ToasterProps = Parameters<typeof SonnerToaster>[0] & Record<string, any>;

export const Toaster = ({ className, ...rest }: ToasterProps) => {
  return (
    <SonnerToaster
      className="bg-bg-100 rounded-md shadow-md border border-solid border-ui-20"
      {...filterDomProps(rest)}
    />
  );
};

export const toast = sonnerToast;
