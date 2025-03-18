import { FieldValues, ControllerProps as MuiControllerProps, RegisterOptions } from 'react-hook-form';
import { ControlledAutocompleteProps } from './Autocomplete';
import {
  ControlledAsyncAutocompleteProps,
  ControlledCheckboxProps,
  ControlledCodesAutocompleteProps,
  ControlledDatepickerProps,
  ControlledInputProps,
  ControlledOrgAutocompleteProps,
  ControlledProviderAutocompleteProps,
  ControlledRadioGroupProps,
  ControlledSelectProps,
  ControlledTextFieldProps,
} from '..';
import { HTMLAttributes } from 'react';

export type ControllerProps = {
  /** Unique name of your input */
  name: MuiControllerProps['name'];
  /** **Important**: Can not apply undefined to defaultValue or defaultValues at useForm.
   * - You need to either set defaultValue at the field-level or useForm's defaultValues. undefined is not a valid value.
   * - If your form will invoke reset with default values, you will need to provide useForm with defaultValues.
   * - Calling onChange with undefined is not valid. You should use null or the empty string as your default/cleared value instead. */
  defaultValue?: MuiControllerProps['defaultValue'];
  /** If the input is disabled */
  disabled?: MuiControllerProps['disabled'];
  /** react-hook-form internal validation rules in the same format as [register options](https://react-hook-form.com/docs/useform/register#options), which includes:
   * required, min, max, minLength, maxLength, pattern, validate
   *
   * Not used if 3rd party schema/resolver used. */
  rules?: MuiControllerProps['rules'];
  /** Input will be unregistered after unmount and defaultValues will be removed as well. */
  shouldUnregister?: MuiControllerProps['shouldUnregister'];
};

// Storybook Categories

type AllControllerProps = ControllerProps & Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'>;

type CategorizedControllerPropsObject = Record<keyof AllControllerProps, { table: { category: 'Controller Props' } }>;

type TextFieldPropsObject = Record<
  keyof Omit<
    ControlledTextFieldProps,
    | keyof AllControllerProps
    | keyof Omit<HTMLAttributes<undefined>, 'autoFocus' | 'className' | 'color' | 'id' | 'onFocus' | 'style'>
  >,
  { table: { category: 'Input Props' } }
>;

type RadioGroupPropsObject = Record<
  keyof Omit<ControlledRadioGroupProps, keyof AllControllerProps | keyof Omit<HTMLAttributes<undefined>, 'children'>>,
  { table: { category: 'Input Props' } }
>;

type DatepickerPropsObject = Record<
  keyof Omit<
    ControlledDatepickerProps,
    keyof AllControllerProps | keyof Omit<HTMLAttributes<undefined>, 'autoFocus' | 'className' | 'onError'>
  >,
  { table: { category: 'Input Props' } }
>;

type ProviderAutocompletePropsObject = Record<
  keyof Omit<
    ControlledProviderAutocompleteProps,
    keyof AllControllerProps | keyof Omit<HTMLAttributes<undefined>, 'id' | 'onKeyDown'>
  >,
  { table: { category: 'Input Props' } }
>;

type OrganizationAutocompletePropsObject = Record<
  keyof Omit<
    ControlledOrgAutocompleteProps,
    keyof AllControllerProps | keyof Omit<HTMLAttributes<undefined>, 'id' | 'onKeyDown'>
  >,
  { table: { category: 'Input Props' } }
>;

type CodesAutocompletePropsObject = Record<
  keyof Omit<
    ControlledCodesAutocompleteProps,
    keyof AllControllerProps | keyof Omit<HTMLAttributes<undefined>, 'id' | 'onKeyDown'>
  >,
  { table: { category: 'Input Props' } }
>;

type AsyncAutocompletePropsObject = Record<
  keyof Omit<
    ControlledAsyncAutocompleteProps<
      undefined,
      boolean | undefined,
      boolean | undefined,
      boolean | undefined,
      React.ElementType
    >,
    keyof AllControllerProps | keyof Omit<HTMLAttributes<undefined>, 'id' | 'onKeyDown'>
  >,
  { table: { category: 'Input Props' } }
>;

type AutocompletePropsObject = Record<
  keyof Omit<
    ControlledAutocompleteProps<
      undefined,
      boolean | undefined,
      boolean | undefined,
      boolean | undefined,
      React.ElementType
    >,
    keyof AllControllerProps | keyof Omit<HTMLAttributes<undefined>, 'id' | 'onKeyDown'>
  >,
  { table: { category: 'Input Props' } }
