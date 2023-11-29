import { render, fireEvent } from '@testing-library/react';
import { Feedback } from './Feedback';

describe('Feedback', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Feedback appName="This App" />);
    const button = getByText('Give Feedback');

    expect(button).toBeTruthy();

    fireEvent.click(button);

    expect(getByText('Tell us what you think about This App')).toBeTruthy();
  });
});
