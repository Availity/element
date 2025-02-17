import { render, fireEvent, waitFor } from '@testing-library/react';
import { FormControlLabel, Radio } from '@availity/mui-form-utils';
import { ControlledRadioGroup } from './RadioGroup';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledRadioGroup', () => {
  test('should set the value and submit the form data', async () => {
    const screen = render(
      <TestForm UseFormOptions={{values: { controlledRadioGroup: undefined }}} onSubmit={onSubmit}>
        <ControlledRadioGroup name="controlledRadioGroup" label="Radio Group" value="N/A">
          <FormControlLabel control={<Radio />} label="N/A" value="N/A" />
          <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
          <FormControlLabel control={<Radio />} label="No" value="No" />
        </ControlledRadioGroup>
      </TestForm>
    );

    const option1 = screen.getByDisplayValue('Yes');

    fireEvent.click(option1);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML).controlledRadioGroup;
      expect(formValues).toBe('Yes');
    });
  });
});
