import { styled } from "@envelope/styled/jsx";
import { cva } from "@envelope/styled/css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

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

export const Menu = styled(DropdownMenu.Root);
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
