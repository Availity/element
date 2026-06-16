import { CalendarDaysIcon } from '@availity/mui-icon';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

import { PickerFieldUISlotProps } from '@mui/x-date-pickers/internals';
import { AvTextFieldAdditionalProps, PickersTextField } from './PickersTextField';

export type DatepickerProps = {
  value?: Dayjs | null | undefined;
  /** Props applied to the `PickersTextField` component */
  FieldProps?: PickerFieldUISlotProps['textField'] & AvTextFieldAdditionalProps;
  /** Determines where the Calendar will be placed when opened.
   * @default bottom-start
   */
  placement?: 'bottom-start' | 'bottom' | 'bottom-end';
  /** Determines if the clear button appears in the action bar and input. _No custom onClear available_ */
  clearable?: boolean;
}
  // TODO: v3 BREAKING CHANGE add onClear and remove action bar clear button
  // & Pick<ExportedPickerFieldUIProps, 'onClear' | 'clearable'>
  & Omit<
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

export const Datepicker = ({
  FieldProps,
  placement = 'bottom-start',
  clearable,
  ...props
}: DatepickerProps): React.JSX.Element => (
    <MuiDatePicker
      {...props}
      dayOfWeekFormatter={(weekday: Dayjs) => weekday.format('dd')}
      slotProps={{
        // TODO: v3 BREAKING CHANGE remove action bar
        actionBar: {
          actions: clearable ? ['clear'] : [],
        },
        desktopPaper: paperProps,
        mobilePaper: {
          ...paperProps,
          'aria-label': FieldProps?.label?.toString() || FieldProps?.inputProps?.['aria-label'] || 'Date picker',
          'aria-labelledby': FieldProps?.inputProps?.['aria-labelledby'] || undefined,
        },
        // TODO: v3 add onClear to field
        field: { clearable },
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
