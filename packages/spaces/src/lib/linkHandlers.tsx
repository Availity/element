import { getUrl, getTarget, updateUrl } from './helpers';
import nativeForm from '@availity/native-form';
import { isAbsoluteUrl } from '@availity/resolve-url';
import { updateTopApps } from './topApps';
import { Space } from './spaces-types';

export const openLink = async (space: Space, { akaname, payerSpaceId }) => {
  if (!space?.link?.url) {
    return;
  }

  await updateTopApps(space, akaname);

  const target = getTarget(space.link.target);
  const url = !isAbsoluteUrl(space.link.url)
    ? getUrl(updateUrl(space.link.url, 'spaceId', payerSpaceId || space.parents?.[0]?.id), false, false)
    : space.link.url;

  window.open(url, target);
};

export const openLinkWithSso = async (space: Space, { akaname, clientId, payerSpaceId, ssoParams }) => {
  if (space.meta && space.meta.ssoId) {
    const options = space.link?.target ? { target: getTarget(space.link.target) } : undefined;

    const attributes = {
      X_Client_ID: clientId,
      X_XSRF_TOKEN: document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, '$1'),
      spaceId: payerSpaceId,
      ...ssoParams,
    };

    try {
      await updateTopApps(space, akaname);
      await nativeForm(space.meta.ssoId, attributes, options, space.type);
    } catch {
      console.warn('Something went wrong');
    }

    return false;
  }

  return false;
};
