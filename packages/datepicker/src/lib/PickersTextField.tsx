import { TextFieldProps } from '@availity/mui-textfield';
import type {} from '@mui/x-date-pickers/AdapterDayjs';
import { PickersTextField as MuiPickersTextField, PickersTextFieldProps as MuiPickersTextFieldProps } from '@mui/x-date-pickers/PickersTextField';
import { FormHelperText, FormLabel } from '@availity/mui-form-utils';
import { forwardRef } from 'react';

export type AvTextFieldAdditionalProps = Pick<TextFieldProps, 'error' | 'helpTopicId' | 'helperText' | 'inputProps' | 'label' | 'required'>;

export const PickersTextField = forwardRef((props: MuiPickersTextFieldProps & AvTextFieldAdditionalProps, ref: React.Ref<HTMLDivElement>) => {
  const {helperText=<></>, helpTopicId, InputLabelProps: InputLabelPropsIN, inputProps: inputPropsIN, FormHelperTextProps: FormHelperTextPropsIN,  required, ...params} = props;
  const PickersLabel = (props: MuiPickersTextFieldProps["InputLabelProps"] & Pick<TextFieldProps, 'helpTopicId'>) => <FormLabel helpTopicId={helpTopicId} required={required} {...props}/>;
  return (
    <MuiPickersTextField
      {...params}
      helperText={helperText}
      InputLabelProps= {{
        component: PickersLabel,
        ...InputLabelPropsIN,
      }}
      inputProps= {{
        'aria-required': required,
        ...inputPropsIN
      }}
      FormHelperTextProps= {{
        component: FormHelperText,
        error: params.error,
        ...FormHelperTextPropsIN,
      }}
      ref={ref}
    />
  )
});
