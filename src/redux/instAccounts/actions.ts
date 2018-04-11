import typescriptFsa from 'typescript-fsa';
import {InstAccount, InstAccountBase} from '../../services/instadriverApi/model';
import {ThunkAction} from '../types';

const actionCreator = typescriptFsa('instAccounts');

export const setInstAccounts = actionCreator<InstAccount[]>('bulk_set');

export const addInstAccount = (payload: InstAccountBase): ThunkAction => {
  return (dispatch, getState, {api}) => {
    const {uid: userId} = getState().user.data;
    return api.addInstAccount({
      ...payload,
      userId,
    });
  };
};

export const subscribeOnInstAccountsChanges = (): ThunkAction => {
  return (dispatch, getState, {api}) => {
    const {uid: userId} = getState().user.data;
    api.subscribeOnInstAccounts(
      {userId},
      instAccounts => dispatch(setInstAccounts(instAccounts)),
    );
    return Promise.resolve();
  };
};
