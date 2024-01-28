import { styled } from "@envelope-ui/styled/jsx";
import { cva } from "@envelope-ui/styled/css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { useDisclosure } from "src/hooks";

const contentRecipe = cva({
  base: {
    py: "2",
    bg: "bg.100",
    transition: "all 0.2s",
    borderWidth: "1px",
    borderColor: "ui.20",
    rounded: "md",
    "&[data-side='top']": {
      animation: "slideDown 0.2s ease-in-out",
    },
    "&[data-side='bottom']": {
      animation: "slideUp 0.2s ease-in-out",
    },
    "&[data-side='left']": {
      animation: "slideRight 0.2s ease-in-out",
    },
    "&[data-side='right']": {
      animation: "slideLeft 0.2s ease-in-out",
    },
  },
});

const itemRecipe = cva({
  base: {
    display: "flex",
    px: "2",
    py: "1",
    cursor: "pointer",
    _hover: {
      bg: "ui.5",
    },
  },
});

type MenuProps = DropdownMenu.DropdownMenuProps;
export const Menu = ({ children, ...props }: MenuProps) => {
  const menu = useDisclosure();
  return (
    <DropdownMenu.Root
      open={menu.isOpen}
      onOpenChange={(v) => (v ? menu.onOpen() : menu.onClose())}
      {...props}
    >
      {children}
    </DropdownMenu.Root>
  );
};

export const MenuPortal = styled(DropdownMenu.Portal);
export const MenuTrigger = styled(DropdownMenu.Trigger);
export const MenuContent = styled(DropdownMenu.Content, contentRecipe);
export const MenuGroup = styled(DropdownMenu.Group);
export const MenuItem = styled(DropdownMenu.Item, itemRecipe);
export const MenuLabel = styled(DropdownMenu.Label);
export const MenuSeparator = styled(DropdownMenu.Separator, {
  base: {
    my: "1",
    h: "1px",
    bg: "ui.20",
  },
});
export const MenuArrow = styled(DropdownMenu.Arrow);

// submenu
export const SubMenu = styled(DropdownMenu.Sub);
export const SubMenuTrigger = styled(DropdownMenu.SubTrigger);
export const SubMenuContent = styled(DropdownMenu.SubContent, contentRecipe);
