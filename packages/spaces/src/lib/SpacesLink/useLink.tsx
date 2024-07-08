import { useCurrentUser } from '@availity/hooks';
import { useSpaces } from '../Spaces';
import { useModal } from '../modals/ModalProvider';
import { openLink, openLinkWithSso } from './linkHandlers';
import type { UseLink, MediaProps, SsoTypeSpace } from './spaces-link-types';
import { Space } from '../spaces-types';

const isSsoSpace = (space: Space | SsoTypeSpace | undefined): space is SsoTypeSpace =>
  space?.type === 'sso' || space?.type === 'openid';

export const useLink: UseLink = (spaceOrSpaceId, options) => {
  const spaceFromSpacesProvider = useSpaces(
    (typeof spaceOrSpaceId === 'string' ? spaceOrSpaceId : spaceOrSpaceId?.id) || ''
  );

  const { data: user } = useCurrentUser();

  const openModal = useModal();

  const space = spaceFromSpacesProvider?.[0];

  const parentPayerSpaces = space?.parents?.filter(
    (p) => p.type && (p.type.toLowerCase() === 'space' || p.type.toLowerCase() === 'payerspace')
  );

  const legacySso = () => {
    if (space && space.meta?.disclaimer && space.link) {
      openModal('DISCLAIMER_MODAL', {
        disclaimerId: space.meta.disclaimerId,
        name: space.name,
        spaceType: space.type,
        id: space.configurationId,
        title: space.name,
        description: space.description,
        link: space.link,
        user: user?.akaname,
      });
    }
  };

  const openMultiPayerModal = () => {
    if (space && space.link)
      openModal('MULTI_PAYER_MODAL', {
        title: 'Open Link as Payer',
        name: space?.name,
        parentPayerSpaces,
        link: space?.link,
        id: space?.configurationId,
        spaceType: space?.type,
        metadata: space?.meta,
        user: user?.akaname,
      });
  };

  const mediaProps: MediaProps = {
    role: 'link',
  };

  if (isSsoSpace(space) && space?.meta?.ssoId && user) {
    if (!options?.clientId) {
      throw new Error('clientId is required for SSO spaces');
    }
    if (!options.linkAttributes) {
      throw new Error('linkAttributes are required for SSO spaces');
    }
    mediaProps.onClick = (event) => {
      event.preventDefault();
      if (options.clientId && options.linkAttributes) {
        openLinkWithSso(space, {
          akaname: user.akaname,
          clientId: options.clientId,
          payerSpaceId: options.linkAttributes.spaceId,
          ssoParams: options.linkAttributes,
        });
      }
    };
    mediaProps.onKeyPress = (event) => {
      if (event.key === '13') {
        event.preventDefault();
        if (options.clientId && options.linkAttributes) {
          openLinkWithSso(space, {
            akaname: user.akaname,
            clientId: options.clientId,
            payerSpaceId: options.linkAttributes.spaceId,
            ssoParams: options.linkAttributes,
          });
        }
      }
    };
  } else if (space?.meta?.disclaimerId) {
    mediaProps.onClick = legacySso;
    mediaProps.onKeyPress = (e) => e.key === '13' && legacySso();
  } else if (parentPayerSpaces && parentPayerSpaces.length > 1 && !options?.linkAttributes?.spaceId) {
    mediaProps.onClick = openMultiPayerModal;
    mediaProps.onKeyPress = (e) => e.key === '13' && openMultiPayerModal();
  } else {
    mediaProps.onClick = () =>
      space && user && openLink(space, { akaname: user.akaname, payerSpaceId: options?.linkAttributes?.spaceId });
    mediaProps.onKeyPress = (e) =>
      e.key === '13' &&
      space &&
      user &&
      openLink(space, { akaname: user.akaname, payerSpaceId: options?.linkAttributes?.spaceId });
  }

  return [space, mediaProps];
};
