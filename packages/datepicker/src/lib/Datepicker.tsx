import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

export type DatepickerProps = {
  value: Dayjs | string | null;
  name?: string;
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
  | 'value'
>;

export const Datepicker = forwardRef<HTMLDivElement, DatepickerProps>(
  ({ size, helperText, helpTopicId, ...props }, ref): JSX.Element => {
    return (
      <MuiDatePicker
        ref={ref}
        {...props}
        renderInput={(params) => {
          if (params.inputProps) {
            params.inputProps.placeholder = 'MM/DD/YYYY';
          }

          return <TextField helperText={helperText} helpTopicId={helpTopicId} {...params} size={size} />;
        }}
      />
    );
  }
);
