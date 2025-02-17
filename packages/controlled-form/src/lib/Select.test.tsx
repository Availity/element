import { render, fireEvent, waitFor } from '@testing-library/react';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledSelect } from './Select';
import { MenuItem } from '@availity/mui-menu';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledSelect', () => {
  test('should render the error styling if an error is returned', async () => {
    const screen = render(
      <TestForm UseFormOptions={{values: { controlledSelect: undefined }}} onSubmit={onSubmit}>
          <ControlledSelect name="controlledSelect">
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </ControlledSelect>
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
      const controlledSelectValue = JSON.parse(result.innerHTML).controlledSelect;
      expect(controlledSelectValue).toBe(1);
    });
  });
});
