// .storybook/manager.js

import { addons } from 'storybook/manager-api';
import elementTheme from './ElementTheme';

addons.setConfig({
  theme: elementTheme,
  sidebar: {
    collapsedRoots: [
      'bs4-migration',
      'sample-layouts',
      'design-system',
    ],
  },
});
