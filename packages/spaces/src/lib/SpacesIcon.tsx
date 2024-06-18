import { Icon } from '@availity/mui-icon';
import { useSpacesContext } from './Spaces';
import { useLink } from './SpacesLink/useLink';
import { CircularProgress } from '@availity/mui-progress';

const SpacesIcon = ({ spaceId, loading: propsLoading, space: propsSpace, clientId, style, className, ...rest }) => {
  const { loading } = useSpacesContext();
  const isLoading = loading || propsLoading;
  const [{ shortName, icons = {}, link } = {}, linkProps] = useLink(spaceId || propsSpace, { clientId });

  if (isLoading) {
    return <CircularProgress id={`space-icon-${spaceId}-loading`} />;
  }

  const getIconTitle = () => {
    if (shortName) return shortName;
    if (icons.navigation) return <Icon className={icons.navigation} />;

    return <Icon name="desktop" />;
  };

  return (
    <AppIcon
      {...linkProps}
      style={{ ...style, cursor: link.url ? 'pointer' : '' }}
      className={classNames('d-table-cell align-middle', icons.navigation, className)}
      {...rest}
    >
      {getIconTitle()}
    </AppIcon>
  );
};
