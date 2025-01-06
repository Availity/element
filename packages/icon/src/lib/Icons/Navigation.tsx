import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { FaSvgIcon } from '../FaSvgIcon';

export const ArrowCircleLeftIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCircleArrowLeft} {...props} />;

export const ArrowCircleRightIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCircleArrowRight} {...props} />;

export const ArrowLeftIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faArrowLeft} {...props} />;

export const ArrowRightIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faArrowRight} {...props} />;

export const ArrowUpIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faArrowUp} {...props} />;

export const ArrowDownIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faArrowDown} {...props} />;

export const NavigateFirstIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAngleDoubleLeft} {...props} />;

export const NavigateLastIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAngleDoubleRight} {...props} />;

export const NavigateTopIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAngleDoubleUp} {...props} />;

export const NavigateBottomIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAngleDoubleDown} {...props} />;

export const NavigatePreviousIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAngleLeft} {...props} />;

export const NavigateNextIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAngleRight} {...props} />;

export const TriangleRightIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCaretRight} {...props} />;

export const TriangleLeftIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCaretLeft} {...props} />;
