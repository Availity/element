import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons/faExternalLink';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { SvgIconProps } from '@mui/material';
import { FaSvgIcon } from '../FaSvgIcon';

export const HomeIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faHome} {...props}/>
);

export const MailIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faEnvelope} {...props}/>
);

export const UserIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faUser} {...props}/>
);

export const UsersIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faUsers} {...props}/>
);

export const OpenInNewIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faExternalLink} aria-hidden={false} titleAccess='(opens in new window)' {...props}/>
);

export const SettingsIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faCog} {...props}/>
);

export const MoreHorizontalIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faEllipsis} {...props}/>
);

export const MoreVerticalIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faEllipsisV} {...props}/>
);

export const MenuIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faBars} {...props}/>
);

export const PrintIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faPrint} {...props}/>
);

export const SearchIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faMagnifyingGlass} {...props}/>
);

