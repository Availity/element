import { render } from '@testing-library/react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from './FormControlLabel';

describe('FormLabel', () => {
  test('should render successfully', () => {
    const { getByText } = render(<FormControlLabel control={<Checkbox />} label="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });
  test('should add <FieldHelpIcon/> if helpTopicId passed', () => {
    const { getByRole } = render(
      <FormControlLabel control={<Checkbox />} helpTopicId="123" label="Test" id="test-label" />
    );

    const helpLink = getByRole('link');
    expect(helpLink).toBeTruthy();
    expect(helpLink).toHaveAccessibleDescription('Test');
  });
});
