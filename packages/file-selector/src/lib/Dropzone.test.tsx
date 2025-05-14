import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';

import { Dropzone } from './Dropzone';

const TestForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('Dropzone', () => {
  test('should render successfully', () => {
    render(
      <TestForm>
        <Dropzone
          name="test"
          maxSize={1000}
          setTotalSize={jest.fn()}
          uploadOptions={{ customerId: '123', clientId: 'test', bucketId: 'abc' }}
        />
      </TestForm>
    );

    expect(screen.getByText('Drag and Drop Files Here')).toBeTruthy();
  });
});
