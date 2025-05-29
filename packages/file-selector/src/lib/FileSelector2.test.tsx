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
});
