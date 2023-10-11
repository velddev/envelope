import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { getTheme } from "../src/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={extendTheme(getTheme())}>
      <Container>
        <Story />
      </Container>
    </ChakraProvider>
  ),
]