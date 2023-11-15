import { render, fireEvent } from '@testing-library/react';
import { FeedbackHeader } from './FeedbackHeader';

describe('FeedbackHeader', () => {
  test('should render successfully', () => {
    const handleClose = jest.fn();
    const { getByText, getByLabelText } = render(
      <FeedbackHeader appName="This App" handleClose={handleClose} loading={false} sent={false} />
    );

    expect(getByText('Tell us what you think about This App')).toBeTruthy();

    const closeButton = getByLabelText('Close');

    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalled();
  });

  test('should render sent text successfully', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <FeedbackHeader appName="This App" handleClose={handleClose} loading={false} sent={true} />
    );

    expect(getByText('Thank you for your feedback.')).toBeTruthy();
  });
});
