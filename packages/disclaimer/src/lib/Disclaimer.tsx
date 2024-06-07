// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import { Typography, TypographyProps } from '@availity/mui-typography';
import { Link, LinkProps } from '@availity/mui-link';
import { styled } from '@mui/material/styles';

type AvDisclaimerProps = {
  accent?: boolean;
  condensed?: boolean;
};

export interface DisclaimerProps extends AvDisclaimerProps {
  headerText?: string;
  description: string;
  link?: LinkProps;
}

interface AvDisclaimerHeaderProps extends TypographyProps {
  ownerState: { condensed: boolean };
}

interface AvDisclaimerLinkProps extends LinkProps {
  ownerState: { condensed: boolean };
}

const AvDisclaimer = styled('div', {
  name: 'AvDisclaimer',
  slot: 'root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.accent && styles.accent,
    props.condensed && styles.condensed,
  ],
})<AvDisclaimerProps>({});

const AvDisclaimerHeader = styled(Typography, {
  name: 'AvDisclaimer',
  slot: 'header',
})<AvDisclaimerHeaderProps>(({ ownerState }: { ownerState: { condensed: boolean } }) => ({
  marginBottom: ownerState.condensed ? '4px' : '8px',
}));

const AvDisclaimerLink = styled(Link, {
  name: 'AvDisclaimer',
  slot: 'link',
})<AvDisclaimerLinkProps>(({ ownerState }: { ownerState: { condensed: boolean } }) => ({
  marginTop: ownerState.condensed ? '8px' : '16px',
  display: 'block',
}));

export const Disclaimer = ({
  accent = true,
  condensed = false,
  description,
  headerText,
  link,
  ...rest
}: DisclaimerProps): JSX.Element => {
  let bodyVariant: 'body1' | 'body2' = 'body1';
  let headerVariant: 'h5' | 'h6' = 'h5';

  if (condensed) {
    bodyVariant = 'body2';
    headerVariant = 'h6';
  }

  const ownerState = { condensed };

  return (
    <AvDisclaimer accent={accent} condensed={condensed} {...rest}>
      {headerText && (
        <AvDisclaimerHeader variant={headerVariant} ownerState={ownerState} color="text.secondary">
          {headerText}
        </AvDisclaimerHeader>
      )}
      <Typography variant={bodyVariant} color="text.secondary">
        {description}
      </Typography>
      {link && <AvDisclaimerLink ownerState={ownerState} {...link} />}
    </AvDisclaimer>
  );
};
