import { forwardRef } from 'react';
import { Box, FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps, styled } from '@mui/material';
import { FieldHelpIcon } from './FieldHelpIcon';

export type FormLabelProps = {
  /** Adds `FieldHelpIcon` next to the label (should not be within label for accessibility) */
  helpTopicId?: string;
} & MuiFormLabelProps;

// Form Label styles moved up to wrapper to include field level help
const Wrapper = styled(Box, {
  name: 'MuiFormLabel',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper,
})({});

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
    <Wrapper className="MuiFormLabel-wrapper" sx={sx}>
      <MuiFormLabel id={labelId} sx={{ ...StyleOverrides }} {...rest} ref={ref} />
      {helpTopicId ? <FieldHelpIcon helpTopicId={helpTopicId} labelId={labelId} sx={{ px: 0.5 }} /> : null}
    </Wrapper>
  );
});
