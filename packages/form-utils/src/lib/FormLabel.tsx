import { forwardRef } from 'react';
import { default as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import { FieldHelpIcon } from './FieldHelpIcon';

export type FormLabelProps = {
  /** Adds `FieldHelpIcon` next to the label (should not be within label for accessibility) */
  helpTopicId?: string;
} & MuiFormLabelProps;

// Form Label styles moved up to wrapper to include field level help
const Wrapper = styled('div', {
  name: 'MuiFormLabel',
  slot: 'AvWrapper',
  overridesResolver: (props, styles) => styles.avWrapper,
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
    <Wrapper className="MuiFormLabel-avWrapper" sx={sx}>
      <MuiFormLabel id={labelId} sx={{ ...StyleOverrides }} {...rest} ref={ref} />
      {helpTopicId ? <FieldHelpIcon helpTopicId={helpTopicId} labelId={labelId} sx={{ px: 0.5 }} /> : null}
    </Wrapper>
  );
});
