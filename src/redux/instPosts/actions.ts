import {ThunkAction} from '../types';

export const addInstPost = (payload): ThunkAction => {
  return (dispatch, getState, {api}) => {
    const {uid: userId} = getState().user.data;
    return api.addInstPost({
      ...payload,
      userId,
    });
  };
};