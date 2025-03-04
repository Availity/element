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
});
