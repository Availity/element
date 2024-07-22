import MuiStepContent, { StepContentProps as MuiStepContentProps } from '@mui/material/StepContent';

export type StepContentProps = MuiStepContentProps;

export const StepContent = ({ children, ...rest }: StepContentProps): JSX.Element => {
  return <MuiStepContent {...rest}>{children}</MuiStepContent>;
};
