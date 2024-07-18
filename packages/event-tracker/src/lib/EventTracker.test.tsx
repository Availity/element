import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';

import { EventTrackerProvider, useEventTracker } from './EventTracker';

const makePlugin = () => ({
  isEnabled: jest.fn(() => true),
  init: jest.fn(),
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),
});

describe('EventTracker', () => {
  afterEach(() => {
    cleanup();
  });

  it('should allow click events', async () => {
    const plugins = [makePlugin()];

    const { getByText } = render(
      <EventTrackerProvider plugins={plugins}>
        <button data-analytics-on="click" data-analytics-action="click" type="button">
          Hello World
        </button>
      </EventTrackerProvider>
    );

    const btn = getByText('Hello World');

    fireEvent.click(btn);

    expect(plugins[0].trackEvent).toHaveBeenCalledTimes(1);
  });

  it('should allow trackEvents from code', async () => {
    const plugins = [makePlugin()];

    const Button = () => {
      const { trackEvent } = useEventTracker();

      return (
        <button
          onClick={() =>
            trackEvent({
              url: '/test',
            })
          }
        >
          Hello World
        </button>
      );
    };

    const { getByText } = render(
      <EventTrackerProvider plugins={plugins}>
        <Button />
      </EventTrackerProvider>
    );

    const btn = getByText('Hello World');

    fireEvent.click(btn);

    await waitFor(() => {
      expect(plugins[0].trackEvent).toHaveBeenCalledTimes(1);
    });
  });
});
