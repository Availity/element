// Each exported component in the package should have its own stories file
import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@availity/mui-button';
import { Typography } from '@availity/mui-typography';
import { Box } from '@availity/mui-layout';
import { Paper } from '@availity/mui-paper';

import { Stepper, Step, StepLabel, StepButton } from '..';

const meta: Meta<typeof StepButton> = {
  title: 'Components/Stepper/StepButton',
  component: StepButton,
  tags: ['autodocs'],
};

export default meta;

export const _StepButton: StoryObj<typeof StepButton> = {
  render: (args) => (
    <Box>
      <Paper sx={{ padding: '2rem' }}>
        <Stepper>
          <Step>
            <StepButton {...args} />
          </Step>
        </Stepper>
      </Paper>
    </Box>
  ),
  args: {
    'aria-label': '1',
  },
};

// credit: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const steps = ['First', 'Second', 'Third', 'Final'];

export const _Stepper: StoryObj<typeof StepButton> = {
  render: (args) => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const { width } = useWindowDimensions();

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

    const handleStep = (step: number) => () => {
      setActiveStep(step);
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
      <Box sx={{ maxWidth: '75vw', marginX: 'auto' }}>
        <Paper sx={{ padding: '2rem' }}>
          <Stepper activeStep={activeStep} orientation={width < 600 ? 'vertical' : 'horizontal'}>
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
                  <StepButton color="inherit" onClick={handleStep(index)} {...args}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </StepButton>
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
        </Paper>
      </Box>
    );
  },
  args: {},
};
