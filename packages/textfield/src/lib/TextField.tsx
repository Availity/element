import { forwardRef } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { FormLabel, Input, InputProps } from '@availity/mui-form-utils';

export type TextFieldProps = {
  helperText?: string;
} & Omit<
  InputProps,
  | 'aria-describedby'
  | 'classes'
  | 'disableInjectingGlobalStyles'
  | 'color'
  | 'multiline'
  | 'notched'
  | 'fullWidth'
  | 'inputProps'
>;

export const TextField = forwardRef(
  ({ error, helperText, id, label, startAdornment, endAdornment, required, ...rest }: TextFieldProps, ref) => {
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
          {...rest}
        />
        <FormHelperText id={helperId} error={error}>
          {helperText}
        </FormHelperText>
      </FormControl>
    );
  }
);

TextField.displayName = 'TextField';