>;

type CheckboxPropsObject = Record<
  keyof Omit<
    ControlledCheckboxProps,
    | keyof AllControllerProps
    | keyof Omit<
        HTMLAttributes<undefined>,
        'autoFocus' | 'className' | 'color' | 'id' | 'style' | 'defaultChecked' | 'tabIndex'
      >
  >,
  { table: { category: 'Input Props' } }
>;

type InputPropsObject = Record<
  keyof Omit<
    ControlledInputProps,
    | keyof AllControllerProps
    | keyof Omit<
        HTMLAttributes<undefined>,
        | 'autoFocus'
        | 'className'
        | 'color'
        | 'id'
        | 'onFocus'
        | 'style'
        | 'children'
        | 'aria-describedby'
        | 'onInvalid'
        | 'onError'
        | 'onKeyDown'
        | 'onKeyUp'
        | 'defaultChecked'
        | 'tabIndex'
      >
  >,
  { table: { category: 'Input Props' } }
>;

type SelectPropsObject = Record<
  keyof Omit<
    ControlledSelectProps,
    | keyof AllControllerProps
    | keyof Omit<
        HTMLAttributes<undefined>,
        | 'autoFocus'
        | 'className'
        | 'color'
        | 'id'
        | 'onFocus'
        | 'style'
        | 'children'
        | 'aria-describedby'
        | 'onInvalid'
        | 'onError'
        | 'onKeyDown'
        | 'onKeyUp'
        | 'defaultChecked'
        | 'tabIndex'
      >
  >,
  { table: { category: 'Input Props' } }
>;

// Use IDE Autocomplete to fill in any missing properties
export const AllControllerPropertiesCategorized: CategorizedControllerPropsObject = {
  defaultValue: {
    table: {
      category: 'Controller Props',
    },
  },
  onBlur: {
    table: {
      category: 'Controller Props',
    },
  },
  onChange: {
    table: {
      category: 'Controller Props',
    },
  },
  disabled: {
    table: {
      category: 'Controller Props',
    },
  },
  name: {
    table: {
      category: 'Controller Props',
    },
  },
  value: {
    table: {
      category: 'Controller Props',
    },
  },
  rules: {
    table: {
      category: 'Controller Props',
    },
  },
  shouldUnregister: {
    table: {
      category: 'Controller Props',
    },
  },
};

export const TextFieldPropsCategorized: TextFieldPropsObject = {
  slotProps: {
    table: {
      category: 'Input Props',
    },
  },
  className: {
    table: {
      category: 'Input Props',
    },
  },
  style: {
    table: {
      category: 'Input Props',
    },
  },
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  error: {
    table: {
      category: 'Input Props',
    },
  },
  autoFocus: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  color: {
    table: {
      category: 'Input Props',
    },
  },
  onFocus: {
    table: {
      category: 'Input Props',
    },
  },
  focused: {
    table: {
      category: 'Input Props',
    },
  },
  required: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  label: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  select: {
    table: {
      category: 'Input Props',
    },
  },
  key: {
    table: {
      category: 'Input Props',
    },
  },
  helpTopicId: {
    table: {
      category: 'Input Props',
    },
  },
  fullWidth: {
    table: {
      category: 'Input Props',
    },
  },
  hiddenLabel: {
    table: {
      category: 'Input Props',
    },
  },
  margin: {
    table: {
      category: 'Input Props',
    },
  },
  size: {
    table: {
      category: 'Input Props',
    },
  },
  component: {
    table: {
      category: 'Input Props',
    },
  },
  InputProps: {
    table: {
      category: 'Input Props',
    },
  },
  autoComplete: {
    table: {
      category: 'Input Props',
    },
  },
  FormHelperTextProps: {
    table: {
      category: 'Input Props',
    },
  },
  helperText: {
    table: {
      category: 'Input Props',
    },
  },
  InputLabelProps: {
    table: {
      category: 'Input Props',
    },
  },
  inputProps: {
    table: {
      category: 'Input Props',
    },
  },
  inputRef: {
    table: {
      category: 'Input Props',
    },
  },
  multiline: {
    table: {
      category: 'Input Props',
    },
  },
  placeholder: {
    table: {
      category: 'Input Props',
    },
  },
  rows: {
    table: {
      category: 'Input Props',
    },
  },
  maxRows: {
    table: {
      category: 'Input Props',
    },
  },
  minRows: {
    table: {
      category: 'Input Props',
    },
  },
  SelectProps: {
    table: {
      category: 'Input Props',
    },
  },
  type: {
    table: {
      category: 'Input Props',
    },
  },
  slots: {
    table: {
      category: 'Input Props',
    },
  },
  showCharacterCount: {
    table: {
      category: 'Input Props',
    },
  },
};

