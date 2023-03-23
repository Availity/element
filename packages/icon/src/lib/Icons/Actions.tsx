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
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown'
import { SvgIconProps } from '@mui/material';
import { FaSvgIcon } from '../FaSvgIcon';

export const FilterIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFilter} titleAccess='Filter' {...props}/>
);

export const HeartIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faHeart} titleAccess='Favorite' {...props}/>
);

export const HeartEmptyIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faHeartEmpty} titleAccess='Favorite' {...props}/>
);

export const MinusCircleIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faMinusCircle} titleAccess='Remove' {...props}/>
);

export const PlusCircleIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faPlusCircle} titleAccess='Add' {...props}/>
);

export const CancleCircleIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faXmarkCircle} titleAccess='Cancel' {...props}/>
);

export const SortIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faSort} titleAccess='Sort' {...props}/>
);

export const SortDownIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faSortDown} titleAccess='Sort Descending' {...props}/>
);

export const SortUpIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faSortUp} titleAccess='Sort Ascending' {...props}/>
);

export const SortAltDownIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faArrowDownWideShort} titleAccess='Sort Descending' {...props}/>
);

export const SortAltUpIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faArrowUpShortWide} titleAccess='Sort Ascending' {...props}/>
);
