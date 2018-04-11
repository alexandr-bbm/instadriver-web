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
;

export type ModalProps
  = {}
;
