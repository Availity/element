import { render, fireEvent, waitFor } from '@testing-library/react';
import { FormControl, FormLabel, FormControlLabel, FormGroup } from '@availity/mui-form-utils';
import { ControlledCheckbox } from './Checkbox';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledCheckbox', () => {
  test('should set the value and submit the form data', async () => {
      const screen = render(
        <TestForm onSubmit={onSubmit} UseFormOptions={{values: { option1: undefined, option2: undefined, option3: undefined }}}>
          <FormControl>
            <FormLabel id="radio-group" component="div">
              Radio Group
            </FormLabel>
            <FormGroup>
              <FormControlLabel label="Option 1" control={<ControlledCheckbox name="option1" />} />
              <FormControlLabel label="Option 2" control={<ControlledCheckbox name="option2" />} />
              <FormControlLabel label="Option 3" control={<ControlledCheckbox name="option3" />} />
            </FormGroup>
          </FormControl>
      </TestForm>
    );

    const option1 = screen.getByText('Option 1');

    fireEvent.click(option1);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML);
      expect(formValues.option1).toBeTruthy();
      expect(formValues.option2).toBeFalsy();
      expect(formValues.option3).toBeFalsy();
    });
  });
});
