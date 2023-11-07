import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

export type DatepickerProps = {
  label?: React.ReactNode;
  size?: 'small' | 'medium';
  helperText?: string;
  helpTopicId?: string;
  InputProps?: TextFieldProps;
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

export const Datepicker = ({ size, helperText, helpTopicId, ...props }: DatepickerProps): JSX.Element => {
  return (
    <MuiDatePicker
      {...props}
      renderInput={(params) => {
        if (params.inputProps) {
          params.inputProps.placeholder = 'MM/DD/YYYY';
        }

        return <TextField helperText={helperText} helpTopicId={helpTopicId} {...params} size={size} />;
      }}
    />
  );
};