export const RadioGroupPropsCategorized: RadioGroupPropsObject = {
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  children: {
    table: {
      category: 'Input Props',
    },
  },
  required: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  label: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  helperText: {
    table: {
      category: 'Input Props',
    },
  },
  row: {
    table: {
      category: 'Input Props',
    },
  },
};

export const ProviderAutocompletePropsCategorized: ProviderAutocompletePropsObject = {
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyDown: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  autoComplete: {
    table: {
      category: 'Input Props',
    },
  },
  slots: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  open: {
    table: {
      category: 'Input Props',
    },
  },
  multiple: {
    table: {
      category: 'Input Props',
    },
  },
  onClose: {
    table: {
      category: 'Input Props',
    },
  },
  onOpen: {
    table: {
      category: 'Input Props',
    },
  },
  queryKey: {
    table: {
      category: 'Input Props',
    },
  },
  ChipProps: {
    table: {
      category: 'Input Props',
    },
  },
  disablePortal: {
    table: {
      category: 'Input Props',
    },
  },
  getLimitTagsText: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxComponent: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxProps: {
    table: {
      category: 'Input Props',
    },
  },
  loadingText: {
    table: {
      category: 'Input Props',
    },
  },
  limitTags: {
    table: {
      category: 'Input Props',
    },
  },
  noOptionsText: {
    table: {
      category: 'Input Props',
    },
  },
  renderGroup: {
    table: {
      category: 'Input Props',
    },
  },
  renderOption: {
    table: {
      category: 'Input Props',
    },
  },
  renderTags: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_classNamePrefix: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_isActiveElementInListbox: {
    table: {
      category: 'Input Props',
    },
  },
  autoHighlight: {
    table: {
      category: 'Input Props',
    },
  },
  autoSelect: {
    table: {
      category: 'Input Props',
    },
  },
  blurOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnBlur: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnEscape: {
    table: {
      category: 'Input Props',
    },
  },
  componentName: {
    table: {
      category: 'Input Props',
    },
  },
  disableClearable: {
    table: {
      category: 'Input Props',
    },
  },
  disableCloseOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  filterOptions: {
    table: {
      category: 'Input Props',
    },
  },
  filterSelectedOptions: {
    table: {
      category: 'Input Props',
    },
  },
  freeSolo: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionDisabled: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionKey: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionLabel: {
    table: {
      category: 'Input Props',
    },
  },
  groupBy: {
    table: {
      category: 'Input Props',
    },
  },
  inputValue: {
    table: {
      category: 'Input Props',
    },
  },
  isOptionEqualToValue: {
    table: {
      category: 'Input Props',
    },
  },
  onHighlightChange: {
    table: {
      category: 'Input Props',
    },
  },
  onInputChange: {
    table: {
      category: 'Input Props',
    },
  },
  FieldProps: {
    table: {
      category: 'Input Props',
    },
  },
  limit: {
    table: {
      category: 'Input Props',
    },
  },
  queryOptions: {
    table: {
      category: 'Input Props',
    },
  },
  watchParams: {
    table: {
      category: 'Input Props',
    },
  },
  debounceTimeout: {
    table: {
      category: 'Input Props',
    },
  },
  customerId: {
    table: {
      category: 'Input Props',
    },
  },
  apiConfig: {
    table: {
      category: 'Input Props',
    },
  },
};

