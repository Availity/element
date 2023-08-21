import { forwardRef } from 'react';
import { Box, FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@mui/material';
import { FieldHelpIcon } from './FieldHelpIcon';

export type FormLabelProps = {
  /** Adds `FieldHelpIcon` next to the label (should not be within label for accessibility) */
  helpTopicId?: string;
} & MuiFormLabelProps;

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { children, helpTopicId, id, ...rest } = props;

  const labelId = id || (rest.htmlFor ? `${rest.htmlFor}-label` : undefined);

  return (
    <Box display="flex" flexDirection="row">
      <MuiFormLabel id={labelId} {...rest} ref={ref}>
        {children}
      </MuiFormLabel>
      {helpTopicId ? <FieldHelpIcon helpTopicId="12345" labelId={labelId} sx={{ px: 0.5 }} /> : null}
    </Box>
  );
});
