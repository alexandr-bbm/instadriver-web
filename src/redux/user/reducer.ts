import {Reducer} from 'redux';
import { isType } from 'typescript-fsa';
import {clearUser, loginUserAction, logoutUserAction, setUser} from './actions';
import { AuthStatus, IUser, IUserStore } from './interface';
import {createDefaultWithNetworkStatus, NetworkStatus} from '../../utils/redux/networkStatus';

const emptyUser: IUser = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerId: '',
  uid: '',
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
    return {
      ...state,
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

  if (isType(action, clearUser)) {
    return {
      ...state,
      data: emptyUser,
      networkStatus: NetworkStatus.Started,
    };
  }

  if (isType(action, setUser)) {
    return {
      ...state,
      data: action.payload,
      authStatus: AuthStatus.Authenticated,
      networkStatus: NetworkStatus.Done,
    };
  }
  return state;
};
