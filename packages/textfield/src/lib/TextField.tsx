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
} & Pick<FormLabelProps, 'helpTopicId'> &
  Omit<MuiTextFieldProps, 'variant'>;

export const TextField = forwardRef<HTMLDivElement | HTMLInputElement, TextFieldProps>((props, ref) => {
  const { InputProps, helpTopicId, InputLabelProps, FormHelperTextProps, SelectProps, required, ...rest } = props;

  return (
    <MuiTextField
      {...rest}
      InputProps={{ ...InputProps, ...InputPropOverrides, 'aria-required': required }}
      InputLabelProps={{ component: FormLabel, helpTopicId: helpTopicId, shrink: true, required, ...InputLabelProps }}
      FormHelperTextProps={{ component: FormHelperText, ...FormHelperTextProps }}
      SelectProps={{ ...SelectProps, ...SelectPropOverrides }}
      ref={ref}
    />
  );
});
