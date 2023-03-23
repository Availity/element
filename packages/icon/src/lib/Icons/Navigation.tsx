import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight'
import { SvgIconProps } from '@mui/material';
import { FaSvgIcon } from '../FaSvgIcon';

export const ArrowCircleLeftIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faCircleArrowLeft} titleAccess='previous' {...props}/>
);

export const ArrowCircleRightIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faCircleArrowRight} titleAccess='next' {...props}/>
);

export const NavigateFirstIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faAngleDoubleLeft} titleAccess='first' {...props}/>
);

export const NavigateLastIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faAngleDoubleRight} titleAccess='last' {...props}/>
);

export const NavigateTopIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faAngleDoubleUp} titleAccess='top' {...props}/>
);

export const NavigateBottomIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faAngleDoubleDown} titleAccess='bottom' {...props}/>
);

export const NavigatePreviousIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faAngleLeft} titleAccess='previous' {...props}/>
);

export const NavigateNextIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faAngleRight} titleAccess='next' {...props}/>
);

// export const UpArrowIcon = ({ ...props }: SvgIconProps): JSX.Element => (
//   <North titleAccess='up' {...props}/>
// );

// export const DownArrowIcon = ({ ...props }: SvgIconProps): JSX.Element => (
//   <South titleAccess='down' {...props}/>
// );

// export const LeftArrowIcon = ({ ...props }: SvgIconProps): JSX.Element => (
//   <West titleAccess='left' {...props}/>
// );

// export const RightArrowIcon = ({ ...props }: SvgIconProps): JSX.Element => (
//   <East titleAccess='left' {...props}/>
// );