export const OrganizationAutocompletePropsCategorized: OrganizationAutocompletePropsObject = {
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyDown: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  autoComplete: {
    table: {
      category: 'Input Props',
    },
  },
  slots: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  open: {
    table: {
      category: 'Input Props',
    },
  },
  multiple: {
    table: {
      category: 'Input Props',
    },
  },
  onClose: {
    table: {
      category: 'Input Props',
    },
  },
  onOpen: {
    table: {
      category: 'Input Props',
    },
  },
  queryKey: {
    table: {
      category: 'Input Props',
    },
  },
  ChipProps: {
    table: {
      category: 'Input Props',
    },
  },
  disablePortal: {
    table: {
      category: 'Input Props',
    },
  },
  getLimitTagsText: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxComponent: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxProps: {
    table: {
      category: 'Input Props',
    },
  },
  loadingText: {
    table: {
      category: 'Input Props',
    },
  },
  limitTags: {
    table: {
      category: 'Input Props',
    },
  },
  noOptionsText: {
    table: {
      category: 'Input Props',
    },
  },
  renderGroup: {
    table: {
      category: 'Input Props',
    },
  },
  renderOption: {
    table: {
      category: 'Input Props',
    },
  },
  renderTags: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_classNamePrefix: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_isActiveElementInListbox: {
    table: {
      category: 'Input Props',
    },
  },
  autoHighlight: {
    table: {
      category: 'Input Props',
    },
  },
  autoSelect: {
    table: {
      category: 'Input Props',
    },
  },
  blurOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnBlur: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnEscape: {
    table: {
      category: 'Input Props',
    },
  },
  componentName: {
    table: {
      category: 'Input Props',
    },
  },
  disableClearable: {
    table: {
      category: 'Input Props',
    },
  },
  disableCloseOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  filterOptions: {
    table: {
      category: 'Input Props',
    },
  },
  filterSelectedOptions: {
    table: {
      category: 'Input Props',
    },
  },
  freeSolo: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionDisabled: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionKey: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionLabel: {
    table: {
      category: 'Input Props',
    },
  },
  groupBy: {
    table: {
      category: 'Input Props',
    },
  },
  inputValue: {
    table: {
      category: 'Input Props',
    },
  },
  isOptionEqualToValue: {
    table: {
      category: 'Input Props',
    },
  },
  onHighlightChange: {
    table: {
      category: 'Input Props',
    },
  },
  onInputChange: {
    table: {
      category: 'Input Props',
    },
  },
  FieldProps: {
    table: {
      category: 'Input Props',
    },
  },
  limit: {
    table: {
      category: 'Input Props',
    },
  },
  queryOptions: {
    table: {
      category: 'Input Props',
    },
  },
  watchParams: {
    table: {
      category: 'Input Props',
    },
  },
  debounceTimeout: {
    table: {
      category: 'Input Props',
    },
  },
  apiConfig: {
    table: {
      category: 'Input Props',
    },
  },
};

export const DatepickerPropsCategorized: DatepickerPropsObject = {
  className: {
    table: {
      category: 'Input Props',
    },
  },
  autoFocus: {
    table: {
      category: 'Input Props',
    },
  },
  onError: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  label: {
    table: {
      category: 'Input Props',
    },
  },
  view: {
    table: {
      category: 'Input Props',
    },
  },
  inputRef: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  open: {
    table: {
      category: 'Input Props',
    },
  },
  loading: {
    table: {
      category: 'Input Props',
    },
  },
  onClose: {
    table: {
      category: 'Input Props',
    },
  },
  onOpen: {
    table: {
      category: 'Input Props',
    },
  },
  FieldProps: {
    table: {
      category: 'Input Props',
    },
  },
  disableFuture: {
    table: {
      category: 'Input Props',
    },
  },
  disablePast: {
    table: {
      category: 'Input Props',
    },
  },
  shouldDisableDate: {
    table: {
      category: 'Input Props',
    },
  },
  shouldDisableMonth: {
    table: {
      category: 'Input Props',
    },
  },
  shouldDisableYear: {
    table: {
      category: 'Input Props',
    },
  },
  minDate: {
    table: {
      category: 'Input Props',
    },
  },
  maxDate: {
    table: {
      category: 'Input Props',
    },
  },
  views: {
    table: {
      category: 'Input Props',
    },
  },
  onViewChange: {
    table: {
      category: 'Input Props',
    },
  },
  localeText: {
    table: {
      category: 'Input Props',
    },
  },
  onAccept: {
    table: {
      category: 'Input Props',
    },
  },
  viewRenderers: {
    table: {
      category: 'Input Props',
    },
  },
  referenceDate: {
    table: {
      category: 'Input Props',
    },
  },
  timezone: {
    table: {
      category: 'Input Props',
    },
  },
  formatDensity: {
    table: {
      category: 'Input Props',
    },
  },
  enableAccessibleFieldDOMStructure: {
    table: {
      category: 'Input Props',
    },
  },
  selectedSections: {
    table: {
      category: 'Input Props',
    },
  },
  onSelectedSectionsChange: {
    table: {
      category: 'Input Props',
    },
  },
  yearsPerRow: {
    table: {
      category: 'Input Props',
    },
  },
  renderLoading: {
    table: {
      category: 'Input Props',
    },
  },
  onYearChange: {
    table: {
      category: 'Input Props',
    },
  },
  onMonthChange: {
    table: {
      category: 'Input Props',
    },
  },
  dayOfWeekFormatter: {
    table: {
      category: 'Input Props',
    },
  },
  displayWeekNumber: {
    table: {
      category: 'Input Props',
    },
  },
  fixedWeekNumber: {
    table: {
      category: 'Input Props',
    },
  },
  disableHighlightToday: {
    table: {
      category: 'Input Props',
    },
  },
  showDaysOutsideCurrentMonth: {
    table: {
      category: 'Input Props',
    },
  },
  monthsPerRow: {
    table: {
      category: 'Input Props',
    },
  },
  yearsOrder: {
    table: {
      category: 'Input Props',
    },
  },
  format: {
    table: {
      category: 'Input Props',
    },
  },
  closeOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  disableOpenPicker: {
    table: {
      category: 'Input Props',
    },
  },
  placement: {
    table: {
      category: 'Input Props',
    },
  },
};

