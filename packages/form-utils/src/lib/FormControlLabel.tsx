import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import MuiFormControlLabel, { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { FieldHelpIcon } from './FieldHelpIcon';

export type FormControlLabelProps = {
  /** Adds `FieldHelpIcon` next to the label (should not be within label for accessibility). Should only be used with `end` `labelPlacement`. */
  helpTopicId?: string;
  /** If `true`, adds required to control. (No required asterisk on individual controls in the group) */
  required?: boolean;
} & Omit<MuiFormControlLabelProps, 'componentsProps' | 'required'>;

// Form Label styles moved up to wrapper to include field level help
const Wrapper = styled(Box, {
  name: 'MuiFormControlLabel',
  slot: 'AvWrapper',
  overridesResolver: (props, styles) => styles.avWrapper,
})({}) as typeof Box;

export const FormControlLabel = forwardRef(({ helpTopicId, id, sx, ...rest }: FormControlLabelProps, ref) => {
  const labelId = id || (rest.htmlFor ? `${rest.htmlFor}-label` : undefined);

  return (
    <Wrapper className="MuiFormControlLabel-avWrapper" sx={sx} ref={ref}>
      <MuiFormControlLabel id={labelId} {...rest} />
      {helpTopicId ? <FieldHelpIcon helpTopicId="12345" labelId={labelId} /> : null}
    </Wrapper>
  );
});
