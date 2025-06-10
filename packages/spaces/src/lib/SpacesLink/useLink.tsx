import { useCurrentUser } from '@availity/hooks';
import { useSpaces } from '../Spaces';
import { useModal } from '../modals/ModalProvider';
import { openLink, openLinkWithSso } from './linkHandlers';
import type { UseLink, MediaProps } from './spaces-link-types';

export const useLink: UseLink = (spaceOrSpaceId, options) => {
  const spaceFromSpacesProvider = useSpaces(
    (typeof spaceOrSpaceId === 'string' ? spaceOrSpaceId : spaceOrSpaceId?.id) || ''
  );

  const { data: user } = useCurrentUser();

  const openModal = useModal();

  const space = spaceFromSpacesProvider?.[0] || (typeof spaceOrSpaceId === 'object' ? spaceOrSpaceId : undefined);

  const parentPayerSpaces = space?.parents?.filter(
    (p) => p.type && (p.type.toLowerCase() === 'space' || p.type.toLowerCase() === 'payerspace')
  );

  const legacySso = () => {
    if (space && space.meta?.disclaimerId && space.link) {
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

  if (space?.meta?.ssoId) {
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
          akaname: user?.akaname,
          clientId: options.clientId,
          payerSpaceId: options.linkAttributes.spaceId,
          ssoParams: options.linkAttributes,
        });
      }
    };
    mediaProps.onKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (options.clientId && options.linkAttributes) {
          openLinkWithSso(space, {
            akaname: user?.akaname,
            clientId: options.clientId,
            payerSpaceId: options.linkAttributes.spaceId,
            ssoParams: options.linkAttributes,
          });
        }
      }
    };
  } else if (space?.meta?.disclaimerId) {
    mediaProps.onClick = legacySso;
    mediaProps.onKeyDown = (event) => {
      if (event.key === 'Enter') return legacySso();
    };
  } else if (parentPayerSpaces && parentPayerSpaces.length > 1 && !options?.linkAttributes?.spaceId) {
    mediaProps.onClick = openMultiPayerModal;
    mediaProps.onKeyDown = (event) => {
      if (event.key === 'Enter') return openMultiPayerModal();
    };
  } else {
    mediaProps.onClick = () => {
      if (space) return openLink(space, { akaname: user?.akaname, payerSpaceId: options?.linkAttributes?.spaceId });
    };
    mediaProps.onKeyDown = (event) => {
      if (event.key === 'Enter' && space)
        return openLink(space, { akaname: user?.akaname, payerSpaceId: options?.linkAttributes?.spaceId });
    };
  }

  return [space, mediaProps];
};
