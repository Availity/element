import { ClockIcon } from '@availity/mui-icon';
import { TimePicker as MuiTimePicker, TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers/TimePicker';
import type { Dayjs } from 'dayjs';

import { ExportedPickerFieldUIProps, PickerFieldUISlotProps } from '@mui/x-date-pickers/internals';
import { AvTextFieldAdditionalProps, PickersTextField } from './PickersTextField';

export type TimepickerProps = {
  value?: Dayjs | null | undefined;
  /** Props applied to the `PickersTextField` component */
  FieldProps?: PickerFieldUISlotProps['textField'] & AvTextFieldAdditionalProps;
  /** Determines where the Calendar will be placed when opened.
   * @default bottom-start
   */
  placement?: 'bottom-start' | 'bottom' | 'bottom-end';
}
  & Pick<ExportedPickerFieldUIProps, 'onClear' | 'clearable'>
  & Omit<
  MuiTimePickerProps<false>,
  | 'components'
  | 'componentsProps'
  | 'desktopModeMediaQuery'
  | 'DialogProps'
  | 'disableOpenPicker'
  | 'enableAccessibleFieldDOMStructure'
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

export const Timepicker = ({
  FieldProps,
  placement = 'bottom-start',
  clearable,
  onClear,
  ...props
}: TimepickerProps): React.JSX.Element => (
    <MuiTimePicker
      {...props}
      slotProps={{
        desktopPaper: paperProps,
        mobilePaper: {
          ...paperProps,
          'aria-label': FieldProps?.label?.toString() || FieldProps?.inputProps?.['aria-label'] || 'Time picker',
          'aria-labelledby': FieldProps?.inputProps?.['aria-labelledby'] || undefined,
        },
        field: { clearable, onClear },
        textField: FieldProps,
        popper: {
          placement,
          'aria-label': FieldProps?.label?.toString() || FieldProps?.inputProps?.['aria-label'] || 'Time picker',
          'aria-labelledby': FieldProps?.inputProps?.['aria-labelledby'] || undefined,
        },
        openPickerIcon: {
          fontSize: 'xsmall',
        },
      }}
      slots={{
        openPickerIcon: ClockIcon,
        textField: PickersTextField
      }}
    />
  );
