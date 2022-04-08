import React, { useState } from "react";
import { VStack, Divider, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { createMeta, MetaType } from "../../utils/storybook";
import { Stepper } from "../../components";

export default createMeta({
  type: MetaType.Component,
  name: "Stepper",
  description: "A stepper component, used for the Carousel component.",
  component: Stepper,
});

export const _Stepper = () => {
  const [step, setStep] = useState(0);

  return (
    <VStack align="start" spacing={8}>
      <Stepper index={step} onIndexChange={setStep} pageCount={10} />
      <VStack align="start" spacing={4}>
        <Text textStyle="label.md">Stepper with custom step</Text>
        <Divider />
        <Stepper
          index={step}
          onIndexChange={setStep}
          pageCount={10}
          step={(index) => (
            <Button onClick={() => setStep(index)} bg={index === step ? "accent.100" : "ui.5"}>
              {index}
            </Button>
          )}
        />
      </VStack>
    </VStack>
  );
};
