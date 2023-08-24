import { forwardRef } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { FormLabel } from '@availity/mui-form-utils';
import { Input, InputProps } from '@availity/mui-input';

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
  | 'fullwidth'
  | 'inputProps'
>;

export const TextField = forwardRef(
  (
    { error, fullWidth, helperText, id, label, startAdornment, endAdornment, required, ...rest }: TextFieldProps,
    ref
  ) => {
    const labelId = `${id}-label`;
    const helperId = `${id}-helper-text`;

    return (
      <FormControl size="small" fullWidth={fullWidth}>
        {label && (
          <FormLabel id={labelId} htmlFor={id} required={required} error={!!error} disabled={rest.disabled}>
            {label}
          </FormLabel>
        )}
        <Input
          inputRef={ref}
          id={id}
          aria-labelledby={labelId}
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
