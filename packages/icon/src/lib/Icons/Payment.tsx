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
import { FaSvgIcon, IconProps } from '../FaSvgIcon';

export const CreditCardIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCreditCard} {...props} />;

export const CreditCardAmexIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCcAmex as IconDefinition} {...props} />;

export const CreditCardDiscoverIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCcDiscover as IconDefinition} {...props} />;

export const CreditCardMastercardIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCcMastercard as IconDefinition} {...props} />;

export const CreditCardPaypalIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCcPaypal as IconDefinition} {...props} />;

export const CreditCardStripeIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCcStripe as IconDefinition} {...props} />;

export const CreditCardVisaIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCcVisa as IconDefinition} {...props} />;

export const MoneyBillIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faMoneyBill} {...props} />;

export const CartShoppingIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faCartShopping} {...props} />;
