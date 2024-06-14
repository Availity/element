import { createContext, useContext, useReducer } from 'react';
import { isAbsoluteUrl } from '@availity/resolve-url';
import { Dialog, DialogTitle, DialogActions } from '@availity/mui-dialog';
import { Button, ButtonProps } from '@availity/mui-button';
import { getUrl, getTarget, updateUrl } from '../helpers';
import { updateTopApps } from '../topApps';
import { DisclaimerModal } from './DisclaimerModal';
import { MultiPayerModal } from './MultiPayerModal';
import { Link } from '../spaces-types';

export const MODAL_INITIAL_STATE = {
  isOpen: false,
  modalOptions: {},
  modalState: {},
  selectedModal: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    buttonProps: () => {},
  },
};

export const ModalContext = createContext(MODAL_INITIAL_STATE);

export const useModal = () => useContext(ModalContext);

type DisclaimerOnSubmitProps = {
  link: Link;
  id: string;
};

type MultiPayerOnSubmitProps = {
  metadata: {
    disclaimerId: string;
  };
  link: Link;
  id: string;
  name: string;
};

export const MODAL_TYPES = {
  DISCLAIMER: {
    body: DisclaimerModal,
    buttonProps: (): ButtonProps => ({
      children: 'Accept',
    }),
    onSubmit: ({ link, id: spaceId }: DisclaimerOnSubmitProps) => {
      window.open(link.url[0] === '/' ? updateUrl(link.url, 'spaceId', spaceId) : link.url, link.target);
    },
  },
  MULTI_PAYER: {
    body: MultiPayerModal,
    buttonProps: ({ selectedOption }): ButtonProps => ({
      children: 'Continue',
      disabled: selectedOption === undefined,
    }),
    onSubmit: ({ metadata, link, id: spaceId, name }: MultiPayerOnSubmitProps, modalState, dispatch) => {
      if (metadata?.disclaimerId) {
        dispatch({ type: 'OPEN_DISCLAIMER_MODAL', disclaimerId: metadata.disclaimerId, link, id: spaceId, name });
        return;
      }

      const target = getTarget(link.target);

      window.open(
        !isAbsoluteUrl(link.url)
          ? getUrl(updateUrl(link.url, 'spaceId', modalState.selectedOption.id), false, false, target)
          : link.url,
        target
      );
    },
  },
};

export const modalActions = {
  RESET: () => MODAL_INITIAL_STATE,
  OPEN_DISCLAIMER_MODAL: (state, modalOptions) => ({
    ...state,
    isOpen: true,
    selectedModal: MODAL_TYPES.DISCLAIMER,
    modalOptions: { ...modalOptions, type: modalOptions.spaceType },
  }),
  OPEN_MULTI_PAYER_MODAL: (state, modalOptions) => ({
    ...state,
    isOpen: true,
    selectedModal: MODAL_TYPES.MULTI_PAYER,
    modalOptions: {
      ...modalOptions,
      type: modalOptions.spaceType,
    },
  }),
  UPDATE_MODAL_STATE: (state, modalState) => ({ ...state, modalState }),
};

export const modalReducer = (state, { type, ...action }) => modalActions[type](state, action);

export const ModalProvider = ({ children }) => {
  const [
    {
      selectedModal: { body: Body, onSubmit, buttonProps } = {},
      modalOptions: { title, ...modalOptions },
      modalState,
      isOpen,
    },
    dispatch,
  ] = useReducer(modalReducer, MODAL_INITIAL_STATE);

  const toggle = () => dispatch({ type: 'RESET' });

  return (
    <ModalContext.Provider
      value={(modalType, modalOptions) => dispatch({ type: `OPEN_${modalType}`, ...modalOptions })}
    >
      <Dialog isOpen={isOpen}>
        <DialogTitle id="disclaimer-header">{title}</DialogTitle>
        {Body && (
          <Body
            {...modalOptions}
            setState={(newState) => dispatch({ type: 'UPDATE_MODAL_STATE', ...newState })}
            state={modalState}
          />
        )}
        <DialogActions>
          <Button onClick={toggle}>Cancel</Button>
          <Button
            color="primary"
            {...buttonProps({ ...modalState, modalOptions })}
            onClick={() => {
              onSubmit(modalOptions, modalState, dispatch);
              updateTopApps(
                {
                  configurationId: modalOptions.id,
                  type: modalOptions.type,
                  name: modalOptions.name,
                  id: modalOptions.id,
                },
                modalOptions.user
              );
              toggle();
            }}
          />
        </DialogActions>
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};
