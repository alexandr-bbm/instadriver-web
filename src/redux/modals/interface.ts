import { ICreatePollDialogOwnProps } from '../../components/_modals/createPollDialog/interface';
import {openModal, closeModal} from './actions';

export interface IModalsStore {
  isOpened: boolean;
  openedModalName: ModalName;
  openedModalProps: ModalProps;
}

export interface IModalPayload {
  name: ModalName;
  props: ModalProps;
}

export type ModalName
  =
  | 'CreatePoll'
;

export type ModalProps
  = ICreatePollDialogOwnProps
;

export interface IWithModalActions {
  openModal: typeof openModal;
  closeModal: typeof closeModal;
}
