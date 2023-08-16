import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import { InputLabel, FormControl, OutlinedInput, FormHelperText } from '@mui/material';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import MuiLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

export type TextFieldProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
} & Omit<MuiTextFieldProps, 'FormHelperTextProps' | 'select' | 'SelectProps' | 'style'>;

export const TextField = forwardRef(
  (
    { fullWidth = true, error, sx, inputSx, label, required, InputLabelProps, InputProps, helperText, ...rest },
    ref
  ) => {
    const htmlFor = 'input-prefix';
    // const _formControlSx = useMemo(() => ({ marginBottom: 2, ...sx }), [sx]);
    // const _inputSx = useMemo(() => ({ backgroundColor: 'white', ...inputSx }), [inputSx]);
    return (
      <FormControl size="small" sx={{ marginBottom: 2 }} fullWidth={fullWidth}>
        {label && (
          <InputLabel
            htmlFor={htmlFor}
            sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end' }}
            required={required}
            error={!!error}
            disabled={rest.disabled}
            {...InputLabelProps}
          >
            {label}
          </InputLabel>
        )}
        <OutlinedInput
          inputRef={ref}
          id={htmlFor}
          // sx={_inputSx}
          aria-describedby={`${htmlFor}-helper-text`}
          error={!!error}
          {...InputProps}
          {...rest}
        />
        <FormHelperText id={`${htmlFor}-helper-text`} error={error}>
          {helperText}
        </FormHelperText>
      </FormControl>
    );
  }
);

// export const TextField = ({
//   name,
//   id,
//   inputProps,
//   label,
//   disabled,
//   prefix,
//   suffix,
//   ...rest
// }: TextFieldProps): JSX.Element => {
//   const inputId = id || name;
//   const labelId = `${inputId}-label`;

//   return (
//     <>
//       <MuiLabel disabled={disabled} htmlFor={inputId} id={labelId}>
//         {label}
//       </MuiLabel>
//       <MuiTextField
//         inputProps={{ ...inputProps, id: inputId, 'aria-labelledby': labelId }}
//         disabled={disabled}
//         InputProps={{
//           startAdornment: prefix ? <InputAdornment position="start">{prefix}</InputAdornment> : undefined,
//           endAdornment: suffix ? <InputAdornment position="end">{suffix}</InputAdornment> : undefined,
//         }}
//         size="small"
//         {...rest}
//       />
//     </>
//   );
// };
