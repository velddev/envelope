import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Stepper, StepperProps } from "..";

export default {
  name: "Stepper",
  description: "A stepper component, used for the Carousel component.",
  component: Stepper,
};

const Template = (args: StepperProps) => {
  const [step, setStep] = useState(0);

  return <Stepper index={step} onIndexChange={setStep} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  pageCount: 10,
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  ...Default.args,
  step: (index, ctx) => (
    <Button onClick={ctx.onClick} variant={ctx.isActive ? "primary" : "solid"}>
      {index}
    </Button>
  ),
};
