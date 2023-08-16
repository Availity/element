import { forwardRef } from 'react';
import { Box, FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@mui/material';
import { FieldHelpIcon } from '@availity/mui-field-help-icon';

export interface FormLabelProps extends MuiFormLabelProps {
  children?: React.ReactNode;
  helpTopicId?: string;
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { children, helpTopicId, id, htmlFor, ...rest } = props;

  const labelId = id || (htmlFor ? `${htmlFor}-label` : undefined);

  return (
    <Box display="flex" flexDirection="row">
      <MuiFormLabel id={labelId} htmlFor={htmlFor} {...rest} ref={ref}>
        {children}
      </MuiFormLabel>
      {helpTopicId ? <FieldHelpIcon helpTopicId="12345" labelId={labelId} sx={{ px: 0.5 }} /> : null}
    </Box>
  );
});
