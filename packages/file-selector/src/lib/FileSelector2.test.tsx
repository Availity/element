import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';

import { FileSelector2 } from './FileSelector2';

const TestForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('FileSelector2', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <TestForm>
        <FileSelector2 name="test" bucketId="test" customerId="123" clientId="test" maxSize={1000} maxFiles={1} />
      </TestForm>
    );

    expect(getByText('Upload file')).toBeTruthy();
  });

  test('renders default HeaderMessage when customHeaderMessage is not provided and enableDropArea is false', () => {
    const { getByText } = render(
      <TestForm>
        <FileSelector2
          name="test"
          bucketId="test"
          customerId="123"
          clientId="test"
          maxSize={10485760}
          maxFiles={10}
          enableDropArea={false}
        />
      </TestForm>
    );

    expect(getByText(/Attach up to 10 file\(s\)/)).toBeTruthy();
  });

  test('renders customHeaderMessage instead of default HeaderMessage when provided', () => {
    const { getByText, queryByText } = render(
      <TestForm>
        <FileSelector2
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
    );

    expect(getByText('Attach up to 10 file(s), max 5 MB per file, 50 MB total')).toBeTruthy();
    expect(queryByText(/maximum individual size/)).toBeNull();
  });
});
