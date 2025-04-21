// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete, createFilterOptions } from './Autocomplete';
import { FilterOptionsState } from '@mui/material';
import { InputAdornment, SearchByFormGroup } from '@availity/mui-form-utils';
import { TextField } from '@availity/mui-textfield';
import { SearchIcon } from '@availity/mui-icon';

const languages = [
  'Python',
  'JavaScript',
  'C#',
  'Java',
  'Go',
  'SQL',
  'PHP',
  'Swift',
  'Ruby',
  'R',
  'Rust',
  'TypeScript',
  'C++',
  'MATLAB',
  'Objective-C',
  'CSS',
  'HTML',
  'Kotlin',
  'Perl',
];

const meta: Meta<typeof Autocomplete> = {
  title: 'Form Components/Autocomplete/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
    id: 'example',
  },
  argTypes: {
    multiple: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const _Autocomplete: StoryObj<typeof Autocomplete> = {
  render: (args) => <Autocomplete {...args} />,
  args: {
    FieldProps: { label: 'Autocomplete', helperText: 'Helper Text', fullWidth: false },
  },
};

export const _Single: StoryObj<typeof Autocomplete> = {
  render: (args) => <Autocomplete {...args} />,
  args: {
    FieldProps: { label: 'Single Select', helperText: 'Helper Text', fullWidth: false },
  },
};

export const _Multi: StoryObj<typeof Autocomplete> = {
  render: (args) => <Autocomplete {...args} />,
  args: {
    FieldProps: { label: 'Multi Select', helperText: 'Helper Text', fullWidth: false },
    multiple: true,
  },
};

type Option = { inputValue?: string; title: string };

const filter = createFilterOptions<Option>();

export const _FreeSolo: StoryObj<typeof Autocomplete> = {
  render: () => {
    const [value, setValue] = useState<Option | null>(null);

    const options: Option[] = [
      { inputValue: 'option1', title: 'Option 1' },
      { inputValue: 'option2', title: 'Option 2' },
    ];

    const onChange = (_event: any, newValue: Option) => {
      if (typeof newValue === 'string') {
        setValue({
          title: newValue,
        });
      } else if (newValue && newValue.inputValue) {
        // Create a new value from the user input
        setValue({
          title: newValue.inputValue,
        });
      } else {
        setValue(newValue);
      }
    };

    const getOptionLabel = (option: Option) => {
      // Value selected with enter, right from the input
      if (typeof option === 'string') {
        return option;
      }
      // Add "xxx" option created dynamically
      if (option.inputValue) {
        return option.inputValue;
      }
      // Regular option
      return option.title;
    };

    const filterOptions = (options: Option[], params: FilterOptionsState<Option>) => {
      const filtered = filter(options, params);

      const { inputValue } = params;
      // Suggest the creation of a new value
      const isExisting = options.some((option) => inputValue === option.title);
      if (inputValue !== '' && !isExisting) {
        filtered.push({
          inputValue,
          title: `Add "${inputValue}"`,
        });
      }

      return filtered;
    };

    const renderOption = (props: React.HTMLAttributes<HTMLLIElement>, option: Option) => {
      const { key, ...optionProps } = props;
      return (
        <li key={key} {...optionProps}>
          {option.title}
        </li>
      );
    };

    return (
      <Autocomplete
        freeSolo
        value={value}
        options={options}
        getOptionLabel={getOptionLabel}
        onChange={onChange}
        FieldProps={{ label: 'FreeSolo Select', helperText: 'Helper Text', fullWidth: false }}
        filterOptions={filterOptions}
        renderOption={renderOption}
      />
    );
  },
};

export const _Grouped: StoryObj<typeof Autocomplete> = {
  render: () => {
    const options = languages.map((option) => {
      const firstLetter = option[0].toUpperCase();

      return {
        firstLetter,
        title: option,
      };
    });
    return (
      <Autocomplete
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        FieldProps={{ label: 'FreeSolo Select', helperText: 'Helper Text', fullWidth: false }}
      />
    );
  },
};

/** Wrap the fields in a `SearchByFormGroup` from the [@availity/mui-form-utils](./?path=/docs/form-components-formutils-introduction--docs) package for our combined search by styles.
 *
 * The "Search By" field id must be passed as the FormGroup supplies the label.
 */
export const _SearchBy: StoryObj<typeof Autocomplete> = {
  render: () => {
    const searchByOptions = ['Parameter 1', 'Parameter 2', 'Parameter 3']

    return (
      <SearchByFormGroup searchById="searchby">
        <Autocomplete
          id="searchby"
          options={searchByOptions}
          FieldProps= {{ fullWidth: false }}
        />
        <TextField
          id="search"
          placeholder="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" component="label" htmlFor="search">
                <SearchIcon aria-hidden={false} titleAccess="search"/>
              </InputAdornment>
            ),
          }}
        />
      </SearchByFormGroup>
    );
  },
};
