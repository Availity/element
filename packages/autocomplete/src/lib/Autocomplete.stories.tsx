// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';
import { AsyncAutocomplete } from './AsyncAutocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    options: ['1', '2', '3', '4', '5'],
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

type Org = {
  id: string;
  name: string;
};

const organizations: Org[] = [
  {
    id: '1',
    name: 'Org 1',
  },
  {
    id: '2',
    name: 'Org 2',
  },
  {
    id: '3',
    name: 'Org 3',
  },
  {
    id: '4',
    name: 'Org 4',
  },
  {
    id: '5',
    name: 'Org 5',
  },
  {
    id: '6',
    name: 'Org 6',
  },
  {
    id: '7',
    name: 'Org 7',
  },
  {
    id: '8',
    name: 'Org 8',
  },
  {
    id: '9',
    name: 'Org 9',
  },
  {
    id: '10',
    name: 'Org 10',
  },
  {
    id: '11',
    name: 'Org 11',
  },
  {
    id: '12',
    name: 'Org 12',
  },
  {
    id: '13',
    name: 'Org 13',
  },
  {
    id: '14',
    name: 'Org 14',
  },
  {
    id: '15',
    name: 'Org 15',
  },
];

async function sleep(duration = 2500) {
  await new Promise((resolve) => setTimeout(resolve, duration));
}

const getResults = (page: number, limit: number) => {
  const offset = page * limit;
  const orgs = organizations.slice(page * offset, page * offset + limit);

  return {
    totalCount: organizations.length,
    offset,
    limit,
    orgs,
    count: orgs.length,
  };
};

const loadOptions = async (page: number, limit: number) => {
  await sleep(1000);

  const { orgs, totalCount, offset } = getResults(page, limit);

  return {
    options: orgs,
    hasMore: offset + limit < totalCount,
  };
};

export const _Async: StoryObj<typeof AsyncAutocomplete> = {
  render: (args) => {
    return <AsyncAutocomplete {...args} />;
  },
  args: {
    FieldProps: { label: 'Async Select', helperText: 'Helper Text', fullWidth: false },
    getOptionLabel: (val: Org) => val.name,
    loadOptions,
    limit: 10,
  },
};
