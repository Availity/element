import { forwardRef } from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import {
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  FormLabelProps,
  InputPropOverrides,
  InputProps,
  SelectPropOverrides,
  SelectProps,
} from '@availity/mui-form-utils';

export type TextFieldProps = {
  FormHelperTextProps?: FormHelperTextProps;
  InputLabelProps?: FormLabelProps;
  InputProps?: InputProps;
  SelectProps?: SelectProps;
  /** If `true`, the input will take up the full width of its container. @default true */
  fullWidth?: boolean;
} & Pick<FormLabelProps, 'helpTopicId'> &
  Omit<MuiTextFieldProps, 'fullWidth' | 'variant'>;

export const TextField = forwardRef<HTMLDivElement | HTMLInputElement, TextFieldProps>((props, ref) => {
  const { InputProps, helpTopicId, InputLabelProps, FormHelperTextProps, required, SelectProps, inputProps, ...rest } =
    props;

  return (
    <MuiTextField
      {...rest}
      slotProps={{
        input: { ...InputProps, ...InputPropOverrides },
        htmlInput: { 'aria-required': required, ...inputProps },
        select: { ...SelectProps, ...SelectPropOverrides },
        inputLabel: { component: FormLabel, helpTopicId: helpTopicId, required, shrink: true, ...InputLabelProps },
        formHelperText: { component: FormHelperText, ...FormHelperTextProps },
      }}
      ref={ref}
    />
  );
});
