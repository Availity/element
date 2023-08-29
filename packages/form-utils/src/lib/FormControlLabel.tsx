import { forwardRef } from 'react';
import {
  Box,
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material';
import { FieldHelpIcon } from './FieldHelpIcon';

export type FormControlLabelProps = {
  /** Adds `FieldHelpIcon` next to the label (should not be within label for accessibility) */
  helpTopicId?: string;
  /** If `true`, adds required to control. (No required asterisk on individual controls in the group) */
  required?: boolean;
} & Omit<MuiFormControlLabelProps, 'componentsProps' | 'labelPlacement' | 'required'>;

export const FormControlLabel = forwardRef(({ helpTopicId, id, ...rest }: FormControlLabelProps, ref) => {
  const labelId = id || (rest.htmlFor ? `${rest.htmlFor}-label` : undefined);

  return (
    <Box>
      <MuiFormControlLabel id={labelId} {...rest} ref={ref} />
      {helpTopicId ? <FieldHelpIcon helpTopicId="12345" labelId={labelId} /> : null}
    </Box>
  );
});
