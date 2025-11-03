import { CircularProgress } from '@availity/mui-progress';
import { Img } from 'react-image';
import { useSpaces, useSpacesContext } from './Spaces';

type BaseSpacesImageProps = {
  imageType?:
    | 'url'
    | 'images.logo'
    | 'images.tile'
    | 'images.billboard'
    | 'images.promotional'
    | 'images.promotionalHover';
  fallback?: string;
  id?: string;
  Loader?: ({ id }: { id: string }) => React.JSX.Element;
};

type SpacesImageSpaceId = {
  spaceId: string;
  payerId?: string;
} & BaseSpacesImageProps;

type SpacesImagePayerId = {
  spaceId?: string;
  payerId: string;
} & BaseSpacesImageProps;

export type SpacesImageProps = SpacesImageSpaceId | SpacesImagePayerId;

export const SpacesImage = ({
  spaceId,
  payerId,
  imageType = 'url',
  fallback,
  Loader = CircularProgress,
  ...props
}: SpacesImageProps) => {
  let spaces;

  if (spaceId) {
    spaces = useSpaces(spaceId);
  } else if (payerId) {
    spaces = useSpaces(payerId);
  }

  const { loading } = useSpacesContext();

  const id = spaceId || payerId || spaces?.[0].id || spaces?.[0].configurationId;

  const imageMap = {
    'images.logo': spaces?.[0]?.images?.logo,
    'images.tile': spaces?.[0]?.images?.tile,
    'images.billboard': spaces?.[0]?.images?.billboard,
    'images.promotional': spaces?.[0]?.images?.promotional,
    'images.promotionalHover': spaces?.[0]?.images?.promotionalHover,
    url: spaces?.[0]?.url,
  };

  let url = imageMap[imageType];

  if (!url && loading) {
    return <Loader id={`app-${id}-loading`} />;
  }

  if (!url && !loading && fallback) {
    url = fallback;
  }

  if (!url || !id) return null;

  return (
    <Img
      id={props.id || `app-img-${id}`}
      src={url}
      alt={`Space ${imageType}`}
      loader={<Loader id={`app-img-${id}-loading`} />}
      {...props}
    />
  );
};
