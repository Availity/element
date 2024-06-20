// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Favorites, FavoritesProps } from './Favorites';

const meta: Meta<typeof Favorites> = {
  title: 'Components/Favorites/Favorites',
  component: Favorites,
  tags: ['autodocs'],
};

export default meta;

export const _Favorites: StoryObj<typeof Favorites> = {
  render: (args: FavoritesProps) => <Favorites {...args} />,
  args: {
    children: 'This text is a child of Favorites',
  },
};
