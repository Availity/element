import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';

import { Dropzone } from './Dropzone';

const TestForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

const client = new QueryClient();

describe('Dropzone', () => {
  test('should render successfully', () => {
    render(
      <QueryClientProvider client={client}>
        <TestForm>
          <Dropzone name="test" maxSize={1000} setTotalSize={jest.fn()} />
        </TestForm>
      </QueryClientProvider>
    );

    expect(screen.getByText('Drag and Drop Files Here')).toBeTruthy();
  });
});
