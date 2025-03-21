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
import { styled } from '@mui/material/styles';

export type TextFieldProps = {
  FormHelperTextProps?: FormHelperTextProps;
  InputLabelProps?: FormLabelProps;
  InputProps?: InputProps;
  SelectProps?: SelectProps;
  /** If `true`, the input will take up the full width of its container. @default true */
  fullWidth?: boolean;
  /** if `true`, the character counter will display. The maxLength is taken from the `inputProps.maxLength` prop. @default false */
  showCharacterCount?: boolean;
} & Pick<FormLabelProps, 'helpTopicId'> &
  Omit<MuiTextFieldProps, 'fullWidth' | 'variant'>;

const SelectPlaceholder = styled('span', {
  name: 'MuiTextField',
  slot: 'SelectPlaceholder',
  overridesResolver: (props, styles) => styles.avFilled,
})(({ theme }) => ({ opacity: 1, color: theme.palette.grey[400] }));

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
    ...rest
  } = props;
  const [openDetected, setOpenDetected] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const resolvedProps = (props: Record<string, unknown>) =>
    !props || Object.keys(props).length === 0 ? undefined : props;

  return (
    <MuiTextField
      {...rest}
      onChange={(event) => {
        setCharCount(event.target.value.length);
        if (rest.onChange) rest.onChange(event);
      }}
      helperText={
        showCharacterCount ? (
          <Grid container justifyContent="space-between">
            {helperText}{' '}
            <span style={{ marginLeft: 4 }}>
              {/* @ts-expect-error I'm not sure why maxLength is undefined here, but it works.  */}
              {charCount || 0}/{inputProps?.maxLength || rest.slotProps?.htmlInput?.maxLength}
            </span>
          </Grid>
        ) : (
          helperText
        )
      }
      slots={{ formHelperText: FormHelperText }}
      slotProps={{
        input: resolvedProps({ ...InputProps, ...InputPropOverrides, ...rest.slotProps?.input }),
        htmlInput: resolvedProps({ 'aria-required': required, ...inputProps, ...rest.slotProps?.htmlInput }),
        select: resolvedProps({
          displayEmpty: !!rest.placeholder,
          renderValue: (value: unknown) =>
            rest.placeholder && (!value || (Array.isArray(value) && value.length === 0)) ? (
              <SelectPlaceholder className="MuiSelect-placeholder">{rest.placeholder}</SelectPlaceholder>
            ) : (
              value
            ),
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
        formHelperText: resolvedProps({ component: 'div', ...FormHelperTextProps, ...rest.slotProps?.formHelperText }),
      }}
      ref={ref}
    />
  );
});
