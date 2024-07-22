import MuiStepper, { StepperProps as MuiStepperProps } from '@mui/material/Stepper';

export type StepperProps = Omit<MuiStepperProps, 'alternativeLabel' | 'elevation'>;

export const Stepper = ({ children, orientation, ...rest }: StepperProps): JSX.Element => {
  const alternativeLabel = orientation !== 'vertical';

  return (
    <MuiStepper {...rest} orientation={orientation} alternativeLabel={alternativeLabel}>
      {children}
    </MuiStepper>
  );
};