export const CodesAutocompletePropsCategorized: CodesAutocompletePropsObject = {
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyDown: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  autoComplete: {
    table: {
      category: 'Input Props',
    },
  },
  slots: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  list: {
    table: {
      category: 'Input Props',
    },
  },
  open: {
    table: {
      category: 'Input Props',
    },
  },
  multiple: {
    table: {
      category: 'Input Props',
    },
  },
  onClose: {
    table: {
      category: 'Input Props',
    },
  },
  onOpen: {
    table: {
      category: 'Input Props',
    },
  },
  queryKey: {
    table: {
      category: 'Input Props',
    },
  },
  ChipProps: {
    table: {
      category: 'Input Props',
    },
  },
  disablePortal: {
    table: {
      category: 'Input Props',
    },
  },
  getLimitTagsText: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxComponent: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxProps: {
    table: {
      category: 'Input Props',
    },
  },
  loadingText: {
    table: {
      category: 'Input Props',
    },
  },
  limitTags: {
    table: {
      category: 'Input Props',
    },
  },
  noOptionsText: {
    table: {
      category: 'Input Props',
    },
  },
  renderGroup: {
    table: {
      category: 'Input Props',
    },
  },
  renderOption: {
    table: {
      category: 'Input Props',
    },
  },
  renderTags: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_classNamePrefix: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_isActiveElementInListbox: {
    table: {
      category: 'Input Props',
    },
  },
  autoHighlight: {
    table: {
      category: 'Input Props',
    },
  },
  autoSelect: {
    table: {
      category: 'Input Props',
    },
  },
  blurOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnBlur: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnEscape: {
    table: {
      category: 'Input Props',
    },
  },
  componentName: {
    table: {
      category: 'Input Props',
    },
  },
  disableClearable: {
    table: {
      category: 'Input Props',
    },
  },
  disableCloseOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  filterOptions: {
    table: {
      category: 'Input Props',
    },
  },
  filterSelectedOptions: {
    table: {
      category: 'Input Props',
    },
  },
  freeSolo: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionDisabled: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionKey: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionLabel: {
    table: {
      category: 'Input Props',
    },
  },
  groupBy: {
    table: {
      category: 'Input Props',
    },
  },
  inputValue: {
    table: {
      category: 'Input Props',
    },
  },
  isOptionEqualToValue: {
    table: {
      category: 'Input Props',
    },
  },
  onHighlightChange: {
    table: {
      category: 'Input Props',
    },
  },
  onInputChange: {
    table: {
      category: 'Input Props',
    },
  },
  FieldProps: {
    table: {
      category: 'Input Props',
    },
  },
  limit: {
    table: {
      category: 'Input Props',
    },
  },
  queryOptions: {
    table: {
      category: 'Input Props',
    },
  },
  watchParams: {
    table: {
      category: 'Input Props',
    },
  },
  debounceTimeout: {
    table: {
      category: 'Input Props',
    },
  },
  apiConfig: {
    table: {
      category: 'Input Props',
    },
  },
};

