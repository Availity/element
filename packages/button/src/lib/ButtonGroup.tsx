import { default as MUIButtonGroup, ButtonGroupProps as MUIButtonGroupProps } from '@mui/material/ButtonGroup';

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    tertiary: true;
  }
}

export type ButtonGroupProps = Omit<
  MUIButtonGroupProps,
  'color' | 'disableElevation' | 'disableFocusRipple' | 'disableRipple' | 'variant'
>;

const overrideProps = {
  disableElevation: true,
  disableFocusRipple: true,
  disableRipple: true,
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <MUIButtonGroup {...props} {...overrideProps} variant="contained" color="tertiary" />;
};
