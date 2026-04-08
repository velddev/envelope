import React, { forwardRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useDisclosure } from "../../hooks/useDisclosure";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

const contentClasses =
  "py-2 bg-bg-100 transition-all duration-200 border border-solid border-ui-20 rounded-md data-[side=top]:animate-slide-down data-[side=bottom]:animate-slide-up data-[side=left]:animate-slide-right data-[side=right]:animate-slide-left";

const itemClasses = "flex px-2 py-1 cursor-pointer hover:bg-ui-5 outline-none";

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

export const MenuPortal = DropdownMenu.Portal;
export const MenuTrigger = DropdownMenu.Trigger;

export const MenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenu.DropdownMenuContentProps & Record<string, any>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Content
    ref={ref}
    className={cn(contentClasses, className)}
    {...filterDomProps(props)}
  />
));
MenuContent.displayName = "MenuContent";

export const MenuGroup = DropdownMenu.Group;

export const MenuItem = forwardRef<
  HTMLDivElement,
  DropdownMenu.DropdownMenuItemProps & Record<string, any>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={cn(itemClasses, className)}
    {...filterDomProps(props)}
  />
));
MenuItem.displayName = "MenuItem";

export const MenuLabel = DropdownMenu.Label;

export const MenuSeparator = forwardRef<
  HTMLDivElement,
  DropdownMenu.DropdownMenuSeparatorProps & Record<string, any>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Separator
    ref={ref}
    className={cn("my-1 h-px bg-ui-20", className)}
    {...filterDomProps(props)}
  />
));
MenuSeparator.displayName = "MenuSeparator";

export const MenuArrow = DropdownMenu.Arrow;

export const SubMenu = DropdownMenu.Sub;
export const SubMenuTrigger = DropdownMenu.SubTrigger;

export const SubMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenu.DropdownMenuSubContentProps & Record<string, any>
>(({ className, ...props }, ref) => (
  <DropdownMenu.SubContent
    ref={ref}
    className={cn(contentClasses, className)}
    {...filterDomProps(props)}
  />
));
SubMenuContent.displayName = "SubMenuContent";
