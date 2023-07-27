import type { ReactNode } from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import MuiLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

export type TextFieldProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
} & Omit<MuiTextFieldProps, 'FormHelperTextProps' | 'select' | 'SelectProps' | 'style'>;

/**
 * TODO:\n
 * prefix/suffix https://mui.com/material-ui/react-text-field/#input-adornments
 * label stuff
 */

export const TextField = ({
  name,
  id,
  inputProps,
  label,
  disabled,
  prefix,
  suffix,
  ...rest
}: TextFieldProps): JSX.Element => {
  const inputId = id || name;
  const labelId = `${inputId}-label`;

  return (
    <>
      <MuiLabel disabled={disabled} htmlFor={inputId} id={labelId}>
        {label}
      </MuiLabel>
      <MuiTextField
        inputProps={{ ...inputProps, id: inputId, 'aria-labelledby': labelId }}
        disabled={disabled}
        InputProps={{
          startAdornment: prefix ? <InputAdornment position="start">{prefix}</InputAdornment> : undefined,
          endAdornment: suffix ? <InputAdornment position="end">{suffix}</InputAdornment> : undefined,
        }}
        {...rest}
      />
    </>
  );
};
