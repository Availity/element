// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react-vite';
import AvApi, { ApiConfig } from '@availity/api-axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AsyncAutocomplete } from './AsyncAutocomplete';

const meta: Meta<typeof AsyncAutocomplete> = {
  title: 'Form Components/Autocomplete/AsyncAutocomplete',
  component: AsyncAutocomplete,
  tags: ['autodocs'],
  args: {
    id: 'example',
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

const getResults = async (offset: number, limit: number) => {
  // const offset = page * limit;
  const resp = await api.post<ExampleResponse>({ offset, limit }, { params: {} });

  return {
    totalCount: resp.data.totalCount,
    offset,
    limit,
    options: resp.data.options,
    count: resp.data.count,
  };
};

const loadOptions = async (offset: number, limit: number) => {
  const { options, totalCount } = await getResults(offset, limit);

  return {
    options,
    hasMore: offset + limit < totalCount,
    offset,
  };
};

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const _Async: StoryObj<typeof AsyncAutocomplete> = {
  render: (args) => {
    return (
      <QueryClientProvider client={client}>
        <AsyncAutocomplete {...args} />
      </QueryClientProvider>
    );
  },
  decorators: [],
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
    queryKey: 'example',
  },
};
