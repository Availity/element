// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';
import { Box } from '@availity/mui-layout';
import { Typography, TypographyProps } from './Typography';

/**
 * The `Typography` component is used to correctly style most semantic elements, can also be used to apply the styles of one semantic element to another - i.e. when `h5` styling is preferred on a `h2`.
 *
 * > As a CSS utility, the `Typography` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.
 */
const meta: Meta<typeof Typography> = {
  title: 'Components/Typography/Typography',
  component: Typography,
  parameters: {
    docs: {
      controls: {
        exclude: SystemPropsList,
      },
    },
    canvas: {
      controls: {
        exclude: SystemPropsList,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const _Typography: StoryObj<typeof Typography> = {
  render: (args: TypographyProps) => <Typography {...args} />,
  args: {
    children: 'This text is a child of Typography',
    variant: 'h1',
  },
};

export const _Variants: StoryObj<typeof Typography> = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  ),
};
