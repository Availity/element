import MuiStepButton, { StepButtonProps as MuiStepButtonProps } from '@mui/material/StepButton';

export type StepButtonProps = Omit<
  MuiStepButtonProps,
  'centerRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef'
>;

export const StepButton = ({ children, ...rest }: StepButtonProps): React.JSX.Element => {
  return (
    <MuiStepButton {...rest} disableRipple disableTouchRipple>
      {children}
    </MuiStepButton>
  );
};
