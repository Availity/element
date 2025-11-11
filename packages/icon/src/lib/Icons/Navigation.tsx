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
import { FaSvgIcon, IconProps } from '../FaSvgIcon';

export const ArrowCircleLeftIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCircleArrowLeft} {...props} />;

export const ArrowCircleRightIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCircleArrowRight} {...props} />;

export const ArrowLeftIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faArrowLeft} {...props} />;

export const ArrowRightIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faArrowRight} {...props} />;

export const ArrowUpIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faArrowUp} {...props} />;

export const ArrowDownIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faArrowDown} {...props} />;

export const NavigateFirstIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faAngleDoubleLeft} {...props} />;

export const NavigateLastIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faAngleDoubleRight} {...props} />;

export const NavigateTopIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faAngleDoubleUp} {...props} />;

export const NavigateBottomIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faAngleDoubleDown} {...props} />;

export const NavigatePreviousIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faAngleLeft} {...props} />;

export const NavigateNextIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faAngleRight} {...props} />;

export const TriangleRightIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCaretRight} {...props} />;

export const TriangleLeftIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCaretLeft} {...props} />;
