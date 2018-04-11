import typescriptFsa from 'typescript-fsa';
import {InstAccount} from '../../services/instadriverApi/model';

const actionCreator = typescriptFsa('instAccounts');

export const setInstAccount = actionCreator<InstAccount>('open');
