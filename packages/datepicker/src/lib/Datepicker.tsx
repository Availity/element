import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';
import type {} from '@mui/x-date-pickers/AdapterDayjs';

export type DatepickerProps = {
  value: Dayjs | null | undefined;
  /** Props applied to the `TextField` component */
  FieldProps?: TextFieldProps;
  /** Determines where the Calendar will be placed when opened.
   * @default bottom-start
   */
  placement?: 'bottom-start' | 'bottom' | 'bottom-end';
} & Omit<
  MuiDatePickerProps<Dayjs, false>,
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

const paperProps = { elevation: 8, variant: 'elevation', sx: { marginTop: '4px' } } as const;

const PickerTextField = (params: TextFieldProps) => {
  if (params.inputProps) {
    params.inputProps.placeholder = 'MM/DD/YYYY';
  }

  return <TextField {...params} />;
};

export const Datepicker = ({ FieldProps, placement = 'bottom-start', ...props }: DatepickerProps): JSX.Element => {
  return (
    <MuiDatePicker
      {...props}
      slotProps={{
        desktopPaper: paperProps,
        mobilePaper: paperProps,
        textField: FieldProps,
        popper: {
          placement,
        },
      }}
      slots={{
        textField: PickerTextField,
      }}
    />
  );
};
