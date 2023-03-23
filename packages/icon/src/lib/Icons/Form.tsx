import { faFaceFrown } from '@fortawesome/free-regular-svg-icons/faFaceFrown';
import { faFaceMeh } from '@fortawesome/free-regular-svg-icons/faFaceMeh';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons/faFaceSmile'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { SvgIconProps } from '@mui/material';
import { FaSvgIcon } from '../FaSvgIcon';

export const HelpCircleIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faQuestionCircle} titleAccess='help' {...props}/>
);

export const InfoCircleIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faInfoCircle} titleAccess='information' {...props}/>
);

export const WarningTriangleIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faTriangleExclamation} titleAccess='error' {...props}/>
);

export const FaceSmileIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faFaceSmile} titleAccess='satisfied' {...props}/>
);

export const FaceNeutralIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faFaceMeh} titleAccess='neutral' {...props}/>
);

export const FaceFrownIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faFaceFrown} titleAccess='dissatisfied' {...props}/>
);

export const ThumbUpIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faThumbsUp} titleAccess='yes' {...props}/>
);

export const ThumbDownIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faThumbsDown} titleAccess='no' {...props}/>
);
