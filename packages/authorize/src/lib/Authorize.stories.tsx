// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Authorize, AuthorizeProps } from '..';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Alert from '@mui/material/Alert';

const meta: Meta<typeof Authorize> = {
  title: 'Components/Authorize/Authorize',
  component: Authorize,
  tags: ['autodocs'],
  decorators: [
    (Story: () => React.JSX.Element) => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  args: {
    permissions: ['1234'],
    parameters: {
      organizationId: '1111',
      region: true,
    },
    queryOptions: {
      refetchOnWindowFocus: false,
    },
    unauthorized: 'You are not authorized to see this content.',
    children: 'You are authorized to see this content.',
    negate: false,
    loader: true,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    unauthorized: {
      control: 'text',
    },
  },
};

export default meta;

/** _Demo is for the `Authorize` component. If the `useAuthorize` hook is directly needed it can be found in the [@availity/authorize](https://availity.github.io/availity-react/components/authorize/) package._ */
export const _Authorize: StoryObj<typeof Authorize> = {
  render: ({children, unauthorized, ...args}: AuthorizeProps) => (
    <div>
      <p>
        For this demo, the following permissions are granted: 1234, 2345, 3456, 4567, 5678, 6789. You can use the knobs
        to see what the component will do when you set the required permissions to various things.
      </p>
      <hr />
      <Authorize
        unauthorized={<Alert severity="error">{unauthorized}</Alert>}
        {...args}
      >
        <Alert severity="success">{children}</Alert>
      </Authorize>
    </div>
  ),
};
