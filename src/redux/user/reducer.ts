import {Reducer} from 'redux';
import {getCurrentUserAction, loginUserAction, logoutUserAction} from './actions';
import { AuthStatus, IUser, IUserStore } from './interface';
import { isType } from 'typescript-fsa';
import {createDefaultWithNetworkStatus, NetworkStatus} from '../../utils/redux/networkStatus';

const emptyUser: IUser = {
  email: '',
  username: '',
  id: 0,
};

const defaultUserStore = {
  ...createDefaultWithNetworkStatus(emptyUser),
  authStatus: AuthStatus.None,
};

export const userReducer: Reducer<IUserStore> = (state = defaultUserStore, action) => {
  if (isType(action, loginUserAction.started) || isType(action, logoutUserAction.started)) {
    return {
      ...state,
      authStatus: AuthStatus.Pending,
    };
  }

  if (isType(action, loginUserAction.done)) {
    const {payload: {result}} = action;
    return {
      ...state,
      data: {
        email: result.user.email,
        username: result.user.username,
        id: result.userId,
      },
      authStatus: AuthStatus.Authenticated,
    };
  }

  if (isType(action, logoutUserAction.done)) {
    return {
      ...state,
      data: emptyUser,
      authStatus: AuthStatus.NotAuthenticated,
    };
  }

  if (isType(action, getCurrentUserAction.started)) {
    return {
      ...state,
      data: emptyUser,
      networkStatus: NetworkStatus.Started,
    };
  }

  if (isType(action, getCurrentUserAction.done)) {
    return {
      ...state,
      data: action.payload.result,
      authStatus: AuthStatus.Authenticated,
      networkStatus: NetworkStatus.Done,
    };
  }
  return state;
};
