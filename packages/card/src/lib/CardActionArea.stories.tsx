// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardActionArea, CardActionAreaProps } from './CardActionArea';
import { Card } from './Card';
import { CardContent } from './CardContent';

const meta: Meta<typeof CardActionArea> = {
  title: 'Components/Card/CardActionArea',
  component: CardActionArea,
  tags: ['autodocs'],
};

export default meta;

export const _CardActionArea: StoryObj<typeof CardActionArea> = {
  render: (args: CardActionAreaProps) => (
    <Card>
      <CardActionArea {...args}>
        <CardContent>You can click on this card</CardContent>
      </CardActionArea>
    </Card>
  ),
  args: {},
};
