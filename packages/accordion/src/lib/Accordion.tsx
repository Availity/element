import MuiAccordion, { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

type Variant = 'filled' | 'outlined' | 'flush';

export type AccordionProps = {
  /** @default "filled" */
  variant?: Variant
  /**
   * Disable nested styling for child `Accordions`
   * @default false
   */
  disableNestedStyling?: boolean;
} & Omit<MuiAccordionProps, 'component' | 'elevation' | 'TransitionComponent' | 'TransitionProps' | 'variant'>;

const baseStyles = (theme: any) => ({
  '& .MuiAccordionDetails-root .MuiAccordionSummary-root': {
    borderRadius: 4,
  }
});

const FilledAccordion = styled(MuiAccordion, {
  name: 'MuiAccordion',
  slot: 'AvFilled',
  overridesResolver: (props, styles) => styles.avFilled,
})(({ theme }) => ({
  ...baseStyles(theme),
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
  ...baseStyles(theme),
  borderColor: theme.palette.divider,
  '> .MuiAccordion-heading .MuiAccordionSummary-root:not(.Mui-focusVisible, :hover, :active)': {
    backgroundColor: theme.palette.background.paper,
  },
  '> .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root:first-of-type':
  {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

const FlushAccordion = styled(MuiAccordion, {
  name: 'MuiAccordion',
  slot: 'AvFlush',
  overridesResolver: (props, styles) => styles.avFlush,
})(({ theme }) => ({
  ...baseStyles(theme),
  border: 0,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&&': {
    borderRadius: 0,
  },
  '&:first-of-type': {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  '> .MuiAccordion-heading .MuiAccordionSummary-root:not(.Mui-focusVisible, :hover, :active)': {
    backgroundColor: 'transparent'
  },
  '> .MuiAccordion-heading .MuiAccordionSummary-root': {
    padding: 8,
    minHeight: 40,
  },
  '> .MuiAccordion-heading .MuiAccordionSummary-root .MuiAccordionSummary-content': {
    margin: 0
  },
}));

const VariantComponent: Record<Variant, typeof FilledAccordion> = {
  filled: FilledAccordion,
  outlined: OutlinedAccordion,
  flush: FlushAccordion
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>((allProps, ref) => {
  const { variant = 'filled', disableNestedStyling = false, className, ...props } = allProps;
  const Variant = VariantComponent[variant]

  const classnames = `MuiAccordion-av${variant.charAt(0).toUpperCase() + variant.slice(1)}${disableNestedStyling ? ' Av-disableNested' : ''} ${className || ''}`;

  return <Variant className={classnames} {...props} ref={ref} />;
});
