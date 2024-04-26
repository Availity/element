import { useState, useEffect } from 'react';
import { avWebQLApi } from '@availity/api-axios';
import ReactMarkdown from 'react-markdown';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@availity/mui-typography';

const disclaimerQuery = `query configurationFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`;

const DisclaimerModal = ({ disclaimerId }: { disclaimerId: string }) => {
  const [disclaimer, setDisclaimer] = useState('');

  useEffect(() => {
    const fetchDisclaimer = async () => {
      if (disclaimerId) {
        const result = await avWebQLApi.create({ query: disclaimerQuery, variables: { id: disclaimerId } });

        setDisclaimer(result.data.data.configurationFindOne.description);
      }
    };

    fetchDisclaimer();
  }, [disclaimerId]);

  return <Typography>{disclaimer ? <ReactMarkdown>{disclaimer}</ReactMarkdown> : <CircularProgress />}</Typography>;
};

export default DisclaimerModal;
