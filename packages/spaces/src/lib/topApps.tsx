import avMessage from '@availity/message-core';
import dayjs from 'dayjs';
import { Space } from './spaces-types';

const TOP_APPS = {
  ALLOWED_TYPES: ['APPLICATION', 'RESOURCE', 'NAVIGATION'],
  DISALLOWED_TYPES: ['reporting', 'how_to_guide_dental_providers', 'my_account_profile', 'my_administrators'],
  KEYS: {
    VALUES: 'myTopApps',
    LAST_UPDATED: 'top-apps-updated',
  },
  UPDATE_EVENT: 'av:topApps:updated',
};

const getItemLocalStorage = (key: string) => {
  try {
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return null;
    }

    return JSON.parse(value);
  } catch {
    return null;
  }
};

const canTrackSpace = (spaceId: string, type: string) =>
  TOP_APPS.ALLOWED_TYPES.some((t) => t === type) && !TOP_APPS.DISALLOWED_TYPES.some((id) => id === spaceId);

const getLocalStorageTopApps = (akaname: string) => {
  const topAppsValues = getItemLocalStorage(`${TOP_APPS.KEYS.VALUES}-${akaname}`);

  return topAppsValues;
};

export const updateTopApps = async (space: Space, akaname: string) => {
  if (!space.configurationId || !space.type) return;

  // If we can track the space
  if (canTrackSpace(space.configurationId, space.type)) {
    const today = dayjs();

    // Grab the current top apps from localstorage
    const topApps = (await getLocalStorageTopApps(akaname)) || {};

    // Update the last updated date. For use in top nav to actually sync with settings api
    window.localStorage.setItem(`${TOP_APPS.KEYS.LAST_UPDATED}-${akaname}`, today.format());

    const currentCount =
      topApps[space.configurationId] && typeof topApps[space.configurationId].count === 'number'
        ? topApps[space.configurationId].count
        : 0;

    topApps[space.configurationId] = {
      ...topApps?.[space.configurationId],
      count: currentCount + 1,
      lastUse: today.format(),
    };

    window.localStorage.setItem(`${TOP_APPS.KEYS.VALUES}-${akaname}`, JSON.stringify(topApps));

    avMessage.send(TOP_APPS.UPDATE_EVENT);
  }
};
