import { useSpaces } from './Spaces';

export type SpacesGhostTextProps = {
  spaceId: string;
  id?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const SpacesGhostText = ({ spaceId, id, ...props }: SpacesGhostTextProps) => {
  const spaces = useSpaces(spaceId);

  const space = spaces?.[0];

  if (space?.isGhosted) {
    return (
      <small id={id || `app-ghost-text-${spaceId}`} {...props}>
        <em>{space?.meta?.ghostText}</em>
      </small>
    );
  }

  return null;
};
