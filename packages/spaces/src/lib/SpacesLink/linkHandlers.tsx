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

  const spaceId = params?.payerSpaceId || space.parents?.[0]?.id;

  const essentialsDomainRegex = /(test|qa(p?)-)?essentials\.availity\.com/;
  const needsSpaceId =
    !isAbsoluteUrl(space.link.url) || essentialsDomainRegex.test(space.link.url);
  const urlWithParams = needsSpaceId ? updateUrl(space.link.url, 'spaceId', spaceId) : space.link.url;

  let url = !isAbsoluteUrl(space.link.url) ? getUrl(urlWithParams, false, false) : urlWithParams;

  if (!isAbsoluteUrl(url) && !essentialsDomainRegex.test(document.referrer) && /\/web\/|\/public\/(apps|spaces)/.test(url)) {
    const referrer = new URL(document.referrer);
    url = `${referrer.origin}${url}`
  }

  const target = getTarget(space.link.target);

  window.open(url, target);
};

export const openLinkWithSso: OpenLinkWithSso = async (space, { akaname, clientId, payerSpaceId, ssoParams }) => {
  if (space.meta && space.meta.ssoId) {
    let options;
    if (space.meta.appsDomain === 'true') {
      options = space.link?.target ?
      {
        target: getTarget(space.link.target),
        action: `${new URL(document.referrer).origin.replace('essentials', 'apps')}/ms/api/availity/internal/spc/magneto/sso/v1/saml/${space.meta.ssoId}`
      } :
      { action: `${new URL(document.referrer).origin.replace('essentials', 'apps')}/ms/api/availity/internal/spc/magneto/sso/v1/saml/${space.meta.ssoId}`};
    } else {
      options = space.link?.target ? { target: getTarget(space.link.target) } : undefined;
    }

    const attributes: Record<string, string> = {
      X_XSRF_TOKEN: document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, '$1'),
      spaceId: payerSpaceId,
      ...ssoParams,
    };

    if (clientId) {
      attributes.X_Client_ID = clientId;
    }

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
