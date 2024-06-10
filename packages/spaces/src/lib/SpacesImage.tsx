import { CircularProgress } from '@availity/mui-progress';
import { useSpaces, useSpacesContext } from './Spaces';

type BaseSpacesImageProps = {
  imageType?: 'url' | 'logo' | 'icon';
  fallback?: string;
};

interface SpacesImageSpaceId extends BaseSpacesImageProps {
  spaceId: string;
  payerId?: string;
}

interface SpacesImagePayerId extends BaseSpacesImageProps {
  spaceId?: string;
  payerId: string;
}

export type SpacesImageProps = SpacesImageSpaceId | SpacesImagePayerId;

export const SpacesImage = ({ spaceId, payerId, imageType = 'url', fallback, ...props }: SpacesImageProps) => {
  let spaces;

  if (spaceId) {
    spaces = useSpaces(spaceId);
  } else if (payerId) {
    spaces = useSpaces(payerId);
  }

  const { loading } = useSpacesContext();

  const id = spaceId || payerId || spaces?.[0].id || spaces?.[0].configurationId;
  let url = spaces?.[0]?.[imageType];

  if (!url && loading) {
    return <CircularProgress id={`app-${id}-loading`} />;
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
      loader={<CircularProgress id={`app-img-${id}-loading`} />}
      {...props}
    />
  );
};

const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

SpacesImage.create = (defaults) => {
  const SpecificSpacesImage = (props) => <SpacesImage {...defaults} {...props} />;

  SpecificSpacesImage.displayName = `Spaces${ucFirst(defaults.imageType)}`;
  return SpecificSpacesImage;
};
