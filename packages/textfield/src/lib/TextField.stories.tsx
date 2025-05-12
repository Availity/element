// Each exported component in the package should have its own stories file
import { forwardRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AsYouType } from 'libphonenumber-js';
import { IMaskInput } from 'react-imask';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { IconButton } from '@availity/mui-button';
import { Chip } from '@availity/mui-chip';
import {
  FormControl,
  FormLabel,
  Input,
  InputAdornment,
  SearchByFormGroup,
  SelectChangeEvent,
} from '@availity/mui-form-utils';
import { EyeIcon, EyeSlashIcon, SearchIcon } from '@availity/mui-icon';
import { Box, Grid, Stack } from '@availity/mui-layout';
import { MenuItem } from '@availity/mui-menu';
import { Typography } from '@availity/mui-typography';

import { TextField, TextFieldProps } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Form Components/TextField/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: { helperText: 'Helper Text', fullWidth: false },
  argTypes: { helperText: { type: 'string' } },
};

export default meta;

export const _TextField: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => <TextField {...args} />,
  args: { label: 'Field Label', id: 'test', helpTopicId: '123' },
};

export const _TextFieldCharacterCount: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => <TextField sx={{ width: 'min-content' }} {...args} />,
  args: {
    label: 'Field Label',
    id: 'test',
    helpTopicId: '123',
    showCharacterCount: true,
    slotProps: { htmlInput: { maxLength: 10 } },
  },
};

export const _TextFieldCharacterCountOverflow: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => <TextField sx={{ width: 'min-content' }} {...args} />,
  args: {
    label: 'Field Label',
    id: 'test',
    helpTopicId: '123',
    showCharacterCount: true,
    displayOverflowMaxLength: true,
    slotProps: { htmlInput: { maxLength: 10 } },
  },
};

export const _States: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
      <TextField label="Default" id="default" {...args} />
      <TextField label="Focused" id="focused" focused {...args} />
      <TextField label="Error" id="error" error {...args} />
      <TextField label="Read Only" id="read-only" {...args} slotProps={{input: {readOnly: true}}}/>
      <TextField label="Disabled" id="disabled" disabled {...args} />
    </Stack>
  ),
  args: { margin: 'normal', value: 'value' },
};

export const _Sizes: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => (
    <Stack direction="row" spacing={1}>
      <TextField label="Small" id="small" size="small" {...args} />
      <TextField label="Medium" id="medium" size="medium" {...args} />
    </Stack>
  ),
  args: { margin: 'normal' },
};

export const _WithIcon: StoryObj<typeof TextField> = {
  render: () => (
    <TextField
      label="With Icon"
      id="search"
      fullWidth={false}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  ),
};

export const _PasswordField: StoryObj<typeof TextField> = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <TextField
        type={showPassword ? 'text' : 'password'}
        label="Password"
        id="password"
        fullWidth={false}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton title="password visibility" onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <EyeIcon fontSize="small" /> : <EyeSlashIcon fontSize="small" />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  },
};

