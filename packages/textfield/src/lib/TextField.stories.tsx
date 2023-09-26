// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EyeIcon, EyeSlashIcon } from '@availity/mui-icon';
import { IconButton } from '@availity/mui-button';

import { TextField, TextFieldProps } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;

export const _TextField: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => <TextField {...args} />,
  args: {
    label: 'Field Label',
    id: 'test',
  },
};

export const _PasswordField: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <TextField
        {...args}
        type={showPassword ? 'text' : 'password'}
        id="password"
        endAdornment={
          <IconButton title="password visibility toggle" onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </IconButton>
        }
      />
    );
  },
  args: {
    label: 'Password',
  },
};
