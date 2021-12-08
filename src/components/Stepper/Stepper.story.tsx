import React, {useState} from "react";
import {Stepper} from "./index";
import {createMeta, MetaType} from "../../utils/storybook";
import {VStack} from "@chakra-ui/layout";
import {Button, Divider, Text} from "@chakra-ui/react";

export default createMeta({
  type: MetaType.Component,
  name: "Stepper",
  description: "A stepper component, used for the Carousel component.",
  component: Stepper
});

export const _Stepper = () => {
  const [step, setStep] = useState(0)

  return (
    <VStack align="start" spacing={8}>
      <Stepper index={step} onIndexChange={setStep} pageCount={10} />
      <VStack align="start" spacing={4}>
        <Text textStyle="label.md">Stepper with custom step</Text>
        <Divider/>
        <Stepper
          index={step}
          onIndexChange={setStep}
          pageCount={10}
          step={(index) => <Button onClick={() => setStep(index)} children={index} bg={index === step ? "accent.100" : "ui.5"}/>}
        />
      </VStack>
    </VStack>
  )
};