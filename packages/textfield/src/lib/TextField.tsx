import { forwardRef } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { FormLabel } from '@availity/mui-form-label';
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
    return (
      <FormControl size="small" fullWidth={fullWidth}>
        {label && (
          <FormLabel htmlFor={id} required={required} error={!!error} disabled={rest.disabled}>
            {label}
          </FormLabel>
        )}
        <Input
          inputRef={ref}
          id={id}
          aria-describedby={`${id}-helper-text`}
          error={!!error}
          startAdornment={
            startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : undefined
          }
          endAdornment={endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> : undefined}
          {...rest}
        />
        <FormHelperText id={`${id}-helper-text`} error={error}>
          {helperText}
        </FormHelperText>
      </FormControl>
    );
  }
);

TextField.displayName = 'TextField';