export const AsyncAutocompletePropsCategorized: AsyncAutocompletePropsObject = {
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyDown: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  autoComplete: {
    table: {
      category: 'Input Props',
    },
  },
  slots: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  open: {
    table: {
      category: 'Input Props',
    },
  },
  multiple: {
    table: {
      category: 'Input Props',
    },
  },
  onClose: {
    table: {
      category: 'Input Props',
    },
  },
  onOpen: {
    table: {
      category: 'Input Props',
    },
  },
  queryKey: {
    table: {
      category: 'Input Props',
    },
  },
  ChipProps: {
    table: {
      category: 'Input Props',
    },
  },
  disablePortal: {
    table: {
      category: 'Input Props',
    },
  },
  getLimitTagsText: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxComponent: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxProps: {
    table: {
      category: 'Input Props',
    },
  },
  loadingText: {
    table: {
      category: 'Input Props',
    },
  },
  limitTags: {
    table: {
      category: 'Input Props',
    },
  },
  noOptionsText: {
    table: {
      category: 'Input Props',
    },
  },
  renderGroup: {
    table: {
      category: 'Input Props',
    },
  },
  renderOption: {
    table: {
      category: 'Input Props',
    },
  },
  renderTags: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_classNamePrefix: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_isActiveElementInListbox: {
    table: {
      category: 'Input Props',
    },
  },
  autoHighlight: {
    table: {
      category: 'Input Props',
    },
  },
  autoSelect: {
    table: {
      category: 'Input Props',
    },
  },
  blurOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnBlur: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnEscape: {
    table: {
      category: 'Input Props',
    },
  },
  componentName: {
    table: {
      category: 'Input Props',
    },
  },
  disableClearable: {
    table: {
      category: 'Input Props',
    },
  },
  disableCloseOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  filterOptions: {
    table: {
      category: 'Input Props',
    },
  },
  filterSelectedOptions: {
    table: {
      category: 'Input Props',
    },
  },
  freeSolo: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionDisabled: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionKey: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionLabel: {
    table: {
      category: 'Input Props',
    },
  },
  groupBy: {
    table: {
      category: 'Input Props',
    },
  },
  inputValue: {
    table: {
      category: 'Input Props',
    },
  },
  isOptionEqualToValue: {
    table: {
      category: 'Input Props',
    },
  },
  onHighlightChange: {
    table: {
      category: 'Input Props',
    },
  },
  onInputChange: {
    table: {
      category: 'Input Props',
    },
  },
  FieldProps: {
    table: {
      category: 'Input Props',
    },
  },
  loadOptions: {
    table: {
      category: 'Input Props',
    },
  },
  limit: {
    table: {
      category: 'Input Props',
    },
  },
  queryOptions: {
    table: {
      category: 'Input Props',
    },
  },
  watchParams: {
    table: {
      category: 'Input Props',
    },
  },
  debounceTimeout: {
    table: {
      category: 'Input Props',
    },
  },
};

export const AutocompletePropsCategorized: AutocompletePropsObject = {
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyDown: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  autoComplete: {
    table: {
      category: 'Input Props',
    },
  },
  slots: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  options: {
    table: {
      category: 'Input Props',
    },
  },
  open: {
    table: {
      category: 'Input Props',
    },
  },
  loading: {
    table: {
      category: 'Input Props',
    },
  },
  multiple: {
    table: {
      category: 'Input Props',
    },
  },
  onClose: {
    table: {
      category: 'Input Props',
    },
  },
  onOpen: {
    table: {
      category: 'Input Props',
    },
  },
  disableListWrap: {
    table: {
      category: 'Input Props',
    },
  },
  ChipProps: {
    table: {
      category: 'Input Props',
    },
  },
  disablePortal: {
    table: {
      category: 'Input Props',
    },
  },
  getLimitTagsText: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxComponent: {
    table: {
      category: 'Input Props',
    },
  },
  ListboxProps: {
    table: {
      category: 'Input Props',
    },
  },
  loadingText: {
    table: {
      category: 'Input Props',
    },
  },
  limitTags: {
    table: {
      category: 'Input Props',
    },
  },
  noOptionsText: {
    table: {
      category: 'Input Props',
    },
  },
  renderGroup: {
    table: {
      category: 'Input Props',
    },
  },
  renderOption: {
    table: {
      category: 'Input Props',
    },
  },
  renderTags: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_classNamePrefix: {
    table: {
      category: 'Input Props',
    },
  },
  unstable_isActiveElementInListbox: {
    table: {
      category: 'Input Props',
    },
  },
  autoHighlight: {
    table: {
      category: 'Input Props',
    },
  },
  autoSelect: {
    table: {
      category: 'Input Props',
    },
  },
  blurOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnBlur: {
    table: {
      category: 'Input Props',
    },
  },
  clearOnEscape: {
    table: {
      category: 'Input Props',
    },
  },
  componentName: {
    table: {
      category: 'Input Props',
    },
  },
  disableClearable: {
    table: {
      category: 'Input Props',
    },
  },
  disableCloseOnSelect: {
    table: {
      category: 'Input Props',
    },
  },
  filterOptions: {
    table: {
      category: 'Input Props',
    },
  },
  filterSelectedOptions: {
    table: {
      category: 'Input Props',
    },
  },
  freeSolo: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionDisabled: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionKey: {
    table: {
      category: 'Input Props',
    },
  },
  getOptionLabel: {
    table: {
      category: 'Input Props',
    },
  },
  groupBy: {
    table: {
      category: 'Input Props',
    },
  },
  inputValue: {
    table: {
      category: 'Input Props',
    },
  },
  isOptionEqualToValue: {
    table: {
      category: 'Input Props',
    },
  },
  onHighlightChange: {
    table: {
      category: 'Input Props',
    },
  },
  onInputChange: {
    table: {
      category: 'Input Props',
    },
  },
  FieldProps: {
    table: {
      category: 'Input Props',
    },
  },
};

