import { DialogContent } from '@availity/mui-dialog';
import { Grid, Box } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { SpacesImage } from '../SpacesImage';
import { ModalProps } from './modal-types';

export const MultiPayerModal = ({ parentPayerSpaces, name, state: { selectedOption }, setState }: ModalProps) => (
  <DialogContent>
    <Typography>
      Open {name} as: {selectedOption ? selectedOption.name || selectedOption.id : ''}
    </Typography>
    <Grid direction="row">
      {parentPayerSpaces &&
        parentPayerSpaces.map((payerSpace) => (
          <Box onClick={() => setState({ selectedOption: payerSpace })}>
            <SpacesImage spaceId={payerSpace.configurationId} imageType="images.tile" />
          </Box>
        ))}
    </Grid>
  </DialogContent>
);
