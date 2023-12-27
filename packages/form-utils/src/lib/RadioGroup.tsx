import { RadioGroup as MuiRadioGroup, RadioGroupProps as MuiRadioGroupProps } from '@mui/material';

export interface RadioGroupProps extends MuiRadioGroupProps {
  children?: React.ReactNode;
}

export const RadioGroup = ({ children, ...rest }: RadioGroupProps): JSX.Element => {
  return <MuiRadioGroup {...rest}>{children}</MuiRadioGroup>;
};
