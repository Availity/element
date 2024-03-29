import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons/faArrowDownWideShort';
import { faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons/faArrowUpShortWide';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons/faXmarkCircle';
import { faSort } from '@fortawesome/free-solid-svg-icons/faSort';
import { faSortUp } from '@fortawesome/free-solid-svg-icons/faSortUp';
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons/faChartColumn';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { FaSvgIcon } from '../FaSvgIcon';

export const FilterIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFilter} {...props} />;

export const HeartIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faHeart} {...props} />;

export const HeartEmptyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faHeartEmpty} {...props} />;

export const MinusCircleIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faMinusCircle} {...props} />
);

export const PlusCircleIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faPlusCircle} {...props} />;

export const CancelCircleIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faXmarkCircle} {...props} />
);

export const SortIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSort} {...props} />;

export const SortDownIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSortDown} {...props} />;

export const SortUpIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSortUp} {...props} />;

export const SortAltDownIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faArrowDownWideShort} {...props} />
);

export const SortAltUpIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faArrowUpShortWide} {...props} />
);

export const CloseIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faClose} {...props} />;

export const BellIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBell} {...props} />;

export const ChartColumnIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faChartColumn} {...props} />
);

export const ExpandIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAngleDown} {...props} />;

export const CollapseIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAngleUp} {...props} />;

export const TriangleExpandIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faCaretDown} {...props} />
);

export const TriangleCollapseIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faCaretUp} {...props} />
);
