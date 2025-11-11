// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import type { ReactNode } from 'react';
import { Typography, TypographyProps } from '@availity/mui-typography';
import { Link, LinkProps } from '@availity/mui-link';
import { styled } from '@mui/material/styles';

type AvDisclaimerProps = {
  /** If true, the warning accent display on the left  */
  accent?: boolean;
  /** If true, the Disclaimer displays with less padding  */
  dense?: boolean;
  /** The id of the element */
  id?: string;
};

export interface DisclaimerProps extends AvDisclaimerProps {
  /** The text to display in the header */
  headerText?: string;
  /** The text to display in the body */
  description: ReactNode;
  /** The link to display */
  link?: LinkProps;
}

interface AvDisclaimerHeaderProps extends TypographyProps {
  ownerState: { dense: boolean };
}

interface AvDisclaimerLinkProps extends LinkProps {
  ownerState: { dense: boolean };
}

const AvDisclaimer = styled('div', {
  name: 'AvDisclaimer',
  slot: 'root',
  overridesResolver: (props, styles) => [styles.root, props.accent && styles.accent, props.dense && styles.dense],
})<AvDisclaimerProps>({});

const AvDisclaimerHeader = styled(Typography, {
  name: 'AvDisclaimer',
  slot: 'header',
})<AvDisclaimerHeaderProps>(({ ownerState }: { ownerState: { dense: boolean } }) => ({
  marginBottom: ownerState.dense ? '4px' : '8px',
}));

const AvDisclaimerLink = styled(Link, {
  name: 'AvDisclaimer',
  slot: 'link',
})<AvDisclaimerLinkProps>(({ ownerState }: { ownerState: { dense: boolean } }) => ({
  marginTop: ownerState.dense ? '8px' : '16px',
  display: 'block',
}));

export const Disclaimer = ({
  accent = true,
  dense = false,
  description,
  headerText,
  link,
  ...rest
}: DisclaimerProps): React.JSX.Element => {
  let textVariant: 'body1' | 'body2' = 'body1';
  let headerVariant: 'h5' | 'h6' = 'h5';

  if (dense) {
    textVariant = 'body2';
    headerVariant = 'h6';
  }

  const ownerState = { dense };

  return (
    <AvDisclaimer accent={accent} dense={dense} {...rest}>
      {headerText && (
        <AvDisclaimerHeader variant={headerVariant} ownerState={ownerState} color="text.secondary">
          {headerText}
        </AvDisclaimerHeader>
      )}
      <Typography variant={textVariant} color="text.secondary">
        {description}
      </Typography>
      {link && <AvDisclaimerLink ownerState={ownerState} {...link} iconPosition="end" variant={textVariant} />}
    </AvDisclaimer>
  );
};
