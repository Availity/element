import { Disclaimer } from '@availity/mui-disclaimer';
import ReactMarkdown from 'react-markdown';

import { useSpaces } from './Spaces';

export interface SpacesDisclaimerProps {
  accent?: boolean;
  spaceId: string;
  markdown?: boolean;
  id?: string;
}

export const SpacesDisclaimer = ({
  accent = true,
  spaceId,
  markdown = false,
  id: elementId,
  ...props
}: SpacesDisclaimerProps) => {
  const spaces = useSpaces(spaceId);
  if (spaces && spaces.length > 0) {
    const { description: disclaimer, id } = spaces[0];

    if (disclaimer) {
      const children = markdown ? <ReactMarkdown>{disclaimer}</ReactMarkdown> : disclaimer;

      return (
        <Disclaimer
          accent={accent}
          id={elementId || `spaces-disclaimer-${spaceId || id}`}
          description={children}
          {...props}
        />
      );
    }
  }

  return null;
};
