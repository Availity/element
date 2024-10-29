import { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

import { FilePickerBtn } from './FilePickerBtn';

const TestForm = () => {
  const methods = useForm();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <FormProvider {...methods}>
      <FilePickerBtn name="test" inputProps={{ ref }} />
    </FormProvider>
  );
};

describe('FilePickerBtn', () => {
  test('should render successfully', () => {
    render(<TestForm />);

    expect(screen.getByText('Browse Files')).toBeTruthy();
  });
});
