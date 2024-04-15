import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AsyncAutocomplete } from './AsyncAutocomplete';

describe('AsyncAutocomplete', () => {
  test('should render successfully', () => {
    const { getByLabelText } = render(
      <AsyncAutocomplete
        FieldProps={{ label: 'Test' }}
        loadOptions={async () => ({
          options: ['1', '2', '3'],
          hasMore: false,
        })}
      />
    );
    expect(getByLabelText('Test')).toBeTruthy();
  });

  test('options should be available', async () => {
    const loadOptions = () =>
      Promise.resolve({
        options: [{ label: 'Option 1' }],
        getOptionLabel: (option: { label: string }) => option.label,
        hasMore: false,
      });

    render(<AsyncAutocomplete loadOptions={loadOptions} FieldProps={{ label: 'Test' }} />);

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
    });

    fireEvent.click(await screen.findByText('Option 1'));

    waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
    });
  });

  test('should call loadOptions when scroll to the bottom', async () => {
    const loadOptions = jest.fn();
    loadOptions.mockResolvedValueOnce({
      options: [
        { label: 'Option 1' },
        { label: 'Option 2' },
        { label: 'Option 3' },
        { label: 'Option 4' },
        { label: 'Option 5' },
        { label: 'Option 6' },
      ],
      hasMore: true,
    });
    render(<AsyncAutocomplete loadOptions={loadOptions} FieldProps={{ label: 'Test' }} />);

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
    });

    expect(loadOptions).toHaveBeenCalled();
    expect(loadOptions).toHaveBeenCalledTimes(1);
    expect(loadOptions).toHaveBeenCalledWith(0, 50);

    loadOptions.mockResolvedValueOnce({
      options: [{ label: 'Option 7' }],
      hasMore: false,
    });

    await act(async () => {
      const options = await screen.findByRole('listbox');
      fireEvent.scroll(options, { target: { scrollTop: options.scrollHeight } });
    });

    await waitFor(() => {
      expect(loadOptions).toHaveBeenCalled();
      expect(loadOptions).toHaveBeenCalledTimes(2);
      expect(loadOptions).toHaveBeenLastCalledWith(1, 50);
    });
  });
});
