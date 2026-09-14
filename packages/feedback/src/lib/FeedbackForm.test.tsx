import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FeedbackForm } from './FeedbackForm';

const analytics = { info: vi.fn() };
const handleClose = vi.fn();
const setLoading = vi.fn();
const setSent = vi.fn();

describe('Feedback', () => {
  test('should render Send Feedback button disabled', async () => {
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
    await act(async () => {});
    const submitButton = getAllByRole('button')[4];

    expect(submitButton).toHaveAttribute('disabled');
  });

  test('should not render Send Feedback button disabled if smile is selected', async () => {
    const user = userEvent.setup();
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

    await user.click(smileButton);

    const submitButton = getAllByRole('button')[4];

    expect(submitButton).not.toHaveAttribute('disabled');
  });
});
