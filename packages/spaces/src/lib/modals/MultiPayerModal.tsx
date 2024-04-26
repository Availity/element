import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { CardActionArea, CardMedia } from '@availity/mui-card';
import { DisclaimerModalProps } from './modal-types';

const DisclaimerModal = ({ parentPayerSpaces, name, state: { selectedOption }, setState }: DisclaimerModalProps) => (
  <Grid>
    <Typography>
      Open {name} as: {selectedOption ? selectedOption.name || selectedOption.id : ''}
    </Typography>
    <Grid>
      {parentPayerSpaces &&
        parentPayerSpaces.map((payerSpace) => (
          <CardActionArea onClick={() => setState({ selectedOption: payerSpace })}>
            <CardMedia src={payerSpace.images.tile} />
          </CardActionArea>
        ))}
    </Grid>
  </Grid>
);

export default DisclaimerModal;
