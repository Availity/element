import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { FaSvgIcon } from '../FaSvgIcon';

export const CreditCardIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faCreditCard} titleAccess="credit card" {...props} />
);
