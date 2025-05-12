import { forwardRef, useState } from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import {
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  FormLabelProps,
  InputPropOverrides,
  InputProps,
  SelectAccessibilityOverrides,
  SelectPropOverrides,
  SelectProps,
} from '@availity/mui-form-utils';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

export type TextFieldProps = {
  FormHelperTextProps?: FormHelperTextProps;
  InputLabelProps?: FormLabelProps;
  InputProps?: InputProps;
  SelectProps?: SelectProps;
  /** If `true`, the input will take up the full width of its container. @default true */
  fullWidth?: boolean;
  /** if `true`, the character counter will display. The maxLength is taken from the `inputProps.maxLength` prop. @default false */
  showCharacterCount?: boolean;
  /** If `true`, the input maxLength can be exceeded. If validation is required, you'll have to do it manually. @default false */
  displayOverflowMaxLength?: boolean;
} & Pick<FormLabelProps, 'helpTopicId'> &
  Omit<MuiTextFieldProps, 'fullWidth' | 'variant'>;

export type TextFieldFormHelperTextProps = {
  charCount: string;
  helperText: string;
  maxLength: string;
  showCharacterCount: boolean;
} & FormHelperTextProps;

const TextFieldFormHelperText = ({
  charCount,
  helperText,
  maxLength,
  showCharacterCount,
  ...FormHelperTextProps
}: TextFieldFormHelperTextProps) => {
  if (showCharacterCount) {
    return (
      <Grid container justifyContent="space-between" flexWrap="nowrap">
        <FormHelperText {...FormHelperTextProps} sx={{ marginRight: '12px' }}>
          {helperText}
        </FormHelperText>
        <Typography variant="caption" marginTop="4px" lineHeight="1.25rem">
          <Typography component="span" variant="inherit" color={charCount > maxLength ? 'error' : 'textPrimary'}>
            {charCount || 0}
          </Typography>
          /{maxLength}
        </Typography>
      </Grid>
    );
  }

  return <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>;
};

export const TextField = forwardRef<HTMLDivElement | HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    InputProps,
    helpTopicId,
    InputLabelProps,
    FormHelperTextProps,
    required,
    SelectProps,
    inputProps,
    helperText,
    showCharacterCount = false,
    displayOverflowMaxLength = false,
    ...rest
  } = props;
  const [openDetected, setOpenDetected] = useState(false);
  const [charCount, setCharCount] = useState(0);

  // @ts-expect-error I'm not sure why maxLength is undefined in htmlInput, but it works. There's something weird with the type.
  const maxLength = inputProps?.maxLength || rest.slotProps?.htmlInput?.maxLength;

  // @ts-expect-error More htmlInput type issues.
  // slotProps.input is correct place to pass readOnly for class to be applied, but Autocomplete passes it through deprecated inputProps.
  const allReadOnly = InputProps?.readOnly || inputProps?.readOnly || rest.slotProps?.htmlInput?.readOnly || rest.slotProps?.input?.readOnly

  const resolvedProps = (props: Record<string, unknown>) =>
    !props || Object.keys(props).length === 0 ? undefined : props;

  return (
    <MuiTextField
      {...rest}
      onChange={(event) => {
        setCharCount(event.target.value.length);
        if (rest.onChange) rest.onChange(event);
      }}
      helperText={helperText || <></>}
      slots={{ formHelperText: TextFieldFormHelperText }}
      slotProps={{
        input: resolvedProps({
          ...InputProps,
          ...InputPropOverrides,
          ...rest.slotProps?.input,
          readOnly: allReadOnly
        }),
        htmlInput: resolvedProps({
          'aria-required': required,
          ...inputProps,
          ...rest.slotProps?.htmlInput,
          maxLength: !displayOverflowMaxLength ? maxLength : undefined,
        }),
        select: resolvedProps({
          ...SelectProps,
          ...SelectPropOverrides,
          ...SelectAccessibilityOverrides(openDetected, setOpenDetected, SelectProps?.open),
          ...rest.slotProps?.select,
        }),
        inputLabel: resolvedProps({
          component: FormLabel,
          helpTopicId: helpTopicId,
          required,
          shrink: true,
          ...InputLabelProps,
          ...rest.slotProps?.inputLabel,
        }),
        formHelperText: resolvedProps({
          component: 'div',
          ...FormHelperTextProps,
          ...rest.slotProps?.formHelperText,
          charCount,
          helperText,
          maxLength,
          displayOverflowMaxLength,
          showCharacterCount,
        }),
      }}
      ref={ref}
    />
  );
});
