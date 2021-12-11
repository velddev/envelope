import {MotionBox, ThemeProvider} from "../src";
import {Box, VStack, Text, Divider} from "@chakra-ui/react";
import {Transition} from "../src/components/MotionBox/transitions";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const contextTitleToReadableTitle = (title = '') => {
  return title.replace('/', ' - ')
}

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider>
        <VStack align="start" spacing={4}>
          <VStack align="start">
            <Text textStyle="heading.sm">{contextTitleToReadableTitle(context.title)}</Text>
            {context.description && <Text textStyle="paragraph.md" color="ui.40">{context.description}</Text>}
          </VStack>
          <Divider/>
          <Box borderWidth="2px" borderStyle="dashed" borderColor={context.hideGuidelines ? "transparent" : "ui.5"} rounded="lg" boxSize="full" p={4} >
            <MotionBox boxSize="full" initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={Transition.Default}>
              <Story {...context} />
            </MotionBox>
          </Box>
        </VStack>
      </ThemeProvider>
    );
  },
]