import { forwardRef } from 'react';
import { Box, FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@mui/material';
import { FieldHelpIcon } from './FieldHelpIcon';

export type FormLabelProps = {
  /** Adds `FieldHelpIcon` next to the label (should not be within label for accessibility) */
  helpTopicId?: string;
} & MuiFormLabelProps;

// As long as field help is available on label, should not have any transforms/animations
// InputLabel styles take precedence in theme when used in textfield with identical classes
const StyleOverrides = {
  position: 'relative !important',
  transform: 'none !important',
  transition: 'none !important',
  animation: 'none !important',
};

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { helpTopicId, id, sx, ...rest } = props;

  const labelId = id || (rest.htmlFor ? `${rest.htmlFor}-label` : undefined);

  return (
    <Box display="flex" flexDirection="row" sx={sx}>
      <MuiFormLabel id={labelId} sx={{ ...StyleOverrides }} {...rest} ref={ref} />
      {helpTopicId ? <FieldHelpIcon helpTopicId={helpTopicId} labelId={labelId} sx={{ px: 0.5 }} /> : null}
    </Box>
  );
});
