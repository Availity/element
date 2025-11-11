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
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faSquareH } from '@fortawesome/free-solid-svg-icons/faSquareH';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons/faUserCheck';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faBell as faBellEmpty } from '@fortawesome/free-regular-svg-icons/faBell';
import { faBellSlash as faBellSlashEmpty } from '@fortawesome/free-regular-svg-icons/faBellSlash';
import { FaSvgIcon, IconProps } from '../FaSvgIcon';

export const HomeIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faHome} {...props} />;

export const MailIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faEnvelope} {...props} />;

export const UserIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faUser} {...props} />;

export const UserDoctorIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faUserDoctor} {...props} />;

export const UsersIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faUsers} {...props} />;

export const UserCheckIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faUserCheck} {...props} />;

export const UserPlusIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faUserPlus} {...props} />;

export const OpenInNewIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faExternalLink} aria-hidden={false} titleAccess="(opens in new window)" {...props} />;

export const SettingsIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCog} {...props} />;

export const MoreHorizontalIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faEllipsis} {...props} />;

export const MoreVerticalIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faEllipsisV} {...props} />;

export const MenuIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faBars} {...props} />;

export const PrintIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faPrint} {...props} />;

export const SearchIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faMagnifyingGlass} {...props} />;

export const KeyIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faKey} {...props} />;

export const LocationIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faLocationDot} {...props} />;

export const BellIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faBell} {...props} />;

export const BellSlashIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faBellSlash} {...props} />;

export const BellEmptyIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faBellEmpty} {...props} />;

export const BellSlashEmptyIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faBellSlashEmpty} {...props} />;

export const CopyrightIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCopyright} {...props} />;

export const ListIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faList} {...props} />;

export const PhoneIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faPhone} {...props} />;

export const FaxIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFax} {...props} />;

export const InboxIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faInbox} {...props} />;

export const SendIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faPaperPlane} {...props} />;

export const AsteriskIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faAsterisk} {...props} />;

export const DesktopIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faDesktop} {...props} />;

export const ClipboardIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faClipboardList} {...props} />;

export const SquareHIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faSquareH} {...props} />;

export const HistoryIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faClockRotateLeft} {...props} />;

export const LockIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faLock} {...props} />;

export const FlaskIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFlask} {...props} />;