/** Formatted value using `libphonenumber-js`. _Formatting occurs `onBlur` for accessibility._ */
export const _PhoneWithExt: StoryObj<typeof TextField> = {
  render: () => {
    const [phone, setPhone] = useState('');

    const asYouFormat = (phoneString: string) => {
      // partial parsePhoneNumber always return country code :(
      const asYouType = new AsYouType('US');

      return asYouType.input(phoneString);
    };

    const formatPhoneOnBlur = () => {
      setPhone(asYouFormat(phone));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(event.target.value);
    };

    return (
      <Grid container rowSpacing={3} columnSpacing={2} sx={{ maxWidth: '360px' }}>
        <Grid size="grow">
          <TextField
            type="tel"
            label="Phone"
            id="phone"
            value={phone}
            onBlur={formatPhoneOnBlur}
            onChange={handleChange}
            fullWidth={true}
          />
        </Grid>
        <Grid size={{ xs: 2 }} sx={{ minWidth: '5rem' }}>
          <TextField type="tel" label="Ext" id="phoneextension" fullWidth={true} />
        </Grid>
      </Grid>
    );
  },
};

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{ '#': /[1-9]/ }}
      inputRef={ref}
      onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(function NumericFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({ target: { name: props.name, value: values.value } });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

/** _There are accessibility concerns with masking to consider as it is making live changes to values that may not be communicated via assistive technologies._
 *
 * > You can use third-party libraries to format an input. You have to provide a custom implementation of the `<input>` element with the `inputComponent` property.
 * >
 * > The following demo uses the `react-imask` and `react-number-format` libraries. The same concept could be applied to, for example `react-stripe-element`.
 * >
 * > -- <cite>[Integration with 3rd party input libraries](https://mui.com/material-ui/react-text-field/#integration-with-3rd-party-input-libraries)</cite>
 */
export const _InputMasking: StoryObj<typeof TextField> = {
  render: () => {
    // COMMENTED CODE IS OUTSIDE OF FUNCTION

    // interface CustomProps {
    //   onChange: (event: { target: { name: string; value: string } }) => void;
    //   name: string;
    // }

    // const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
    //   function TextMaskCustom(props, ref) {
    //     const { onChange, ...other } = props;
    //     return (
    //       <IMaskInput
    //         {...other}
    //         mask="(#00) 000-0000"
    //         definitions={{
    //           '#': /[1-9]/,
    //         }}
    //         inputRef={ref}
    //         onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
    //         overwrite
    //       />
    //     );
    //   },
    // );

    // const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
    //   function NumericFormatCustom(props, ref) {
    //     const { onChange, ...other } = props;

    //     return (
    //       <NumericFormat
    //         {...other}
    //         getInputRef={ref}
    //         onValueChange={(values) => {
    //           onChange({
    //             target: {
    //               name: props.name,
    //               value: values.value,
    //             },
    //           });
    //         }}
    //         thousandSeparator
    //         valueIsNumericString
    //         prefix="$"
    //       />
    //     );
    //   },
    // );

    // ---------------------------------------

    const [values, setValues] = useState({ textmask: '(100) 000-0000', numberformat: '1320' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
      <>
        <FormControl variant="standard" margin="normal">
          <FormLabel htmlFor="formatted-text-mask-input">react-imask</FormLabel>
          <Input
            value={values.textmask}
            onChange={handleChange}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom as any}
          />
        </FormControl>
        <TextField
          label="react-number-format"
          value={values.numberformat}
          onChange={handleChange}
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{ inputComponent: NumericFormatCustom as any }}
          fullWidth={false}
          margin="normal"
        />
      </>
    );
  },
};

export const _Select: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => {
    const [count, setCount] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };

    return (
      <TextField value={count} select SelectProps={{ onChange: handleChange }} {...args}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </TextField>
    );
  },
  args: { label: 'Select' },
};

export const _SelectPlaceholder: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => {
    const [count, setCount] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };

    return (
      <TextField value={count} select SelectProps={{ onChange: handleChange }} {...args}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </TextField>
    );
  },
  args: {
    label: 'Select',
    slotProps: {
      select: {
        displayEmpty: true,
        renderValue: (selected: string) => {
          if (!selected) {
            return <Typography color="text.placeholder">Placeholder</Typography>;
          }

          return selected;
        },
      },
    },
  },
};

export const _MultiSelect: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => {
    const [multiValue, setMultiValue] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof multiValue>) => {
      const {
        target: { value },
      } = event;
      setMultiValue(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
      );
    };

    const options = ['one', 'two', 'three', 'four', 'five', 'six'];

    const renderValue = (selected: typeof multiValue) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value) => (
          <Chip key={value} label={value} />
        ))}
      </Box>
    );

    return (
      <TextField
        id="multiple-chip"
        select
        SelectProps={{ multiple: true, onChange: handleChange, renderValue: renderValue }}
        value={multiValue}
        {...args}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    );
  },
  args: { label: 'MultiSelect' },
};

/** Wrap the fields in a `SearchByFormGroup` from the [@availity/mui-form-utils](./?path=/docs/form-components-formutils-introduction--docs) package for our combined search by styles.
 *
 * It is recommended to use `Autocomplete` for the "Search By" selection, however a `select` `TextField` can be used with `slotProps.select.labelId = {searchById passed to form group}-label`.
 */
export const _SearchBy: StoryObj<typeof TextField> = {
  render: () => {
    const [searchBy, setSearchBy] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setSearchBy(event.target.value as string);
    };

    return (
      <SearchByFormGroup searchById="searchbystory-searchby">
        <TextField
          id="searchbystory-searchby"
          value={searchBy}
          fullWidth={false}
          select
          slotProps={{ select: { onChange: handleChange, labelId: 'searchbystory-searchby-label' } }}
        >
          <MenuItem value="Parameter 1">Parameter 1</MenuItem>
          <MenuItem value="Parameter 2">Parameter 2</MenuItem>
          <MenuItem value="Parameter 3">Parameter 3</MenuItem>
        </TextField>
        <TextField
          id="searchbystory-search"
          placeholder="search"
          slotProps={{
            input: {
              startAdornment: (
              <InputAdornment position="start" component="label" htmlFor="searchbystory-search">
                <SearchIcon aria-hidden={false} titleAccess="search"/>
                </InputAdornment>
              ),
            }
          }}
        />
      </SearchByFormGroup>
    );
  },
};
