import { useState, useEffect } from 'react';
import { avWebQLApi } from '@availity/api-axios';
import ReactMarkdown from 'react-markdown';
import { CircularProgress } from '@availity/mui-progress';
import { DialogContent } from '@availity/mui-dialog';
import type { ModalProps } from './modal-types';

const disclaimerQuery = `query configurationFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`;

export const DisclaimerModal = ({ disclaimerId }: ModalProps) => {
  const [disclaimer, setDisclaimer] = useState('');

  useEffect(() => {
    const fetchDisclaimer = async () => {
      if (disclaimerId) {
        const result = await avWebQLApi.create({ query: disclaimerQuery, variables: { id: disclaimerId } });

        setDisclaimer(result.data.configurationFindOne.description);
      }
    };

    fetchDisclaimer();
  }, [disclaimerId]);

  return (
    <DialogContent>{disclaimer ? <ReactMarkdown>{disclaimer}</ReactMarkdown> : <CircularProgress />}</DialogContent>
  );
};
