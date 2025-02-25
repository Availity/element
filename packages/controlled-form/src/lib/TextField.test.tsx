import { render, fireEvent, waitFor } from '@testing-library/react';
import { ControlledTextField } from './TextField';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledTextField', () => {
  test('should render the error styling if an error is returned', async () => {
    const screen = render(
      <TestForm UseFormOptions={{values: { controlledTextField: undefined }}} onSubmit={onSubmit}>
        <ControlledTextField
          name="controlledTextField"
          helperText="This is some helper text"
          placeholder="Name"
          rules= {{
            required:"This field is required.",
            maxLength:{ value: 10, message: 'Too long' }

          }}
          inputProps={{
            'data-testid': 'testTextField',
          }}
        />
      </TestForm>
    );

    const input = screen.getByTestId('testTextField');

    fireEvent.change(input, { target: { value: 'This is way too much text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0));

    await waitFor(() => expect(screen.findByText('Too long')).toBeDefined());
  });

  test('should not render the error styling if no error is returned', async () => {
    const screen = render(
      <TestForm UseFormOptions={{values: { controlledTextField: undefined }}} onSubmit={onSubmit}>
        <ControlledTextField
          name="controlledTextField"
          helperText="This is some helper text"
          placeholder="Name"
          rules= {{
            required:"This field is required.",
            maxLength:{ value: 10, message: 'Too long' }

          }}
          inputProps={{
            'data-testid': 'testTextField',
          }}
        />
      </TestForm>
    );

    const input = screen.getByTestId('testTextField');

    fireEvent.change(input, { target: { value: 'Some Text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML).controlledTextField;
      expect(formValues).toBe('Some Text');
    });
  });
});
