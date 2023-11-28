import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

export type DatepickerProps = {
  /** Props applied to the `TextField` component */
  FieldProps?: TextFieldProps;
} & Omit<
  MuiDatePickerProps<Dayjs, Dayjs>,
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
  | 'ToolbarComponent'
  | 'toolbarFormat'
  | 'toolbarPlaceholder'
  | 'toolbarTitle'
  | 'TransitionComponent'
>;

export const Datepicker = ({ FieldProps, ...props }: DatepickerProps): JSX.Element => {
  return (
    <MuiDatePicker
      {...props}
      renderInput={(params) => {
        if (params.inputProps) {
          params.inputProps.placeholder = 'MM/DD/YYYY';
        }

        return <TextField {...params} {...FieldProps} />;
      }}
    />
  );
};
