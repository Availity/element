// FontAwesomeSvgIcon example from mui docs https://github.com/mui/material-ui/blob/master/docs/data/material/components/icons/FontAwesomeSvgIconDemo.js

import * as React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SvgIcon, SvgIconProps } from '@mui/material';

export interface FaSvgIconProps extends SvgIconProps {
  /** Font Awesome Svg */
  icon: IconDefinition
}

export const FaSvgIcon = React.forwardRef<SVGSVGElement, FaSvgIconProps>((props, ref) => {
  const { icon, ...svgProps } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`} {...svgProps}>
      {typeof svgPathData === 'string' ? (
        <path d={svgPathData} />
      ) : (
        /**
         * A multi-path Font Awesome icon seems to imply a duotune icon.
         * Only available in Pro which we wouldn't publicly export regardless.
         */
        null
      )}
    </SvgIcon>
  );
});
