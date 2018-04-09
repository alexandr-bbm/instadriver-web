import typescriptFsa from 'typescript-fsa';
import { IModalPayload } from './interface';

const actionCreator = typescriptFsa('modals');

export const openModal = actionCreator<IModalPayload>('open');
export const closeModal = actionCreator<{}>('close');
