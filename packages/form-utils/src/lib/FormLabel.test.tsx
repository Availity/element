import { render } from '@testing-library/react';
import { FormLabel } from './FormLabel';

describe('FormLabel', () => {
  test('should render successfully', () => {
    const { getByText } = render(<FormLabel>Test</FormLabel>);
    expect(getByText('Test')).toBeTruthy();
  });
  test('should add <FieldHelpIcon/> if helpTopicId passed', () => {
    const { getByRole } = render(
      <FormLabel htmlFor="test" helpTopicId="123">
        Test
      </FormLabel>
    );

    const helpLink = getByRole('link');
    expect(helpLink).toBeTruthy();
    expect(helpLink).toHaveAccessibleDescription('Test');
  });
});
