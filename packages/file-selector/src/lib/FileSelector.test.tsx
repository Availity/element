import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';

import { FileSelector } from './FileSelector';

const TestForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('FileSelector', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <TestForm>
        <FileSelector name="test" bucketId="test" customerId="123" clientId="test" maxSize={1000} maxFiles={1} />
      </TestForm>
    );

    expect(getByText('Upload file')).toBeTruthy();
  });
});
