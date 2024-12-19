import MuiStepper, { StepperProps as MuiStepperProps } from '@mui/material/Stepper';

export type StepperProps = {
  scrollButtons?: boolean;
} & Omit<MuiStepperProps, 'alternativeLabel' | 'elevation'>;

const scrollButtonStyles = {
  overflow: 'auto',
  whiteSpace: 'nowrap',
};

export const Stepper = ({ children, orientation, scrollButtons, sx, ...rest }: StepperProps): JSX.Element => {
  const alternativeLabel = orientation !== 'vertical';

  if (scrollButtons) {
    sx = { ...sx, ...scrollButtonStyles };
  }

  return (
    <MuiStepper {...rest} orientation={orientation} alternativeLabel={alternativeLabel} sx={sx}>
      {children}
    </MuiStepper>
  );
};
