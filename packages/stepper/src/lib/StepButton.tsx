import MuiStepButton, { StepButtonProps as MuiStepButtonProps } from '@mui/material/StepButton';

export type StepButtonProps = MuiStepButtonProps;

export const StepButton = ({ children, ...rest }: StepButtonProps): JSX.Element => {
  return <MuiStepButton {...rest}>{children}</MuiStepButton>;
};
