import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { CalendarDaysIcon } from '@availity/mui-icon';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';
import type {} from '@mui/x-date-pickers/AdapterDayjs';

export type DatepickerProps = {
  value?: Dayjs | null | undefined;
  /** Props applied to the `TextField` component */
  FieldProps?: TextFieldProps;
  /** Determines where the Calendar will be placed when opened.
   * @default bottom-start
   */
  placement?: 'bottom-start' | 'bottom' | 'bottom-end';
  /** Determines if the clear button appears in the action bar */
  clearable?: boolean;
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

const PickerTextField = (params: TextFieldProps) => <TextField {...params} placeholder="MM/DD/YYYY" />;

export const Datepicker = ({
  FieldProps,
  placement = 'bottom-start',
  clearable,
  ...props
}: DatepickerProps): JSX.Element => {
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
        textField: PickerTextField,
      }}
    />
  );
};
