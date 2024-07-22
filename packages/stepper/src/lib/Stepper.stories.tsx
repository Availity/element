// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@availity/mui-button';
import { Typography } from '@availity/mui-typography';
import { Box } from '@availity/mui-layout';

import { Stepper, StepperProps } from './Stepper';
import { Step } from './Step';
import { StepLabel } from './StepLabel';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;

const steps = ['Select', 'Another Step', 'Form Data', 'Create a new one'];

export const _Stepper: StoryObj<typeof Stepper> = {
  render: (args: StepperProps) => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const isStepOptional = (step: number) => {
      return step > 1;
    };

    const isStepSkipped = (step: number) => {
      return skipped.has(step);
    };

    const isStepError = (step: number) => {
      return step === 2 && activeStep < 2;
    };

    const isStepWarning = (step: number) => {
      return step === 3 && activeStep < 3;
    };

    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    return (
      <Box maxWidth="75vw" marginX="auto">
        <Stepper activeStep={activeStep} {...args}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode; error?: boolean; warning?: boolean } = {};

            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            if (isStepError(index)) {
              labelProps.error = true;
            }

            if (isStepWarning(index)) {
              labelProps.warning = true;
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button color="tertiary" onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="secondary" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button color={activeStep === steps.length - 1 ? 'primary' : 'secondary'} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    );
  },
  args: {},
};

export const _StepLabel: StoryObj<typeof StepLabel> = {
  render: (args) => <StepLabel {...args} />,
  args: {
    children: 'Step Label',
  },
};

export const _Step: StoryObj<typeof Step> = {
  render: (args) => (
    <Stepper>
      <Step {...args}>
        <StepLabel>Label</StepLabel>
      </Step>
    </Stepper>
  ),
};
