import { DialogContent } from '@availity/mui-dialog';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { Space } from '../spaces-types';

export type MultiPayerModalProps = {
  parentPayerSpaces: Space[];
  name: string;
  state: any;
  setState: any;
};

export const MultiPayerModal = ({
  parentPayerSpaces,
  name,
  state: { selectedOptions },
  setState,
}: MultiPayerModalProps) => (
  <DialogContent>
    <Typography>
      Open {name} as: {selectedOptions ? selectedOptions.name || selectedOptions.id : ''}
    </Typography>
    <Grid direction="row">{parentPayerSpaces && parentPayerSpaces.map((payerSpace) => <SpacesImage />)}</Grid>
  </DialogContent>
);
