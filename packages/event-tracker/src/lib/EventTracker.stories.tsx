// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@availity/mui-button';
import { EventTrackerProvider, useEventTracker } from './EventTracker';

const meta: Meta<typeof EventTrackerProvider> = {
  title: 'Components/EventTracker/EventTracker',
  component: EventTrackerProvider,
  tags: ['autodocs'],
};

export default meta;

export const _EventTracker: StoryObj<typeof EventTrackerProvider> = {
  decorators: [
    (Story) => (
      <EventTrackerProvider>
        <Story />
      </EventTrackerProvider>
    ),
  ],
  render: () => {
    const [lastEventType, setLastEventType] = useState('');
    const { logOnClick, logOnFocus, logOnBlur } = useEventTracker();

    return (
      <EventTrackerProvider>
        <p>Last tracked event: {lastEventType}</p>
        <div
          tabIndex={0}
          onFocus={(event) => {
            setLastEventType(event.type);
            logOnFocus(event);
          }}
          style={{ border: 1, borderStyle: 'solid', width: '150px', padding: '8px' }}
        >
          Focusable div
        </div>
        <div
          tabIndex={0}
          onBlur={(event) => {
            setLastEventType(event.type);
            logOnBlur(event);
          }}
          style={{
            border: 1,
            borderStyle: 'solid',
            width: '250px',
            marginTop: '8px',
            marginBottom: '8px',
            padding: '8px',
          }}
        >
          Blurrable div
        </div>
        <Button
          onClick={(event) => {
            logOnClick(event);
            setLastEventType(event.type);
          }}
        >
          Click
        </Button>
      </EventTrackerProvider>
    );
  },
  args: {},
};
