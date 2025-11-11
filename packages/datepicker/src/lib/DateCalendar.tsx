import { DateCalendar as MuiDateCalendar, DateCalendarProps as MuiDateCalendarProps } from '@mui/x-date-pickers/DateCalendar';
import type { Dayjs } from 'dayjs';
import type {} from '@mui/x-date-pickers/AdapterDayjs';

export type DateCalendarProps = Omit<MuiDateCalendarProps,
  | 'components'
  | 'componentsProps'
  | 'slots'
  | 'slotProps'
  | 'ToolbarComponent'
  | 'toolbarFormat'
  | 'toolbarPlaceholder'
  | 'toolbarTitle'
  | 'TransitionComponent'
>;

// just being used for stories atm, if ux finds a use for it we can add it to index.
export const DateCalendar = (props: DateCalendarProps): React.JSX.Element => {
  return (
    <MuiDateCalendar
      {...props}
      dayOfWeekFormatter = {(weekday: Dayjs) => weekday.format('dd')}
    />
  );
};
