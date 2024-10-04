// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import {API_PreparedIndexEntry, API_StatusObject} from "@storybook/types";
import elementTheme from './ElementTheme';

addons.setConfig({
  theme: elementTheme,
  sidebar: {
    collapsedRoots: [
      'bs4-migration',
      'sample-layouts',
      'design-system',
    ],
    filters: {
      patterns: (item: API_PreparedIndexEntry & {
        status: Record<string, API_StatusObject | null>;
      }): boolean => {
        return !(item.tags ?? []).includes('hideInSidebar');
      }
    }
  },
});
