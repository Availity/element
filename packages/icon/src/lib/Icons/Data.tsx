import { faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons/faArrowUpShortWide';
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons/faArrowUpWideShort';
import { faChartArea } from '@fortawesome/free-solid-svg-icons/faChartArea';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons/faChartColumn';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
import { faChartPie } from '@fortawesome/free-solid-svg-icons/faChartPie';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons/faShareFromSquare';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes';
import { faSort } from '@fortawesome/free-solid-svg-icons/faSort';
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';
import { faSortUp } from '@fortawesome/free-solid-svg-icons/faSortUp';
import { faTableCells } from '@fortawesome/free-solid-svg-icons/faTableCells';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons/faTableCellsLarge';
import { FaSvgIcon, IconProps } from '../FaSvgIcon';

export const FilterIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faFilter} {...props} />;

export const SortIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faSort} {...props} />;

export const SortDownIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faSortDown} {...props} />;

export const SortUpIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faSortUp} {...props} />;

export const SortAltDownIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faArrowUpWideShort} {...props} />;

export const SortAltUpIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faArrowUpShortWide} {...props} />;

export const TableCellsLargeIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faTableCellsLarge} {...props} />;

export const TableCellsIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faTableCells} {...props} />;

export const DownloadIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faDownload} {...props} />;

export const UploadIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faUpload} {...props} />;

export const ExportIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faShareFromSquare} {...props} />;

export const ShareIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faShareNodes} {...props} />;

export const ChartAreaIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faChartArea} {...props} />;

export const ChartColumnIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faChartColumn} {...props} />;

export const ChartLineIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faChartLine} {...props} />;

export const ChartPieIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faChartPie} {...props} />;
