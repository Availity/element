// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import {API_PreparedIndexEntry, API_StatusObject} from "@storybook/types";
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.light,
  sidebar: {
    collapsedRoots: [
      'bs4-migration',
      'layouts',
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
