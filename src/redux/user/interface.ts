import {IWithNetworkStatus} from '../../utils/redux/networkStatus';

export interface IUser {
  email: string;
  username: string;
  id: number;
}

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
