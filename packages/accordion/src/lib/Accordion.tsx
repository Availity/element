import MuiAccordion, { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

export type AccordionProps = {
  /** @default "filled" */
  variant?: 'filled' | 'outlined';
  /**
   * Disable nested styling for child `Accordions`
   * @default false
   */
  disableNestedStyling?: boolean;
} & Omit<MuiAccordionProps, 'component' | 'elevation' | 'TransitionComponent' | 'TransitionProps' | 'variant'>;

const FilledAccordion = styled(MuiAccordion, {
  name: 'MuiAccordion',
  slot: 'AvFilled',
  overridesResolver: (props, styles) => styles.avFilled,
})(({ theme }) => ({
  borderColor: theme.palette.grey[100],
  '> .MuiAccordion-heading .MuiAccordionSummary-root': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const OutlinedAccordion = styled(MuiAccordion, {
  name: 'MuiAccordion',
  slot: 'AvOutlined',
  overridesResolver: (props, styles) => styles.avOutlined,
})(({ theme }) => ({
  borderColor: theme.palette.divider,
  '> .MuiAccordion-heading .MuiAccordionSummary-root:not(.Mui-focusVisible, :hover, :active)': {
    backgroundColor: theme.palette.background.paper,
  },
  '> .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root:first-of-type':
    {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
}));

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>((allProps, ref) => {
  const { variant = 'filled', disableNestedStyling = false, className, ...props } = allProps;

  const classnames = `${variant === 'filled' ? 'MuiAccordion-avFilled' : 'MuiAccordion-avOutlined'}${disableNestedStyling ? ' Av-disableNested' : ''} ${className || ''}`;

  return variant === 'filled' ? (
    <FilledAccordion className={classnames} {...props} ref={ref} />
  ) : (
    <OutlinedAccordion className={classnames} {...props} ref={ref} />
  );
});
