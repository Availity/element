import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons/faBellSlash';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faCopyright } from '@fortawesome/free-solid-svg-icons/faCopyright';
import { faDesktop } from '@fortawesome/free-solid-svg-icons/faDesktop';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons/faExternalLink';
import { faFax } from '@fortawesome/free-solid-svg-icons/faFax';
import { faFlask } from '@fortawesome/free-solid-svg-icons/faFlask';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faInbox } from '@fortawesome/free-solid-svg-icons/faInbox';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faSquareH } from '@fortawesome/free-solid-svg-icons/faSquareH';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faBell as faBellEmpty } from '@fortawesome/free-regular-svg-icons/faBell';
import { faBellSlash as faBellSlashEmpty } from '@fortawesome/free-regular-svg-icons/faBellSlash';

import { SvgIconProps } from '@mui/material/SvgIcon';
import { FaSvgIcon } from '../FaSvgIcon';

export const HomeIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faHome} {...props} />;

export const MailIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faEnvelope} {...props} />;

export const UserIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faUser} {...props} />;

export const UserDoctorIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faUserDoctor} {...props} />;

export const UsersIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faUsers} {...props} />;

export const UserPlusIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faUserPlus} {...props} />;

export const OpenInNewIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faExternalLink} aria-hidden={false} titleAccess="(opens in new window)" {...props} />;

export const SettingsIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCog} {...props} />;

export const MoreHorizontalIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faEllipsis} {...props} />;

export const MoreVerticalIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faEllipsisV} {...props} />;

export const MenuIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBars} {...props} />;

export const PrintIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faPrint} {...props} />;

export const SearchIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faMagnifyingGlass} {...props} />;

export const KeyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faKey} {...props} />;

export const LocationIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faLocationDot} {...props} />;

export const BellIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBell} {...props} />;

export const BellSlashIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBellSlash} {...props} />;

export const BellEmptyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBellEmpty} {...props} />;

export const BellSlashEmptyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBellSlashEmpty} {...props} />;

export const CopyrightIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCopyright} {...props} />;

export const ListIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faList} {...props} />;

export const PhoneIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faPhone} {...props} />;

export const FaxIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFax} {...props} />;

export const InboxIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faInbox} {...props} />;

export const AsteriskIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAsterisk} {...props} />;

export const DesktopIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faDesktop} {...props} />;

export const ClipboardIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faClipboardList} {...props} />;

export const SquareHIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSquareH} {...props} />;

export const HistoryIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faClockRotateLeft} {...props} />;

export const LockIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faLock} {...props} />;

export const FlaskIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFlask} {...props} />;

// export const MISCStethoscopeIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faStethoscope} {...props} />;

// export const MISCTruckMedicalIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faTruckMedical} {...props} />;

// export const MISCBriefcaseMedicalIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBriefcaseMedical} {...props} />;

// export const MISCCircleHIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCircleH} {...props} />;

// export const MISCHospitalIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faHospital} {...props} />;

// export const MISCBuildingIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBuilding} {...props} />;

// export const MISCNewspaperIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faNewspaper} {...props} />;

// export const MISCGraduationCapIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faGraduationCap} {...props} />;

// export const MISCBandageIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBandage} {...props} />;

// export const MISCFlagIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFlag} {...props} />;

// export const MISCFlagEmptyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFlagEmpty} {...props} />;

// export const MISCTrophyIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faTrophy} {...props} />;

// export const MISCBriefcaseIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBriefcase} {...props} />;

// export const MISCSuitcaseIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSuitcase} {...props} />;

// export const MISCCodeBranchIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCodeBranch} {...props} />;

// export const MISCCertificateIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCertificate} {...props} />;

// export const MISCBarsProgressIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBarsProgress} {...props} />;

// export const MISCGavelIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faGavel} {...props} />;

// export const MISCGaugeHighIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faGaugeHigh} {...props} />;

// export const MISCSitemapIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faSitemap} {...props} />;

// export const MISCFireExtinguisherIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFireExtinguisher} {...props} />;

// export const MISCDatabaseIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faDatabase} {...props} />;

// export const MISCAndroidIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faAndroid as IconDefinition} {...props} />;

// export const MISCHeartPulseIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faHeartPulse} {...props} />;

// export const MISCBedIcon = ({ ...props }: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBed} {...props} />;
