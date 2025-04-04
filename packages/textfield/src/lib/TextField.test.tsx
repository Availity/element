import { render, fireEvent } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
  test('should render successfully', () => {
    const { getByLabelText } = render(<TextField label="Test" />);
    expect(getByLabelText('Test')).toBeTruthy();
  });

  describe('TextField character counter', () => {
    test('should render character counter successfully via inputProps', () => {
      const { getByText, getByTestId, getByTitle } = render(
        <TextField label="Test" showCharacterCount inputProps={{ 'data-testid': 'testTextField', maxLength: 20 }} />
      );

      expect(getByText('0')).toBeTruthy();
      expect(getByText('/20')).toBeTruthy();

      const input = getByTestId('testTextField');
      fireEvent.change(input, { target: { value: 'Some Text' } });

      expect(getByText('9')).toBeTruthy();
      expect(getByText('/20')).toBeTruthy();

      fireEvent.change(input, { target: { value: "Some More Text that doesn't fit" } });

      expect(getByTitle('Error')).toBeTruthy();
    });

    test('should render character counter successfully via slotProps', () => {
      const { getByText, getByTestId, getByTitle } = render(
        <TextField
          label="Test"
          showCharacterCount
          slotProps={{ htmlInput: { 'data-testid': 'testTextField', maxLength: 20 } }}
        />
      );
      expect(getByText('0')).toBeTruthy();
      expect(getByText('/20')).toBeTruthy();

      const input = getByTestId('testTextField');
      fireEvent.change(input, { target: { value: 'Some Text' } });

      expect(getByText('9')).toBeTruthy();
      expect(getByText('/20')).toBeTruthy();

      fireEvent.change(input, { target: { value: "Some More Text that doesn't fit" } });

      expect(getByTitle('Error')).toBeTruthy();
    });
  });
});
