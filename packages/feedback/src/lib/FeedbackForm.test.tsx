import { render, fireEvent } from '@testing-library/react';
import { FeedbackForm } from './FeedbackForm';

const analytics = { info: jest.fn() };
const handleClose = jest.fn();
const setLoading = jest.fn();
const setSent = jest.fn();

describe('Feedback', () => {
  test('should render Send Feedback button disabled', () => {
    const { getAllByRole } = render(
      <FeedbackForm
        appName="This App"
        analytics={analytics}
        handleClose={handleClose}
        loading={false}
        sent={false}
        setLoading={setLoading}
        setSent={setSent}
      />
    );
    const submitButton = getAllByRole('button')[4];

    expect(submitButton).toHaveAttribute('disabled');
  });

  test('should not render Send Feedback button disabled if smile is selected', () => {
    const { getAllByRole } = render(
      <FeedbackForm
        appName="This App"
        analytics={analytics}
        handleClose={handleClose}
        loading={false}
        sent={false}
        setLoading={setLoading}
        setSent={setSent}
      />
    );

    const smileButton = getAllByRole('button')[0];

    fireEvent.click(smileButton);

    const submitButton = getAllByRole('button')[4];

    expect(submitButton).not.toHaveAttribute('disabled');
  });
});
