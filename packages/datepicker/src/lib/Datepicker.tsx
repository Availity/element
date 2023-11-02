import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

export type DatepickerProps = {
  label?: React.ReactNode;
  InputProps?: TextFieldProps;
  size?: 'small' | 'medium';
} & Omit<
  MuiDatePickerProps<Dayjs, Dayjs>,
  | 'components'
  | 'componentsProps'
  | 'desktopModeMediaQuery'
  | 'DialogProps'
  | 'InputProps'
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

// FIXME: types are throwing an error

export const Datepicker = ({ size, ...props }: DatepickerProps): JSX.Element => {
  return (
    <MuiDatePicker
      {...props}
      renderInput={({ InputProps, ...params }) => {
        if (params.inputProps) {
          params.inputProps.placeholder = 'MM/DD/YYYY';
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return <TextField {...params} {...InputProps} size={size} />;
      }}
    />
  );
};
