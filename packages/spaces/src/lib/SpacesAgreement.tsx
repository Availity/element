import { Typography } from '@availity/mui-typography';
import ReactMarkdown from 'react-markdown';

import { useSpaces } from './Spaces';

export type SpacesAgreementProps = {
  spaceId: string;
  markdown?: boolean;
  id?: string;
};

export const SpacesAgreement = ({ spaceId, markdown = false, id: elementId }: SpacesAgreementProps) => {
  const spaces = useSpaces(spaceId);
  if (spaces && spaces.length > 0) {
    const { description: agreement, id } = spaces[0];

    if (agreement) {
      const children = markdown ? <ReactMarkdown>{agreement}</ReactMarkdown> : agreement;

      return (
        <Typography variant="agreement" id={elementId || `spaces-agreement-${spaceId || id}`}>
          {children}
        </Typography>
      );
    }
  }

  return null;
};