export const CheckboxPropsCategorized: CheckboxPropsObject = {
  slots: {
    table: {
      category: 'Input Props',
    },
  },
  slotProps: {
    table: {
      category: 'Input Props',
    },
  },
  className: {
    table: {
      category: 'Input Props',
    },
  },
  style: {
    table: {
      category: 'Input Props',
    },
  },
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  form: {
    table: {
      category: 'Input Props',
    },
  },
  defaultChecked: {
    table: {
      category: 'Input Props',
    },
  },
  autoFocus: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  tabIndex: {
    table: {
      category: 'Input Props',
    },
  },
  color: {
    table: {
      category: 'Input Props',
    },
  },
  required: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  key: {
    table: {
      category: 'Input Props',
    },
  },
  component: {
    table: {
      category: 'Input Props',
    },
  },
  inputProps: {
    table: {
      category: 'Input Props',
    },
  },
  inputRef: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  action: {
    table: {
      category: 'Input Props',
    },
  },
  formAction: {
    table: {
      category: 'Input Props',
    },
  },
  formMethod: {
    table: {
      category: 'Input Props',
    },
  },
  formNoValidate: {
    table: {
      category: 'Input Props',
    },
  },
  formTarget: {
    table: {
      category: 'Input Props',
    },
  },
  checkedIcon: {
    table: {
      category: 'Input Props',
    },
  },
  icon: {
    table: {
      category: 'Input Props',
    },
  },
  focusVisibleClassName: {
    table: {
      category: 'Input Props',
    },
  },
  LinkComponent: {
    table: {
      category: 'Input Props',
    },
  },
  onFocusVisible: {
    table: {
      category: 'Input Props',
    },
  },
  formEncType: {
    table: {
      category: 'Input Props',
    },
  },
  checked: {
    table: {
      category: 'Input Props',
    },
  },
  edge: {
    table: {
      category: 'Input Props',
    },
  },
  indeterminate: {
    table: {
      category: 'Input Props',
    },
  },
  indeterminateIcon: {
    table: {
      category: 'Input Props',
    },
  },
};

export const InputPropsCategorized: InputPropsObject = {
  className: {
    table: {
      category: 'Input Props',
    },
  },
  style: {
    table: {
      category: 'Input Props',
    },
  },
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  error: {
    table: {
      category: 'Input Props',
    },
  },
  defaultChecked: {
    table: {
      category: 'Input Props',
    },
  },
  autoFocus: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  tabIndex: {
    table: {
      category: 'Input Props',
    },
  },
  color: {
    table: {
      category: 'Input Props',
    },
  },
  'aria-describedby': {
    table: {
      category: 'Input Props',
    },
  },
  onFocus: {
    table: {
      category: 'Input Props',
    },
  },
  onInvalid: {
    table: {
      category: 'Input Props',
    },
  },
  onError: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyDown: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyUp: {
    table: {
      category: 'Input Props',
    },
  },
  required: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  label: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  fullWidth: {
    table: {
      category: 'Input Props',
    },
  },
  margin: {
    table: {
      category: 'Input Props',
    },
  },
  size: {
    table: {
      category: 'Input Props',
    },
  },
  autoComplete: {
    table: {
      category: 'Input Props',
    },
  },
  inputProps: {
    table: {
      category: 'Input Props',
    },
  },
  inputRef: {
    table: {
      category: 'Input Props',
    },
  },
  multiline: {
    table: {
      category: 'Input Props',
    },
  },
  placeholder: {
    table: {
      category: 'Input Props',
    },
  },
  rows: {
    table: {
      category: 'Input Props',
    },
  },
  maxRows: {
    table: {
      category: 'Input Props',
    },
  },
  minRows: {
    table: {
      category: 'Input Props',
    },
  },
  type: {
    table: {
      category: 'Input Props',
    },
  },
  disableInjectingGlobalStyles: {
    table: {
      category: 'Input Props',
    },
  },
  endAdornment: {
    table: {
      category: 'Input Props',
    },
  },
  inputComponent: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  renderSuffix: {
    table: {
      category: 'Input Props',
    },
  },
  startAdornment: {
    table: {
      category: 'Input Props',
    },
  },
};

