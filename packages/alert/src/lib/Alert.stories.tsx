import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import type { AlertColor } from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { Alert, AlertProps } from './Alert';
import { Link } from '@mui/material';

export default {
  title: 'Components/Alert/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    severity: 'info',
    children: 'This text is inside the alert'
  }
};

export const _Alert: StoryObj<typeof Alert> = {
  render: (args: Omit<AlertProps, 'ref'>) => (
    <Alert severity="info" {...args}/>
  )
};

/**
 * The `Collapse` component is a recommended way to handle visual dismissing of an alert.
 * Check out the Material UI docs for more information.
 */
export const _DismissableAlert: StoryObj<typeof Alert> = {
  render: (args: Omit<AlertProps, 'ref'>) => {
    const [visible, setVisible] = React.useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    return (
      <Collapse in={visible}>
        <Alert onClose={onClose} {...args}/>
      </Collapse>
    );
  }
};

export const _Action: StoryObj<typeof Alert> = {
  render: (args: Omit<AlertProps, 'ref'>) => {
    const [visible, setVisible] = React.useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    const action = <Link component="button" onClick={onClose}>Action</Link>

    return (
      <Collapse in={visible}>
        <Alert action={action} {...args}/>
      </Collapse>
    );
  }
};

export const _ActionAndClose: StoryObj<typeof Alert> = {
  render: (args: Omit<AlertProps, 'ref'>) => {
    const [visible, setVisible] = React.useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    const action = <Link component="button" onClick={onClose}>Action</Link>

    return (
      <Collapse in={visible}>
        <Alert onClose={onClose} action={action} {...args}/>
      </Collapse>
    );
  }
};

const severities: AlertColor[] = [ 'info', 'success', 'warning', 'error']

export const _Severities: StoryObj<typeof Alert> = {
  render: () => (
    <>
    {severities.map((severity) => (
      <>
        <Alert severity={severity} key={severity}>
          This is a {severity} alert — check it out!
        </Alert>
        <br />
      </>
    ))}
  </>
  ),
};
