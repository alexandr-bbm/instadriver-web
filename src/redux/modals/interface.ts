import {IConfirmModalOwnProps} from '../../components/_modals/confirmModal/interface';

export interface IModalsStore {
  isOpened: boolean;
  openedModalName: ModalName;
  openedModalProps: ModalProps;
}

export interface IModalPayload {
  name: ModalName;
  props?: ModalProps;
}

export type ModalName
  =
  | 'AddInstAccount'
  | 'Confirm'
  | 'AddPost'
;

export type ModalProps
  = {}
  | IConfirmModalOwnProps
;