export const SelectPropsCategorized: SelectPropsObject = {
  className: {
    table: {
      category: 'Input Props',
    },
  },
  style: {
    table: {
      category: 'Input Props',
    },
  },
  classes: {
    table: {
      category: 'Input Props',
    },
  },
  error: {
    table: {
      category: 'Input Props',
    },
  },
  children: {
    table: {
      category: 'Input Props',
    },
  },
  defaultChecked: {
    table: {
      category: 'Input Props',
    },
  },
  autoFocus: {
    table: {
      category: 'Input Props',
    },
  },
  id: {
    table: {
      category: 'Input Props',
    },
  },
  tabIndex: {
    table: {
      category: 'Input Props',
    },
  },
  color: {
    table: {
      category: 'Input Props',
    },
  },
  'aria-describedby': {
    table: {
      category: 'Input Props',
    },
  },
  onFocus: {
    table: {
      category: 'Input Props',
    },
  },
  onInvalid: {
    table: {
      category: 'Input Props',
    },
  },
  onError: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyDown: {
    table: {
      category: 'Input Props',
    },
  },
  onKeyUp: {
    table: {
      category: 'Input Props',
    },
  },
  required: {
    table: {
      category: 'Input Props',
    },
  },
  sx: {
    table: {
      category: 'Input Props',
    },
  },
  label: {
    table: {
      category: 'Input Props',
    },
  },
  ref: {
    table: {
      category: 'Input Props',
    },
  },
  input: {
    table: {
      category: 'Input Props',
    },
  },
  fullWidth: {
    table: {
      category: 'Input Props',
    },
  },
  margin: {
    table: {
      category: 'Input Props',
    },
  },
  size: {
    table: {
      category: 'Input Props',
    },
  },
  autoComplete: {
    table: {
      category: 'Input Props',
    },
  },
  inputProps: {
    table: {
      category: 'Input Props',
    },
  },
  inputRef: {
    table: {
      category: 'Input Props',
    },
  },
  multiline: {
    table: {
      category: 'Input Props',
    },
  },
  rows: {
    table: {
      category: 'Input Props',
    },
  },
  maxRows: {
    table: {
      category: 'Input Props',
    },
  },
  minRows: {
    table: {
      category: 'Input Props',
    },
  },
  type: {
    table: {
      category: 'Input Props',
    },
  },
  disableInjectingGlobalStyles: {
    table: {
      category: 'Input Props',
    },
  },
  endAdornment: {
    table: {
      category: 'Input Props',
    },
  },
  inputComponent: {
    table: {
      category: 'Input Props',
    },
  },
  readOnly: {
    table: {
      category: 'Input Props',
    },
  },
  renderSuffix: {
    table: {
      category: 'Input Props',
    },
  },
  startAdornment: {
    table: {
      category: 'Input Props',
    },
  },
  disableUnderline: {
    table: {
      category: 'Input Props',
    },
  },
  open: {
    table: {
      category: 'Input Props',
    },
  },
  multiple: {
    table: {
      category: 'Input Props',
    },
  },
  autoWidth: {
    table: {
      category: 'Input Props',
    },
  },
  defaultOpen: {
    table: {
      category: 'Input Props',
    },
  },
  displayEmpty: {
    table: {
      category: 'Input Props',
    },
  },
  IconComponent: {
    table: {
      category: 'Input Props',
    },
  },
  labelId: {
    table: {
      category: 'Input Props',
    },
  },
  MenuProps: {
    table: {
      category: 'Input Props',
    },
  },
  native: {
    table: {
      category: 'Input Props',
    },
  },
  onClose: {
    table: {
      category: 'Input Props',
    },
  },
  onOpen: {
    table: {
      category: 'Input Props',
    },
  },
  renderValue: {
    table: {
      category: 'Input Props',
    },
  },
  SelectDisplayProps: {
    table: {
      category: 'Input Props',
    },
  },
};

export const AllControllerPropsList = Object.keys(AllControllerPropertiesCategorized) as (keyof ControllerProps)[];
