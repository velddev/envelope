import { styled } from "@envelope-ui/styled/jsx";

const base = {
  borderWidth: "1px",
  borderColor: "ui.20",
};

const padding = {
  px: "4",
  py: "2",
};

export const Table = styled("table", {
  base: {
    color: "ui.80",
    borderCollapse: "collapse",
  },
});

export const Th = styled("th", {
  base: {
    ...base,
    ...padding,
  },
});

export const Td = styled("td", {
  base: {
    ...base,
    ...padding,
  },
});

export const Thead = styled("thead", {
  base: {
    ...base,
    fontWeight: "bold",
  },
});

export const Tbody = styled("tbody");
export const Tr = styled("tr");
export const Tfoot = styled("tfoot");
