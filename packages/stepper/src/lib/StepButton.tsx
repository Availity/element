import MuiStepButton, { StepButtonProps as MuiStepButtonProps } from '@mui/material/StepButton';

export type StepButtonProps = Omit<
  MuiStepButtonProps,
  'centerRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef'
>;

export const StepButton = ({ children, ...rest }: StepButtonProps): JSX.Element => {
  return (
    <MuiStepButton {...rest} tabIndex={0} disableRipple disableTouchRipple>
      {children}
    </MuiStepButton>
  );
};
