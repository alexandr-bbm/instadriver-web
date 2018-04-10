import {IWithNetworkStatus} from '../../utils/redux/networkStatus';
import {UserInfo} from 'firebase';

export interface IUser extends UserInfo {}

export interface IUserStore extends IWithNetworkStatus<IUser> {
  authStatus: AuthStatus;
}

export enum AuthStatus {
  None,
  Authenticated,
  Pending,
  NotAuthenticated,
}

export interface IIsAuthneticated {
  isAuthenticated: boolean;
}
