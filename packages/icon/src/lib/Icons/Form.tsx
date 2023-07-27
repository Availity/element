import { faFaceFrown } from '@fortawesome/free-regular-svg-icons/faFaceFrown';
import { faFaceMeh } from '@fortawesome/free-regular-svg-icons/faFaceMeh';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons/faFaceSmile';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { SvgIconProps } from '@mui/material';
import { FaSvgIcon } from '../FaSvgIcon';

export const HelpCircleIcon = (props: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faQuestionCircle} titleAccess="help" {...props} />
);

export const SuccessCircleIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCheckCircle} {...props} />;

export const InfoCircleIcon = (props: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faInfoCircle} titleAccess="information" {...props} />
);

export const WarningCircleIcon = (props: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faExclamationCircle} titleAccess="warning" {...props} />
);

export const WarningTriangleIcon = (props: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faExclamationTriangle} titleAccess="error" {...props} />
);

export const FaceSmileIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFaceSmile} {...props} />;

export const FaceNeutralIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFaceMeh} {...props} />;

export const FaceFrownIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFaceFrown} {...props} />;

export const ThumbUpIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faThumbsUp} {...props} />;

export const ThumbDownIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faThumbsDown} {...props} />;

export const EyeIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faEye} {...props} />;

export const EyeSlashIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faEyeSlash} {...props} />;
