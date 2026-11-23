import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FileSelector } from './FileSelector';

const TestForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('FileSelector', () => {
  test('should render successfully', () => {
    const client = new QueryClient();
    const { getByText } = render(
      <QueryClientProvider client={client}>
        <TestForm>
          <FileSelector name="test" bucketId="test" customerId="123" clientId="test" maxSize={1000} maxFiles={1} />
        </TestForm>
      </QueryClientProvider>
    );

    expect(getByText('Upload file')).toBeTruthy();
  });

  test('renders default HeaderMessage when customHeaderMessage is not provided and enableDropArea is false', () => {
    const client = new QueryClient();
    const { getByText } = render(
      <QueryClientProvider client={client}>
        <TestForm>
          <FileSelector
            name="test"
            bucketId="test"
            customerId="123"
            clientId="test"
            maxSize={10485760}
            maxFiles={10}
            enableDropArea={false}
          />
        </TestForm>
      </QueryClientProvider>
    );

    expect(getByText(/Attach up to 10 file\(s\)/)).toBeTruthy();
  });

  test('renders customHeaderMessage instead of default HeaderMessage when provided', () => {
    const client = new QueryClient();
    const { getByText, queryByText } = render(
      <QueryClientProvider client={client}>
        <TestForm>
          <FileSelector
            name="test"
            bucketId="test"
            customerId="123"
            clientId="test"
            maxSize={10485760}
            maxFiles={10}
            enableDropArea={false}
            customHeaderMessage="Attach up to 10 file(s), max 5 MB per file, 50 MB total"
          />
        </TestForm>
      </QueryClientProvider>
    );

    expect(getByText('Attach up to 10 file(s), max 5 MB per file, 50 MB total')).toBeTruthy();
    expect(queryByText(/maximum individual size/)).toBeNull();
  });
});
