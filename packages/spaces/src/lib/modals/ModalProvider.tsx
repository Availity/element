import React, { createContext, useContext, useReducer } from 'react';
import { isAbsoluteUrl } from '@availity/resolve-url';
import { Dialog, DialogTitle, DialogActions } from '@availity/mui-dialog';
import { Button } from '@availity/mui-button';
import { getUrl, getTarget, updateUrl } from '../helpers';
import { updateTopApps } from '../topApps';
import { DisclaimerModal } from './DisclaimerModal';
import { MultiPayerModal } from './MultiPayerModal';
import type {
  ModalProviderState,
  ModalState,
  DisclaimerOnSubmitProps,
  MultiPayerOnSubmitProps,
  ModalOptions,
  ModalTypes,
  ModalContextType,
  ModalReducerType,
} from './modal-types';
import { isModalOptions, isModalState } from './modal-types';

export const MODAL_INITIAL_STATE = {
  isOpen: false,
  modalOptions: undefined,
  modalState: { selectedOption: { id: '', name: '' } },
  selectedModal: {},
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('ModalContext be used inside a Provider');
  return ctx;
};

export const MODAL_TYPES = {
  DISCLAIMER: {
    body: DisclaimerModal,
    buttonProps: () => ({
      children: 'Accept',
    }),
    onSubmit: ({ link, id: spaceId }: DisclaimerOnSubmitProps) => {
      window.open(link.url?.[0] === '/' ? updateUrl(link.url, 'spaceId', spaceId) : link.url, link.target);
    },
  },
  MULTI_PAYER: {
    body: MultiPayerModal,
    buttonProps: ({ selectedOption }: ModalState) => ({
      children: 'Continue',
      disabled: selectedOption === undefined,
    }),
    onSubmit: (
      { metadata, link, id: spaceId, name }: MultiPayerOnSubmitProps,
      modalState: ModalState,
      dispatch: React.Dispatch<{ [x: string]: any; type: any }>
    ) => {
      if (metadata?.disclaimerId) {
        dispatch({ type: 'OPEN_DISCLAIMER_MODAL', disclaimerId: metadata.disclaimerId, link, id: spaceId, name });
        return;
      }

      const target = getTarget(link.target);

      if (link.url) {
        window.open(
          !isAbsoluteUrl(link.url)
            ? getUrl(updateUrl(link.url, 'spaceId', modalState.selectedOption.id), false, false)
            : link.url,
          target
        );
      }
    },
  },
};

export const modalActions = {
  RESET: (): ModalProviderState => MODAL_INITIAL_STATE,
  OPEN_DISCLAIMER_MODAL: (state: ModalProviderState, modalOptions: ModalOptions): ModalProviderState => ({
    ...state,
    isOpen: true,
    selectedModal: MODAL_TYPES.DISCLAIMER,
    modalOptions: { ...modalOptions, type: modalOptions.spaceType },
  }),
  OPEN_MULTI_PAYER_MODAL: (state: ModalProviderState, modalOptions: ModalOptions): ModalProviderState => ({
    ...state,
    isOpen: true,
    selectedModal: MODAL_TYPES.MULTI_PAYER,
    modalOptions: {
      ...modalOptions,
      type: modalOptions.spaceType,
    },
  }),
  UPDATE_MODAL_STATE: (state: ModalProviderState, modalState: ModalState): ModalProviderState => ({
    ...state,
    modalState,
  }),
};

export const modalReducer: ModalReducerType = (state, { type, ...action }) => {
  if (type === 'RESET') return modalActions.RESET();
  if (isModalOptions(action)) {
    if (type === 'OPEN_MULTI_PAYER_MODAL') return modalActions.OPEN_MULTI_PAYER_MODAL(state, action);
    else if (type === 'OPEN_DISCLAIMER_MODAL') return modalActions.OPEN_DISCLAIMER_MODAL(state, action);
  } else if (isModalState(action)) {
    if (type === 'UPDATE_MODAL_STATE') return modalActions.UPDATE_MODAL_STATE(state, action);
  }
  return state;
};

export const ModalProvider = ({ children }: { children?: React.ReactNode }) => {
  const [{ selectedModal, modalOptions, modalState, isOpen }, dispatch] = useReducer(modalReducer, MODAL_INITIAL_STATE);

  const toggle = () => dispatch({ type: 'RESET' });

  const buttonProps = selectedModal?.buttonProps && selectedModal?.buttonProps({ ...modalState, modalOptions });

  const Body = selectedModal?.body;

  return (
    <ModalContext.Provider
      value={(modalType: ModalTypes, modalOptions: ModalOptions) =>
        dispatch({ type: `OPEN_${modalType}`, ...modalOptions })
      }
    >
      <Dialog open={isOpen}>
        <DialogTitle id="disclaimer-header">{modalOptions?.title}</DialogTitle>
        {Body && (
          <Body
            {...modalOptions}
            setState={(newState: ModalState) => dispatch({ type: 'UPDATE_MODAL_STATE', ...newState })}
            state={modalState}
          />
        )}
        <DialogActions>
          <Button onClick={toggle}>Cancel</Button>
          <Button
            color="primary"
            {...buttonProps}
            onClick={() => {
              if (selectedModal?.onSubmit && modalOptions && modalState) {
                selectedModal.onSubmit(modalOptions, modalState, dispatch);
              }
              if (modalOptions) {
                updateTopApps(
                  {
                    configurationId: modalOptions.id,
                    type: modalOptions.type,
                    name: modalOptions.name,
                    id: modalOptions.id,
                  },
                  modalOptions.user
                );
              }
              toggle();
            }}
          />
        </DialogActions>
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};
