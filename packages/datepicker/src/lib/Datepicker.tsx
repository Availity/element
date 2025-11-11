import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { CalendarDaysIcon } from '@availity/mui-icon';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';
import type {} from '@mui/x-date-pickers/AdapterDayjs';
import { PickersTextField as MuiPickersTextField, PickersTextFieldProps as MuiPickersTextFieldProps } from '@mui/x-date-pickers/PickersTextField';
import { PickerFieldUISlotProps } from '@mui/x-date-pickers/internals';
import { FormHelperText, FormLabel, InputPropOverrides } from '@availity/mui-form-utils';
import { forwardRef } from 'react';

type AvTextFieldAdditionalProps = Pick<TextFieldProps, 'error' | 'helpTopicId' | 'helperText' | 'inputProps' | 'label' | 'required'>;

export type DatepickerProps = {
  value?: Dayjs | null | undefined;
  /** Props applied to the `PickersTextField` component */
  FieldProps?: PickerFieldUISlotProps['textField'] & AvTextFieldAdditionalProps;
  /** Determines where the Calendar will be placed when opened.
   * @default bottom-start
   */
  placement?: 'bottom-start' | 'bottom' | 'bottom-end';
  /** Determines if the clear button appears in the action bar */
  clearable?: boolean;
} & Omit<
  MuiDatePickerProps<false>,
  | 'components'
  | 'componentsProps'
  | 'desktopModeMediaQuery'
  | 'DialogProps'
  | 'OpenPickerButtonProps'
  | 'openTo'
  | 'orientation'
  | 'PaperProps'
  | 'PopperProps'
  | 'reduceAnimations'
  | 'renderInput'
  | 'rifmFormatter'
  | 'showToolbar'
  | 'slots'
  | 'slotProps'
  | 'ToolbarComponent'
  | 'toolbarFormat'
  | 'toolbarPlaceholder'
  | 'toolbarTitle'
  | 'TransitionComponent'
  | 'value'
>;

const paperProps = { elevation: 8, variant: 'elevation', sx: { marginTop: '4px' } } as const;

const PickersTextField = forwardRef((props: MuiPickersTextFieldProps & AvTextFieldAdditionalProps, ref: React.Ref<HTMLDivElement>) => {
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

export const Datepicker = ({
  FieldProps,
  placement = 'bottom-start',
  clearable,
  ...props
}: DatepickerProps): React.JSX.Element => {
  return (
    <MuiDatePicker
      {...props}
      dayOfWeekFormatter={(weekday: Dayjs) => weekday.format('dd')}
      slotProps={{
        actionBar: {
          actions: clearable ? ['clear'] : [],
        },
        desktopPaper: paperProps,
        mobilePaper: {
          ...paperProps,
          'aria-label': FieldProps?.label?.toString() || FieldProps?.inputProps?.['aria-label'] || 'Date picker',
          'aria-labelledby': FieldProps?.inputProps?.['aria-labelledby'] || undefined,
        },
        textField: FieldProps,
        popper: {
          placement,
          'aria-label': FieldProps?.label?.toString() || FieldProps?.inputProps?.['aria-label'] || 'Date picker',
          'aria-labelledby': FieldProps?.inputProps?.['aria-labelledby'] || undefined,
        },
        openPickerIcon: {
          fontSize: 'xsmall',
        },
      }}
      slots={{
        openPickerIcon: CalendarDaysIcon,
        textField: PickersTextField
      }}
    />
  );
};
