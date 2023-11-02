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

const iconStyles = { marginRight: '2px', paddingTop: '2px' };

/ *
export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  ({ error, helperText, id, label, startAdornment, endAdornment, required, size, ...rest }: TextFieldProps, ref) => {
    const labelId = `${id}-label`;
    const helperId = `${id}-helper-text`;

    return (
      <FormControl size="small">
        {label && (
          <FormLabel id={labelId} htmlFor={id} required={required} error={!!error} disabled={rest.disabled}>
            {label}
          </FormLabel>
        )}
        <Input
          inputRef={ref}
          id={id}
          aria-describedby={helperId}
          error={!!error}
          startAdornment={
            startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : undefined
          }
          endAdornment={endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> : undefined}
          size={size}
          {...rest}
        />
        <FormHelperText id={helperId} error={error} disabled={rest.disabled}>
          {error && <WarningTriangleIcon sx={iconStyles} />}
          {helperText}
        </FormHelperText>
      </FormControl>
    );
  }
);
*/


export type TextFieldProps = {
  FormHelperTextProps?: FormHelperTextProps;
  InputLabelProps?: FormLabelProps;
  InputProps?: InputProps;
  SelectProps?: SelectProps;
} & Pick<FormLabelProps, 'helpTopicId'> &
  Omit<MuiTextFieldProps, 'variant'>;

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  const { InputProps, helpTopicId, InputLabelProps, FormHelperTextProps, SelectProps, ...rest } = props;
  return (
    <MuiTextField
      {...rest}
      InputProps={{ ...InputProps, ...InputPropOverrides }}
      InputLabelProps={{ component: FormLabel, helpTopicId: helpTopicId, shrink: true, ...InputLabelProps }}
      FormHelperTextProps={{ component: FormHelperText, ...FormHelperTextProps }}
      SelectProps={{ ...SelectProps, ...SelectPropOverrides }}
      ref={ref}
    />
  );
});
