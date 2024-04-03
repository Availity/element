// FontAwesomeSvgIcon example from mui docs https://github.com/mui/material-ui/blob/master/docs/data/material/components/icons/FontAwesomeSvgIconDemo.js

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, StackProps } from '@availity/mui-layout';
import { EmptyStateImage, EmptyStateImageProps } from './EmptyStateImage';

const EmptyStateContainer = styled(Stack, {
  name: 'AvEmptyState',
  slot: 'root',
  overridesResolver: (props, styles) => styles.root,
})({});

export type EmptyStateProps = StackProps & Pick<EmptyStateImageProps, 'variant'>;

/** Container for Empty State image and message. */
export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>((props, ref) => {
  const {
    children,
    variant,
    spacing = 2,
    alignItems = 'center',
    textAlign = 'center',
    maxWidth = '320px',
    padding = '1rem',
    ...containerProps
  } = props;

  return (
    <EmptyStateContainer
      className="AvEmptyState-root"
      spacing={spacing}
      alignItems={alignItems}
      textAlign={textAlign}
      maxWidth={maxWidth}
      padding={padding}
      {...containerProps}
      ref={ref}
    >
      {variant ? <EmptyStateImage variant={variant} /> : null}
      {children}
    </EmptyStateContainer>
  );
});
