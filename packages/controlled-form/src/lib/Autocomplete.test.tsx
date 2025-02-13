import { fireEvent, render, waitFor } from '@testing-library/react';
import { ControlledAutocomplete } from './Autocomplete';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledAsyncAutocomplete', () => {
  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    jest.restoreAllMocks();
  });

  test('should set the value and submit the form', async () => {
    const screen = render(
      <TestForm UseFormOptions={{values: { controlledAutocomplete: null}}} onSubmit={onSubmit}>
        <ControlledAutocomplete
          name="controlledAutocomplete"
          options={['Option 1', 'Option 2']}
        />
      </TestForm>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    fireEvent.click(screen.getByText('Option 1'));

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const controlledAutocompleteValue = JSON.parse(result.innerHTML).controlledAutocomplete;
      expect(controlledAutocompleteValue).toBe('Option 1');
    });
  });
});
