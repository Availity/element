// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import AvApi, { ApiConfig } from '@availity/api-axios';

import { AsyncAutocomplete } from './AsyncAutocomplete';

const meta: Meta<typeof AsyncAutocomplete> = {
  title: 'Form Components/Autocomplete/AsyncAutocomplete',
  component: AsyncAutocomplete,
  tags: ['autodocs'],
  args: {
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

const api = new AvApi({ name: 'example' } as ApiConfig);

type Option = {
  label: string;
  value: number;
};

type ExampleResponse = {
  totalCount: number;
  options: Option[];
  count: number;
};

const getResults = async (page: number, limit: number) => {
  const offset = page * limit;
  try {
    const resp = await api.post<ExampleResponse>({ offset, limit }, { params: {} });

    return {
      totalCount: resp.data.totalCount,
      offset,
      limit,
      options: resp.data.options,
      count: resp.data.count,
    };
  } catch {
    return {
      totalCount: 0,
      offset,
      limit,
      options: [],
      count: 0,
    };
  }
};

const loadOptions = async (page: number, limit: number) => {
  const { options, totalCount, offset } = await getResults(page, limit);

  return {
    options,
    hasMore: offset + limit < totalCount,
  };
};

export const _Async: StoryObj<typeof AsyncAutocomplete> = {
  render: (args) => {
    return <AsyncAutocomplete {...args} />;
  },
  parameters: {
    controls: {
      exclude: /loading(?!Text)|options/,
    },
  },
  args: {
    FieldProps: { label: 'Async Select', helperText: 'Helper Text', fullWidth: false },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 10,
  },
};
