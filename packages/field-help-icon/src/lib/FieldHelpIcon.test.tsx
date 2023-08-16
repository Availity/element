import { render } from '@testing-library/react';
import { FieldHelpIcon } from './FieldHelpIcon';

describe('FieldHelpIcon', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<FieldHelpIcon helpTopicId="Test" labelId="test-label" />);
    expect(getByRole('link')).toBeTruthy();
  });

  test('should be accessible', () => {
    const { getByRole } = render(
      <>
        <label id="test-label">Test</label>
        <FieldHelpIcon helpTopicId="Test" labelId="test-label" />
      </>
    );

    const helpLink = getByRole('link');
    expect(helpLink).toHaveAccessibleName('Help');
    expect(helpLink).toHaveAccessibleDescription('Test');
  });
});
