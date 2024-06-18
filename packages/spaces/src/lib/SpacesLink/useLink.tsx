import { useCurrentUser } from '@availity/hooks';
import { useSpaces } from '../Spaces';
import { useModal } from '../modals/ModalProvider';
import { openLink, openLinkWithSso } from './linkHandlers';
import type { Space } from '../spaces-types';

type UseLink = {
  (spaceOrSpaceId: Space | string, options: { clientId: string; linkAttributes?: Record<string, any> }): void;
};

export const useLink: UseLink = (spaceOrSpaceId, { clientId, linkAttributes = {} }) => {
  const spaceFromSpacesProvider = useSpaces(typeof spaceOrSpaceId === 'string' ? spaceOrSpaceId : spaceOrSpaceId.id);

  const { data: user } = useCurrentUser();

  const openModal = useModal();

  const space = spaceFromSpacesProvider?.[0];

  const parentPayerSpaces = space?.parents?.filter(
    (p) => p.type && (p.type.toLowerCase() === 'space' || p.type.toLowerCase() === 'payerspace')
  );

  const legacySso = () => {
    openModal('DISCLAIMER_MODAL', {
      disclaimerId: space?.meta?.disclaimerId,
      name: space?.name,
      spaceType: space?.type,
      id: space?.configurationId,
      title: space?.name,
      description: space?.description,
      link: space?.link,
      user: user?.akaname,
    });
  };

  const openMultiPayerModal = () =>
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

  type MediaProps = {
    role: string;
    onClick?: (event: React.MouseEvent) => void;
    onKeyPress?: (event: React.KeyboardEvent) => void;
  };

  const mediaProps: MediaProps = {
    role: 'link',
  };

  if (space?.meta?.ssoId) {
    mediaProps.onClick = (event) => {
      event.preventDefault();
      openLinkWithSso(space, {
        akaname: user?.akaname,
        clientId,
        payerSpaceId: linkAttributes.spaceId,
        ssoParams: linkAttributes,
      });
    };
    mediaProps.onKeyPress = (event) => {
      if (event.key === '13') {
        event.preventDefault();
        openLinkWithSso(space, {
          akaname: user?.akaname,
          clientId,
          payerSpaceId: linkAttributes.spaceId,
          ssoParams: linkAttributes,
        });
      }
    };
  } else if (metadata?.disclaimerId) {
    mediaProps.onClick = legacySso;
    mediaProps.onKeyPress = (e) => e.key === '13' && legacySso();
  } else if (parentPayerSpaces.length > 1 && !linkAttributes.spaceId) {
    mediaProps.onClick = openMultiPayerModal;
    mediaProps.onKeyPress = (e) => e.key === '13' && openMultiPayerModal();
  } else {
    mediaProps.onClick = () => openLink(space, { akaname: user?.akaname, payerSpaceId: linkAttributes.spaceId });
    mediaProps.onKeyPress = (e) =>
      e.key === '13' && openLink(space, { akaname: user?.akaname, payerSpaceId: linkAttributes.spaceId });
  }

  return [
    {
      ...space,
      type: space?.type,
      configurationId: space?.configurationId,
      name: space?.name,
      description: space?.description,
      meta: space?.meta,
      link: space?.link,
    },
    mediaProps,
  ];
};
