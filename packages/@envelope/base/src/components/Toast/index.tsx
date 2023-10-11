import { cva } from "@envelope/styled/css";
import React from "react";
import { toast as sonnerToast, Toaster as SonnerToaster } from "sonner";

const toastBody = cva({
  base: {
    bg: "bg.100",
    borderRadius: "md",
    boxShadow: "md",
    borderWidth: "1px",
    borderColor: "ui.20",
    borderStyle: "solid",
  },
});

type ToasterProps = Parameters<typeof SonnerToaster>[0];

export const Toaster = ({ ...rest }: ToasterProps) => {
  return <SonnerToaster className={toastBody()} {...rest} />;
};
export const toast = sonnerToast;
