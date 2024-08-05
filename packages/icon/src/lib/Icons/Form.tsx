import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons/faFaceFrown';
import { faFaceMeh } from '@fortawesome/free-regular-svg-icons/faFaceMeh';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons/faFaceSmile';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons/faSquareMinus';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons/faStarHalf';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons/faStarHalfStroke';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faCircle as faCircleEmpty } from '@fortawesome/free-regular-svg-icons/faCircle';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons/faStar';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons/faCircleDot';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { FaSvgIcon } from '../FaSvgIcon';

export const HelpCircleIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faQuestionCircle} titleAccess="help" {...props} />;

export const SuccessCircleIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCheckCircle} {...props} />;

export const InfoCircleIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faInfoCircle} titleAccess="information" {...props} />;

export const WarningCircleIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faExclamationCircle} titleAccess="warning" {...props} />;

export const WarningTriangleIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faExclamationTriangle} titleAccess="error" {...props} />;

export const FaceSmileIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFaceSmile} {...props} />;

export const FaceNeutralIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFaceMeh} {...props} />;

export const FaceFrownIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFaceFrown} {...props} />;

export const ThumbUpIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faThumbsUp} {...props} />;

export const ThumbDownIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faThumbsDown} {...props} />;

export const EyeIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faEye} {...props} />;

export const EyeSlashIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faEyeSlash} {...props} />;

export const StarHalfStrokeIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faStarHalfStroke} {...props} />;

export const StarHalfIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faStarHalf} {...props} />;

export const StarIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faStar} {...props} />;

export const StarEmptyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faStarEmpty} {...props} />;

export const CalendarDaysIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCalendarDays} {...props} />;

export const CircleEmptyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCircleEmpty} {...props} />;

export const CircleDotIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCircleDot} {...props} />;

export const CircleIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCircle} {...props} />;

export const ClockIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faClock} {...props} />;

export const CheckIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCheck} {...props} />;

export const SquareCheckIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSquareCheck} {...props} />;

export const SquareMinusIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSquareMinus} {...props} />;

export const SquareEmptyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSquare} {...props} />;
