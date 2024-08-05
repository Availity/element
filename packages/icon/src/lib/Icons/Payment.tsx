import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons/faCcAmex';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons/faCcDiscover';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons/faCcMastercard';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons/faCcPaypal';
import { faCcStripe } from '@fortawesome/free-brands-svg-icons/faCcStripe';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons/faCcVisa';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/faMoneyBill';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { FaSvgIcon } from '../FaSvgIcon';

export const CreditCardIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCreditCard} {...props} />;

export const CreditCardAmexIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCcAmex as IconDefinition} {...props} />;

export const CreditCardDiscoverIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCcDiscover as IconDefinition} {...props} />;

export const CreditCardMastercardIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCcMastercard as IconDefinition} {...props} />;

export const CreditCardPaypalIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCcPaypal as IconDefinition} {...props} />;

export const CreditCardStripeIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCcStripe as IconDefinition} {...props} />;

export const CreditCardVisaIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCcVisa as IconDefinition} {...props} />;

export const MoneyBillIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faMoneyBill} {...props} />;

export const CartShoppingIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faCartShopping} {...props} />;
