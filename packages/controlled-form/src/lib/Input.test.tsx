import { render, fireEvent, waitFor } from '@testing-library/react';
import { ControlledInput } from './Input';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledInput', () => {
  test('should render the error styling if an error is returned', async () => {
      const screen = render(
        <TestForm UseFormOptions={{values: { controlledInput: undefined }}} onSubmit={onSubmit}>
          <ControlledInput
            data-testid="controlledInputWrapper"
            name="controlledInput"
            rules={{
              required: "This field is required.",
              maxLength:{ value: 10, message: 'Too long' }
            }}
            inputProps={{
              'data-testid': 'testInput',
            }}
          />
      </TestForm>
    );

    const input = screen.getByTestId('testInput');

    fireEvent.change(input, { target: { value: 'This is way too much text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0));

    const muiInputBase = screen.getByTestId('controlledInputWrapper');

    await waitFor(() => expect(muiInputBase.classList).toContain('Mui-error'));
  });

  test('should not render the error styling if no error is returned', async () => {
      const screen = render(
        <TestForm UseFormOptions={{values: { controlledInput: undefined }}} onSubmit={onSubmit}>
          <ControlledInput
            data-testid="controlledInputWrapper"
            name="controlledInput"
            rules={{
              required: "This field is required.",
              maxLength:{ value: 10, message: 'Too long' }
            }}
            inputProps={{
              'data-testid': 'testInput',
            }}
          />
      </TestForm>
    );

    const input = screen.getByTestId('testInput');

    fireEvent.change(input, { target: { value: 'Input Text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML).controlledInput;
      expect(formValues).toBe('Input Text');
    });
  });
});
