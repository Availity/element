// Each exported component in the package should have its own stories file

import { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@availity/mui-typography';
import { Grid, Box } from '@availity/mui-layout';
import { FormControl, FormLabel, Select, Input, SelectChangeEvent } from '@availity/mui-form-utils';
import { TextField } from '@availity/mui-textfield';
import { MenuItem } from '@availity/mui-menu';
import { Button } from '@availity/mui-button';
import { EventTrackerProvider, useEventTracker, EventTrackerProps } from './EventTracker';

const meta: Meta<typeof EventTrackerProvider> = {
  title: 'Components/EventTracker/EventTracker',
  component: EventTrackerProvider,
  tags: ['autodocs'],
};

export default meta;

type EventTrackerUiProps = {
  count: number;
  state: string;
  selectValue: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const EventTrackerUI = ({ count, state, selectValue, setCount, setSelectValue }: EventTrackerUiProps) => {
  const { trackEvent } = useEventTracker();

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };
  return (
    <>
      <Typography>
        This example is set up to track user events. <code>Select</code> allows logging for the blur event.
        <br />
        <code>Textarea</code> and <code>Input</code> log when focused. Both of these buttons log when clicked.
      </Typography>
      <Typography>Events logged: {count}</Typography>
      <pre>LastEvent: {state}</pre>
      <Grid container direction="column" sx={{ maxWidth: '500px' }} data-analytics-app-name="app">
        <FormControl>
          <FormLabel id="select-label">Select</FormLabel>
          <Select
            labelId="select-label"
            value={selectValue}
            onChange={handleChange}
            onBlur={() => trackEvent({ action: 'blur', appName: 'app', elemId: 'select-label', event: 'blur' })}
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="30">30</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ marginTop: 2 }}>
          <FormControl>
            <FormLabel id="textarea-label" htmlFor="textarea">
              Text Area
            </FormLabel>
            <TextField id="textarea" multiline data-analytics-action="focus" />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel id="input-label" htmlFor="input">
            Input
          </FormLabel>
          <Input id="input" data-analytics-action="focus" />
        </FormControl>
        <Grid container sx={{ justifyContent: 'space-between', marginTop: 2 }} data-analytics-container="buttons">
          <Button
            id="reset-button"
            data-analytics-action="click"
            data-analytics-test-id="world"
            onClick={() => setCount(0)}
            color="secondary"
            children="Reset Count"
          />
          <Button
            id="my-button"
            data-analytics-action="click"
            data-analytics-test-id="hello"
            color="primary"
            children="Click Me"
          />
        </Grid>
      </Grid>
    </>
  );
};

export const _EventTracker: StoryObj<typeof EventTrackerProvider> = {
  render: (args: EventTrackerProps) => {
    const [state, setState] = useState('');
    const [count, setCount] = useState(0);
    const [selectValue, setSelectValue] = useState('');

    const plugins = useMemo(
      () => [
        {
          isEnabled: () => {
            console.log('checking isEnabled');
            return true;
          },
          init: () => {
            console.log('init');
          },
          trackEvent(event: unknown) {
            console.log('track event', event);
            setState(JSON.stringify(event, null, 2));
            setCount((current) => current + 1);
          },
          trackPageView(url: unknown) {
            console.log('track page view', url);
          },
        },
      ],
      []
    );

    return (
      <EventTrackerProvider {...args} plugins={plugins}>
        <EventTrackerUI
          count={count}
          setCount={setCount}
          state={state}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
      </EventTrackerProvider>
    );
  },
  args: {
    eventModifiers: ['action'],
    recursive: true,
  },
};
