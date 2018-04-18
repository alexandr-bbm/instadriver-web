import {ThunkAction} from '../types';

export const addInstPost = (data: FormData): ThunkAction => {
  return (dispatch, getState, {api}) => {
    const {uid: userId} = getState().user.data;
    const [firstInstAccount] = getState().instAccounts;
    if (!firstInstAccount) {
      throw new Error('Trying to add post without instAccount');
    }
    data.append('instAccountId', firstInstAccount.id);
    data.append('userId', userId);
    return api.addInstPost(data);
  };
};