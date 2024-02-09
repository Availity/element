// FontAwesomeSvgIcon example from mui docs https://github.com/mui/material-ui/blob/master/docs/data/material/components/icons/FontAwesomeSvgIconDemo.js

import * as React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SvgIcon, SvgIconProps, SvgIconPropsSizeOverrides } from '@mui/material';

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsSizeOverrides {
    xsmall: true;
  }
}

export interface FaSvgIconProps extends SvgIconProps {
  /** Font Awesome Svg */
  icon: IconDefinition;
  /** The fontSize applied to the icon. @default 'inherit' */
  fontSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'inherit';
}

const NotDefinedIcon: IconDefinition = {
  prefix: 'fas',
  iconName: 'notdef',
  icon: [
    384,
    512,
    [],
    'e1fe',
    'M64 390.3L153.5 256 64 121.7V390.3zM102.5 448H281.5L192 313.7 102.5 448zm128-192L320 390.3V121.7L230.5 256zM281.5 64H102.5L192 198.3 281.5 64zM0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48z',
  ],
};

export const FaSvgIcon = React.forwardRef<SVGSVGElement, FaSvgIconProps>((props, ref) => {
  const { icon = NotDefinedIcon, ...svgProps } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`} {...svgProps}>
      {typeof svgPathData === 'string' ? (
        <path d={svgPathData} />
      ) : /**
       * A multi-path Font Awesome icon seems to imply a duotune icon.
       * Only available in Pro which we wouldn't publicly export regardless.
       */
      null}
    </SvgIcon>
  );
});
