import { styled } from "@envelope/styled/jsx";
import { RecipeDefinition } from "@envelope/styled/types/recipe";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const contentRecipe: RecipeDefinition<{}> = {
  base: {
    bg: "bg.100",
    minWidth: "40",
    transition: "all 0.2s",
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

export const Menu = styled(DropdownMenu.Root);
export const MenuTrigger = styled(DropdownMenu.Trigger);
export const MenuContent = styled(DropdownMenu.Content, contentRecipe);
export const MenuGroup = styled(DropdownMenu.Group);
export const MenuItem = styled(DropdownMenu.Item);
export const MenuLabel = styled(DropdownMenu.Label);
export const MenuSeparator = styled(DropdownMenu.Separator);
export const MenuArrow = styled(DropdownMenu.Arrow);

// submenu
export const SubMenu = styled(DropdownMenu.Sub);
export const SubMenuTrigger = styled(DropdownMenu.SubTrigger);
export const SubMenuContent = styled(DropdownMenu.SubContent, contentRecipe);
