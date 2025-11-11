import { Link, Space } from '../spaces-types';

export type ModalTypes = 'DISCLAIMER_MODAL' | 'MULTI_PAYER_MODAL';

type MetadataKeys = 'disclaimerId' | string;

type Metadata = Record<MetadataKeys, string>;

export type ModalProps = {
  disclaimerId?: string;
  parentPayerSpaces?: Space[];
  name?: string;
  state?: any;
  setState?: any;
};

export type ModalOptions = {
  disclaimerId?: string;
  description?: string;
  parentPayerSpaces?: Space[];
  metadata?: Metadata;
  id: string;
  name: string;
  user: any;
  spaceType: string;
  title: string;
  link: Link;
};

export type DisclaimerOnSubmitProps = {
  link: Link;
  id: string;
};

export type MultiPayerOnSubmitProps = {
  metadata?: Metadata;
  link: Link;
  id: string;
  name: string;
};

type NormalizedModalOptions = {
  type: string;
} & ModalOptions;

export type ModalState = {
  selectedOption: {
    id: string;
    name: string;
  };
};

export type ModalProviderState = {
  isOpen: boolean;
  modalOptions?: NormalizedModalOptions;
  modalState: ModalState;
  selectedModal?: {
    body?:
      | (({ disclaimerId }: ModalProps) => React.JSX.Element)
      | (({ parentPayerSpaces, name, state: { selectedOption }, setState }: ModalProps) => React.JSX.Element);
    onSubmit?: (
      props: ModalOptions,
      modalState: ModalState,
      dispatch: React.Dispatch<ModalAction | (ModalAction & ModalOptions) | (ModalAction & ModalProviderState)>
    ) => void;
    buttonProps?: (prop: object) => object;
  };
};

export type ModalActions = 'RESET' | 'OPEN_DISCLAIMER_MODAL' | 'OPEN_MULTI_PAYER_MODAL' | 'UPDATE_MODAL_STATE';

type ModalAction = {
  type: ModalActions;
};

export type ModalContextType = {
  (modalType: ModalTypes, modalOptions: ModalOptions): void;
};

export type ModalReducerType = (
  state: ModalProviderState,
  { type, ...action }: ModalAction | (ModalAction & ModalOptions) | (ModalAction & ModalProviderState)
) => ModalProviderState;

// type guards: https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
export const isModalOptions = (
  action: ModalOptions | ModalProviderState | Record<string, any>
): action is ModalOptions => (action as ModalOptions).spaceType !== undefined;

export const isModalState = (action: ModalOptions | ModalState | Record<string, any>): action is ModalState =>
  (action as ModalState).selectedOption !== undefined;
