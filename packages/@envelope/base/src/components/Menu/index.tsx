import { styled } from "@envelope/styled/jsx";
import { RecipeDefinition } from "@envelope/styled/types/recipe";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const contentRecipe: RecipeDefinition<{}> = {
  base: {
    py: "2",
    bg: "bg.100",
    transition: "all 0.2s",
    animationDuration: "0.2s",
    borderWidth: "1px",
    borderColor: "ui.20",
    rounded: "md",
    ['& [data-side="top"]']: {
      animationName: "slideDown",
    },
    ['& [data-side="right"]']: {
      animationName: "slideLeft",
    },
    ['& [data-side="bottom"]']: {
      animationName: "slideUp",
    },
    ['& [data-side="left"]']: {
      animationName: "slideRight",
    },
  },
};

const itemRecipe: RecipeDefinition<{}> = {
  base: {
    display: "flex",
    px: "2",
    py: "1",
    _hover: {
      bg: "ui.5",
      border: "none",
      outline: "none",
    },
  },
};

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
