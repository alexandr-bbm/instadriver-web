import typescriptFsa from 'typescript-fsa';

import {ThunkAction} from '../types';
import {
  ILoginUserRequestData,
  ILoginUserResponseData,
  IRegisterUserRequestData,
  IRegisterUserResponseData,
} from '../../services/pollAppApi/interface';
import {IUser} from './interface';
import {defaultErrorHandler} from '../../utils/defaultErrorHandler';

const actionCreator = typescriptFsa('user');

export const loginUserAction = actionCreator.async<ILoginUserRequestData, ILoginUserResponseData>('login');
export const logoutUserAction = actionCreator.async<{}, undefined>('logout');
export const registerUserAction = actionCreator.async<IRegisterUserRequestData, IRegisterUserResponseData>('register');
export const getCurrentUserAction = actionCreator.async<{}, IUser>('get');

export function loginUser(payload: ILoginUserRequestData): ThunkAction {
  return (dispatch, _, {api}) => {
    dispatch(loginUserAction.started(payload));
    return api.loginUser(payload)
      .then(({data: result}) => {
        return dispatch(loginUserAction.done({params: payload, result}));
      });
  };
}

export function getCurrentUser(): ThunkAction {
  return (dispatch, _, {api}) => {
    dispatch(getCurrentUserAction.started({}));
    return api.getCurrentUser()
      .then(({data: {user: result}}) => {
        return dispatch(getCurrentUserAction.done({params: {}, result}));
      });
  };
}

export function logoutUser(): ThunkAction {
  return (dispatch, getState, {api}) => {
    dispatch(logoutUserAction.started({}));
    return api.logoutUser()
      .then(() => dispatch(logoutUserAction.done({params: {}, result: undefined})))
      .catch(defaultErrorHandler);
  };
}

export function registerUser(data: IRegisterUserRequestData): ThunkAction {
  return (dispatch, _, {api}) => {
    dispatch(registerUserAction.started(data));
    return api.registerUser(data)
      .then(({data: result}) => dispatch(registerUserAction.done({params: data, result})));
  };
}
