import typescriptFsa from 'typescript-fsa';
import {InstAccount, InstAccountBase} from '../../services/instadriverApi/model';
import {ThunkAction} from '../types';

const actionCreator = typescriptFsa('instAccounts');

export const setInstAccount = actionCreator<InstAccount>('open');

export const addInstAccount = (payload: InstAccountBase): ThunkAction => {
  return (dispatch, getState, {api}) => {
    const {uid: userId} = getState().user.data;
    return api.addInstAccount({
      ...payload,
      userId,
    });
  };
};
