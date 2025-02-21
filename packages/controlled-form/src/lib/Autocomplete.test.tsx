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
      <TestForm UseFormOptions={{ values: { controlledAutocomplete: null } }} onSubmit={onSubmit}>
        <ControlledAutocomplete name="controlledAutocomplete" options={['Option 1', 'Option 2']} />
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

  describe('when using rules', () => {
    describe('when required', () => {
      test('should indicate it is required when passing a string', async () => {
        const screen = render(
          <TestForm UseFormOptions={{ values: { controlledAutocomplete: null } }} onSubmit={onSubmit}>
            <ControlledAutocomplete
              FieldProps={{ label: 'Autocomplete Label' }}
              name="controlledAutocomplete"
              options={['Option 1', 'Option 2']}
              rules={{ required: 'This field is required' }}
            />
          </TestForm>
        );

        expect(screen.getByText('*')).toBeDefined();
      });

      test('should indicate it is required when passing an object with true', async () => {
        const screen = render(
          <TestForm UseFormOptions={{ values: { controlledAutocomplete: null } }} onSubmit={onSubmit}>
            <ControlledAutocomplete
              FieldProps={{ label: 'Autocomplete Label' }}
              name="controlledAutocomplete"
              options={['Option 1', 'Option 2']}
              rules={{ required: { value: true, message: 'This field is required' } }}
            />
          </TestForm>
        );

        expect(screen.getByText('*')).toBeDefined();
      });

      test('should not indicate it is required when passing an object with false', async () => {
        const screen = render(
          <TestForm UseFormOptions={{ values: { controlledAutocomplete: null } }} onSubmit={onSubmit}>
            <ControlledAutocomplete
              FieldProps={{ label: 'Autocomplete Label' }}
              name="controlledAutocomplete"
              options={['Option 1', 'Option 2']}
              rules={{ required: { value: false, message: 'This field is required' } }}
            />
          </TestForm>
        );

        expect(screen.queryByText('*')).toBeNull();
      });
    });
  });
});