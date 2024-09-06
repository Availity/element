import MuiAccordionSummary, { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary';
import { TriangleExpandIcon } from '@availity/mui-icon';
import { Typography, TypographyProps } from '@availity/mui-typography';
import { forwardRef, ReactNode } from 'react';
import { styled } from '@mui/material/styles';

const PrimaryContent = styled(Typography, {
  name: 'MuiAccordionSummary',
  slot: 'AvPrimaryContent',
  overridesResolver: (props, styles) => styles.avPrimaryContent,
})(({ theme }) => ({
  marginRight: "auto",
  paddingRight: theme.spacing(1),
  lineHeight: "1.5rem"
}));

const SecondaryContent = styled(Typography, {
  name: 'MuiAccordionSummary',
  slot: 'AvSecondaryContent',
  overridesResolver: (props, styles) => styles.avSecondaryContent,
})({});

export type AccordionSummaryProps = {
  /** The main content element. Aliased by the `children` prop. */
  primary?: ReactNode;
  /** These props will be forwarded to the primary typography component. Update `component` to reflect the correct heading level for accessibility.*/
  primaryProps?: Omit<TypographyProps, 'className'>;
  /** The secondary content element. */
  secondary?: ReactNode;
  /** These props will be forwarded to the secondary typography component. */
  secondaryProps?: Omit<TypographyProps, 'className'>;
} & Omit<
  MuiAccordionSummaryProps,
  | 'centerRipple'
  | 'component'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'expandIcon'
  | 'focusRipple'
  | 'focusVisibleClassname'
  | 'onFocusVisible'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

export const AccordionSummary = forwardRef<HTMLDivElement, AccordionSummaryProps>((allProps, ref) => {
  const { children, primary: primaryProp, primaryProps, secondary: secondaryProp, secondaryProps, ...props } = allProps;

  const combinedPrimaryProps: TypographyProps = {
    className: "MuiAccordionSummary-avPrimaryContent",
    variant: "h6",
    component: "div",
    ...primaryProps
  };

  const combinedSecondaryProps: TypographyProps = {
    className: "MuiAccordionSummary-avSecondaryContent",
    variant: "body1",
    component: "div",
    ...secondaryProps
  };

  const Primary = <PrimaryContent {...combinedPrimaryProps}>{primaryProp || children}</PrimaryContent>;

  const Secondary = secondaryProp ? <SecondaryContent {...combinedSecondaryProps}>{secondaryProp}</SecondaryContent> : null;

  return <MuiAccordionSummary {...props} expandIcon={<TriangleExpandIcon />} ref={ref}>{Primary}{Secondary}</MuiAccordionSummary>
});
