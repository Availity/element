// .storybook/manager.js

import { addons } from 'storybook/manager-api';
import elementTheme from './ElementTheme';

addons.setConfig({
  theme: elementTheme,
  sidebar: {
    collapsedRoots: [
      'upgrading',
      'sample-layouts',
      'design-system',
    ],
  },
});
