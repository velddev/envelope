import { styled } from "@envelope-ui/styled/jsx";

export const UnorderedList = styled("ul", {
  base: {
    listStyleType: "circle",
    listStyle: "inside",
  },
});

export const OrderedList = styled("ol");

export const ListItem = styled("li", {
  base: {
    color: "ui.80",
  },
});
