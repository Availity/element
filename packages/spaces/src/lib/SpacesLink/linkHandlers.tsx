import { getUrl, getTarget, updateUrl } from '../helpers';
import nativeForm from '@availity/native-form';
import { isAbsoluteUrl } from '@availity/resolve-url';
import { updateTopApps } from '../topApps';
import { OpenLink, OpenLinkWithSso } from './spaces-link-types';

export const openLink: OpenLink = async (space, params) => {
  if (!space?.link?.url) {
    return;
  }

  if (params?.akaname) await updateTopApps(space, params.akaname);

  const url = !isAbsoluteUrl(space.link.url)
    ? getUrl(updateUrl(space.link.url, 'spaceId', params?.payerSpaceId || space.parents?.[0]?.id), false, false)
    : space.link.url;

  const target = getTarget(space.link.target);

  window.open(url, target);
};

export const openLinkWithSso: OpenLinkWithSso = async (space, { akaname, clientId, payerSpaceId, ssoParams }) => {
  if (space.meta && space.meta.ssoId) {
    const options = space.link?.target ? { target: getTarget(space.link.target) } : undefined;

    const attributes = {
      X_Client_ID: clientId,
      X_XSRF_TOKEN: document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, '$1'),
      spaceId: payerSpaceId,
      ...ssoParams,
    };

    try {
      if (akaname) await updateTopApps(space, akaname);
      await nativeForm(space.meta.ssoId, attributes, options, space.type);
    } catch {
      console.warn('Something went wrong');
    }

    return false;
  }

  return false;
};
