import { isType } from 'typescript-fsa';
import {Reducer} from 'redux';
import { IModalsStore, ModalName } from './interface';
import { closeModal, openModal } from './actions';

const defaultModalsStore = {
  isOpened: false,
  openedModalName: '' as ModalName,
  openedModalProps: {},
};

export const modalsReducer: Reducer<IModalsStore> = (state = defaultModalsStore, action) => {
  if (isType(action, openModal)) {
    const {
      name: openedModalName,
      props: openedModalProps,
    } = action.payload;
    return {
      isOpened: true,
      openedModalName,
      openedModalProps,
    };
  }
  if (isType(action, closeModal)) {
    return {
      ...state,
      isOpened: false,
    };
  }
  return state;
};
